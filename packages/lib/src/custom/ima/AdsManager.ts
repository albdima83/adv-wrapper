import {
  VASTAd,
  VASTClient,
  VASTCreative,
  VASTResponse,
  VASTTracker,
} from "@dailymotion/vast-client";
import { XMLParser } from "fast-xml-parser";
import { AdBreak, VmapVMAP } from "../../types/vmpa";
import { EventEmitter } from "../utils/eventEmitter";
import { AdDisplayContainer } from "./AdDisplayContainer";
import { AdsRequest } from "./AdsRequest";
import { AdEvent } from "./AdEvent";
import { Ad } from "./Ad";
import { AdPodInfo } from "./AdPodInfo";
import { getTimeOffset } from "../utils/time";
import { preloadVideo } from "../utils/player";

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

/** Therdshould to request new vast xml */
const CUE_THREAD_SHOULD_REQUEST_MS = 500;

export class AdsManager implements google.ima.AdsManager {
  private adsRequest: AdsRequest;
  private adDisplayContainer: AdDisplayContainer;
  private adsRenderingSettings: google.ima.AdsRenderingSettings | undefined =
    undefined;
  private vastTracker: VASTTracker | undefined;
  private content: object | undefined = undefined;
  private eventEmitter: EventEmitter;
  private cuePoints: Array<number>;
  private cueMapPoints: Record<number, Array<AdBreak>>;
  private started: boolean = false;
  private nextAds: Array<VASTAd> = [];
  private currentAdVast: VASTAd | undefined = undefined;
  private currentAd: Ad | undefined = undefined;
  private currentCreative: VASTCreative | undefined = undefined;
  private queueCreatives: Array<VASTCreative> = [];
  private processingAdv = false;
  private timerUpdateContentTime: ReturnType<typeof setTimeout> | undefined =
    undefined;
  private adRemaingTime: number = -1;
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
    this.adRemaingTime = -1;
    this.attachContentMediaEventListeners =
      this.attachContentMediaEventListeners.bind(this);
    this.detachContentMediaEventListeners =
      this.detachContentMediaEventListeners.bind(this);
    this.handleContentTimeUpdate = this.handleContentTimeUpdate.bind(this);
    this.adsVideoEventsListener = this.adsVideoEventsListener.bind(this);
    this.adsVideoErrorListener = this.adsVideoErrorListener.bind(this);
  }

  public collapse(): void {
    throw new Error("Method not implemented.");
  }
  public configureAdsManager(
    content: object,
    adsRenderingSettings?: google.ima.AdsRenderingSettings | null
  ): void {
    this.content = content;
    this.adsRenderingSettings = adsRenderingSettings || undefined;
  }

  public destroy(): void {
    this.eventEmitter.clearAllEventListeners();
    this.content = undefined;
    this.adsRenderingSettings = undefined;
  }

  public discardAdBreak(): void {}
  public expand(): void {}
  public focus(): void {}
  public getAdSkippableState(): boolean {
    return (this.currentCreative?.skipDelay || -1) > 0;
  }
  public getCuePoints(): number[] {
    return this.cuePoints;
  }
  public getRemainingTime(): number {
    return -1;
  }
  public getVolume(): number {
    return this.adDisplayContainer.getVideoAdsElement().volume;
  }
  public init(
    width: number,
    height: number,
    viewMode: google.ima.ViewMode,
    videoElement?: HTMLVideoElement | null
  ): void {
    this.adDisplayContainer.initialize();
  }
  public isCustomClickTrackingUsed(): boolean {
    throw new Error("Method not implemented.");
  }
  public isCustomPlaybackUsed(): boolean {
    throw new Error("Method not implemented.");
  }
  public pause(): void {
    throw new Error("Method not implemented.");
  }
  public resize(
    width: number,
    height: number,
    viewMode: google.ima.ViewMode
  ): void {
    throw new Error("Method not implemented.");
  }
  public resume(): void {
    throw new Error("Method not implemented.");
  }
  public setVolume(volume: number): void {
    throw new Error("Method not implemented.");
  }
  public skip(): void {
    throw new Error("Method not implemented.");
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
  public updateAdsRenderingSettings(
    adsRenderingSettings: google.ima.AdsRenderingSettings
  ): void {
    throw new Error("Method not implemented.");
  }
  public addEventListener(
    type: string,
    handler: null | object,
    capture?: boolean,
    handlerScope?: object | null
  ): void {
    this.eventEmitter.addEventListener(type, handler, capture, handlerScope);
  }
  public removeEventListener(
    type: string,
    handler: null | object,
    capture?: boolean,
    handlerScope?: object | null
  ): void {
    this.eventEmitter.removeEventListener(type, handler, capture);
  }
  public dispatchEvent(event: Event): boolean {
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
                console.log(`@@@@ timeOffset [${timeOffset}]:`, time);
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
              console.log(`@@@@ timeOffset [${timeOffset}]:`, time);
              this.cuePoints.push(time);
              this.cueMapPoints[time] = [adBreaks];
            }
          }
        }
        return this;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  private isValidContentObject(
    content: object | undefined
  ): content is object & { currentTime: number } {
    return (
      !!content &&
      (content instanceof HTMLVideoElement || "currentTime" in content)
    );
  }

  private allAdsCompleted(): void {
    this.dispatchAdsEvent(AdEvent.Type.ALL_ADS_COMPLETED);
    this.nextAds = [];
    this.queueCreatives = [];
    this.vastTracker = undefined;
    this.currentAdVast = undefined;
    this.currentAd = undefined;
    this.currentCreative = undefined;
    this.detachContentMediaEventListeners();
    this.clearVideoAdsContent();
    this.adDisplayContainer.hide();
    this.processingAdv = false;
    this.dispatchAdsEvent(AdEvent.Type.CONTENT_RESUME_REQUESTED);
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
          if (
            mimeType &&
            mimeType.startsWith("video/mp4") &&
            mediaFile.fileURL
          ) {
            this.currentCreative = creative;
            this.vastTracker = new VASTTracker(
              null,
              this.currentAdVast,
              this.currentCreative
            );
            this.playAdsContent(mediaFile.fileURL).catch((_) => {});
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
    this.currentAd = new Ad(vastAd, new AdPodInfo(0, false, 0, 0, 0, 0));
    this.queueCreatives = this.getCreativities(vastAd);
    if (!hasPreviosAdv) {
      this.dispatchAdsEvent(AdEvent.Type.CONTENT_PAUSE_REQUESTED);
    }
    return this.playCreativities();
  }

  private handleContentTimeUpdate(): void {
    const content = this.content;
    if (!this.isValidContentObject(content) || this.cuePoints.length === 0) {
      return;
    }
    if (this.processingAdv) {
      console.log(`this.processingAdv: [${this.processingAdv}]`);
      return;
    }

    if (this.nextAds && this.nextAds.length > 0) {
      this.processingAdv = true;
      this.playCreativities();
      return;
    }
    const currentTime = content.currentTime * 1000;
    console.log("Content Current time", currentTime);
    const nextCue = this.cuePoints.find(
      (cue) => Math.abs(cue - currentTime) <= CUE_THREAD_SHOULD_REQUEST_MS
    );
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
    } else if ("currentTime" in content) {
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

  private hasAdValidCreative(ad: VASTAd): boolean {
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
              if (
                mimeType &&
                mimeType.startsWith("video/mp4") &&
                mediaFile.fileURL
              ) {
                return true;
              }
            }
          }
        }
      }
    }
    return false;
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
              if (
                mimeType &&
                mimeType.startsWith("video/mp4") &&
                mediaFile.fileURL
              ) {
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
    } catch (ex) {}
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
      const adBreaks = this.cueMapPoints[time];
      const promiseVastFetch: Array<Promise<VASTResponse>> = [];
      delete this.cueMapPoints[time];
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
                console.log("Ad", ad);
                if (this.hasAdValidCreative(ad)) {
                  adsSlot.push(ad);
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
      }
    } catch (error) {
      console.log(error);
    }
  }

  // REGION: ADS EVENTS
  private dispatchAdsEvent(name: AdEvent.Type) {
    this.eventEmitter.emit(name, new AdEvent.AdEvent(name, this.currentAd));
  }

  //END REGION

  // REGION: VIDEO ADS EVENTS
  private adsVideoEventsListener(ev: Event): void {
    const videoAdsElement = this.adDisplayContainer.getVideoAdsElement();
    if (!videoAdsElement) {
      return;
    }
    switch (ev.type) {
      case "play": {
        if (!this.quartilesFired.start) {
          this.quartilesFired.start = true;
          this.dispatchAdsEvent(AdEvent.Type.STARTED);
        }

        break;
      }
      case "pause": {
        break;
      }
      case "timeupdate": {
        const videoDuration = videoAdsElement.duration || -1;
        if (!isNaN(videoDuration) && videoDuration >= 0) {
          const currentTime = videoAdsElement.currentTime || 0;
          const percentage = currentTime / videoDuration;
          //this.adRemaingTime = videoDuration - currentTime;
          console.log(
            `ADS Current time: ${currentTime}, Percentage: ${percentage}%`
          );
          if (!this.quartilesFired.firstQuartile && percentage >= 0.25) {
            console.log("First Quartile (25%)");
            this.quartilesFired.firstQuartile = true;
            this.dispatchAdsEvent(AdEvent.Type.FIRST_QUARTILE);
          }

          if (!this.quartilesFired.midpoint && percentage >= 0.5) {
            console.log("Midpoint (50%)");
            this.quartilesFired.midpoint = true;
            this.dispatchAdsEvent(AdEvent.Type.MIDPOINT);
          }

          if (!this.quartilesFired.thirdQuartile && percentage >= 0.75) {
            console.log("Third Quartile (75%)");
            this.quartilesFired.thirdQuartile = true;
            this.dispatchAdsEvent(AdEvent.Type.THIRD_QUARTILE);
          }
          this.vastTracker?.setProgress(currentTime);
        }
        break;
      }
      case "ended": {
        if (!this.quartilesFired.complete) {
          this.quartilesFired.complete = true;
          this.dispatchAdsEvent(AdEvent.Type.COMPLETE);
        }
        this.vastTracker?.complete();
        this.playCreativities();
        break;
      }
    }
  }

  private adsVideoErrorListener(ev: Event): void {
    this.clearVideoAdsContent();
  }

  private clearVideoAdsContent(): void {
    const videoAdsElement = this.adDisplayContainer.getVideoAdsElement();
    if (!videoAdsElement) {
      return;
    }
    videoAdsElement.autoplay = false;
    videoAdsElement.pause();
    videoAdsElement.src = "";
    videoAdsElement.load();
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
      return;
    }
    this.adRemaingTime = -1;
    this.adDisplayContainer.show();
    this.adDisplayContainer.showLoader();
    this.removeVideoListeners();
    this.resetQuartilesFired();
    videoAdsElement.autoplay = true;
    videoAdsElement.src = src;
    try {
      await preloadVideo(videoAdsElement);
      await videoAdsElement.play();
      this.addVideoListeners();
      this.adDisplayContainer.hideLoader();
    } catch (error) {
      console.log(`error: `, error);
      this.dispatchAdsEvent(AdEvent.Type.AD_BREAK_FETCH_ERROR);
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
    ADS_VIDEO_EVENTS.forEach((type) =>
      videoAdsElement.addEventListener(type, this.adsVideoEventsListener)
    );
    videoAdsElement.addEventListener("error", this.adsVideoErrorListener);
  }

  private removeVideoListeners() {
    const videoAdsElement = this.adDisplayContainer.getVideoAdsElement();
    if (!videoAdsElement) {
      return;
    }
    ADS_VIDEO_EVENTS.forEach((type) =>
      videoAdsElement.removeEventListener(type, this.adsVideoEventsListener)
    );
    videoAdsElement.removeEventListener("error", this.adsVideoErrorListener);
  }

  // END REGION: VIDEO ADS EVENTS
}
