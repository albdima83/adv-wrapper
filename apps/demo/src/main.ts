const IMA_SRC = __IMA_LIB_URL__ || "https://imasdk.googleapis.com/js/sdkloader/ima3.js";

let adsManager: google.ima.AdsManager;
let adsLoader: google.ima.AdsLoader;
let adDisplayContainer: google.ima.AdDisplayContainer;
let isAdPlaying: boolean = false;
let isContentFinished: boolean = false;
let playButton: HTMLElement;
let videoContent: HTMLVideoElement;
let adContainer: HTMLElement;

function loadUMDScript(src: string): Promise<void> {
	return new Promise((resolve, reject) => {
		if (document.querySelector(`script[src="${src}"]`)) {
			resolve(); // Script already loaded
			return;
		}
		const script = document.createElement("script");
		script.type = "text/javascript";
		script.src = src;
		script.async = true;
		script.onload = () => {
			resolve();
		};
		script.onerror = () => {
			reject(new Error(`Failed to load script: ${src}`));
		};
		document.head.appendChild(script);
	});
}

// [START ima_setup]

/**
 * Sets up IMA ad display container, ads loader, and makes an ad request.
 */
function setUpIMA(): void {
	createAdDisplayContainer();

	adsLoader = new google.ima.AdsLoader(adDisplayContainer);

	adsLoader.addEventListener(
		google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
		onAdsManagerLoaded,
		false,
	);
	adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError, false);

	videoContent.onended = () => {
		if (isAdPlaying) return;
		isContentFinished = true;
		adsLoader.contentComplete();
	};

	const adsRequest = new google.ima.AdsRequest();
	const correlator = Date.now() + Math.random();

	adsRequest.adTagUrl =
		"https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/vmap_ad_samples&sz=640x480&cust_params=sample_ar%3Dpreonly&ciu_szs=300x250%2C728x90&gdfp_req=1&ad_rule=1&output=vmap&unviewed_position_start=1&env=vp&impl=s&correlator=" +
		correlator;

	adsRequest.linearAdSlotWidth = 640;
	adsRequest.linearAdSlotHeight = 400;
	adsRequest.nonLinearAdSlotWidth = 640;
	adsRequest.nonLinearAdSlotHeight = 150;

	adsLoader.requestAds(adsRequest);
}

/**
 * Sets the 'adContainer' div as the IMA ad display container.
 */
function createAdDisplayContainer(): void {
	adDisplayContainer = new google.ima.AdDisplayContainer(
		document.getElementById("adContainer") as HTMLElement,
		videoContent,
	);
}

/**
 * Loads the video content and initializes IMA ad playback.
 */
function playAds(): void {
	videoContent.load();
	adDisplayContainer.initialize();

	try {
		adsManager.init(640, 360, google.ima.ViewMode.NORMAL);
		adsManager.start();
	} catch (adError) {
		console.error("Ad Error:", adError);
		videoContent.play();
	}
}

/**
 * Handles the ad manager loading and sets ad event listeners.
 * @param adsManagerLoadedEvent
 */
function onAdsManagerLoaded(adsManagerLoadedEvent: google.ima.AdsManagerLoadedEvent): void {
	const adsRenderingSettings = new google.ima.AdsRenderingSettings();
	adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;

	adsManager = adsManagerLoadedEvent.getAdsManager(videoContent, adsRenderingSettings);

	adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError);

	adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, onContentPauseRequested);
	adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, onContentResumeRequested);
	adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, onAdLoaded);
}

/**
 * Handles ad errors.
 * @param adErrorEvent
 */
function onAdError(adErrorEvent: google.ima.AdErrorEvent): void {
	console.error(adErrorEvent.getError());
	if (adsManager) {
		adsManager.destroy();
	}
}

/**
 * Handles clicks on the ad container for mobile play/pause.
 * @param event
 */
function adContainerClick(event: MouseEvent): void {
	console.log("ad container clicked");
	if (videoContent.paused) {
		videoContent.play();
	} else {
		videoContent.pause();
	}
}

/**
 * Pauses video content and sets up ad UI.
 */
function onContentPauseRequested(): void {
	isAdPlaying = true;
	videoContent.pause();
	// setupUIForAds();
}

/**
 * Resumes video content and removes ad UI.
 */
function onContentResumeRequested(): void {
	isAdPlaying = false;
	if (!isContentFinished) {
		videoContent.play();
	}
	// setupUIForContent();
}

/**
 * Handles ad loaded event to support non-linear ads.
 * @param adEvent
 */
function onAdLoaded(adEvent: google.ima.AdEvent): void {
	const ad = adEvent.getAd();
	if (!ad?.isLinear()) {
		videoContent.play();
	}
}

function setup() {
	videoContent = document.getElementById("contentElement") as HTMLVideoElement;
	adContainer = document.getElementById("adContainer") as HTMLElement;
	adContainer.addEventListener("click", adContainerClick);
	playButton = document.getElementById("playButton") as HTMLElement;
	playButton.addEventListener("click", playAds);
	playButton?.addEventListener("click", () => {
		videoContent.load();
		adDisplayContainer.initialize();
		playAds();
	});
	setUpIMA();
}

async function main() {
	try {
		await loadUMDScript(IMA_SRC);
		setup();
		console.log("Script loaded successfully");
	} catch (error) {
		console.error("Error loading script:", error);
	}
}

main();
