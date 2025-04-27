import { Ad } from "./Ad";

export namespace AdEvent {
  export enum Type {
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
    VOLUME_MUTED = "volumeMuted",
  }

  export class AdEvent implements google.ima.AdEvent {
    currentTarget?: object | null | undefined;
    target?: object | null | undefined;
    type: string = Type.LOADED;
    ad: Ad | undefined = undefined;
    adData: object | null = null;

    constructor(type: string, ad: Ad | undefined) {
      this.type = type;
      this.ad = ad;
    }

    getAd(): google.ima.Ad | null {
      return this.ad || null;
    }
    getAdData(): object | null {
      return this.adData;
    }

    preventDefault(): void {}
    stopPropagation(): void {}
  }
}
