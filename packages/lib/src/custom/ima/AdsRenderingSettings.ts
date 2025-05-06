class AdsRenderingSettings implements google.ima.AdsRenderingSettings {
	autoAlign: boolean = false;
	bitrate: number = -1;
	enablePreloading: boolean = false;
	loadVideoTimeout: number = -1;
	mimeTypes: string[] | null = null;
	playAdsAfterTime: number = 0;
	restoreCustomPlaybackStateOnAdBreakComplete: boolean = false;
	uiElements: string[] | null = null;
	useStyledLinearAds: boolean = true;
	useStyledNonLinearAds: boolean = false;
}

export { AdsRenderingSettings };
