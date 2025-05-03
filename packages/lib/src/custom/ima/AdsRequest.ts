import logger from "../utils/logger";

const TAG = "ima:AdsRequest";
class AdsRequest implements google.ima.AdsRequest {
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
  omidAccessModeRules: { [key: string]: string };
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

  constructor() {
    this.adTagUrl = "";
    this.adsResponse = null;
    this.contentDuration = null;
    this.contentKeywords = null;
    this.contentTitle = null;
    this.forceNonLinearFullSlot = false;
    this.linearAdSlotHeight = 0;
    this.linearAdSlotWidth = 0;
    this.liveStreamPrefetchSeconds = 0;
    this.nonLinearAdSlotHeight = 0;
    this.nonLinearAdSlotWidth = 0;
    this.omidAccessModeRules = {};
    this.pageUrl = null;
    this.vastLoadTimeout = 0;
  }

  /**
   * Notifies the SDK whether the player intends to start the content and ad
   * in response to a user action or whether it will be automatically played.
   * Changing this setting will have no impact on ad playback.
   * @param autoPlay Whether the content and the ad will be autoplayed or
   *     whether it will be started by a user action.
   */
  setAdWillAutoPlay(autoPlay: boolean): void {
    logger.debug(TAG, `setAdWillAutoPlay [${autoPlay}]`);
  }

  /**
   * Notifies the SDK whether the player intends to start ad while muted.
   * Changing this setting will have no impact on ad playback, but will send
   * the appropriate signal in the ad request to allow buyers to bid on muted
   * inventory.
   * @param muted Whether the ad will be played while muted.
   */

  setAdWillPlayMuted(muted: boolean): void {
    logger.debug(TAG, `setAdWillPlayMuted [${muted}]`);
  }

  /**
   * Notifies the SDK whether the player intends to continuously play the
   * content videos one after another similar to TV broadcast. Changing this
   * setting will have no impact on the ad playback, but will send the
   * appropriate signal in this ad request to allow buyers to bid on the type
   * of ad inventory.
   * @param continuousPlayback Whether the content video is played one after
   *     another continuously.
   */
  setContinuousPlayback(continuousPlayback: boolean): void {
    logger.debug(TAG, `setContinuousPlayback [${continuousPlayback}]`);
  }
}

export { AdsRequest };
