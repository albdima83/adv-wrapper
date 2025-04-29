import { VASTAd, VASTCreative, VASTMediaFile } from '@dailymotion/vast-client';

declare namespace ImaSdkSettings {
    enum CompanionBackfillMode {
        ALWAYS = "always",
        ON_MASTER_AD = "on_master_ad"
    }
    /**
     * A set of constants for enabling VPAID functionality.
     */
    enum VpaidMode {
        /**
         * VPAID ads will not play and an error will be returned.
         */
        DISABLED = 0,
        /**
         * VPAID ads are enabled using a cross domain iframe. The VPAID ad cannot
         * access the site. VPAID ads that depend on friendly iframe access may
         * error. This is the default.
         */
        ENABLED = 1,
        /**
         * VPAID ads are enabled using a friendly iframe. This allows the ad
         * access to the site through JavaScript.
         */
        INSECURE = 2
    }
    class ImaSdkSettings implements google.ima.ImaSdkSettings {
        getCompanionBackfill(): CompanionBackfillMode;
        getDisableCustomPlaybackForIOS10Plus(): boolean;
        getFeatureFlags(): Record<string, unknown>;
        getLocale(): string;
        getNumRedirects(): number;
        getPlayerType(): string;
        getPlayerVersion(): string;
        getPpid(): string | null;
        isCookiesEnabled(): boolean;
        setAutoPlayAdBreaks(autoPlayAdBreaks: boolean): void;
        setCompanionBackfill(): void;
        setCookiesEnabled(cookiesEnabled: boolean): void;
        setDisableCustomPlaybackForIOS10Plus(disable: boolean): void;
        setFeatureFlags(featureFlags: Record<string, unknown>): void;
        setLocale(locale: string): void;
        setNumRedirects(numRedirects: number): void;
        setPlayerType(playerType: string): void;
        setPlayerVersion(playerVersion: string): void;
        setPpid(ppid: string): void;
        setSessionId(sessionId: string): void;
        setVpaidAllowed(allowVpaid: boolean): void;
        setVpaidMode(vpaidMode: VpaidMode): void;
    }
}

declare const settings: ImaSdkSettings.ImaSdkSettings;

declare class AdPodInfo implements google.ima.AdPodInfo {
    private adPosition;
    private isBumper;
    private maxDuration;
    private podIndex;
    private timeOffset;
    private totalAds;
    constructor(adPosition: number, isBumper: boolean, maxDuration: number, podIndex: number, timeOffset: number, totalAds: number);
    getAdPosition(): number;
    getIsBumper(): boolean;
    getMaxDuration(): number;
    getPodIndex(): number;
    getTimeOffset(): number;
    getTotalAds(): number;
}

declare class Ad implements google.ima.Ad {
    private adId;
    private adPodInfo;
    private adSystem;
    private advertiserName;
    private apiFramework;
    private companionAds;
    private creativeAdId;
    private creativeId;
    private dealId;
    private description;
    private duration;
    private height;
    private mediaUrl;
    private minSuggestedDuration;
    private skipTimeOffset;
    private surveyUrl;
    private title;
    private traffickingParameters;
    private traffickingParametersString;
    private uiElements;
    private universalAdIdRegistry;
    private universalAdIdValue;
    private universalAdIds;
    private vastMediaBitrate;
    private vastMediaHeight;
    private vastMediaWidth;
    private width;
    private wrapperAdIds;
    private wrapperAdSystems;
    private wrapperCreativeIds;
    private linear;
    constructor(vastAd: VASTAd, creative: VASTCreative, mediaFile: VASTMediaFile, podInfo: AdPodInfo);
    getAdId(): string;
    getAdPodInfo(): google.ima.AdPodInfo;
    getAdSystem(): string;
    getAdvertiserName(): string;
    getApiFramework(): string | null;
    getCompanionAds(adSlotWidth: number, adSlotHeight: number, settings?: google.ima.CompanionAdSelectionSettings): google.ima.CompanionAd[];
    getCreativeAdId(): string;
    getCreativeId(): string;
    getDealId(): string;
    getDescription(): string;
    getDuration(): number;
    getHeight(): number;
    getMediaUrl(): string | null;
    getMinSuggestedDuration(): number;
    getSkipTimeOffset(): number;
    getSurveyUrl(): string | null;
    getTitle(): string;
    getTraffickingParameters(): {
        [key: string]: string;
    };
    getTraffickingParametersString(): string;
    getUiElements(): string[];
    getUniversalAdIdRegistry(): string;
    getUniversalAdIdValue(): string;
    getUniversalAdIds(): google.ima.UniversalAdIdInfo[];
    getVastMediaBitrate(): number;
    getVastMediaHeight(): number;
    getVastMediaWidth(): number;
    getWidth(): number;
    getWrapperAdIds(): string[];
    getWrapperAdSystems(): string[];
    getWrapperCreativeIds(): string[];
    isLinear(): boolean;
}

declare class AdDisplayContainer implements google.ima.AdDisplayContainer {
    private adContainer;
    private videoElement;
    private contentElement;
    private adsContainerElement;
    private adsSpinnerElement;
    private videoAdsElement;
    /**
     * Constructor.
     * @param containerElement The element to display the ads in.
     *     The element must be inserted into the DOM before creating
     * AdDisplayContainer.
     * @param videoElement Specifies the alternative video ad playback element.
     *     We recommend always passing in your content video player.
     * @param clickTrackingElement Specifies the alternative video ad click
     *     element. Leave this null to let the SDK handle clicks. Even if
     *     supplied, the SDK will only use the custom click tracking element
     * when non-AdSense/AdX creatives are displayed in environments that do not
     *     support UI elements overlaying a video player (for example, iPhone or
     *     pre-4.0 Android). <b>The custom click tracking element should never
     * be rendered over the video player</b> because it can intercept clicks to
     *     UI elements that the SDK renders. Also note that the SDK will not
     *     modify the visibility of the custom click tracking element. This
     * means that if a custom click tracking element is supplied, it must be
     *     properly displayed when the linear ad is played. You can check
     *     ima.AdsManager.isCustomClickTrackingUsed when the
     *     ima.AdEvent.Type.STARTED event is fired to determine whether or not
     * to display your custom click tracking element. If appropriate for your
     * UI, you should hide the click tracking element when the
     *     ima.AdEvent.Type.CONTENT_RESUME_REQUESTED event fires.
     */
    constructor(adContainer: HTMLElement, videoElement: HTMLVideoElement, contentElement?: HTMLVideoElement);
    initialize(): void;
    destroy(): void;
    addEventListener(type: string, listener: (event: google.ima.AdEvent) => void, useCapture?: boolean): void;
    removeEventListener(type: string, listener: (event: google.ima.AdEvent) => void, useCapture?: boolean): void;
    dispatchEvent(event: google.ima.AdEvent): boolean;
    getVideoAdsElement(): HTMLVideoElement;
    show(): void;
    hide(): void;
    showLoader(): void;
    hideLoader(): void;
    private createAdsContainer;
    private createAdsSpinner;
    private createAdsVideoElement;
}

declare namespace AdError {
    enum ErrorCode {
        /**
         * The ad response was not recognized as a valid VAST ad.
         * VAST error code 100
         */
        VAST_MALFORMED_RESPONSE = 100,
        /**
         * VAST schema validation error.
         * VAST error code 101
         */
        VAST_SCHEMA_VALIDATION_ERROR = 101,
        /**
         * The ad response contained an unsupported VAST version.
         * VAST error code 102
         */
        VAST_UNSUPPORTED_VERSION = 102,
        /**
         * Trafficking error. Video player received an ad type that it was not
         * expecting and/or cannot display.
         * VAST error code 200
         */
        VAST_TRAFFICKING_ERROR = 200,
        /**
         * Ad linearity is different from what the video player is expecting.
         * VAST error code 201
         */
        VAST_UNEXPECTED_LINEARITY = 201,
        /**
         * VAST duration is different from the actual media file duration.
         * VAST error code 202
         */
        VAST_UNEXPECTED_DURATION_ERROR = 202,
        /**
         * General VAST wrapper error.
         * VAST error code 300
         */
        VAST_WRAPPER_ERROR = 300,
        /**
         * The VAST URI provided, or a VAST URI provided in a subsequent wrapper
         * element, was either unavailable or reached a timeout, as defined by the
         * video player. The timeout is 5 seconds for initial VAST requests and
         * each subsequent wrapper.
         * VAST error code 301
         */
        VAST_LOAD_TIMEOUT = 301,
        /**
         * The maximum number of VAST wrapper redirects has been reached.
         * VAST error code 302
         */
        VAST_TOO_MANY_REDIRECTS = 302,
        /**
         * No Ads VAST response after one or more wrappers.
         * VAST error code 303
         */
        VAST_NO_ADS_AFTER_WRAPPER = 303,
        /**
         * There was an error playing the video ad.
         * VAST error code 400
         */
        VIDEO_PLAY_ERROR = 400,
        /**
         * Failed to load media assets from a VAST response.
         * The default timeout for media loading is 8 seconds.
         * VAST error code 402
         */
        VAST_MEDIA_LOAD_TIMEOUT = 402,
        /**
         * Assets were found in the VAST ad response for linear ad, but none of
         * them matched the video player's capabilities.
         * VAST error code 403
         */
        VAST_LINEAR_ASSET_MISMATCH = 403,
        /**
         * Problem displaying MediaFile. Currently used if video playback is
         * stopped due to poor playback quality.
         * VAST error code 405
         */
        VAST_PROBLEM_DISPLAYING_MEDIA_FILE = 405,
        /**
         * An overlay ad failed to render.
         * VAST error code 500
         */
        OVERLAY_AD_PLAYING_FAILED = 500,
        /**
         * Unable to display NonLinear ad because creative dimensions do not align
         * with creative display area (for example, creative dimension too large).
         * VAST error code 501
         */
        NONLINEAR_DIMENSIONS_ERROR = 501,
        /**
         * An overlay ad failed to load.
         * VAST error code 502
         * @deprecated
         */
        OVERLAY_AD_LOADING_FAILED = 502,
        /**
         * Assets were found in the VAST ad response for nonlinear ad, but none
         * of them matched the video player's capabilities.
         * VAST error code 503
         */
        VAST_NONLINEAR_ASSET_MISMATCH = 503,
        /**
         * Unable to display one or more required companions. The main ad is
         * discarded since the required companions could not be displayed.
         * VAST error code 602
         */
        COMPANION_REQUIRED_ERROR = 602,
        /**
         * A companion ad failed to load or render.
         * VAST error code 603
         * @deprecated
         */
        COMPANION_AD_LOADING_FAILED = 603,
        /**
         * An unexpected error occurred and the cause is not known. Refer to the
         * inner error for more information.
         * VAST error code 900
         */
        UNKNOWN_ERROR = 900,
        /**
         * A VPAID error occurred. Refer to the inner error for more information.
         * VAST error code 901
         */
        VPAID_ERROR = 901,
        /**
         * There was a problem requesting ads from the server.
         * IMA Error code 1005
         */
        FAILED_TO_REQUEST_ADS = 1005,
        /**
         * No assets were found in the VAST ad response.
         * IMA Error code 1007
         */
        VAST_ASSET_NOT_FOUND = 1007,
        /**
         * A VAST response containing a single <code>&lt;VAST&gt;</code> tag with
         * no child tags.
         * IMA Error code 1009
         */
        VAST_EMPTY_RESPONSE = 1009,
        /**
         * The ad response was not understood and cannot be parsed.
         * IMA Error code 1010
         */
        UNKNOWN_AD_RESPONSE = 1010,
        /**
         * There was a problem requesting ads from the server.
         * IMA Error code 1012
         */
        ADS_REQUEST_NETWORK_ERROR = 1012,
        /**
         * The ad tag url specified was invalid. It needs to be properly encoded.
         * IMA Error code 1013
         */
        INVALID_AD_TAG = 1013,
        /**
         * A protected audience api error occurred. Refer to the inner error for more
         * information. VAST error code 1014
         */
        PROTECTED_AUDIENCE_API_ERROR = 1014,
        /**
         * There was an error with stream initialization during server side ad
         * insertion.
         * IMA Error code 1020
         */
        STREAM_INITIALIZATION_FAILED = 1020,
        /**
         * There was an error with asset fallback.
         * IMA Error code 1021
         */
        ASSET_FALLBACK_FAILED = 1021,
        /**
         * The URL is invalid or is not supported by the current browser.
         * IMA Error code 1022
         */
        UNSUPPORTED_URL = 1022,
        /**
         * Invalid arguments were provided to SDK methods.
         * IMA Error code 1101
         */
        INVALID_ARGUMENTS = 1101,
        /**
         * There was an error with a message received from a native SDK.
         * IMA Error code 1204
         * @ignore
         */
        NATIVE_MESSAGE_ERROR = 1204,
        /**
         * The browser prevented playback initiated without user interaction.
         * IMA Error code 1205
         */
        AUTOPLAY_DISALLOWED = 1205,
        /**
         * A Consent Management Provider was detected on the page, and it has
         * indicated that consent is not yet known.
         * IMA Error code 1300
         * @deprecated
         */
        CONSENT_MANAGEMENT_PROVIDER_NOT_READY = 1300
    }
    class AdError implements google.ima.AdError {
        name: string;
        code: number;
        message: string;
        stack?: string | undefined;
        cause?: unknown;
        constructor(code: number, message: string);
        getErrorCode(): number;
        getInnerError(): Error | null;
        getMessage(): string;
        getType(): string;
        getVastErrorCode(): number;
    }
}

declare namespace AdErrorEvent {
    enum Type {
        /**
         * Fired when an error occurred while the ad was loading or playing.
         */
        AD_ERROR = "adError"
    }
    class AdErrorEvent implements google.ima.AdErrorEvent {
        target?: object | null | undefined;
        currentTarget?: object | null | undefined;
        type: string;
        private adError;
        private userRequestContext;
        constructor(adError: AdError.AdError | undefined, userRequestContext?: object | undefined);
        getError(): google.ima.AdError | null;
        getUserRequestContext(): object | null;
        preventDefault(): void;
        stopPropagation(): void;
    }
}

declare namespace AdEvent {
    enum Type {
        /**
         * Fires when an ad break will not play back any ads.
         */
        AD_BREAK_FETCH_ERROR = "adBreakFetchError",
        /**
         * Fires when an ad rule or a VMAP ad break would have played if
         * autoPlayAdBreaks is false.
         */
        AD_BREAK_READY = "adBreakReady",
        /**
         * Fires when the ad has stalled playback to buffer.
         */
        AD_BUFFERING = "adBuffering",
        /**
         * Fires when the ad is ready to play without buffering, either at the
         * beginning of the ad or after buffering completes.
         */
        AD_CAN_PLAY = "adCanPlay",
        /**
         * Fires when an ads list is loaded.
         */
        AD_METADATA = "adMetadata",
        /**
         * Fires when the ad's current time value changes. Calling getAdData() on
         * this event will return an AdProgressData object.
         */
        AD_PROGRESS = "adProgress",
        /**
         * Fires when the ads manager is done playing all the valid ads in the ads
         * response, or when the response doesn't return any valid ads.
         */
        ALL_ADS_COMPLETED = "allAdsCompleted",
        /**
         * Fires when the ad is clicked.
         */
        CLICK = "click",
        /**
         * Fires when the ad completes playing.
         */
        COMPLETE = "complete",
        /**
         * Fires when content should be paused. This usually happens right before
         * an ad is about to cover the content.
         */
        CONTENT_PAUSE_REQUESTED = "contentPauseRequested",
        /**
         * Fires when content should be resumed. This usually happens when an ad
         * finishes or collapses.
         */
        CONTENT_RESUME_REQUESTED = "contentResumeRequested",
        /**
         * Fires when the ad's duration changes.
         */
        DURATION_CHANGE = "durationChange",
        /**
         * Fires when the ad playhead crosses first quartile.
         */
        FIRST_QUARTILE = "firstquartile",
        /**
         * Fires when the impression URL has been pinged.
         */
        IMPRESSION = "impression",
        /**
         * Fires when an ad triggers the interaction callback.
         * Ad interactions contain an interaction ID string in the ad data.
         */
        INTERACTION = "interaction",
        /**
         * Fires when the displayed ad changes from linear to nonlinear,
         * or the reverse.
         */
        LINEAR_CHANGED = "linearChanged",
        /**
         * Fires when ad data is available.
         */
        LOADED = "loaded",
        /**
         * Fires when a non-fatal error is encountered. The user need not take any
         * action since the SDK will continue with the same or next ad playback
         * depending on the error situation.
         */
        LOG = "log",
        /**
         * Fires when the ad playhead crosses midpoint.
         */
        MIDPOINT = "midpoint",
        /**
         * Fires when the ad is paused.
         */
        PAUSED = "pause",
        /**
         * Fires when the ad is resumed.
         */
        RESUMED = "resume",
        /**
         * Fires when the displayed ads skippable state is changed.
         */
        SKIPPABLE_STATE_CHANGED = "skippableStateChanged",
        /**
         * Fires when the ad is skipped by the user.
         */
        SKIPPED = "skipped",
        /**
         * Fires when the ad starts playing.
         */
        STARTED = "start",
        /**
         * Fires when the ad playhead crosses third quartile.
         */
        THIRD_QUARTILE = "thirdquartile",
        /**
         * Fires when the ad is closed by the user.
         */
        USER_CLOSE = "userClose",
        /**
         * Fires when the non-clickthrough portion of a video ad is clicked.
         */
        VIDEO_CLICKED = "videoClicked",
        /**
         * Fires when a user clicks a video icon.
         */
        VIDEO_ICON_CLICKED = "videoIconClicked",
        /**
         * Fires when the ad volume has changed.
         */
        VOLUME_CHANGED = "volumeChanged",
        /**
         * Fires when the ad volume has been muted.
         */
        VOLUME_MUTED = "volumeMuted"
    }
    class AdEvent implements google.ima.AdEvent {
        currentTarget?: object | null | undefined;
        target?: object | null | undefined;
        type: string;
        ad: Ad | undefined;
        adData: object | null;
        constructor(type: string, ad: Ad | undefined);
        getAd(): google.ima.Ad | null;
        getAdData(): object | null;
        preventDefault(): void;
        stopPropagation(): void;
    }
}

declare class AdsRequest implements google.ima.AdsRequest {
    /**
     * Specifies the ad tag url that is requested from the ad server.
     * For details on constructing the ad tag url, see
     * <a href="https://support.google.com/dfp_premium/answer/1068325">
     * Create a main ad video tag manually</a>.
     * <p>
     * This parameter is required.
     * </p>
     */
    adTagUrl: string;
    /**
     * Specifies a VAST 2.0 document to be used as the ads response instead of
     * making a request through an ad tag url. This can be useful for debugging
     * and other situations where a VAST response is already available. <p> This
     * parameter is optional.
     * </p>
     */
    adsResponse: string | Document | null;
    /**
     * Specifies the duration of the content in seconds to be shown. It is used
     * in 2 cases: 1) AdX ad targeting and 2) deciding when to preload VMAP
     * postroll.
     * <p>
     * This parameter is optional.
     * </p>
     */
    contentDuration: number | null;
    /**
     * Specifies the keywords used to describe the content to be shown. Used in
     * AdX requests. <p> This parameter is optional.
     * </p>
     */
    contentKeywords: string[] | null;
    /**
     * Specifies the title of the content to be shown. Used in AdX requests.
     * <p>
     * This parameter is optional.
     * </p>
     */
    contentTitle: string | null;
    /**
     * Forces non-linear AdSense ads to render as linear fullslot. If set,
     * the content video will be paused and the non-linear text or image ad will
     * be rendered as fullslot. The content video will resume once the ad has
     * been skipped or closed.
     */
    forceNonLinearFullSlot: boolean;
    /**
     * Specifies the height of the rectangular area within which a linear ad is
     * displayed. This value is used as one of the criteria for ads selection.
     * This value does not need to match actual ad's height. <p> This parameter
     * is required.
     * </p>
     */
    linearAdSlotHeight: number;
    /**
     * Specifies the width of the rectangular area within which a non linear ad
     * is displayed. This value is used as one of the criteria for ads
     * selection. This value does not need to match actual ad's width. <p> This
     * parameter is required.
     * </p>
     */
    linearAdSlotWidth: number;
    /**
     * Specifies the maximum amount of time to wait in seconds, after calling
     * requestAds, before requesting the ad tag URL. This can be used to stagger
     * requests during a live-stream event, in order to mitigate spikes in the
     * number of requests.
     */
    liveStreamPrefetchSeconds: number;
    /**
     * Specifies the height of the rectangular area within which a non linear ad
     * is displayed. This value is used as one of the criteria for ads
     * selection. This value does not need to match actual ad's height. <p> This
     * parameter is required.
     * </p>
     */
    nonLinearAdSlotHeight: number;
    /**
     * Specifies the width of the rectangular area within which a non linear ad
     * is displayed. This value is used as one of the criteria for ads
     * selection. This value does not need to match actual ad's width. <p> This
     * parameter is required.
     * </p>
     */
    nonLinearAdSlotWidth: number;
    /**
     * Settings object for mapping verification vendors to OMID Access Modes.
     * The keys must be values in google.ima.OmidVerificationVendor, and the
     * values must be values in google.ima.OmidAccessMode.
     *
     * Verification script URLs are internally matched against vendor provided
     * regular expressions to resolve to an OmidVerificationVendor key. IMA then
     * looks up the access mode for the given vendor using this object.
     *
     * For script URLs that don't resolve to a known vendor, or if the resolved
     * OmidVerificationVendor is not provided in this object, IMA will use the
     * access mode provided for OmidVerificationVendor.OTHER. If
     * OmidVerificationVendor.OTHER is not provided, then the LIMITED access
     * mode will be used.
     */
    omidAccessModeRules: {
        [key: string]: string;
    };
    /**
     * Specifies the full url of the page that will be included in the Google ad
     * request for targeting purposes. The url needs to be a valid url. If
     * specified, this value will be used for the [PAGEURL] VAST macro.
     * <p>
     * This parameter is optional.
     * </p>
     */
    pageUrl: string | null;
    /**
     * Override for default VAST load timeout in milliseconds for a single
     * wrapper. The default timeout is 5000ms. <p> This parameter is optional.
     * </p>
     */
    vastLoadTimeout: number;
    constructor();
    /**
     * Notifies the SDK whether the player intends to start the content and ad
     * in response to a user action or whether it will be automatically played.
     * Changing this setting will have no impact on ad playback.
     * @param autoPlay Whether the content and the ad will be autoplayed or
     *     whether it will be started by a user action.
     */
    setAdWillAutoPlay(autoPlay: boolean): void;
    /**
     * Notifies the SDK whether the player intends to start ad while muted.
     * Changing this setting will have no impact on ad playback, but will send
     * the appropriate signal in the ad request to allow buyers to bid on muted
     * inventory.
     * @param muted Whether the ad will be played while muted.
     */
    setAdWillPlayMuted(muted: boolean): void;
    /**
     * Notifies the SDK whether the player intends to continuously play the
     * content videos one after another similar to TV broadcast. Changing this
     * setting will have no impact on the ad playback, but will send the
     * appropriate signal in this ad request to allow buyers to bid on the type
     * of ad inventory.
     * @param continuousPlayback Whether the content video is played one after
     *     another continuously.
     */
    setContinuousPlayback(continuousPlayback: boolean): void;
}

declare class AdsLoader implements google.ima.AdsLoader {
    private adDisplayContainer;
    private adsManager;
    private eventEmitter;
    private userRequestContext;
    private imaSdkSettings;
    constructor(adDisplayContainer: AdDisplayContainer);
    addEventListener(type: string, handler: null | object, capture?: boolean, handlerScope?: object | null): void;
    contentComplete(): void;
    dispatchEvent(event: Event | null): boolean;
    getSettings(): google.ima.ImaSdkSettings;
    getVersion(): string;
    removeEventListener(type: string, handler: null | object, capture?: boolean, handlerScope?: object | null): void;
    requestAds(adsRequest: AdsRequest, userRequestContext?: object | null): void;
    destroy(): void;
}

declare class AdsManager implements google.ima.AdsManager {
    private adsRequest;
    private adDisplayContainer;
    private adsRenderingSettings;
    private vastTracker;
    private content;
    private eventEmitter;
    private cuePoints;
    private cueMapPoints;
    private started;
    private nextAds;
    private totalAds;
    private totalTimeAds;
    private currentPodIndex;
    private canBeAdSkippable;
    private currentAdBreak;
    private currentAdVast;
    private currentAd;
    private currentCreative;
    private queueCreatives;
    private processingAdv;
    private timerUpdateContentTime;
    private adRemainingTime;
    private quartilesFired;
    constructor(adsRequest: AdsRequest, adDisplayContainer: AdDisplayContainer);
    collapse(): void;
    configureAdsManager(content: object, adsRenderingSettings?: google.ima.AdsRenderingSettings | null): void;
    destroy(): void;
    discardAdBreak(): void;
    expand(): void;
    focus(): void;
    getAdSkippableState(): boolean;
    getCuePoints(): number[];
    getRemainingTime(): number;
    getVolume(): number;
    init(width: number, height: number, viewMode: google.ima.ViewMode, videoElement?: HTMLVideoElement | null): void;
    isCustomClickTrackingUsed(): boolean;
    isCustomPlaybackUsed(): boolean;
    pause(): void;
    resize(width: number, height: number, viewMode: google.ima.ViewMode): void;
    resume(): void;
    setVolume(volume: number): void;
    skip(): void;
    start(): void;
    stop(): void;
    updateAdsRenderingSettings(adsRenderingSettings: google.ima.AdsRenderingSettings): void;
    addEventListener(type: string, handler: null | object, capture?: boolean, handlerScope?: object | null): void;
    removeEventListener(type: string, handler: null | object, capture?: boolean, handlerScope?: object | null): void;
    dispatchEvent(event: Event): boolean;
    fetchVmap(): Promise<AdsManager>;
    private isValidContentObject;
    private allAdsCompleted;
    private playCreativities;
    private handleContentTimeUpdate;
    private clearTimerUpdateContentTime;
    private startTimerUpdateContentTime;
    private attachContentMediaEventListeners;
    private detachContentMediaEventListeners;
    private isValidAdBreak;
    private getAdValidCreative;
    private getCreativities;
    private trackingEvent;
    private trackUrl;
    private getPromiseVastClient;
    private fetchVastAds;
    private dispatchAdsEvent;
    private adsVideoEventsListener;
    private adsVideoErrorListener;
    private clearVideoAdsContent;
    private resetQuartilesFired;
    private playAdsContent;
    private addVideoListeners;
    private removeVideoListeners;
}

declare namespace AdsManagerLoadedEvent {
    enum Type {
        /**
         * Fired when the ads have been loaded and an AdsManager is available.
         */
        ADS_MANAGER_LOADED = "adsManagerLoaded"
    }
    class AdsManagerLoadedEvent implements google.ima.AdsManagerLoadedEvent {
        currentTarget?: object | null | undefined;
        target?: object | null | undefined;
        type: string;
        private adsManager;
        constructor(adsManager: AdsManager);
        getAdsManager(contentPlayback: object, adsRenderingSettings?: google.ima.AdsRenderingSettings): AdsManager;
        getUserRequestContext(): object | null;
        preventDefault(): void;
        stopPropagation(): void;
    }
}

declare class AdsRenderingSettings implements google.ima.AdsRenderingSettings {
    autoAlign: boolean;
    bitrate: number;
    enablePreloading: boolean;
    loadVideoTimeout: number;
    mimeTypes: string[] | null;
    playAdsAfterTime: number;
    restoreCustomPlaybackStateOnAdBreakComplete: boolean;
    uiElements: string[] | null;
    useStyledLinearAds: boolean;
    useStyledNonLinearAds: boolean;
}

type LogLevel = "fatal" | "error" | "warn" | "info" | "debug" | "trace";

declare function activateDebug(activate: boolean, logLevel?: LogLevel): void;

declare enum ViewMode {
    /**
     * Fullscreen ad view mode. Indicates to the ads manager that the publisher
     * considers the current AdDisplayContainer arrangement as fullscreen (for
     * example, simulated fullscreen). This does not cause the ads manager to
     * enter fullscreen.
     */
    FULLSCREEN = "fullscreen",
    /**
     * Normal ad view mode.
     */
    NORMAL = "normal"
}

interface AdTagURI {
    "#text": string;
    "@_templateType"?: "vast1" | "vast2" | "vast3" | "vast4";
}
interface AdSource {
    "@_id": string;
    "@_allowMultipleAds"?: "true" | "false";
    "@_followRedirects"?: "true" | "false";
    "vmap:AdTagURI"?: AdTagURI;
}
interface Tracking {
    "@_event": string;
    "#text": string;
}
interface TrackingEvents {
    "vmap:Tracking": Tracking[];
}
interface Extensions {
    "vmap:Extension": Record<string, unknown>[];
}
interface AdBreak {
    "@_timeOffset": string;
    "@_breakType"?: string;
    "@_breakId"?: string;
    "@_repeatAfter"?: string;
    "vmap:AdSource": AdSource;
    "vmap:TrackingEvents"?: TrackingEvents;
    "vmap:Extensions"?: Extensions;
}
interface VmapVMAP {
    "vmap:VMAP": {
        "@_version": string;
        "vmap:AdBreak": AdBreak[] | AdBreak;
    };
}

declare const VERSION: string;

export { Ad, type AdBreak, AdDisplayContainer, AdError, AdErrorEvent, AdEvent, AdPodInfo, type AdSource, type AdTagURI, AdsLoader, AdsManager, AdsManagerLoadedEvent, AdsRenderingSettings, AdsRequest, type Extensions, ImaSdkSettings, type Tracking, type TrackingEvents, VERSION, ViewMode, type VmapVMAP, activateDebug, settings };
