export namespace AdError {
  export enum ErrorCode {
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
    CONSENT_MANAGEMENT_PROVIDER_NOT_READY = 1300,
  }
  /**
   * The possible error types for ad loading and playing.
   */
  enum Type {
    /**
     * Indicates that the error was encountered when the ad was being loaded.
     * Possible causes: there was no response from the ad server, malformed ad
     * response was returned, or ad request parameters failed to pass
     * validation.
     */
    AD_LOAD = "adLoadError",
    /**
     * Indicates that the error was encountered after the ad loaded, during ad
     * play.
     * Possible causes: ad assets could not be loaded, and more.
     */
    AD_PLAY = "adPlayError",
  }
  export class AdError implements google.ima.AdError {
    name: string;
    code: number;
    message: string;
    stack?: string | undefined;
    cause?: unknown;

    constructor(code: number, message: string) {
      this.name = "AdError";
      this.message = message;
      this.code = code;
    }
    getErrorCode(): number {
      return this.code;
    }
    getInnerError(): Error | null {
      return new Error(this.message);
    }
    getMessage(): string {
      return this.message;
    }
    getType(): string {
      return "";
    }
    getVastErrorCode(): number {
      return this.code;
    }
  }
}
