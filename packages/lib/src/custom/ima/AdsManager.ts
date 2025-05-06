import { VASTAd, VASTClient, VASTCreative, VASTResponse, VASTTracker } from "@dailymotion/vast-client";
import { XMLParser } from "fast-xml-parser";
import { AdBreak, VmapVMAP } from "../../types/vmpa";
import { EventEmitter } from "../../utils/eventEmitter";
import { AdDisplayContainer } from "./AdDisplayContainer";
import { AdsRequest } from "./AdsRequest";
import { AdEvent } from "./AdEvent";
import { Ad } from "./Ad";
import { AdPodInfo } from "./AdPodInfo";
import { getTimeOffset } from "../../utils/time";
import { preloadVideo } from "../../utils/player";
import logger from "../../utils/logger";

const ADS_VIDEO_EVENTS: Array<keyof HTMLMediaElementEventMap> = [
	"play",
	"pause",
	"ended",
	"waiting",
	"stalled",
	"canplay",
	"playing",
	"seeking",
	"seeked",
	"timeupdate",
	"durationchange",
	"loadedmetadata",
	"suspend",
	"abort",
];

/** Threadshould to request new vast xml in milleseconds */
const CUE_THREAD_SHOULD_REQUEST_MS = 500;

const TAG = "ima:AdsManager";
export class AdsManager implements google.ima.AdsManager {
	private adsRequest: AdsRequest;
	private adDisplayContainer: AdDisplayContainer;
	private adsRenderingSettings: google.ima.AdsRenderingSettings | undefined = undefined;
	private vastTracker: VASTTracker | undefined;
	private content: object | undefined = undefined;
	private eventEmitter: EventEmitter;
	private cuePoints: Array<number>;
	private cueMapPoints: Record<number, Array<AdBreak>>;
	private started: boolean = false;
	private nextAds: Array<VASTAd> = [];
	private totalAds = 0;
	private totalTimeAds = 0;
	private currentPodIndex = 0; // 0 = PREROLL, -1 = POSTROLL, 1 = MIDROLL
	private canBeAdSkippable = false;
	private currentAdVast: VASTAd | undefined = undefined;
	private currentAd: Ad | undefined = undefined;
	private currentCreative: VASTCreative | undefined = undefined;
	private queueCreatives: Array<VASTCreative> = [];
	private processingAdv = false;
	private timerUpdateContentTime: ReturnType<typeof setTimeout> | undefined = undefined;
	private adRemainingTime: number = -1;
	private adDuration: number = -1;
	private quartilesFired = {
		start: false,
		firstQuartile: false,
		midpoint: false,
		thirdQuartile: false,
		complete: false,
	};

	constructor(adsRequest: AdsRequest, adDisplayContainer: AdDisplayContainer) {
		this.adsRequest = adsRequest;
		this.adDisplayContainer = adDisplayContainer;
		this.eventEmitter = new EventEmitter();
		this.content = undefined;
		this.cuePoints = [];
		this.cueMapPoints = {};
		this.adsRenderingSettings = undefined;
		this.started = false;
		this.processingAdv = false;
		this.canBeAdSkippable = false;
		this.adRemainingTime = -1;
		this.adDuration = -1;
		this.fetchVmap = this.fetchVmap.bind(this);
		this.attachContentMediaEventListeners = this.attachContentMediaEventListeners.bind(this);
		this.detachContentMediaEventListeners = this.detachContentMediaEventListeners.bind(this);
		this.handleContentTimeUpdate = this.handleContentTimeUpdate.bind(this);
		this.adsVideoEventsListener = this.adsVideoEventsListener.bind(this);
		this.adsVideoErrorListener = this.adsVideoErrorListener.bind(this);
	}

	public collapse(): void {
		throw new Error("Method not implemented.");
	}
	public configureAdsManager(
		content: object,
		adsRenderingSettings?: google.ima.AdsRenderingSettings | null,
	): void {
		this.content = content;
		this.adsRenderingSettings = adsRenderingSettings || undefined;
	}

	public destroy(): void {
		this.detachContentMediaEventListeners();
		this.eventEmitter.clearAllEventListeners();
		this.content = undefined;
		this.adsRenderingSettings = undefined;
	}

	public discardAdBreak(): void {}
	public expand(): void {}
	public focus(): void {}
	public getAdSkippableState(): boolean {
		return this.canBeAdSkippable;
	}
	public getCuePoints(): number[] {
		return this.cuePoints;
	}
	public getRemainingTime(): number {
		const creative = this.currentCreative;
		if (!creative) {
			return -1;
		}
		return this.adRemainingTime;
	}
	public getVolume(): number {
		return this.adDisplayContainer.getVideoAdsElement().volume;
	}
	public init(
		width: number,
		height: number,
		viewMode: google.ima.ViewMode,
		videoElement?: HTMLVideoElement | null,
	): void {
		logger.debug(
			TAG,
			`init width[${width}] height[${height}] viewMode[${viewMode}] videoElement[${videoElement}]`,
		);
	}

	public isCustomClickTrackingUsed(): boolean {
		logger.debug(TAG, `isCustomClickTrackingUsed`);
		return false;
	}
	public isCustomPlaybackUsed(): boolean {
		logger.debug(TAG, `isCustomPlaybackUsed`);
		return true;
	}
	public pause(): void {
		logger.debug(TAG, `pause`);
	}
	public resize(width: number, height: number, viewMode: google.ima.ViewMode): void {
		logger.debug(TAG, `resize width[${width}] height[${height}] viewMode[${viewMode}]`);
	}
	public resume(): void {
		logger.debug(TAG, `resume`);
	}
	public setVolume(volume: number): void {
		const videoAdsElement = this.adDisplayContainer.getVideoAdsElement();
		if (!videoAdsElement) {
			return;
		}
		videoAdsElement.volume = volume;
	}
	public skip(): void {
		const videoAdsElement = this.adDisplayContainer.getVideoAdsElement();
		const skipDelay = this.currentCreative?.skipDelay || 0;
		if (
			!videoAdsElement ||
			skipDelay <= 0 ||
			(this.adRemainingTime > skipDelay && this.adRemainingTime < this.adDuration)
		) {
			return;
		}
		try {
			videoAdsElement.pause();
		} finally {
			logger.debug(TAG, `video user skipped`);
			this.vastTracker?.skip();
			this.dispatchAdsEvent(google.ima.AdEvent.Type.SKIPPED);
			this.playCreativities();
		}
	}
	public start(): void {
		if (this.started) {
			return;
		}
		this.started = true;
		this.fetchVastAds(0);
		this.attachContentMediaEventListeners();
	}
	public stop(): void {
		this.started = false;
	}
	public updateAdsRenderingSettings(adsRenderingSettings: google.ima.AdsRenderingSettings): void {
		logger.debug(TAG, `updateAdsRenderingSettings [${adsRenderingSettings}]`);
	}
	public addEventListener(
		type: string,
		handler: null | object,
		capture?: boolean,
		handlerScope?: object | null,
	): void {
		this.eventEmitter.addEventListener(type, handler, capture, handlerScope);
	}
	/* eslint-disable @typescript-eslint/no-unused-vars */
	public removeEventListener(
		type: string,
		handler: null | object,
		capture?: boolean,
		handlerScope?: object | null,
	): void {
		this.eventEmitter.removeEventListener(type, handler, capture);
	}
	public dispatchEvent(event: Event): boolean {
		logger.debug(TAG, `dispatchEvent: [${event}]`);
		return true;
	}

	public fetchVmap(): Promise<AdsManager> {
		const adTagUrl = this.adsRequest.adTagUrl;
		return fetch(adTagUrl)
			.then((response) => response.text())
			.then((xmlText) => {
				const parser = new XMLParser({
					ignoreAttributes: false,
					attributeNamePrefix: "@_",
					textNodeName: "#text",
				});
				const vmpa = parser.parse(xmlText) as VmapVMAP;
				const adBreaks = vmpa?.["vmap:VMAP"]["vmap:AdBreak"];
				if (!adBreaks) {
					return this;
				}
				if (Array.isArray(adBreaks)) {
					adBreaks.forEach((adBreak) => {
						const timeOffset = adBreak["@_timeOffset"];
						if (timeOffset) {
							const time = getTimeOffset(timeOffset);
							if (!isNaN(time) && this.isValidAdBreak(adBreak)) {
								logger.debug(TAG, `vmap adBreak timeOffset [${timeOffset}]:`, time);
								if (!this.cuePoints.includes(time)) {
									this.cuePoints.push(time);
								}
								const adBreaks = this.cueMapPoints[time] || [];
								adBreaks.push(adBreak);
								this.cueMapPoints[time] = adBreaks;
							}
						}
					});
				} else {
					const timeOffset = adBreaks["@_timeOffset"];
					if (timeOffset) {
						const time = getTimeOffset(timeOffset);
						if (!isNaN(time) && this.isValidAdBreak(adBreaks)) {
							this.cuePoints.push(time);
							this.cueMapPoints[time] = [adBreaks];
						}
					}
				}
				this.adDisplayContainer.initialize();
				return this;
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	}

	private isValidContentObject(content: object | undefined): content is object & { currentTime: number } {
		return !!content && (content instanceof HTMLVideoElement || "currentTime" in content);
	}

	private allAdsCompleted(): void {
		this.removeVideoListeners();
		//if finisched all cue points, notify that all ads completed
		if (this.cuePoints.length === 0) {
			this.dispatchAdsEvent(google.ima.AdEvent.Type.ALL_ADS_COMPLETED);
		}
		//clear all data
		this.nextAds = [];
		this.queueCreatives = [];
		this.vastTracker = undefined;
		this.currentAdVast = undefined;
		this.currentAd = undefined;
		this.currentCreative = undefined;
		this.adRemainingTime = -1;
		this.canBeAdSkippable = false;
		this.adDisplayContainer?.hideAdVideoElement();
		this.adDisplayContainer?.clearAdVideoElement();
		this.adDisplayContainer?.hide();
		this.processingAdv = false;
		this.dispatchAdsEvent(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED);
	}

	private playCreativities(): void {
		this.processingAdv = true;
		const hasPreviosAdv = !!this.currentAd;
		this.currentCreative = undefined;
		if (this.currentAdVast && this.queueCreatives.length > 0) {
			const creative = this.queueCreatives.shift();
			if (!creative) {
				return this.playCreativities();
			}
			const mediaFiles = creative.mediaFiles;
			if (mediaFiles && mediaFiles.length > 0) {
				for (const mediaFile of mediaFiles) {
					const mimeType = mediaFile.mimeType;
					if (mimeType && mimeType.startsWith("video/mp4") && mediaFile.fileURL) {
						this.currentCreative = creative;
						this.vastTracker = new VASTTracker(null, this.currentAdVast, this.currentCreative);
						const adPosition = this.totalAds - this.nextAds.length;
						const podInfo = new AdPodInfo(
							adPosition,
							false,
							this.totalTimeAds,
							this.currentPodIndex,
							0,
							this.totalAds,
						);
						logger.debug(TAG, `current podInfo: [${adPosition}] [${this.totalTimeAds}] [${this.totalAds}]`);
						this.currentAd = new Ad(this.currentAdVast, creative, mediaFile, podInfo);
						if (!hasPreviosAdv) {
							this.dispatchAdsEvent(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED);
						}
						this.playAdsContent(mediaFile.fileURL).catch((error) => {
							logger.error(TAG, `playAdsContent error: `, error);
						});
						return;
					}
				}
			}
			return this.playCreativities();
		}

		if (!this.nextAds || this.nextAds.length === 0) {
			this.allAdsCompleted();
			return;
		}
		const vastAd = this.nextAds.shift();
		if (!vastAd) {
			return this.playCreativities();
		}
		this.currentAdVast = vastAd;
		this.queueCreatives = this.getCreativities(vastAd);
		return this.playCreativities();
	}

	private handleContentTimeUpdate(): void {
		const content = this.content;
		if (!this.isValidContentObject(content) || this.cuePoints.length === 0) {
			return;
		}
		if (this.processingAdv) {
			return;
		}

		if (this.nextAds && this.nextAds.length > 0) {
			this.processingAdv = true;
			this.playCreativities();
			return;
		}
		const currentTime = content.currentTime * 1000;
		logger.debug(TAG, `Content current time: [${currentTime}]`);
		const nextCue = this.cuePoints.find((cue) => Math.abs(cue - currentTime) <= CUE_THREAD_SHOULD_REQUEST_MS);
		if (nextCue) {
			this.fetchVastAds(nextCue);
		}
	}

	private clearTimerUpdateContentTime(): void {
		clearTimeout(this.timerUpdateContentTime);
	}

	private startTimerUpdateContentTime(): void {
		this.clearTimerUpdateContentTime();
		this.timerUpdateContentTime = setTimeout(() => {
			this.handleContentTimeUpdate();
			this.startTimerUpdateContentTime();
		}, 300);
	}

	private attachContentMediaEventListeners(): void {
		const content = this.content;
		if (!content) {
			return;
		}
		if (content instanceof HTMLVideoElement) {
			const videoElement = content as HTMLVideoElement;
			videoElement.addEventListener("timeupdate", this.handleContentTimeUpdate);
		} else if ("currentTime" in content) {
			this.startTimerUpdateContentTime();
		}
	}

	private detachContentMediaEventListeners(): void {
		const content = this.content;
		if (!content) {
			return;
		}
		if (content instanceof HTMLVideoElement) {
			const videoElement = content as HTMLVideoElement;
			videoElement.removeEventListener("timeupdate", this.handleContentTimeUpdate);
		} else if ("currentTime" in content) {
			this.clearTimerUpdateContentTime();
		}
	}

	private isValidAdBreak(adBreak: AdBreak): boolean {
		const adSource = adBreak["vmap:AdSource"];
		if (!adSource) {
			return false;
		}
		const adTagUrl = adSource["vmap:AdTagURI"]?.["#text"]?.trim();
		if (!adTagUrl) {
			return false;
		}
		return true;
	}

	private getAdValidCreative(ad: VASTAd): VASTCreative | undefined {
		const creatives = ad.creatives;
		if (creatives && creatives.length > 0) {
			for (const creative of creatives) {
				const creativeType = creative.type;
				if (creativeType === "linear") {
					const linearCreative = creative as VASTCreative;
					const mediaFiles = linearCreative.mediaFiles;
					if (mediaFiles && mediaFiles.length > 0) {
						for (const mediaFile of mediaFiles) {
							const mimeType = mediaFile.mimeType;
							if (mimeType && mimeType.startsWith("video/mp4") && mediaFile.fileURL) {
								return creative;
							}
						}
					}
				}
			}
		}
		return undefined;
	}

	private getCreativities(ad: VASTAd): Array<VASTCreative> {
		const creatives = [];
		const adCreatives = ad.creatives;
		if (adCreatives && adCreatives.length > 0) {
			for (const creative of adCreatives) {
				const creativeType = creative.type;
				if (creativeType === "linear") {
					const linearCreative = creative as VASTCreative;
					const mediaFiles = linearCreative.mediaFiles;
					if (mediaFiles && mediaFiles.length > 0) {
						for (const mediaFile of mediaFiles) {
							const mimeType = mediaFile.mimeType;
							if (mimeType && mimeType.startsWith("video/mp4") && mediaFile.fileURL) {
								creatives.push(creative);
								break;
							}
						}
					}
				}
			}
		}
		return creatives;
	}

	private trackingEvent(event: string) {
		const creative = this.currentCreative;
		if (!creative) {
			return;
		}
		const trackingEvents = creative.trackingEvents;
		const trackEventUrls = trackingEvents?.[event];
		if (!trackEventUrls) {
			return;
		}
		for (const url of trackEventUrls) {
			this.trackUrl(url);
		}
	}

	private trackUrl(uri: string): void {
		try {
			if (globalThis) {
				const i = new globalThis.Image();
				i.src = uri;
			}
		} catch (error) {
			logger.error(TAG, `trackUrl [${uri}] error: `, error);
		}
	}

	private getPromiseVastClient(adTagUrl: string): Promise<VASTResponse> {
		const vastClient = new VASTClient();
		return vastClient.get(adTagUrl);
	}

	private async fetchVastAds(time: number): Promise<void> {
		if (!this.started) {
			return;
		}
		try {
			this.currentPodIndex = time;
			const adBreaks = this.cueMapPoints[time];
			delete this.cueMapPoints[time];
			const promiseVastFetch: Array<Promise<VASTResponse>> = [];
			let totalDuration = 0;
			let totalAds = 0;
			if (adBreaks) {
				const adsSlot: Array<VASTAd> = [];
				for (const adBreak of adBreaks) {
					const adSource = adBreak["vmap:AdSource"];
					if (adSource) {
						const adTagUrl = adSource["vmap:AdTagURI"]?.["#text"]?.trim();
						if (adTagUrl) {
							promiseVastFetch.push(this.getPromiseVastClient(adTagUrl));
						}
					}
				}
				const responses = await Promise.allSettled(promiseVastFetch);
				for (const response of responses) {
					if (response.status === "fulfilled") {
						const vastResponse = response.value;
						const ads = vastResponse?.ads ?? undefined;
						if (ads && ads.length > 0) {
							for (const ad of ads) {
								const creative = this.getAdValidCreative(ad);
								if (creative) {
									adsSlot.push(ad);
									totalDuration += creative.duration || 0;
									totalAds += 1;
								}
							}
						} else {
							vastResponse.errorURLTemplates?.forEach((errorUrl) => {
								this.trackUrl(errorUrl);
							});
						}
					}
				}
				this.nextAds = adsSlot;
				this.totalAds = totalAds;
				this.totalTimeAds = totalDuration;
				if (this.nextAds.length === 0) {
					this.allAdsCompleted();
				} else {
					this.playCreativities();
				}
			}
		} catch (error) {
			logger.error(TAG, "fetchVastAds error:", error);
		}
	}

	// REGION: ADS EVENTS
	private dispatchAdsEvent(name: google.ima.AdEvent.Type): void {
		logger.debug(TAG, "dispatchAdsEvent: ", name);
		this.eventEmitter.emit(name, new AdEvent(name, this.currentAd));
	}

	//END REGION

	// REGION: VIDEO ADS EVENTS
	private adsVideoEventsListener(ev: Event): void {
		const videoAdsElement = this.adDisplayContainer.getVideoAdsElement();
		if (!videoAdsElement) {
			return;
		}
		switch (ev.type as keyof GlobalEventHandlersEventMap) {
			case "loadstart": {
				this.dispatchAdsEvent(google.ima.AdEvent.Type.AD_BREAK_READY);
				break;
			}
			case "durationchange": {
				const newDuration = videoAdsElement.duration;
				if (this.currentAd?.getDuration() !== newDuration) {
					this.dispatchAdsEvent(google.ima.AdEvent.Type.DURATION_CHANGE);
				}
				break;
			}
			case "canplay": {
				this.dispatchAdsEvent(google.ima.AdEvent.Type.AD_CAN_PLAY);
				break;
			}
			case "loadedmetadata": {
				this.dispatchAdsEvent(google.ima.AdEvent.Type.AD_METADATA);
				break;
			}
			case "play": {
				if (!this.quartilesFired.start) {
					this.quartilesFired.start = true;
					this.dispatchAdsEvent(google.ima.AdEvent.Type.STARTED);
				} else {
					this.dispatchAdsEvent(google.ima.AdEvent.Type.RESUMED);
				}
				break;
			}
			case "pause": {
				this.dispatchAdsEvent(google.ima.AdEvent.Type.PAUSED);
				break;
			}
			case "timeupdate": {
				const videoDuration = videoAdsElement.duration || -1;
				if (!isNaN(videoDuration) && videoDuration >= 0) {
					const currentTime = videoAdsElement.currentTime || 0;
					const percentage = currentTime / videoDuration;
					const remainingTime = videoDuration - currentTime;
					const skipDelay = this.currentCreative?.skipDelay || 0;
					this.adRemainingTime = remainingTime;
					this.adDuration = videoDuration;
					//this.adRemaingTime = videoDuration - currentTime;
					logger.debug(
						TAG,
						`video adv currentTime: ${currentTime}, Percentage: ${percentage}%, SkipDelay: ${skipDelay}`,
					);
					if (!this.quartilesFired.start) {
						this.quartilesFired.start = true;
						this.dispatchAdsEvent(google.ima.AdEvent.Type.STARTED);
					}

					if (!this.quartilesFired.firstQuartile && percentage >= 0.25) {
						this.quartilesFired.firstQuartile = true;
						this.dispatchAdsEvent(google.ima.AdEvent.Type.FIRST_QUARTILE);
					}

					if (!this.quartilesFired.midpoint && percentage >= 0.5) {
						this.quartilesFired.midpoint = true;
						this.dispatchAdsEvent(google.ima.AdEvent.Type.MIDPOINT);
					}

					if (!this.quartilesFired.thirdQuartile && percentage >= 0.75) {
						this.quartilesFired.thirdQuartile = true;
						this.dispatchAdsEvent(google.ima.AdEvent.Type.THIRD_QUARTILE);
					}
					//@TODO: debounce the event for ad progress
					this.dispatchAdsEvent(google.ima.AdEvent.Type.AD_PROGRESS);
					this.vastTracker?.setProgress(currentTime);
					if (!this.canBeAdSkippable && skipDelay > 0 && currentTime >= skipDelay) {
						this.canBeAdSkippable = true;
						logger.debug(
							TAG,
							`video adv can be skippable: [${currentTime}] [${videoDuration}] [${skipDelay}]`,
						);
						this.dispatchAdsEvent(google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED);
					}
				}
				break;
			}
			case "ended": {
				this.adRemainingTime = -1;
				this.adDuration = -1;
				if (!this.quartilesFired.complete) {
					this.quartilesFired.complete = true;
					this.dispatchAdsEvent(google.ima.AdEvent.Type.COMPLETE);
				}
				this.vastTracker?.complete();
				this.playCreativities();
				break;
			}
		}
	}

	private adsVideoErrorListener(ev: Event): void {
		logger.error(TAG, "adsVideoErrorListener: ", ev);
		this.adDisplayContainer?.hideAdVideoElement();
		this.adDisplayContainer?.clearAdVideoElement();
		this.playCreativities();
	}

	private resetQuartilesFired(): void {
		this.quartilesFired = {
			start: false,
			firstQuartile: false,
			midpoint: false,
			thirdQuartile: false,
			complete: false,
		};
	}

	private async playAdsContent(src: string): Promise<void> {
		const videoAdsElement = this.adDisplayContainer.getVideoAdsElement();
		if (!videoAdsElement) {
			logger.error(TAG, "playAdsContent no Video Ads Element: ");
			return this.playCreativities();
		}
		this.adRemainingTime = -1;
		this.adDuration = -1;
		this.canBeAdSkippable = false;
		this.resetQuartilesFired();
		this.removeVideoListeners();
		this.adDisplayContainer?.show();
		this.adDisplayContainer?.showLoader();
		this.adDisplayContainer?.hideAdVideoElement();
		videoAdsElement.src = src;
		videoAdsElement.autoplay = true;
		try {
			await preloadVideo(videoAdsElement);
			await videoAdsElement.play();
			this.addVideoListeners();
			this.adDisplayContainer?.showAdVideoElement();
			this.adDisplayContainer?.hideLoader();
			this.dispatchAdsEvent(google.ima.AdEvent.Type.AD_CAN_PLAY);
		} catch (error) {
			logger.error(TAG, "playAdsContent error: ", error);
			this.dispatchAdsEvent(google.ima.AdEvent.Type.AD_BREAK_FETCH_ERROR);
			this.adDisplayContainer?.hideAdVideoElement();
			this.playCreativities();
		} finally {
			this.adDisplayContainer.hideLoader();
		}
	}

	private addVideoListeners() {
		const videoAdsElement = this.adDisplayContainer.getVideoAdsElement();
		if (!videoAdsElement) {
			return;
		}
		ADS_VIDEO_EVENTS.forEach((type) => videoAdsElement.addEventListener(type, this.adsVideoEventsListener));
		videoAdsElement.addEventListener("error", this.adsVideoErrorListener);
	}

	private removeVideoListeners() {
		const videoAdsElement = this.adDisplayContainer.getVideoAdsElement();
		if (!videoAdsElement) {
			return;
		}
		ADS_VIDEO_EVENTS.forEach((type) =>
			videoAdsElement.removeEventListener(type, this.adsVideoEventsListener),
		);
		videoAdsElement.removeEventListener("error", this.adsVideoErrorListener);
	}

	// END REGION: VIDEO ADS EVENTS
}
