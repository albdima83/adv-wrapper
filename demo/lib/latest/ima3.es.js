/* ES | Version: 0.0.5 | Commit: 6691956 */
var Fr = Object.defineProperty, Ur = Object.defineProperties;
var Pr = Object.getOwnPropertyDescriptors;
var Bt = Object.getOwnPropertySymbols;
var xr = Object.prototype.hasOwnProperty, Vr = Object.prototype.propertyIsEnumerable;
var ht = (t, e, r) => e in t ? Fr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Fe = (t, e) => {
  for (var r in e || (e = {}))
    xr.call(e, r) && ht(t, r, e[r]);
  if (Bt)
    for (var r of Bt(e))
      Vr.call(e, r) && ht(t, r, e[r]);
  return t;
}, Ft = (t, e) => Ur(t, Pr(e));
var g = (t, e, r) => ht(t, typeof e != "symbol" ? e + "" : e, r);
var Ne = (t, e, r) => new Promise((n, s) => {
  var i = (l) => {
    try {
      o(r.next(l));
    } catch (h) {
      s(h);
    }
  }, c = (l) => {
    try {
      o(r.throw(l));
    } catch (h) {
      s(h);
    }
  }, o = (l) => l.done ? n(l.value) : Promise.resolve(l.value).then(i, c);
  o((r = r.apply(t, e)).next());
});
function Mr(t, e) {
  for (var r = 0; r < e.length; r++) {
    const n = e[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const s in n)
        if (s !== "default" && !(s in t)) {
          const i = Object.getOwnPropertyDescriptor(n, s);
          i && Object.defineProperty(t, s, i.get ? i : {
            enumerable: !0,
            get: () => n[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
const qr = "0.0.5";
var cr = /* @__PURE__ */ ((t) => (t[t.DEPRECATED_ERROR_CODE = -1] = "DEPRECATED_ERROR_CODE", t[t.VAST_MALFORMED_RESPONSE = -1] = "VAST_MALFORMED_RESPONSE", t[t.VAST_SCHEMA_VALIDATION_ERROR = 101] = "VAST_SCHEMA_VALIDATION_ERROR", t[t.VAST_UNSUPPORTED_VERSION = 102] = "VAST_UNSUPPORTED_VERSION", t[t.VAST_TRAFFICKING_ERROR = 200] = "VAST_TRAFFICKING_ERROR", t[t.VAST_UNEXPECTED_LINEARITY = 201] = "VAST_UNEXPECTED_LINEARITY", t[t.VAST_UNEXPECTED_DURATION_ERROR = 202] = "VAST_UNEXPECTED_DURATION_ERROR", t[t.VAST_WRAPPER_ERROR = 300] = "VAST_WRAPPER_ERROR", t[t.VAST_LOAD_TIMEOUT = 301] = "VAST_LOAD_TIMEOUT", t[t.VAST_TOO_MANY_REDIRECTS = 302] = "VAST_TOO_MANY_REDIRECTS", t[t.VAST_NO_ADS_AFTER_WRAPPER = 303] = "VAST_NO_ADS_AFTER_WRAPPER", t[t.VIDEO_PLAY_ERROR = 400] = "VIDEO_PLAY_ERROR", t[t.VAST_MEDIA_LOAD_TIMEOUT = 402] = "VAST_MEDIA_LOAD_TIMEOUT", t[t.VAST_LINEAR_ASSET_MISMATCH = 403] = "VAST_LINEAR_ASSET_MISMATCH", t[t.VAST_PROBLEM_DISPLAYING_MEDIA_FILE = 405] = "VAST_PROBLEM_DISPLAYING_MEDIA_FILE", t[t.OVERLAY_AD_PLAYING_FAILED = 500] = "OVERLAY_AD_PLAYING_FAILED", t[t.NONLINEAR_DIMENSIONS_ERROR = 501] = "NONLINEAR_DIMENSIONS_ERROR", t[t.OVERLAY_AD_LOADING_FAILED = -1] = "OVERLAY_AD_LOADING_FAILED", t[t.VAST_NONLINEAR_ASSET_MISMATCH = 503] = "VAST_NONLINEAR_ASSET_MISMATCH", t[t.COMPANION_REQUIRED_ERROR = 602] = "COMPANION_REQUIRED_ERROR", t[t.COMPANION_AD_LOADING_FAILED = -1] = "COMPANION_AD_LOADING_FAILED", t[t.UNKNOWN_ERROR = 900] = "UNKNOWN_ERROR", t[t.VPAID_ERROR = 901] = "VPAID_ERROR", t[t.FAILED_TO_REQUEST_ADS = 1005] = "FAILED_TO_REQUEST_ADS", t[t.VAST_ASSET_NOT_FOUND = 1007] = "VAST_ASSET_NOT_FOUND", t[t.VAST_EMPTY_RESPONSE = 1009] = "VAST_EMPTY_RESPONSE", t[t.UNKNOWN_AD_RESPONSE = 1010] = "UNKNOWN_AD_RESPONSE", t[t.UNSUPPORTED_LOCALE = 1011] = "UNSUPPORTED_LOCALE", t[t.ADS_REQUEST_NETWORK_ERROR = 1012] = "ADS_REQUEST_NETWORK_ERROR", t[t.INVALID_AD_TAG = 1013] = "INVALID_AD_TAG", t[t.PROTECTED_AUDIENCE_API_ERROR = 1014] = "PROTECTED_AUDIENCE_API_ERROR", t[t.STREAM_INITIALIZATION_FAILED = 1020] = "STREAM_INITIALIZATION_FAILED", t[t.ASSET_FALLBACK_FAILED = 1021] = "ASSET_FALLBACK_FAILED", t[t.UNSUPPORTED_URL = 1022] = "UNSUPPORTED_URL", t[t.INVALID_ARGUMENTS = 1101] = "INVALID_ARGUMENTS", t[t.NATIVE_MESSAGE_ERROR = 1204] = "NATIVE_MESSAGE_ERROR", t[t.AUTOPLAY_DISALLOWED = 1205] = "AUTOPLAY_DISALLOWED", t[t.CONSENT_MANAGEMENT_PROVIDER_NOT_READY = 1300] = "CONSENT_MANAGEMENT_PROVIDER_NOT_READY", t[t.Cj = 2002] = "Cj", t[t.VIDEO_ELEMENT_USED = -1] = "VIDEO_ELEMENT_USED", t[t.VIDEO_ELEMENT_REQUIRED = -1] = "VIDEO_ELEMENT_REQUIRED", t[t.VAST_MEDIA_ERROR = -1] = "VAST_MEDIA_ERROR", t[t.ADSLOT_NOT_VISIBLE = -1] = "ADSLOT_NOT_VISIBLE", t))(cr || {}), dr = /* @__PURE__ */ ((t) => (t.AD_LOAD = "adLoadError", t.AD_PLAY = "adPlayError", t))(dr || {}), hr = /* @__PURE__ */ ((t) => (t.AD_ERROR = "adError", t))(hr || {}), pr = /* @__PURE__ */ ((t) => (t.AD_CAN_PLAY = "adCanPlay", t.wi = "adStarted", t.CONTENT_PAUSE_REQUESTED = "contentPauseRequested", t.CONTENT_RESUME_REQUESTED = "contentResumeRequested", t.CLICK = "click", t.VIDEO_CLICKED = "videoClicked", t.VIDEO_ICON_CLICKED = "videoIconClicked", t.Ne = "engagedView", t.EXPANDED_CHANGED = "expandedChanged", t.STARTED = "start", t.AD_PROGRESS = "adProgress", t.AD_BUFFERING = "adBuffering", t.IMPRESSION = "impression", t.Ue = "measurable_impression", t.VIEWABLE_IMPRESSION = "viewable_impression", t.Oe = "fully_viewable_audible_half_duration_impression", t.mg = "overlay_resize", t.ng = "overlay_unmeasurable_impression", t.og = "overlay_unviewable_impression", t.qg = "overlay_viewable_immediate_impression", t.pg = "overlay_viewable_end_of_session_impression", t.Oi = "externalActivityEvent", t.PAUSED = "pause", t.RESUMED = "resume", t.FIRST_QUARTILE = "firstQuartile", t.MIDPOINT = "midpoint", t.THIRD_QUARTILE = "thirdQuartile", t.COMPLETE = "complete", t.DURATION_CHANGE = "durationChange", t.USER_CLOSE = "userClose", t.Ij = "userRecall", t.vj = "prefetched", t.LOADED = "loaded", t.ALL_ADS_COMPLETED = "allAdsCompleted", t.SKIPPED = "skip", t.ug = "skipShown", t.LINEAR_CHANGED = "linearChanged", t.SKIPPABLE_STATE_CHANGED = "skippableStateChanged", t.AD_METADATA = "adMetadata", t.AD_BREAK_FETCH_ERROR = "adBreakFetchError", t.AD_BREAK_READY = "adBreakReady", t.LOG = "log", t.VOLUME_CHANGED = "volumeChange", t.VOLUME_MUTED = "mute", t.INTERACTION = "interaction", t.Bi = "companionBackfill", t.Gj = "trackingUrlPinged", t.Jj = "video_card_endcap_collapse", t.Kj = "video_card_endcap_dismiss", t.Lj = "video_card_endcap_impression", t.Ei = "companionInitialized", t.Di = "companionImpression", t.Ci = "companionClick", t.pj = "mediaUrlPinged", t.LOAD_START = "loadStart", t.rj = "navigationRequested", t))(pr || {}), fr = /* @__PURE__ */ ((t) => (t.ADS_MANAGER_LOADED = "adsManagerLoaded", t))(fr || {}), mr = /* @__PURE__ */ ((t) => (t.ALWAYS = "always", t.ON_MASTER_AD = "on_master_ad", t))(mr || {}), gr = /* @__PURE__ */ ((t) => (t[t.DISABLED = 0] = "DISABLED", t[t.ENABLED = 1] = "ENABLED", t[t.INSECURE = 2] = "INSECURE", t))(gr || {}), Ar = /* @__PURE__ */ ((t) => (t.NORMAL = "normal", t.FULLSCREEN = "fullscreen", t))(Ar || {});
const Ut = mr, Pt = gr, Ge = class Ge {
  constructor() {
    g(this, "autoPlayAdBreaks", !0);
    g(this, "cookiesEnabled", !0);
    g(this, "companionBackfill", Ge.CompanionBackfillMode.ALWAYS);
    g(this, "featureFlags", {});
    g(this, "locale", "en");
    g(this, "vpaidMode", Pt.ENABLED);
    g(this, "numRedirects", -1);
    g(this, "disableCustomPlaybackForIOS10Plus", !1);
    g(this, "playerType", "");
    g(this, "playerVersion", "");
    g(this, "ppid", "");
    g(this, "sessionId", "");
    g(this, "allowVpaid", !0);
  }
  getCompanionBackfill() {
    return this.companionBackfill;
  }
  getDisableCustomPlaybackForIOS10Plus() {
    return !0;
  }
  getFeatureFlags() {
    return this.featureFlags;
  }
  getLocale() {
    return this.locale;
  }
  getNumRedirects() {
    return this.numRedirects;
  }
  getPlayerType() {
    return this.playerType;
  }
  getPlayerVersion() {
    return this.playerVersion;
  }
  getPpid() {
    return this.ppid;
  }
  isCookiesEnabled() {
    return this.cookiesEnabled;
  }
  setAutoPlayAdBreaks(e) {
    this.autoPlayAdBreaks = e;
  }
  setCompanionBackfill() {
    this.companionBackfill = Ut.ALWAYS;
  }
  setCookiesEnabled(e) {
    this.cookiesEnabled = e;
  }
  setDisableCustomPlaybackForIOS10Plus(e) {
    this.disableCustomPlaybackForIOS10Plus = e;
  }
  setFeatureFlags(e) {
    this.featureFlags = e;
  }
  setLocale(e) {
    this.locale = e;
  }
  setNumRedirects(e) {
    this.numRedirects = e;
  }
  setPlayerType(e) {
    this.playerType = e;
  }
  setPlayerVersion(e) {
    this.playerVersion = e;
  }
  setPpid(e) {
    this.ppid = e;
  }
  setSessionId(e) {
    this.sessionId = e;
  }
  setVpaidAllowed(e) {
    this.allowVpaid = e;
  }
  setVpaidMode(e) {
    this.vpaidMode = e;
  }
};
g(Ge, "CompanionBackfillMode", Ut), g(Ge, "VpaidMode", Pt);
let Ze = Ge;
const bi = new Ze(), xt = ["debug", "info", "warn", "error", "fatal", "trace"], jr = {
  debug: console.debug || console.log,
  info: console.info || console.log,
  warn: console.warn || console.log,
  error: console.error || console.log,
  fatal: console.error || console.log,
  trace: console.trace || console.log
};
class Gr {
  constructor(e) {
    g(this, "enable");
    g(this, "level");
    var n;
    const r = "localStorage" in globalThis ? !!((n = globalThis.localStorage) != null && n.getItem("advDebug")) : !1;
    this.enable = e.enable || r, this.level = r ? "debug" : e.level || "info";
  }
  debug(e, r, ...n) {
    this.log("debug", e, r, ...n);
  }
  info(e, r, ...n) {
    this.log("info", e, r, ...n);
  }
  warn(e, r, ...n) {
    this.log("warn", e, r, ...n);
  }
  error(e, r, ...n) {
    this.log("error", e, r, ...n);
  }
  setLogLevel(e) {
    this.level = e;
  }
  setEnable(e) {
    this.enable = e;
  }
  log(e, r, n, ...s) {
    var i;
    if (this.enable && xt.indexOf(e) >= xt.indexOf(this.level)) {
      const c = (/* @__PURE__ */ new Date()).toISOString();
      ((i = jr[e]) != null ? i : console.log)(`[${c}]  [${r}] [${e}]`, n, ...s);
    }
  }
}
var lr;
const x = new Gr({
  enable: process.env.NODE_ENV !== "production",
  level: (lr = process.env.LOG_LEVEL) != null ? lr : "error"
}), Hr = "ima:Ad";
class Wr {
  constructor(e, r, n, s) {
    g(this, "adId");
    g(this, "adPodInfo");
    g(this, "adSystem");
    g(this, "advertiserName");
    g(this, "apiFramework");
    g(this, "companionAds");
    g(this, "creativeAdId");
    g(this, "creativeId");
    g(this, "dealId");
    g(this, "description");
    g(this, "duration");
    g(this, "height");
    g(this, "mediaUrl");
    g(this, "minSuggestedDuration");
    g(this, "skipTimeOffset");
    g(this, "surveyUrl");
    g(this, "title");
    g(this, "traffickingParameters");
    g(this, "traffickingParametersString");
    g(this, "uiElements");
    g(this, "universalAdIdRegistry");
    g(this, "universalAdIdValue");
    g(this, "universalAdIds");
    g(this, "vastMediaBitrate");
    g(this, "vastMediaHeight");
    g(this, "vastMediaWidth");
    g(this, "width");
    g(this, "wrapperAdIds");
    g(this, "wrapperAdSystems");
    g(this, "wrapperCreativeIds");
    g(this, "linear");
    this.adId = e.id || "undefined", this.adPodInfo = s, this.adSystem = e.adSystem || "", this.advertiserName = e.advertiser || "", this.apiFramework = r.apiFramework || "", this.companionAds = [], this.creativeAdId = r.adId || "", this.creativeId = r.id || "", this.dealId = "", this.description = e.description || "", this.duration = r.duration || 0, this.height = 0, this.mediaUrl = null, this.minSuggestedDuration = 0, this.skipTimeOffset = r.skipDelay || -1, this.surveyUrl = null, this.title = e.adTitle || "", this.traffickingParameters = {}, this.traffickingParametersString = "", this.uiElements = [], this.universalAdIdRegistry = "", this.universalAdIdValue = "", this.universalAdIds = [], this.vastMediaBitrate = 0, this.vastMediaHeight = 0, this.vastMediaWidth = 0, this.width = 0, this.wrapperAdIds = [], this.wrapperAdSystems = [], this.wrapperCreativeIds = [], this.linear = r.type === "linear";
  }
  getAdId() {
    return this.adId;
  }
  getAdPodInfo() {
    return this.adPodInfo;
  }
  getAdSystem() {
    return this.adSystem;
  }
  getAdvertiserName() {
    return this.advertiserName;
  }
  getApiFramework() {
    return this.apiFramework;
  }
  getCompanionAds(e, r, n) {
    return x.debug(Hr, `Ad adSlotWidth:[${e}] adSlotHeight[${r}] settings:`, n), this.companionAds;
  }
  getCreativeAdId() {
    return this.creativeAdId;
  }
  getCreativeId() {
    return this.creativeId;
  }
  getDealId() {
    return this.dealId;
  }
  getDescription() {
    return this.description;
  }
  getDuration() {
    return this.duration;
  }
  getHeight() {
    return this.height;
  }
  getMediaUrl() {
    return this.mediaUrl;
  }
  getMinSuggestedDuration() {
    return this.minSuggestedDuration;
  }
  getSkipTimeOffset() {
    return this.skipTimeOffset;
  }
  getSurveyUrl() {
    return this.surveyUrl;
  }
  getTitle() {
    return this.title;
  }
  getTraffickingParameters() {
    return this.traffickingParameters;
  }
  getTraffickingParametersString() {
    return this.traffickingParametersString;
  }
  getUiElements() {
    return this.uiElements;
  }
  getUniversalAdIdRegistry() {
    throw new Error("Method not implemented.");
  }
  getUniversalAdIdValue() {
    return this.universalAdIdValue;
  }
  getUniversalAdIds() {
    return this.universalAdIds;
  }
  getVastMediaBitrate() {
    return this.vastMediaBitrate;
  }
  getVastMediaHeight() {
    return this.vastMediaHeight;
  }
  getVastMediaWidth() {
    return this.vastMediaWidth;
  }
  getWidth() {
    return this.width;
  }
  getWrapperAdIds() {
    return this.wrapperAdIds;
  }
  getWrapperAdSystems() {
    return this.wrapperAdSystems;
  }
  getWrapperCreativeIds() {
    return this.wrapperCreativeIds;
  }
  isLinear() {
    return this.linear;
  }
}
const Ve = "ima:AdDisplayContainer";
class yi {
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
  constructor(e, r, n) {
    g(this, "adContainer");
    g(this, "videoElement");
    g(this, "contentElement");
    g(this, "adsContainerElement");
    g(this, "adsSpinnerElement");
    g(this, "videoAdsElement");
    this.adContainer = e, this.videoElement = r, this.contentElement = n;
  }
  initialize() {
    x.debug(Ve, "initialize"), this.adsContainerElement || (this.adsContainerElement = this.createAdsContainer()), this.videoAdsElement || (this.videoAdsElement = this.createAdsVideoElement()), this.adsSpinnerElement || (this.adsSpinnerElement = this.createAdsSpinner());
  }
  destroy() {
    var e, r, n;
    x.debug(Ve, "destroy"), (e = this.videoAdsElement) == null || e.remove(), (r = this.adsSpinnerElement) == null || r.remove(), (n = this.adsContainerElement) == null || n.remove(), this.videoAdsElement = void 0;
  }
  addEventListener(e, r, n) {
    x.debug(Ve, `addEventListener [${e}] listener [${r}] useCapture [${n}]`);
  }
  removeEventListener(e, r, n) {
    x.debug(Ve, `removeEventListener [${e}] listener [${r}] useCapture [${n}]`);
  }
  dispatchEvent(e) {
    return x.debug(Ve, `dispatchEvent [${e}`), !0;
  }
  getVideoAdsElement() {
    return this.videoAdsElement || this.videoElement;
  }
  show() {
    const e = this.adsContainerElement;
    e && (e.style.display = "block", e.style.visibility = "visible", e.style.opacity = "1");
  }
  hide() {
    const e = this.adsContainerElement;
    e && (e.style.display = "none", e.style.visibility = "hidden", e.style.opacity = "0");
  }
  showLoader() {
    const e = this.adsSpinnerElement;
    e && (e.style.visibility = "block");
  }
  hideLoader() {
    const e = this.adsSpinnerElement;
    e && (e.style.visibility = "none");
  }
  hideAdVideoElement() {
    const e = this.videoAdsElement;
    e && (e.style.visibility = "hidden", e.style.opacity = "0");
  }
  showAdVideoElement() {
    const e = this.videoAdsElement;
    e && (e.style.display = "block", e.style.visibility = "visible", e.style.opacity = "1");
  }
  clearAdVideoElement() {
    const e = this.videoAdsElement;
    e && (e.style.display = "none", e.autoplay = !1, e.pause(), e.src = "", e.load());
  }
  createAdsContainer() {
    const e = this.adContainer;
    if (!e)
      return;
    const r = document.getElementById("adm-adv-container") || document.createElement("div");
    return r.id = "adm-adv-container", r.style.position = "absolute", r.style.inset = "0", r.style.top = "0", r.style.left = "0", r.style.right = "0", r.style.bottom = "0", r.style.background = "rgb(0,0,0)", r.style.display = "none", e.appendChild(r), r;
  }
  createAdsSpinner() {
    const e = this.adsContainerElement;
    if (!e)
      return;
    const r = document.getElementById("adm-adv-spinner") || document.createElement("div");
    r.id = "adm-adv-spinner", r.style.position = "absolute", r.style.top = "50%", r.style.left = "50%", r.style.transform = "translate(-50%, -50%)", r.style.width = "40px", r.style.height = "40px", r.style.border = "5px solid #ccc", r.style.borderTop = "5px solid #333", r.style.borderRadius = "50%", r.style.zIndex = "10", r.style.animation = "adm-spinner-animation 1s linear infinite", r.style.display = "none";
    const n = document.createElement("style");
    return n.textContent = `
      @keyframes adm-spinner-animation {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
      }
    `, globalThis && globalThis.document && document.head.appendChild(n), e.appendChild(r), r;
  }
  createAdsVideoElement() {
    const e = this.adsContainerElement;
    if (!e)
      return;
    const r = document.getElementById("adm-video-ads") || document.createElement("video");
    return r.id = "adm-video-ads", r.style.position = "absolute", r.style.inset = "0", r.style.top = "0", r.style.left = "0", r.style.right = "0", r.style.bottom = "0", r.style.width = "100%", r.style.height = "100%", r.style.objectFit = "cover", r.style.background = "black", r.controls = !1, r.playsInline = !1, r.setAttribute("disablePictureInPicture", ""), r.setAttribute("disableRemotePlayback", ""), r.setAttribute("playsinline", "false"), r.setAttribute("webkit-playsinline", "false"), r.setAttribute("x-webkit-airplay", "allow"), r.setAttribute("object", "fit"), r.removeAttribute("controls"), e.appendChild(r), r;
  }
}
const $r = cr, _r = dr;
class Je {
  constructor(e, r) {
    g(this, "name");
    g(this, "code");
    g(this, "message");
    g(this, "stack");
    g(this, "cause");
    this.name = "AdError", this.message = r, this.code = e;
  }
  getErrorCode() {
    return this.code;
  }
  getInnerError() {
    return new Error(this.message);
  }
  getMessage() {
    return this.message;
  }
  getType() {
    return "";
  }
  getVastErrorCode() {
    return this.code;
  }
}
g(Je, "ErrorCode", $r), g(Je, "Type", _r);
const Yr = hr, rt = class rt {
  constructor(e, r) {
    g(this, "target");
    g(this, "currentTarget");
    g(this, "type", rt.Type.AD_ERROR);
    g(this, "adError");
    g(this, "userRequestContext");
    this.adError = e, this.userRequestContext = r;
  }
  getError() {
    return this.adError || null;
  }
  getUserRequestContext() {
    return this.userRequestContext || null;
  }
  preventDefault() {
  }
  stopPropagation() {
  }
};
g(rt, "Type", Yr);
let et = rt;
const zr = pr, nt = class nt {
  constructor(e, r) {
    g(this, "currentTarget");
    g(this, "target");
    g(this, "type", nt.Type.LOADED);
    g(this, "ad");
    g(this, "adData", null);
    this.type = e, this.ad = r;
  }
  getAd() {
    return this.ad || null;
  }
  getAdData() {
    return this.adData;
  }
  preventDefault() {
  }
  stopPropagation() {
  }
};
g(nt, "Type", zr);
let gt = nt;
class Kr {
  constructor(e, r, n, s, i, c) {
    g(this, "adPosition");
    g(this, "isBumper");
    g(this, "maxDuration");
    g(this, "podIndex");
    g(this, "timeOffset");
    g(this, "totalAds");
    this.adPosition = e, this.isBumper = r, this.maxDuration = n, this.podIndex = s, this.timeOffset = i, this.totalAds = c;
  }
  getAdPosition() {
    return this.adPosition;
  }
  getIsBumper() {
    return this.isBumper;
  }
  getMaxDuration() {
    return this.maxDuration;
  }
  getPodIndex() {
    return this.podIndex;
  }
  getTimeOffset() {
    return this.timeOffset;
  }
  getTotalAds() {
    return this.totalAds;
  }
}
class Er {
  constructor() {
    g(this, "listeners", {});
  }
  addEventListener(e, r, n = !1, s = null) {
    if (r === null)
      throw new Error("Handler cannot be null");
    this.listeners[e] || (this.listeners[e] = []);
    const i = typeof r == "function" ? r : r.handleEvent;
    if (typeof i != "function")
      throw new Error("Handler must be a function or have a handleEvent method");
    this.listeners[e].push({
      handler: i,
      scope: s,
      capture: n
    });
  }
  emit(e, ...r) {
    this.listeners[e] && this.listeners[e].forEach((n) => {
      n.handler.apply(n.scope, r);
    });
  }
  removeEventListener(e, r, n = !1) {
    if (!this.listeners[e] || r === null) return;
    const s = typeof r == "function" ? r : r.handleEvent;
    this.listeners[e] = this.listeners[e].filter(
      (i) => i.handler !== s || i.capture !== n
    );
  }
  clearEventListeners(e) {
    delete this.listeners[e];
  }
  clearAllEventListeners() {
    this.listeners = {};
  }
}
function Dt() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return { id: t.id || null, adId: t.adId || null, sequence: t.sequence || null, apiFramework: t.apiFramework || null, universalAdIds: [], creativeExtensions: [] };
}
const Xr = ["ADCATEGORIES", "ADCOUNT", "ADPLAYHEAD", "ADSERVINGID", "ADTYPE", "APIFRAMEWORKS", "APPBUNDLE", "ASSETURI", "BLOCKEDADCATEGORIES", "BREAKMAXADLENGTH", "BREAKMAXADS", "BREAKMAXDURATION", "BREAKMINADLENGTH", "BREAKMINDURATION", "BREAKPOSITION", "CLICKPOS", "CLICKTYPE", "CLIENTUA", "CONTENTID", "CONTENTPLAYHEAD", "CONTENTURI", "DEVICEIP", "DEVICEUA", "DOMAIN", "EXTENSIONS", "GDPRCONSENT", "IFA", "IFATYPE", "INVENTORYSTATE", "LATLONG", "LIMITADTRACKING", "MEDIAMIME", "MEDIAPLAYHEAD", "OMIDPARTNER", "PAGEURL", "PLACEMENTTYPE", "PLAYERCAPABILITIES", "PLAYERSIZE", "PLAYERSTATE", "PODSEQUENCE", "REGULATIONS", "SERVERSIDE", "SERVERUA", "TRANSACTIONID", "UNIVERSALADID", "VASTVERSIONS", "VERIFICATIONVENDORS"];
function Vt(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const n = [], s = Tr(t);
  !e.ERRORCODE || r.isCustomCode || /^[0-9]{3}$/.test(e.ERRORCODE) || (e.ERRORCODE = 900), e.CACHEBUSTING = yr(Math.round(1e8 * Math.random())), e.TIMESTAMP = (/* @__PURE__ */ new Date()).toISOString(), e.RANDOM = e.random = e.CACHEBUSTING;
  for (const i in e) e[i] = br(e[i]);
  for (const i in s) {
    const c = s[i];
    typeof c == "string" && n.push(vr(c, e));
  }
  return n;
}
function vr(t, e) {
  const r = (t = Mt(t, e)).match(/[^[\]]+(?=])/g);
  if (!r) return t;
  let n = r.filter((s) => Xr.indexOf(s) > -1);
  return n.length === 0 ? t : (n = n.reduce((s, i) => (s[i] = -1, s), {}), Mt(t, n));
}
function Mt(t, e) {
  let r = t;
  for (const n in e) {
    const s = e[n];
    r = r.replace(new RegExp("(?:\\[|%%)(".concat(n, ")(?:\\]|%%)"), "g"), s);
  }
  return r;
}
function Tr(t) {
  return Array.isArray(t) ? t.map((e) => e && e.hasOwnProperty("url") ? e.url : e) : t;
}
function qt(t) {
  return /^(https?:\/\/|\/\/)/.test(t);
}
function jt(t, e) {
  for (let r = 0; r < e.length; r++) if (Dr(e[r], t)) return !0;
  return !1;
}
function Dr(t, e) {
  if (t && e) {
    const r = Object.getOwnPropertyNames(t), n = Object.getOwnPropertyNames(e);
    return r.length === n.length && t.id === e.id && t.url === e.url;
  }
  return !1;
}
function br(t) {
  return encodeURIComponent(t).replace(/[!'()*]/g, (e) => "%".concat(e.charCodeAt(0).toString(16)));
}
function yr(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 8;
  return t.toString().padStart(e, "0");
}
const W = { track: function(t, e, r) {
  Vt(t, e, r).forEach((n) => {
    typeof window != "undefined" && window !== null && (new Image().src = n);
  });
}, resolveURLTemplates: Vt, extractURLsFromTemplates: Tr, filterUrlTemplates: function(t) {
  return t.reduce((e, r) => {
    const n = r.url || r;
    return qt(n) ? e.validUrls.push(n) : e.invalidUrls.push(n), e;
  }, { validUrls: [], invalidUrls: [] });
}, containsTemplateObject: jt, isTemplateObjectEqual: Dr, encodeURIComponentRFC3986: br, replaceUrlMacros: vr, isNumeric: function(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}, flatten: function t(e) {
  return e.reduce((r, n) => r.concat(Array.isArray(n) ? t(n) : n), []);
}, joinArrayOfUniqueTemplateObjs: function() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  const r = Array.isArray(t) ? t : [], n = Array.isArray(e) ? e : [];
  return r.concat(n).reduce((s, i) => (jt(i, s) || s.push(i), s), []);
}, isValidTimeValue: function(t) {
  return Number.isFinite(t) && t >= -2;
}, addLeadingZeros: yr, isValidUrl: qt, isBrowserEnvironment: function() {
  return typeof window != "undefined";
}, formatMacrosValues: function(t) {
  return typeof t != "object" ? t : JSON.stringify(t);
} };
function Gt(t) {
  return ["true", "TRUE", "True", "1"].includes(t);
}
function Qr(t) {
  if (t == null) return -1;
  if (W.isNumeric(t)) return parseInt(t);
  const e = t.split(":");
  if (e.length !== 3) return -1;
  const r = e[2].split(".");
  let n = parseInt(r[0]);
  r.length === 2 && (n += parseFloat("0.".concat(r[1])));
  const s = parseInt(60 * e[1]), i = parseInt(60 * e[0] * 60);
  return isNaN(i) || isNaN(s) || isNaN(n) || s > 3600 || n > 60 ? -1 : i + s + n;
}
const m = { childByName: function(t, e) {
  return Array.from(t.childNodes).find((r) => r.nodeName === e);
}, childrenByName: function(t, e) {
  return Array.from(t.childNodes).filter((r) => r.nodeName === e);
}, resolveVastAdTagURI: function(t, e) {
  if (!e) return t;
  if (t.startsWith("//")) {
    const { protocol: r } = location;
    return "".concat(r).concat(t);
  }
  if (!t.includes("://")) {
    const r = e.slice(0, e.lastIndexOf("/"));
    return "".concat(r, "/").concat(t);
  }
  return t;
}, parseBoolean: Gt, parseNodeText: function(t) {
  return t && (t.textContent || t.text || "").trim();
}, copyNodeAttribute: function(t, e, r) {
  const n = e.getAttribute(t);
  n && r.setAttribute(t, n);
}, parseAttributes: function(t) {
  return Array.from(t.attributes).reduce((e, r) => (e[r.nodeName] = r.nodeValue, e), {});
}, parseDuration: Qr, getStandAloneAds: function() {
  return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).filter((t) => !parseInt(t.sequence, 10));
}, getSortedAdPods: function() {
  return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).filter((t) => parseInt(t.sequence, 10)).sort((t, e) => t.sequence - e.sequence);
}, assignAttributes: function(t, e) {
  t && Array.from(t).forEach((r) => {
    let { nodeName: n, nodeValue: s } = r;
    if (n && s && e.hasOwnProperty(n)) {
      let i = s;
      typeof e[n] == "boolean" && (i = Gt(i)), e[n] = i;
    }
  });
}, mergeWrapperAdData: function(t, e) {
  var r;
  t.errorURLTemplates = e.errorURLTemplates.concat(t.errorURLTemplates), t.impressionURLTemplates = e.impressionURLTemplates.concat(t.impressionURLTemplates), t.extensions = e.extensions.concat(t.extensions), e.viewableImpression.length > 0 && (t.viewableImpression = [...t.viewableImpression, ...e.viewableImpression]), t.followAdditionalWrappers = e.followAdditionalWrappers, t.allowMultipleAds = e.allowMultipleAds, t.fallbackOnNoAd = e.fallbackOnNoAd;
  const n = (e.creatives || []).filter((o) => o && o.type === "companion"), s = n.reduce((o, l) => ((l.variations || []).forEach((h) => {
    (h.companionClickTrackingURLTemplates || []).forEach((p) => {
      W.containsTemplateObject(p, o) || o.push(p);
    });
  }), o), []);
  t.creatives = n.concat(t.creatives);
  const i = e.videoClickTrackingURLTemplates && e.videoClickTrackingURLTemplates.length, c = e.videoCustomClickURLTemplates && e.videoCustomClickURLTemplates.length;
  if (t.creatives.forEach((o) => {
    if (e.trackingEvents && e.trackingEvents[o.type]) for (const l in e.trackingEvents[o.type]) {
      const h = e.trackingEvents[o.type][l];
      Array.isArray(o.trackingEvents[l]) || (o.trackingEvents[l] = []), o.trackingEvents[l] = o.trackingEvents[l].concat(h);
    }
    o.type === "linear" && (i && (o.videoClickTrackingURLTemplates = o.videoClickTrackingURLTemplates.concat(e.videoClickTrackingURLTemplates)), c && (o.videoCustomClickURLTemplates = o.videoCustomClickURLTemplates.concat(e.videoCustomClickURLTemplates)), !e.videoClickThroughURLTemplate || o.videoClickThroughURLTemplate !== null && o.videoClickThroughURLTemplate !== void 0 || (o.videoClickThroughURLTemplate = e.videoClickThroughURLTemplate)), o.type === "companion" && s.length && (o.variations || []).forEach((l) => {
      l.companionClickTrackingURLTemplates = W.joinArrayOfUniqueTemplateObjs(l.companionClickTrackingURLTemplates, s);
    });
  }), e.adVerifications && (t.adVerifications = t.adVerifications.concat(e.adVerifications)), e.blockedAdCategories && (t.blockedAdCategories = t.blockedAdCategories.concat(e.blockedAdCategories)), (r = e.creatives) !== null && r !== void 0 && r.length) {
    const o = e.creatives.filter((l) => {
      var h;
      return ((h = l.icons) === null || h === void 0 ? void 0 : h.length) && !l.mediaFiles.length;
    });
    o.length && (t.creatives = t.creatives.concat(o));
  }
} };
function Zr(t, e) {
  const r = function() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { id: s, adId: i, sequence: c, apiFramework: o } = Dt(n);
    return { id: s, adId: i, sequence: c, apiFramework: o, type: "companion", required: null, variations: [] };
  }(e);
  return r.required = t.getAttribute("required") || null, r.variations = m.childrenByName(t, "Companion").map((n) => {
    const s = function() {
      let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return { id: o.id || null, adType: "companionAd", width: o.width || 0, height: o.height || 0, assetWidth: o.assetWidth || null, assetHeight: o.assetHeight || null, expandedWidth: o.expandedWidth || null, expandedHeight: o.expandedHeight || null, apiFramework: o.apiFramework || null, adSlotId: o.adSlotId || null, pxratio: o.pxratio || "1", renderingMode: o.renderingMode || "default", staticResources: [], htmlResources: [], iframeResources: [], adParameters: null, altText: null, companionClickThroughURLTemplate: null, companionClickTrackingURLTemplates: [], trackingEvents: {} };
    }(m.parseAttributes(n));
    s.htmlResources = m.childrenByName(n, "HTMLResource").reduce((o, l) => {
      const h = m.parseNodeText(l);
      return h ? o.concat(h) : o;
    }, []), s.iframeResources = m.childrenByName(n, "IFrameResource").reduce((o, l) => {
      const h = m.parseNodeText(l);
      return h ? o.concat(h) : o;
    }, []), s.staticResources = m.childrenByName(n, "StaticResource").reduce((o, l) => {
      const h = m.parseNodeText(l);
      return h ? o.concat({ url: h, creativeType: l.getAttribute("creativeType") || null }) : o;
    }, []), s.altText = m.parseNodeText(m.childByName(n, "AltText")) || null;
    const i = m.childByName(n, "TrackingEvents");
    i && m.childrenByName(i, "Tracking").forEach((o) => {
      const l = o.getAttribute("event"), h = m.parseNodeText(o);
      l && h && (Array.isArray(s.trackingEvents[l]) || (s.trackingEvents[l] = []), s.trackingEvents[l].push(h));
    }), s.companionClickTrackingURLTemplates = m.childrenByName(n, "CompanionClickTracking").map((o) => ({ id: o.getAttribute("id") || null, url: m.parseNodeText(o) })), s.companionClickThroughURLTemplate = m.parseNodeText(m.childByName(n, "CompanionClickThrough")) || null;
    const c = m.childByName(n, "AdParameters");
    return c && (s.adParameters = { value: m.parseNodeText(c), xmlEncoded: c.getAttribute("xmlEncoded") || null }), s;
  }), r;
}
function Jr(t, e) {
  let r;
  const n = function() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { id: h, adId: p, sequence: E, apiFramework: v } = Dt(l);
    return { id: h, adId: p, sequence: E, apiFramework: v, type: "linear", duration: 0, skipDelay: null, mediaFiles: [], mezzanine: null, interactiveCreativeFile: null, closedCaptionFiles: [], videoClickThroughURLTemplate: null, videoClickTrackingURLTemplates: [], videoCustomClickURLTemplates: [], adParameters: null, icons: [], trackingEvents: {} };
  }(e);
  n.duration = m.parseDuration(m.parseNodeText(m.childByName(t, "Duration")));
  const s = t.getAttribute("skipoffset");
  if (s == null) n.skipDelay = null;
  else if (s.charAt(s.length - 1) === "%" && n.duration !== -1) {
    const l = parseInt(s, 10);
    n.skipDelay = n.duration * (l / 100);
  } else n.skipDelay = m.parseDuration(s);
  const i = m.childByName(t, "VideoClicks");
  if (i) {
    const l = m.childByName(i, "ClickThrough");
    n.videoClickThroughURLTemplate = l ? { id: l.getAttribute("id") || null, url: m.parseNodeText(l) } : null, m.childrenByName(i, "ClickTracking").forEach((h) => {
      n.videoClickTrackingURLTemplates.push({ id: h.getAttribute("id") || null, url: m.parseNodeText(h) });
    }), m.childrenByName(i, "CustomClick").forEach((h) => {
      n.videoCustomClickURLTemplates.push({ id: h.getAttribute("id") || null, url: m.parseNodeText(h) });
    });
  }
  const c = m.childByName(t, "AdParameters");
  c && (n.adParameters = { value: m.parseNodeText(c), xmlEncoded: c.getAttribute("xmlEncoded") || null }), m.childrenByName(t, "TrackingEvents").forEach((l) => {
    m.childrenByName(l, "Tracking").forEach((h) => {
      let p = h.getAttribute("event");
      const E = m.parseNodeText(h);
      if (p && E) {
        if (p === "progress") {
          if (r = h.getAttribute("offset"), !r) return;
          p = r.charAt(r.length - 1) === "%" ? "progress-".concat(r) : "progress-".concat(m.parseDuration(r));
        }
        Array.isArray(n.trackingEvents[p]) || (n.trackingEvents[p] = []), n.trackingEvents[p].push(E);
      }
    });
  }), m.childrenByName(t, "MediaFiles").forEach((l) => {
    m.childrenByName(l, "MediaFile").forEach((y) => {
      n.mediaFiles.push(function(R) {
        const C = { id: null, fileURL: null, fileSize: 0, deliveryType: "progressive", mimeType: null, mediaType: null, codec: null, bitrate: 0, minBitrate: 0, maxBitrate: 0, width: 0, height: 0, apiFramework: null, scalable: null, maintainAspectRatio: null };
        C.id = R.getAttribute("id"), C.fileURL = m.parseNodeText(R), C.deliveryType = R.getAttribute("delivery"), C.codec = R.getAttribute("codec"), C.mimeType = R.getAttribute("type"), C.mediaType = R.getAttribute("mediaType") || "2D", C.apiFramework = R.getAttribute("apiFramework"), C.fileSize = parseInt(R.getAttribute("fileSize") || 0), C.bitrate = parseInt(R.getAttribute("bitrate") || 0), C.minBitrate = parseInt(R.getAttribute("minBitrate") || 0), C.maxBitrate = parseInt(R.getAttribute("maxBitrate") || 0), C.width = parseInt(R.getAttribute("width") || 0), C.height = parseInt(R.getAttribute("height") || 0);
        const T = R.getAttribute("scalable");
        T && typeof T == "string" && (C.scalable = m.parseBoolean(T));
        const k = R.getAttribute("maintainAspectRatio");
        return k && typeof k == "string" && (C.maintainAspectRatio = m.parseBoolean(k)), C;
      }(y));
    });
    const h = m.childByName(l, "InteractiveCreativeFile");
    h && (n.interactiveCreativeFile = function(y) {
      const R = function() {
        let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return { type: C.type || null, apiFramework: C.apiFramework || null, variableDuration: m.parseBoolean(C.variableDuration), fileURL: null };
      }(m.parseAttributes(y));
      return R.fileURL = m.parseNodeText(y), R;
    }(h));
    const p = m.childByName(l, "ClosedCaptionFiles");
    p && m.childrenByName(p, "ClosedCaptionFile").forEach((y) => {
      const R = function() {
        let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return { type: C.type || null, language: C.language || null, fileURL: null };
      }(m.parseAttributes(y));
      R.fileURL = m.parseNodeText(y), n.closedCaptionFiles.push(R);
    });
    const E = m.childByName(l, "Mezzanine"), v = function(y, R) {
      const C = {};
      let T = !1;
      return R.forEach((k) => {
        y && y.getAttribute(k) ? C[k] = y.getAttribute(k) : T = !0;
      }), T ? null : C;
    }(E, ["delivery", "type", "width", "height"]);
    if (v) {
      const y = { id: null, fileURL: null, delivery: null, codec: null, type: null, width: 0, height: 0, fileSize: 0, mediaType: "2D" };
      y.id = E.getAttribute("id"), y.fileURL = m.parseNodeText(E), y.delivery = v.delivery, y.codec = E.getAttribute("codec"), y.type = v.type, y.width = parseInt(v.width, 10), y.height = parseInt(v.height, 10), y.fileSize = parseInt(E.getAttribute("fileSize"), 10), y.mediaType = E.getAttribute("mediaType") || "2D", n.mezzanine = y;
    }
  });
  const o = m.childByName(t, "Icons");
  return o && m.childrenByName(o, "Icon").forEach((l) => {
    n.icons.push(function(h) {
      const p = { program: null, height: 0, width: 0, xPosition: 0, yPosition: 0, apiFramework: null, offset: null, duration: 0, type: null, staticResource: null, htmlResource: null, iframeResource: null, pxratio: "1", iconClickThroughURLTemplate: null, iconClickTrackingURLTemplates: [], iconViewTrackingURLTemplate: null, iconClickFallbackImages: [], altText: null, hoverText: null };
      p.program = h.getAttribute("program"), p.height = parseInt(h.getAttribute("height") || 0), p.width = parseInt(h.getAttribute("width") || 0), p.xPosition = function(v) {
        return ["left", "right"].indexOf(v) !== -1 ? v : parseInt(v || 0);
      }(h.getAttribute("xPosition")), p.yPosition = function(v) {
        return ["top", "bottom"].indexOf(v) !== -1 ? v : parseInt(v || 0);
      }(h.getAttribute("yPosition")), p.apiFramework = h.getAttribute("apiFramework"), p.pxratio = h.getAttribute("pxratio") || "1", p.offset = m.parseDuration(h.getAttribute("offset")), p.duration = m.parseDuration(h.getAttribute("duration")), p.altText = h.getAttribute("altText"), p.hoverText = h.getAttribute("hoverText"), m.childrenByName(h, "HTMLResource").forEach((v) => {
        p.type = v.getAttribute("creativeType") || "text/html", p.htmlResource = m.parseNodeText(v);
      }), m.childrenByName(h, "IFrameResource").forEach((v) => {
        p.type = v.getAttribute("creativeType") || 0, p.iframeResource = m.parseNodeText(v);
      }), m.childrenByName(h, "StaticResource").forEach((v) => {
        p.type = v.getAttribute("creativeType") || 0, p.staticResource = m.parseNodeText(v);
      });
      const E = m.childByName(h, "IconClicks");
      if (E) {
        p.iconClickThroughURLTemplate = m.parseNodeText(m.childByName(E, "IconClickThrough")), m.childrenByName(E, "IconClickTracking").forEach((y) => {
          p.iconClickTrackingURLTemplates.push({ id: y.getAttribute("id") || null, url: m.parseNodeText(y) });
        });
        const v = m.childByName(E, "IconClickFallbackImages");
        v && m.childrenByName(v, "IconClickFallbackImage").forEach((y) => {
          p.iconClickFallbackImages.push({ url: m.parseNodeText(y) || null, width: y.getAttribute("width") || null, height: y.getAttribute("height") || null });
        });
      }
      return p.iconViewTrackingURLTemplate = m.parseNodeText(m.childByName(h, "IconViewTracking")), p;
    }(l));
  }), n;
}
function en(t, e) {
  const r = function() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { id: s, adId: i, sequence: c, apiFramework: o } = Dt(n);
    return { id: s, adId: i, sequence: c, apiFramework: o, type: "nonlinear", variations: [], trackingEvents: {} };
  }(e);
  return m.childrenByName(t, "TrackingEvents").forEach((n) => {
    let s, i;
    m.childrenByName(n, "Tracking").forEach((c) => {
      s = c.getAttribute("event"), i = m.parseNodeText(c), s && i && (Array.isArray(r.trackingEvents[s]) || (r.trackingEvents[s] = []), r.trackingEvents[s].push(i));
    });
  }), m.childrenByName(t, "NonLinear").forEach((n) => {
    const s = { id: null, width: 0, height: 0, expandedWidth: 0, expandedHeight: 0, scalable: !0, maintainAspectRatio: !0, minSuggestedDuration: 0, apiFramework: "static", adType: "nonLinearAd", type: null, staticResource: null, htmlResource: null, iframeResource: null, nonlinearClickThroughURLTemplate: null, nonlinearClickTrackingURLTemplates: [], adParameters: null };
    s.id = n.getAttribute("id") || null, s.width = n.getAttribute("width"), s.height = n.getAttribute("height"), s.expandedWidth = n.getAttribute("expandedWidth"), s.expandedHeight = n.getAttribute("expandedHeight"), s.scalable = m.parseBoolean(n.getAttribute("scalable")), s.maintainAspectRatio = m.parseBoolean(n.getAttribute("maintainAspectRatio")), s.minSuggestedDuration = m.parseDuration(n.getAttribute("minSuggestedDuration")), s.apiFramework = n.getAttribute("apiFramework"), m.childrenByName(n, "HTMLResource").forEach((c) => {
      s.type = c.getAttribute("creativeType") || "text/html", s.htmlResource = m.parseNodeText(c);
    }), m.childrenByName(n, "IFrameResource").forEach((c) => {
      s.type = c.getAttribute("creativeType") || 0, s.iframeResource = m.parseNodeText(c);
    }), m.childrenByName(n, "StaticResource").forEach((c) => {
      s.type = c.getAttribute("creativeType") || 0, s.staticResource = m.parseNodeText(c);
    });
    const i = m.childByName(n, "AdParameters");
    i && (s.adParameters = { value: m.parseNodeText(i), xmlEncoded: i.getAttribute("xmlEncoded") || null }), s.nonlinearClickThroughURLTemplate = m.parseNodeText(m.childByName(n, "NonLinearClickThrough")), m.childrenByName(n, "NonLinearClickTracking").forEach((c) => {
      s.nonlinearClickTrackingURLTemplates.push({ id: c.getAttribute("id") || null, url: m.parseNodeText(c) });
    }), r.variations.push(s);
  }), r;
}
function Ht(t) {
  const e = [];
  return t.forEach((r) => {
    const n = Cr(r);
    n && e.push(n);
  }), e;
}
function Cr(t) {
  if (t.nodeName === "#comment") return null;
  const e = { name: null, value: null, attributes: {}, children: [] }, r = t.attributes, n = t.childNodes;
  if (e.name = t.nodeName, t.attributes) {
    for (const i in r) if (r.hasOwnProperty(i)) {
      const c = r[i];
      c.nodeName && c.nodeValue && (e.attributes[c.nodeName] = c.nodeValue);
    }
  }
  for (const i in n) if (n.hasOwnProperty(i)) {
    const c = Cr(n[i]);
    c && e.children.push(c);
  }
  if (e.children.length === 0 || e.children.length === 1 && ["#cdata-section", "#text"].indexOf(e.children[0].name) >= 0) {
    const i = m.parseNodeText(t);
    i !== "" && (e.value = i), e.children = [];
  }
  return (s = e).value === null && Object.keys(s.attributes).length === 0 && s.children.length === 0 ? null : e;
  var s;
}
function tn(t) {
  return t.getAttribute("AdID") || t.getAttribute("adID") || t.getAttribute("adId") || null;
}
const Xe = { Wrapper: { subElements: ["VASTAdTagURI", "Impression"] }, BlockedAdCategories: { attributes: ["authority"] }, InLine: { subElements: ["AdSystem", "AdTitle", "Impression", "AdServingId", "Creatives"] }, Category: { attributes: ["authority"] }, Pricing: { attributes: ["model", "currency"] }, Verification: { oneOfinLineResources: ["JavaScriptResource", "ExecutableResource"], attributes: ["vendor"] }, UniversalAdId: { attributes: ["idRegistry"] }, JavaScriptResource: { attributes: ["apiFramework", "browserOptional"] }, ExecutableResource: { attributes: ["apiFramework", "type"] }, Tracking: { attributes: ["event"] }, Creatives: { subElements: ["Creative"] }, Creative: { subElements: ["UniversalAdId"] }, Linear: { subElements: ["MediaFiles", "Duration"] }, MediaFiles: { subElements: ["MediaFile"] }, MediaFile: { attributes: ["delivery", "type", "width", "height"] }, Mezzanine: { attributes: ["delivery", "type", "width", "height"] }, NonLinear: { oneOfinLineResources: ["StaticResource", "IFrameResource", "HTMLResource"], attributes: ["width", "height"] }, Companion: { oneOfinLineResources: ["StaticResource", "IFrameResource", "HTMLResource"], attributes: ["width", "height"] }, StaticResource: { attributes: ["creativeType"] }, Icons: { subElements: ["Icon"] }, Icon: { oneOfinLineResources: ["StaticResource", "IFrameResource", "HTMLResource"] } };
function Wt(t, e) {
  if (!Xe[t.nodeName] || !Xe[t.nodeName].attributes) return;
  const r = Xe[t.nodeName].attributes.filter((n) => !t.getAttribute(n));
  r.length > 0 && He({ name: t.nodeName, parentName: t.parentNode.nodeName, attributes: r }, e);
}
function $t(t, e, r) {
  const n = Xe[t.nodeName], s = !r && t.nodeName !== "Wrapper";
  if (!(!n || s)) {
    if (n.subElements) {
      const i = n.subElements.filter((c) => !m.childByName(t, c));
      i.length > 0 && He({ name: t.nodeName, parentName: t.parentNode.nodeName, subElements: i }, e);
    }
    !r || !n.oneOfinLineResources || n.oneOfinLineResources.some((i) => m.childByName(t, i)) || He({ name: t.nodeName, parentName: t.parentNode.nodeName, oneOfResources: n.oneOfinLineResources }, e);
  }
}
function _t(t) {
  return t.children && t.children.length !== 0;
}
function He(t, e) {
  let { name: r, parentName: n, attributes: s, subElements: i, oneOfResources: c } = t, o = "Element '".concat(r, "'");
  o += s ? " missing required attribute(s) '".concat(s.join(", "), "' ") : i ? " missing required sub element(s) '".concat(i.join(", "), "' ") : c ? " must provide one of the following '".concat(c.join(", "), "' ") : " is empty", e("VAST-warning", { message: o, parentElement: n, specVersion: 4.1 });
}
const rn = { verifyRequiredValues: function t(e, r, n) {
  if (e && e.nodeName) if (e.nodeName === "InLine" && (n = !0), Wt(e, r), _t(e)) {
    $t(e, r, n);
    for (let s = 0; s < e.children.length; s++) t(e.children[s], r, n);
  } else m.parseNodeText(e).length === 0 && He({ name: e.nodeName, parentName: e.parentNode.nodeName }, r);
}, hasSubElements: _t, emitMissingValueWarning: He, verifyRequiredAttributes: Wt, verifyRequiredSubElements: $t };
function nn(t, e) {
  let { allowMultipleAds: r, followAdditionalWrappers: n } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const s = Array.from(t.childNodes).filter((i) => {
    const c = i.nodeName.toLowerCase();
    return c === "inline" || n !== !1 && c === "wrapper";
  });
  for (const i of s) {
    if (m.copyNodeAttribute("id", t, i), m.copyNodeAttribute("sequence", t, i), m.copyNodeAttribute("adType", t, i), i.nodeName === "Wrapper") return { ad: un(i, e), type: "WRAPPER" };
    if (i.nodeName === "InLine") return { ad: sn(i, e, { allowMultipleAds: r }), type: "INLINE" };
    const c = i.nodeName.toLowerCase();
    e("VAST-warning", { message: "<".concat(i.nodeName, c === "inline" ? "> must be written <InLine>" : "> must be written <Wrapper>"), wrongNode: i });
  }
}
function sn(t, e) {
  let { allowMultipleAds: r } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return r === !1 && t.getAttribute("sequence") ? null : Nr(t, e);
}
function Nr(t, e) {
  let r = [];
  e && rn.verifyRequiredValues(t, e);
  const n = Array.from(t.childNodes), s = function() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return { id: i.id || null, sequence: i.sequence || null, adType: i.adType || null, adServingId: null, categories: [], expires: null, viewableImpression: [], system: null, title: null, description: null, advertiser: null, pricing: null, survey: null, errorURLTemplates: [], impressionURLTemplates: [], creatives: [], extensions: [], adVerifications: [], blockedAdCategories: [], followAdditionalWrappers: !0, allowMultipleAds: !1, fallbackOnNoAd: null };
  }(m.parseAttributes(t));
  return n.forEach((i) => {
    switch (i.nodeName) {
      case "Error":
        s.errorURLTemplates.push(m.parseNodeText(i));
        break;
      case "Impression":
        s.impressionURLTemplates.push({ id: i.getAttribute("id") || null, url: m.parseNodeText(i) });
        break;
      case "Creatives":
        s.creatives = function(c) {
          const o = [];
          return c.forEach((l) => {
            const h = { id: l.getAttribute("id") || null, adId: tn(l), sequence: l.getAttribute("sequence") || null, apiFramework: l.getAttribute("apiFramework") || null }, p = [];
            let E;
            m.childrenByName(l, "UniversalAdId").forEach((y) => {
              const R = { idRegistry: y.getAttribute("idRegistry") || "unknown", value: m.parseNodeText(y) };
              p.push(R);
            });
            const v = m.childByName(l, "CreativeExtensions");
            v && (E = Ht(m.childrenByName(v, "CreativeExtension")));
            for (const y in l.childNodes) {
              const R = l.childNodes[y];
              let C;
              switch (R.nodeName) {
                case "Linear":
                  C = Jr(R, h);
                  break;
                case "NonLinearAds":
                  C = en(R, h);
                  break;
                case "CompanionAds":
                  C = Zr(R, h);
              }
              C && (p && (C.universalAdIds = p), E && (C.creativeExtensions = E), o.push(C));
            }
          }), o;
        }(m.childrenByName(i, "Creative"));
        break;
      case "Extensions": {
        const c = m.childrenByName(i, "Extension");
        s.extensions = Ht(c), s.adVerifications.length || (r = function(o) {
          let l = null, h = [];
          return o.some((p) => l = m.childByName(p, "AdVerifications")), l && (h = Yt(m.childrenByName(l, "Verification"))), h;
        }(c));
        break;
      }
      case "AdVerifications":
        s.adVerifications = Yt(m.childrenByName(i, "Verification"));
        break;
      case "AdSystem":
        s.system = { value: m.parseNodeText(i), version: i.getAttribute("version") || null };
        break;
      case "AdTitle":
        s.title = m.parseNodeText(i);
        break;
      case "AdServingId":
        s.adServingId = m.parseNodeText(i);
        break;
      case "Category":
        s.categories.push({ authority: i.getAttribute("authority") || null, value: m.parseNodeText(i) });
        break;
      case "Expires":
        s.expires = parseInt(m.parseNodeText(i), 10);
        break;
      case "ViewableImpression":
        s.viewableImpression.push(function(c) {
          const o = (l, h) => {
            const p = m.parseNodeText(h);
            return p && l.push(p), l;
          };
          return { id: c.getAttribute("id") || null, viewable: m.childrenByName(c, "Viewable").reduce(o, []), notViewable: m.childrenByName(c, "NotViewable").reduce(o, []), viewUndetermined: m.childrenByName(c, "ViewUndetermined").reduce(o, []) };
        }(i));
        break;
      case "Description":
        s.description = m.parseNodeText(i);
        break;
      case "Advertiser":
        s.advertiser = { id: i.getAttribute("id") || null, value: m.parseNodeText(i) };
        break;
      case "Pricing":
        s.pricing = { value: m.parseNodeText(i), model: i.getAttribute("model") || null, currency: i.getAttribute("currency") || null };
        break;
      case "Survey":
        s.survey = { value: m.parseNodeText(i), type: i.getAttribute("type") || null };
        break;
      case "BlockedAdCategories":
        s.blockedAdCategories.push({ authority: i.getAttribute("authority") || null, value: m.parseNodeText(i) });
    }
  }), r.length && (s.adVerifications = s.adVerifications.concat(r)), s;
}
function un(t, e) {
  const r = Nr(t, e), n = t.getAttribute("followAdditionalWrappers"), s = t.getAttribute("allowMultipleAds"), i = t.getAttribute("fallbackOnNoAd");
  r.followAdditionalWrappers = !n || m.parseBoolean(n), r.allowMultipleAds = !!s && m.parseBoolean(s), r.fallbackOnNoAd = i ? m.parseBoolean(i) : null;
  let c = m.childByName(t, "VASTAdTagURI");
  if (c ? r.nextWrapperURL = m.parseNodeText(c) : (c = m.childByName(t, "VASTAdTagURL"), c && (r.nextWrapperURL = m.parseNodeText(m.childByName(c, "URL")))), r.creatives.forEach((o) => {
    if (["linear", "nonlinear"].includes(o.type)) {
      if (o.trackingEvents) {
        r.trackingEvents || (r.trackingEvents = {}), r.trackingEvents[o.type] || (r.trackingEvents[o.type] = {});
        for (const l in o.trackingEvents) {
          const h = o.trackingEvents[l];
          Array.isArray(r.trackingEvents[o.type][l]) || (r.trackingEvents[o.type][l] = []), h.forEach((p) => {
            r.trackingEvents[o.type][l].push(p);
          });
        }
      }
      o.videoClickTrackingURLTemplates && (Array.isArray(r.videoClickTrackingURLTemplates) || (r.videoClickTrackingURLTemplates = []), o.videoClickTrackingURLTemplates.forEach((l) => {
        r.videoClickTrackingURLTemplates.push(l);
      })), o.videoClickThroughURLTemplate && (r.videoClickThroughURLTemplate = o.videoClickThroughURLTemplate), o.videoCustomClickURLTemplates && (Array.isArray(r.videoCustomClickURLTemplates) || (r.videoCustomClickURLTemplates = []), o.videoCustomClickURLTemplates.forEach((l) => {
        r.videoCustomClickURLTemplates.push(l);
      }));
    }
  }), r.nextWrapperURL) return r;
}
function Yt(t) {
  const e = [];
  return t.forEach((r) => {
    const n = { resource: null, vendor: null, browserOptional: !1, apiFramework: null, type: null, parameters: null, trackingEvents: {} }, s = Array.from(r.childNodes);
    m.assignAttributes(r.attributes, n), s.forEach((c) => {
      let { nodeName: o, textContent: l, attributes: h } = c;
      switch (o) {
        case "JavaScriptResource":
        case "ExecutableResource":
          n.resource = l.trim(), m.assignAttributes(h, n);
          break;
        case "VerificationParameters":
          n.parameters = l.trim();
      }
    });
    const i = m.childByName(r, "TrackingEvents");
    i && m.childrenByName(i, "Tracking").forEach((c) => {
      const o = c.getAttribute("event"), l = m.parseNodeText(c);
      o && l && (Array.isArray(n.trackingEvents[o]) || (n.trackingEvents[o] = []), n.trackingEvents[o].push(l));
    }), e.push(n);
  }), e;
}
class Rr {
  constructor() {
    this._handlers = [];
  }
  on(e, r) {
    if (typeof r != "function") throw new TypeError("The handler argument must be of type Function. Received type ".concat(typeof r));
    if (!e) throw new TypeError("The event argument must be of type String. Received type ".concat(typeof e));
    return this._handlers.push({ event: e, handler: r }), this;
  }
  once(e, r) {
    return this.on(e, function(n, s, i) {
      const c = { fired: !1, wrapFn: void 0 };
      function o() {
        c.fired || (n.off(s, c.wrapFn), c.fired = !0, i.bind(n)(...arguments));
      }
      return c.wrapFn = o, o;
    }(this, e, r));
  }
  off(e, r) {
    return this._handlers = this._handlers.filter((n) => n.event !== e || n.handler !== r), this;
  }
  emit(e) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) n[s - 1] = arguments[s];
    let i = !1;
    return this._handlers.forEach((c) => {
      c.event === "*" && (i = !0, c.handler(e, ...n)), c.event === e && (i = !0, c.handler(...n));
    }), i;
  }
  removeAllListeners(e) {
    return e ? (this._handlers = this._handlers.filter((r) => r.event !== e), this) : (this._handlers = [], this);
  }
  listenerCount(e) {
    return this._handlers.filter((r) => r.event === e).length;
  }
  listeners(e) {
    return this._handlers.reduce((r, n) => (n.event === e && r.push(n.handler), r), []);
  }
  eventNames() {
    return this._handlers.map((e) => e.event);
  }
}
let zt = 0, At = 0;
const wr = (t, e) => {
  !t || !e || t <= 0 || e <= 0 || (At = (At * zt + 8 * t / e) / ++zt);
}, an = { ERRORCODE: 900, extensions: [] }, Kt = "VAST response version not supported";
class Ir extends Rr {
  constructor() {
    let { fetcher: e } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    super(), this.maxWrapperDepth = null, this.rootErrorURLTemplates = [], this.errorURLTemplates = [], this.remainingAds = [], this.parsingOptions = {}, this.fetcher = e || null;
  }
  trackVastError(e, r) {
    for (var n = arguments.length, s = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) s[i - 2] = arguments[i];
    this.emit("VAST-error", Object.assign({}, an, r, ...s)), W.track(e, r);
  }
  getErrorURLTemplates() {
    return this.rootErrorURLTemplates.concat(this.errorURLTemplates);
  }
  getEstimatedBitrate() {
    return At;
  }
  initParsingStatus() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.maxWrapperDepth = e.wrapperLimit || 10, this.parsingOptions = { allowMultipleAds: e.allowMultipleAds }, this.rootURL = "", this.resetParsingStatus(), wr(e.byteLength, e.requestDuration);
  }
  resetParsingStatus() {
    this.errorURLTemplates = [], this.rootErrorURLTemplates = [], this.vastVersion = null;
  }
  getRemainingAds(e) {
    if (this.remainingAds.length === 0) return Promise.reject(new Error("No more ads are available for the given VAST"));
    const r = e ? this.remainingAds : [this.remainingAds.shift()];
    return this.errorURLTemplates = [], this.resolveAds(r, { wrapperDepth: 0, url: this.rootURL }).then((n) => this.buildVASTResponse(n));
  }
  parseVAST(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return this.initParsingStatus(r), r.isRootVAST = !0, this.parse(e, r).then((n) => this.buildVASTResponse(n));
  }
  buildVASTResponse(e) {
    const r = function(n) {
      let { ads: s, errorURLTemplates: i, version: c } = n;
      return { ads: s || [], errorURLTemplates: i || [], version: c || null };
    }({ ads: e, errorURLTemplates: this.getErrorURLTemplates(), version: this.vastVersion });
    return this.completeWrapperResolving(r), r;
  }
  parseVastXml(e, r) {
    let { isRootVAST: n = !1, url: s = null, wrapperDepth: i = 0, allowMultipleAds: c, followAdditionalWrappers: o } = r;
    if (!e || !e.documentElement || e.documentElement.nodeName !== "VAST") {
      var l;
      this.emit("VAST-ad-parsed", { type: "ERROR", url: s, wrapperDepth: i });
      const v = (e == null || (l = e.documentElement) === null || l === void 0 ? void 0 : l.nodeName) === "VideoAdServingTemplate";
      throw new Error(v ? Kt : "Invalid VAST XMLDocument");
    }
    const h = [], p = e.documentElement.childNodes, E = e.documentElement.getAttribute("version");
    n && E && (this.vastVersion = E);
    for (const v in p) {
      const y = p[v];
      if (y.nodeName === "Error") {
        const R = m.parseNodeText(y);
        n ? this.rootErrorURLTemplates.push(R) : this.errorURLTemplates.push(R);
      } else if (y.nodeName === "Ad") {
        if (this.vastVersion && parseFloat(this.vastVersion) < 3) c = !0;
        else if (c === !1 && h.length > 1) break;
        const R = nn(y, this.emit.bind(this), { allowMultipleAds: c, followAdditionalWrappers: o });
        R.ad ? (h.push(R.ad), this.emit("VAST-ad-parsed", { type: R.type, url: s, wrapperDepth: i, adIndex: h.length - 1, vastVersion: E })) : this.trackVastError(this.getErrorURLTemplates(), { ERRORCODE: 101 });
      }
    }
    return h;
  }
  parse(e) {
    let { url: r = null, resolveAll: n = !0, wrapperSequence: s = null, previousUrl: i = null, wrapperDepth: c = 0, isRootVAST: o = !1, followAdditionalWrappers: l, allowMultipleAds: h } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = [];
    this.vastVersion && parseFloat(this.vastVersion) < 3 && o && (h = !0);
    try {
      p = this.parseVastXml(e, { isRootVAST: o, url: r, wrapperDepth: c, allowMultipleAds: h, followAdditionalWrappers: l });
    } catch (E) {
      return Promise.reject(E);
    }
    if (p.length === 1 && s != null && (p[0].sequence = s), n === !1) {
      const E = m.getSortedAdPods(p), v = m.getStandAloneAds(p);
      E.length ? p = E : v.length && (p = [v.shift()]), this.remainingAds = v;
    }
    return this.resolveAds(p, { wrapperDepth: c, previousUrl: i, url: r });
  }
  resolveAds() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], { wrapperDepth: r, previousUrl: n, url: s } = arguments.length > 1 ? arguments[1] : void 0;
    const i = [];
    return n = s, e.forEach((c) => {
      const o = this.resolveWrappers(c, r, n);
      i.push(o);
    }), Promise.all(i).then((c) => W.flatten(c));
  }
  resolveWrappers(e, r, n) {
    const s = Fe({}, e);
    return new Promise((i) => {
      var c;
      if (r++, !s.nextWrapperURL) return delete s.nextWrapperURL, i(s);
      if (!this.fetcher) return s.VASTAdTagURI = s.nextWrapperURL, delete s.nextWrapperURL, i(s);
      if (r >= this.maxWrapperDepth) return s.errorCode = 302, delete s.nextWrapperURL, i(s);
      s.nextWrapperURL = m.resolveVastAdTagURI(s.nextWrapperURL, n);
      const o = (c = this.parsingOptions.allowMultipleAds) !== null && c !== void 0 ? c : s.allowMultipleAds, l = s.sequence;
      this.fetcher.fetchVAST({ url: s.nextWrapperURL, emitter: this.emit.bind(this), maxWrapperDepth: this.maxWrapperDepth }).then((h) => this.parse(h, { url: s.nextWrapperURL, previousUrl: n, wrapperSequence: l, wrapperDepth: r, followAdditionalWrappers: s.followAdditionalWrappers, allowMultipleAds: o }).then((p) => {
        if (delete s.nextWrapperURL, p.length === 0) return s.creatives = [], i(s);
        p.forEach((E) => {
          E && m.mergeWrapperAdData(E, s);
        }), i(p);
      })).catch((h) => {
        s.errorCode = h.message === Kt ? 102 : 301, s.errorMessage = h.message, i(s);
      });
    });
  }
  completeWrapperResolving(e) {
    if (e.ads.length === 0) this.trackVastError(e.errorURLTemplates, { ERRORCODE: 303 });
    else for (let r = e.ads.length - 1; r >= 0; r--) {
      const n = e.ads[r], s = !n.creatives.some((i) => {
        var c, o;
        return ((c = i.mediaFiles) === null || c === void 0 ? void 0 : c.length) > 0 || ((o = i.variations) === null || o === void 0 ? void 0 : o.length) > 0;
      });
      !n.errorCode && !s || n.VASTAdTagURI || (this.trackVastError(n.errorURLTemplates.concat(e.errorURLTemplates), { ERRORCODE: n.errorCode || 303 }, { ERRORMESSAGE: n.errorMessage || "" }, { extensions: n.extensions }, { system: n.system }), e.ads.splice(r, 1));
    }
  }
}
let me = null;
const on = { data: {}, length: 0, getItem(t) {
  return this.data[t];
}, setItem(t, e) {
  this.data[t] = e, this.length = Object.keys(this.data).length;
}, removeItem(t) {
  delete this.data[t], this.length = Object.keys(this.data).length;
}, clear() {
  this.data = {}, this.length = 0;
} };
class ln {
  constructor() {
    this.storage = this.initStorage();
  }
  initStorage() {
    if (me) return me;
    try {
      me = typeof window != "undefined" && window !== null ? window.localStorage || window.sessionStorage : null;
    } catch (e) {
      me = null;
    }
    return me && !this.isStorageDisabled(me) || (me = on, me.clear()), me;
  }
  isStorageDisabled(e) {
    const r = "__VASTStorage__";
    try {
      if (e.setItem(r, r), e.getItem(r) !== r) return e.removeItem(r), !0;
    } catch (n) {
      return !0;
    }
    return e.removeItem(r), !1;
  }
  getItem(e) {
    return this.storage.getItem(e);
  }
  setItem(e, r) {
    return this.storage.setItem(e, r);
  }
  removeItem(e) {
    return this.storage.removeItem(e);
  }
  clear() {
    return this.storage.clear();
  }
}
const Et = 12e4, cn = { get: function(t, e) {
  return Ne(this, null, function* () {
    try {
      const r = new AbortController(), n = setTimeout(() => {
        throw r.abort(), new Error("URLHandler: Request timed out after ".concat(e.timeout || Et, " ms (408)"));
      }, e.timeout || Et), s = yield fetch(t, Ft(Fe({}, e), { signal: r.signal, credentials: e.withCredentials ? "include" : "omit" })).finally(() => {
        clearTimeout(n);
      }), i = function(c) {
        return W.isBrowserEnvironment() && window.location.protocol === "https:" && c.url.includes("http://") ? "URLHandler: Cannot go from HTTPS to HTTP." : c.status === 200 && c.ok ? null : "URLHandler: ".concat(c.statusText, " (").concat(c.status, ")");
      }(s);
      return i ? { error: new Error(i), statusCode: s.status } : function(c) {
        return Ne(this, null, function* () {
          const o = yield c.text();
          let l;
          return l = W.isBrowserEnvironment() ? new DOMParser() : new (yield Promise.resolve().then(() => Ti)).DOMParser(), { xml: l.parseFromString(o, "text/xml"), details: { byteLength: o.length, statusCode: c.status, rawXml: o } };
        });
      }(s);
    } catch (r) {
      return { error: r, statusCode: r.name === "AbortError" ? 408 : null };
    }
  });
} };
class dn {
  constructor() {
    this.URLTemplateFilters = [];
  }
  setOptions() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.urlHandler = e.urlHandler || e.urlhandler || cn, this.fetchingOptions = { timeout: e.timeout || Et, withCredentials: !!e.withCredentials };
  }
  addURLTemplateFilter(e) {
    typeof e == "function" && this.URLTemplateFilters.push(e);
  }
  removeLastURLTemplateFilter() {
    this.URLTemplateFilters.pop();
  }
  countURLTemplateFilters() {
    return this.URLTemplateFilters.length;
  }
  clearURLTemplateFilters() {
    this.URLTemplateFilters = [];
  }
  fetchVAST(e) {
    return Ne(this, null, function* () {
      var r;
      let { url: n, maxWrapperDepth: s, emitter: i, wrapperDepth: c = 0, previousUrl: o = null, wrapperAd: l = null } = e;
      const h = Date.now();
      this.URLTemplateFilters.forEach((v) => {
        n = v(n);
      }), i("VAST-resolving", { url: n, previousUrl: o, wrapperDepth: c, maxWrapperDepth: s, timeout: this.fetchingOptions.timeout, wrapperAd: l });
      const p = yield this.urlHandler.get(n, this.fetchingOptions), E = Math.round(Date.now() - h);
      if (i("VAST-resolved", Fe({ url: n, previousUrl: o, wrapperDepth: c, error: (p == null ? void 0 : p.error) || null, duration: E, statusCode: (p == null ? void 0 : p.statusCode) || null }, p == null ? void 0 : p.details)), wr(p == null || (r = p.details) === null || r === void 0 ? void 0 : r.byteLength, E), p.error) throw new Error(p.error);
      return p.xml;
    });
  }
}
class hn {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : new ln();
    this.cappingFreeLunch = e, this.cappingMinimumTimeInterval = r, this.fetcher = new dn(), this.vastParser = new Ir({ fetcher: this.fetcher }), this.storage = n, this.lastSuccessfulAd === void 0 && (this.lastSuccessfulAd = 0), this.totalCalls === void 0 && (this.totalCalls = 0), this.totalCallsTimeout === void 0 && (this.totalCallsTimeout = 0);
  }
  addURLTemplateFilter(e) {
    this.fetcher.addURLTemplateFilter(e);
  }
  removeLastURLTemplateFilter() {
    this.fetcher.removeLastURLTemplateFilter();
  }
  countURLTemplateFilters() {
    return this.fetcher.countURLTemplateFilters();
  }
  clearURLTemplateFilters() {
    this.fetcher.clearURLTemplateFilters();
  }
  getParser() {
    return this.vastParser;
  }
  get lastSuccessfulAd() {
    return this.storage.getItem("vast-client-last-successful-ad");
  }
  set lastSuccessfulAd(e) {
    this.storage.setItem("vast-client-last-successful-ad", e);
  }
  get totalCalls() {
    return this.storage.getItem("vast-client-total-calls");
  }
  set totalCalls(e) {
    this.storage.setItem("vast-client-total-calls", e);
  }
  get totalCallsTimeout() {
    return this.storage.getItem("vast-client-total-calls-timeout");
  }
  set totalCallsTimeout(e) {
    this.storage.setItem("vast-client-total-calls-timeout", e);
  }
  hasRemainingAds() {
    return this.vastParser.remainingAds.length > 0;
  }
  getNextAds(e) {
    return this.vastParser.getRemainingAds(e);
  }
  parseVAST(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return this.fetcher.setOptions(r), this.vastParser.parseVAST(e, r);
  }
  get(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = Date.now();
    return r.hasOwnProperty("resolveAll") || (r.resolveAll = !1), this.totalCallsTimeout < n ? (this.totalCalls = 1, this.totalCallsTimeout = n + 36e5) : this.totalCalls++, new Promise((s, i) => {
      if (this.cappingFreeLunch >= this.totalCalls) return i(new Error("VAST call canceled – FreeLunch capping not reached yet ".concat(this.totalCalls, "/").concat(this.cappingFreeLunch)));
      const c = n - this.lastSuccessfulAd;
      if (c < 0) this.lastSuccessfulAd = 0;
      else if (c < this.cappingMinimumTimeInterval) return i(new Error("VAST call canceled – (".concat(this.cappingMinimumTimeInterval, ")ms minimum interval reached")));
      this.vastParser.initParsingStatus(r), this.fetcher.setOptions(r), this.vastParser.rootURL = e, this.fetcher.fetchVAST({ url: e, emitter: this.vastParser.emit.bind(this.vastParser), maxWrapperDepth: this.vastParser.maxWrapperDepth }).then((o) => (r.previousUrl = e, r.isRootVAST = !0, r.url = e, this.vastParser.parse(o, r).then((l) => {
        const h = this.vastParser.buildVASTResponse(l);
        s(h);
      }))).catch((o) => i(o));
    });
  }
}
class pn extends Rr {
  constructor(e, r, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, i = arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
    super(), this.ad = r, this.creative = n, this.variation = s, this.muted = i, this.impressed = !1, this.skippable = !1, this.trackingEvents = {}, this.trackedProgressEvents = [], this.lastPercentage = 0, this._alreadyTriggeredQuartiles = {}, this.emitAlwaysEvents = ["creativeView", "start", "firstQuartile", "midpoint", "thirdQuartile", "complete", "resume", "pause", "rewind", "skip", "closeLinear", "close"];
    for (const c in this.creative.trackingEvents) {
      const o = this.creative.trackingEvents[c];
      this.trackingEvents[c] = o.slice(0);
    }
    (function(c) {
      return c.type === "linear";
    })(this.creative) ? this._initLinearTracking() : this._initVariationTracking(), e && this.on("start", () => {
      e.lastSuccessfulAd = Date.now();
    });
  }
  _initLinearTracking() {
    this.linear = !0, this.skipDelay = this.creative.skipDelay, this.setDuration(this.creative.duration), this.clickThroughURLTemplate = this.creative.videoClickThroughURLTemplate, this.clickTrackingURLTemplates = this.creative.videoClickTrackingURLTemplates;
  }
  _initVariationTracking() {
    if (this.linear = !1, this.skipDelay = -1, this.variation) {
      for (const e in this.variation.trackingEvents) {
        const r = this.variation.trackingEvents[e];
        this.trackingEvents[e] ? this.trackingEvents[e] = this.trackingEvents[e].concat(r.slice(0)) : this.trackingEvents[e] = r.slice(0);
      }
      this.variation.adType === "nonLinearAd" ? (this.clickThroughURLTemplate = this.variation.nonlinearClickThroughURLTemplate, this.clickTrackingURLTemplates = this.variation.nonlinearClickTrackingURLTemplates, this.setDuration(this.variation.minSuggestedDuration)) : function(e) {
        return e.adType === "companionAd";
      }(this.variation) && (this.clickThroughURLTemplate = this.variation.companionClickThroughURLTemplate, this.clickTrackingURLTemplates = this.variation.companionClickTrackingURLTemplates);
    }
  }
  setDuration(e) {
    W.isValidTimeValue(e) ? (this.assetDuration = e, this.quartiles = { firstQuartile: Math.round(25 * this.assetDuration) / 100, midpoint: Math.round(50 * this.assetDuration) / 100, thirdQuartile: Math.round(75 * this.assetDuration) / 100 }) : this.emit("TRACKER-error", { message: "the duration provided is not valid. duration: ".concat(e) });
  }
  setProgress(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
    if (!W.isValidTimeValue(e) || typeof r != "object") return void this.emit("TRACKER-error", { message: "One given setProgress parameter has the wrong type. progress: ".concat(e, ", macros: ").concat(W.formatMacrosValues(r)) });
    const s = this.skipDelay || -1;
    if (s === -1 || this.skippable || (s > e ? this.emit("skip-countdown", s - e) : (this.skippable = !0, this.emit("skip-countdown", 0))), this.assetDuration > 0) {
      const i = Math.round(e / this.assetDuration * 100), c = [];
      if (e > 0) {
        c.push("start");
        for (let o = this.lastPercentage; o < i; o++) c.push("progress-".concat(o + 1, "%"));
        c.push("progress-".concat(e));
        for (const o in this.quartiles) this.isQuartileReached(o, this.quartiles[o], e) && (c.push(o), this._alreadyTriggeredQuartiles[o] = !0);
        this.lastPercentage = i;
      }
      c.forEach((o) => {
        this.track(o, { macros: r, once: n });
      }), e < this.progress && (this.track("rewind", { macros: r }), this.trackedProgressEvents && this.trackedProgressEvents.splice(0));
    }
    this.progress = e;
  }
  isQuartileReached(e, r, n) {
    let s = !1;
    return r <= n && !this._alreadyTriggeredQuartiles[e] && (s = !0), s;
  }
  setMuted(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    typeof e == "boolean" && typeof r == "object" ? (this.muted !== e && this.track(e ? "mute" : "unmute", { macros: r }), this.muted = e) : this.emit("TRACKER-error", { message: "One given setMuted parameter has the wrong type. muted: ".concat(e, ", macros: ").concat(W.formatMacrosValues(r)) });
  }
  setPaused(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    typeof e == "boolean" && typeof r == "object" ? (this.paused !== e && this.track(e ? "pause" : "resume", { macros: r }), this.paused = e) : this.emit("TRACKER-error", { message: "One given setPaused parameter has the wrong type. paused: ".concat(e, ", macros: ").concat(W.formatMacrosValues(r)) });
  }
  setFullscreen(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    typeof e == "boolean" && typeof r == "object" ? (this.fullscreen !== e && this.track(e ? "fullscreen" : "exitFullscreen", { macros: r }), this.fullscreen = e) : this.emit("TRACKER-error", { message: "One given setFullScreen parameter has the wrong type. fullscreen: ".concat(e, ", macros: ").concat(W.formatMacrosValues(r)) });
  }
  setExpand(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    typeof e == "boolean" && typeof r == "object" ? (this.expanded !== e && (this.track(e ? "expand" : "collapse", { macros: r }), this.track(e ? "playerExpand" : "playerCollapse", { macros: r })), this.expanded = e) : this.emit("TRACKER-error", { message: "One given setExpand parameter has the wrong type. expanded: ".concat(e, ", macros: ").concat(W.formatMacrosValues(r)) });
  }
  setSkipDelay(e) {
    W.isValidTimeValue(e) ? this.skipDelay = e : this.emit("TRACKER-error", { message: "setSkipDelay parameter does not have a valid value. duration: ".concat(e) });
  }
  trackImpression() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    typeof e == "object" ? this.impressed || (this.impressed = !0, this.trackURLs(this.ad.impressionURLTemplates, e), this.track("creativeView", { macros: e })) : this.emit("TRACKER-error", { message: "trackImpression parameter has the wrong type. macros: ".concat(e) });
  }
  trackViewableImpression() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    typeof e == "object" ? this.ad.viewableImpression.forEach((r) => {
      this.trackURLs(r.viewable, e);
    }) : this.emit("TRACKER-error", { message: "trackViewableImpression given macros has the wrong type. macros: ".concat(e) });
  }
  trackNotViewableImpression() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    typeof e == "object" ? this.ad.viewableImpression.forEach((r) => {
      this.trackURLs(r.notViewable, e);
    }) : this.emit("TRACKER-error", { message: "trackNotViewableImpression given macros has the wrong type. macros: ".concat(e) });
  }
  trackUndeterminedImpression() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    typeof e == "object" ? this.ad.viewableImpression.forEach((r) => {
      this.trackURLs(r.viewUndetermined, e);
    }) : this.emit("TRACKER-error", { message: "trackUndeterminedImpression given macros has the wrong type. macros: ".concat(e) });
  }
  error() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    typeof e == "object" && typeof r == "boolean" ? this.trackURLs(this.ad.errorURLTemplates, e, { isCustomCode: r }) : this.emit("TRACKER-error", { message: "One given error parameter has the wrong type. macros: ".concat(W.formatMacrosValues(e), ", isCustomCode: ").concat(r) });
  }
  errorWithCode(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    typeof e == "string" && typeof r == "boolean" ? (this.error({ ERRORCODE: e }, r), console.log("The method errorWithCode is deprecated, please use vast tracker error method instead")) : this.emit("TRACKER-error", { message: "One given errorWithCode parameter has the wrong type. errorCode: ".concat(e, ", isCustomCode: ").concat(r) });
  }
  complete() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    typeof e == "object" ? this.track("complete", { macros: e }) : this.emit("TRACKER-error", { message: "complete given macros has the wrong type. macros: ".concat(e) });
  }
  notUsed() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    typeof e == "object" ? (this.track("notUsed", { macros: e }), this.trackingEvents = []) : this.emit("TRACKER-error", { message: "notUsed given macros has the wrong type. macros: ".concat(e) });
  }
  otherAdInteraction() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    typeof e == "object" ? this.track("otherAdInteraction", { macros: e }) : this.emit("TRACKER-error", { message: "otherAdInteraction given macros has the wrong type. macros: ".concat(e) });
  }
  acceptInvitation() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    typeof e == "object" ? this.track("acceptInvitation", { macros: e }) : this.emit("TRACKER-error", { message: "acceptInvitation given macros has the wrong type. macros: ".concat(e) });
  }
  adExpand() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    typeof e == "object" ? this.track("adExpand", { macros: e }) : this.emit("TRACKER-error", { message: "adExpand given macros has the wrong type. macros: ".concat(e) });
  }
  adCollapse() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    typeof e == "object" ? this.track("adCollapse", { macros: e }) : this.emit("TRACKER-error", { message: "adCollapse given macros has the wrong type. macros: ".concat(e) });
  }
  minimize() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    typeof e == "object" ? this.track("minimize", { macros: e }) : this.emit("TRACKER-error", { message: "minimize given macros has the wrong type. macros: ".concat(e) });
  }
  verificationNotExecuted(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (typeof e != "string" || typeof r != "object") return void this.emit("TRACKER-error", { message: "One given verificationNotExecuted parameter has to wrong type. vendor: ".concat(e, ", macros: ").concat(W.formatMacrosValues(r)) });
    if (!this.ad || !this.ad.adVerifications || !this.ad.adVerifications.length) throw new Error("No adVerifications provided");
    if (!e) throw new Error("No vendor provided, unable to find associated verificationNotExecuted");
    const n = this.ad.adVerifications.find((i) => i.vendor === e);
    if (!n) throw new Error("No associated verification element found for vendor: ".concat(e));
    const s = n.trackingEvents;
    if (s && s.verificationNotExecuted) {
      const i = s.verificationNotExecuted;
      this.trackURLs(i, r), this.emit("verificationNotExecuted", { trackingURLTemplates: i });
    }
  }
  overlayViewDuration(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    typeof e == "string" && typeof r == "object" ? (r.ADPLAYHEAD = e, this.track("overlayViewDuration", { macros: r })) : this.emit("TRACKER-error", { message: "One given overlayViewDuration parameters has the wrong type. formattedDuration: ".concat(e, ", macros: ").concat(W.formatMacrosValues(r)) });
  }
  close() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    typeof e == "object" ? this.track(this.linear ? "closeLinear" : "close", { macros: e }) : this.emit("TRACKER-error", { message: "close given macros has the wrong type. macros: ".concat(e) });
  }
  skip() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    typeof e == "object" ? this.track("skip", { macros: e }) : this.emit("TRACKER-error", { message: "skip given macros has the wrong type. macros: ".concat(e) });
  }
  load() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    typeof e == "object" ? this.track("loaded", { macros: e }) : this.emit("TRACKER-error", { message: "load given macros has the wrong type. macros: ".concat(e) });
  }
  click() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (e !== null && typeof e != "string" || typeof r != "object") return void this.emit("TRACKER-error", { message: "One given click parameter has the wrong type. fallbackClickThroughURL: ".concat(e, ", macros: ").concat(W.formatMacrosValues(r)) });
    this.clickTrackingURLTemplates && this.clickTrackingURLTemplates.length && this.trackURLs(this.clickTrackingURLTemplates, r);
    const n = this.clickThroughURLTemplate || e, s = Fe({}, r);
    if (n) {
      this.progress && (s.ADPLAYHEAD = this.progressFormatted());
      const i = W.resolveURLTemplates([n], s)[0];
      this.emit("clickthrough", i);
    }
  }
  trackProgressEvents(e, r, n) {
    const s = parseFloat(e.split("-")[1]);
    Object.entries(this.trackingEvents).filter((i) => {
      let [c] = i;
      return c.startsWith("progress-");
    }).map((i) => {
      let [c, o] = i;
      return { name: c, time: parseFloat(c.split("-")[1]), urls: o };
    }).filter((i) => {
      let { time: c } = i;
      return c <= s && c > this.progress;
    }).forEach((i) => {
      let { name: c, urls: o } = i;
      !n && this.trackedProgressEvents.includes(c) || (this.emit(c, { trackingURLTemplates: o }), this.trackURLs(o, r), n ? delete this.trackingEvents[c] : this.trackedProgressEvents.push(c));
    });
  }
  track(e) {
    let { macros: r = {}, once: n = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (typeof r != "object") return void this.emit("TRACKER-error", { message: "track given macros has the wrong type. macros: ".concat(r) });
    e === "closeLinear" && !this.trackingEvents[e] && this.trackingEvents.close && (e = "close"), e.startsWith("progress-") && !e.endsWith("%") && this.trackProgressEvents(e, r, n);
    const s = this.trackingEvents[e], i = this.emitAlwaysEvents.indexOf(e) > -1;
    s ? (this.emit(e, { trackingURLTemplates: s }), this.trackURLs(s, r)) : i && this.emit(e, null), n && (delete this.trackingEvents[e], i && this.emitAlwaysEvents.splice(this.emitAlwaysEvents.indexOf(e), 1));
  }
  trackURLs(e) {
    var r;
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { validUrls: i, invalidUrls: c } = W.filterUrlTemplates(e);
    c.length && this.emit("TRACKER-error", { message: "Provided urls are malformed. url: ".concat(c) });
    const o = Fe({}, n);
    this.linear && (this.creative && this.creative.mediaFiles && this.creative.mediaFiles[0] && this.creative.mediaFiles[0].fileURL && (o.ASSETURI = this.creative.mediaFiles[0].fileURL), this.progress && (o.ADPLAYHEAD = this.progressFormatted())), (r = this.creative) !== null && r !== void 0 && (r = r.universalAdIds) !== null && r !== void 0 && r.length && (o.UNIVERSALADID = this.creative.universalAdIds.map((l) => l.idRegistry.concat(" ", l.value)).join(",")), this.ad && (this.ad.sequence && (o.PODSEQUENCE = this.ad.sequence), this.ad.adType && (o.ADTYPE = this.ad.adType), this.ad.adServingId && (o.ADSERVINGID = this.ad.adServingId), this.ad.categories && this.ad.categories.length && (o.ADCATEGORIES = this.ad.categories.map((l) => l.value).join(",")), this.ad.blockedAdCategories && this.ad.blockedAdCategories.length && (o.BLOCKEDADCATEGORIES = this.ad.blockedAdCategories.map((l) => l.value).join(","))), W.track(i, o, s);
  }
  convertToTimecode(e) {
    if (!W.isValidTimeValue(e)) return "";
    const r = 1e3 * e, n = Math.floor(r / 36e5), s = Math.floor(r / 6e4 % 60), i = Math.floor(r / 1e3 % 60), c = Math.floor(r % 1e3);
    return "".concat(W.addLeadingZeros(n, 2), ":").concat(W.addLeadingZeros(s, 2), ":").concat(W.addLeadingZeros(i, 2), ".").concat(W.addLeadingZeros(c, 3));
  }
  progressFormatted() {
    return this.convertToTimecode(this.progress);
  }
}
const Sr = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", fn = Sr + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", mn = "[" + Sr + "][" + fn + "]*", gn = new RegExp("^" + mn + "$");
function Lr(t, e) {
  const r = [];
  let n = e.exec(t);
  for (; n; ) {
    const s = [];
    s.startIndex = e.lastIndex - n[0].length;
    const i = n.length;
    for (let c = 0; c < i; c++)
      s.push(n[c]);
    r.push(s), n = e.exec(t);
  }
  return r;
}
const bt = function(t) {
  const e = gn.exec(t);
  return !(e === null || typeof e == "undefined");
};
function An(t) {
  return typeof t != "undefined";
}
const En = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function vn(t, e) {
  e = Object.assign({}, En, e);
  const r = [];
  let n = !1, s = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let i = 0; i < t.length; i++)
    if (t[i] === "<" && t[i + 1] === "?") {
      if (i += 2, i = Qt(t, i), i.err) return i;
    } else if (t[i] === "<") {
      let c = i;
      if (i++, t[i] === "!") {
        i = Zt(t, i);
        continue;
      } else {
        let o = !1;
        t[i] === "/" && (o = !0, i++);
        let l = "";
        for (; i < t.length && t[i] !== ">" && t[i] !== " " && t[i] !== "	" && t[i] !== `
` && t[i] !== "\r"; i++)
          l += t[i];
        if (l = l.trim(), l[l.length - 1] === "/" && (l = l.substring(0, l.length - 1), i--), !wn(l)) {
          let E;
          return l.trim().length === 0 ? E = "Invalid space after '<'." : E = "Tag '" + l + "' is an invalid name.", z("InvalidTag", E, ie(t, i));
        }
        const h = bn(t, i);
        if (h === !1)
          return z("InvalidAttr", "Attributes for '" + l + "' have open quote.", ie(t, i));
        let p = h.value;
        if (i = h.index, p[p.length - 1] === "/") {
          const E = i - p.length;
          p = p.substring(0, p.length - 1);
          const v = Jt(p, e);
          if (v === !0)
            n = !0;
          else
            return z(v.err.code, v.err.msg, ie(t, E + v.err.line));
        } else if (o)
          if (h.tagClosed) {
            if (p.trim().length > 0)
              return z("InvalidTag", "Closing tag '" + l + "' can't have attributes or invalid starting.", ie(t, c));
            if (r.length === 0)
              return z("InvalidTag", "Closing tag '" + l + "' has not been opened.", ie(t, c));
            {
              const E = r.pop();
              if (l !== E.tagName) {
                let v = ie(t, E.tagStartPos);
                return z(
                  "InvalidTag",
                  "Expected closing tag '" + E.tagName + "' (opened in line " + v.line + ", col " + v.col + ") instead of closing tag '" + l + "'.",
                  ie(t, c)
                );
              }
              r.length == 0 && (s = !0);
            }
          } else return z("InvalidTag", "Closing tag '" + l + "' doesn't have proper closing.", ie(t, i));
        else {
          const E = Jt(p, e);
          if (E !== !0)
            return z(E.err.code, E.err.msg, ie(t, i - p.length + E.err.line));
          if (s === !0)
            return z("InvalidXml", "Multiple possible root nodes found.", ie(t, i));
          e.unpairedTags.indexOf(l) !== -1 || r.push({ tagName: l, tagStartPos: c }), n = !0;
        }
        for (i++; i < t.length; i++)
          if (t[i] === "<")
            if (t[i + 1] === "!") {
              i++, i = Zt(t, i);
              continue;
            } else if (t[i + 1] === "?") {
              if (i = Qt(t, ++i), i.err) return i;
            } else
              break;
          else if (t[i] === "&") {
            const E = Nn(t, i);
            if (E == -1)
              return z("InvalidChar", "char '&' is not expected.", ie(t, i));
            i = E;
          } else if (s === !0 && !Xt(t[i]))
            return z("InvalidXml", "Extra text at the end", ie(t, i));
        t[i] === "<" && i--;
      }
    } else {
      if (Xt(t[i]))
        continue;
      return z("InvalidChar", "char '" + t[i] + "' is not expected.", ie(t, i));
    }
  if (n) {
    if (r.length == 1)
      return z("InvalidTag", "Unclosed tag '" + r[0].tagName + "'.", ie(t, r[0].tagStartPos));
    if (r.length > 0)
      return z("InvalidXml", "Invalid '" + JSON.stringify(r.map((i) => i.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return z("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function Xt(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function Qt(t, e) {
  const r = e;
  for (; e < t.length; e++)
    if (t[e] == "?" || t[e] == " ") {
      const n = t.substr(r, e - r);
      if (e > 5 && n === "xml")
        return z("InvalidXml", "XML declaration allowed only at the start of the document.", ie(t, e));
      if (t[e] == "?" && t[e + 1] == ">") {
        e++;
        break;
      } else
        continue;
    }
  return e;
}
function Zt(t, e) {
  if (t.length > e + 5 && t[e + 1] === "-" && t[e + 2] === "-") {
    for (e += 3; e < t.length; e++)
      if (t[e] === "-" && t[e + 1] === "-" && t[e + 2] === ">") {
        e += 2;
        break;
      }
  } else if (t.length > e + 8 && t[e + 1] === "D" && t[e + 2] === "O" && t[e + 3] === "C" && t[e + 4] === "T" && t[e + 5] === "Y" && t[e + 6] === "P" && t[e + 7] === "E") {
    let r = 1;
    for (e += 8; e < t.length; e++)
      if (t[e] === "<")
        r++;
      else if (t[e] === ">" && (r--, r === 0))
        break;
  } else if (t.length > e + 9 && t[e + 1] === "[" && t[e + 2] === "C" && t[e + 3] === "D" && t[e + 4] === "A" && t[e + 5] === "T" && t[e + 6] === "A" && t[e + 7] === "[") {
    for (e += 8; e < t.length; e++)
      if (t[e] === "]" && t[e + 1] === "]" && t[e + 2] === ">") {
        e += 2;
        break;
      }
  }
  return e;
}
const Tn = '"', Dn = "'";
function bn(t, e) {
  let r = "", n = "", s = !1;
  for (; e < t.length; e++) {
    if (t[e] === Tn || t[e] === Dn)
      n === "" ? n = t[e] : n !== t[e] || (n = "");
    else if (t[e] === ">" && n === "") {
      s = !0;
      break;
    }
    r += t[e];
  }
  return n !== "" ? !1 : {
    value: r,
    index: e,
    tagClosed: s
  };
}
const yn = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Jt(t, e) {
  const r = Lr(t, yn), n = {};
  for (let s = 0; s < r.length; s++) {
    if (r[s][1].length === 0)
      return z("InvalidAttr", "Attribute '" + r[s][2] + "' has no space in starting.", Me(r[s]));
    if (r[s][3] !== void 0 && r[s][4] === void 0)
      return z("InvalidAttr", "Attribute '" + r[s][2] + "' is without value.", Me(r[s]));
    if (r[s][3] === void 0 && !e.allowBooleanAttributes)
      return z("InvalidAttr", "boolean attribute '" + r[s][2] + "' is not allowed.", Me(r[s]));
    const i = r[s][2];
    if (!Rn(i))
      return z("InvalidAttr", "Attribute '" + i + "' is an invalid name.", Me(r[s]));
    if (!n.hasOwnProperty(i))
      n[i] = 1;
    else
      return z("InvalidAttr", "Attribute '" + i + "' is repeated.", Me(r[s]));
  }
  return !0;
}
function Cn(t, e) {
  let r = /\d/;
  for (t[e] === "x" && (e++, r = /[\da-fA-F]/); e < t.length; e++) {
    if (t[e] === ";")
      return e;
    if (!t[e].match(r))
      break;
  }
  return -1;
}
function Nn(t, e) {
  if (e++, t[e] === ";")
    return -1;
  if (t[e] === "#")
    return e++, Cn(t, e);
  let r = 0;
  for (; e < t.length; e++, r++)
    if (!(t[e].match(/\w/) && r < 20)) {
      if (t[e] === ";")
        break;
      return -1;
    }
  return e;
}
function z(t, e, r) {
  return {
    err: {
      code: t,
      msg: e,
      line: r.line || r,
      col: r.col
    }
  };
}
function Rn(t) {
  return bt(t);
}
function wn(t) {
  return bt(t);
}
function ie(t, e) {
  const r = t.substring(0, e).split(/\r?\n/);
  return {
    line: r.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: r[r.length - 1].length + 1
  };
}
function Me(t) {
  return t.startIndex + t[1].length;
}
const In = {
  preserveOrder: !1,
  attributeNamePrefix: "@_",
  attributesGroupName: !1,
  textNodeName: "#text",
  ignoreAttributes: !0,
  removeNSPrefix: !1,
  // remove NS from tag name or attribute name if true
  allowBooleanAttributes: !1,
  //a tag can have attributes without any value
  //ignoreRootElement : false,
  parseTagValue: !0,
  parseAttributeValue: !1,
  trimValues: !0,
  //Trim string values of tag and attributes
  cdataPropName: !1,
  numberParseOptions: {
    hex: !0,
    leadingZeros: !0,
    eNotation: !0
  },
  tagValueProcessor: function(t, e) {
    return e;
  },
  attributeValueProcessor: function(t, e) {
    return e;
  },
  stopNodes: [],
  //nested tags will not be parsed even for errors
  alwaysCreateTextNode: !1,
  isArray: () => !1,
  commentPropName: !1,
  unpairedTags: [],
  processEntities: !0,
  htmlEntities: !1,
  ignoreDeclaration: !1,
  ignorePiTags: !1,
  transformTagName: !1,
  transformAttributeName: !1,
  updateTag: function(t, e, r) {
    return t;
  },
  // skipEmptyListItem: false
  captureMetaData: !1
}, Sn = function(t) {
  return Object.assign({}, In, t);
};
let tt;
typeof Symbol != "function" ? tt = "@@xmlMetadata" : tt = Symbol("XML Node Metadata");
class we {
  constructor(e) {
    this.tagname = e, this.child = [], this[":@"] = {};
  }
  add(e, r) {
    e === "__proto__" && (e = "#__proto__"), this.child.push({ [e]: r });
  }
  addChild(e, r) {
    e.tagname === "__proto__" && (e.tagname = "#__proto__"), e[":@"] && Object.keys(e[":@"]).length > 0 ? this.child.push({ [e.tagname]: e.child, ":@": e[":@"] }) : this.child.push({ [e.tagname]: e.child }), r !== void 0 && (this.child[this.child.length - 1][tt] = { startIndex: r });
  }
  /** symbol used for metadata */
  static getMetaDataSymbol() {
    return tt;
  }
}
function Ln(t, e) {
  const r = {};
  if (t[e + 3] === "O" && t[e + 4] === "C" && t[e + 5] === "T" && t[e + 6] === "Y" && t[e + 7] === "P" && t[e + 8] === "E") {
    e = e + 9;
    let n = 1, s = !1, i = !1, c = "";
    for (; e < t.length; e++)
      if (t[e] === "<" && !i) {
        if (s && Un(t, e)) {
          e += 7;
          let o, l;
          [o, l, e] = kn(t, e + 1), l.indexOf("&") === -1 && (r[o] = {
            regx: RegExp(`&${o};`, "g"),
            val: l
          });
        } else if (s && Pn(t, e)) {
          e += 8;
          const { index: o } = Bn(t, e + 1);
          e = o;
        } else if (s && xn(t, e))
          e += 8;
        else if (s && Vn(t, e)) {
          e += 9;
          const { index: o } = On(t, e + 1);
          e = o;
        } else if (Fn) i = !0;
        else throw new Error("Invalid DOCTYPE");
        n++, c = "";
      } else if (t[e] === ">") {
        if (i ? t[e - 1] === "-" && t[e - 2] === "-" && (i = !1, n--) : n--, n === 0)
          break;
      } else t[e] === "[" ? s = !0 : c += t[e];
    if (n !== 0)
      throw new Error("Unclosed DOCTYPE");
  } else
    throw new Error("Invalid Tag instead of DOCTYPE");
  return { entities: r, i: e };
}
const ve = (t, e) => {
  for (; e < t.length && /\s/.test(t[e]); )
    e++;
  return e;
};
function kn(t, e) {
  e = ve(t, e);
  let r = "";
  for (; e < t.length && !/\s/.test(t[e]) && t[e] !== '"' && t[e] !== "'"; )
    r += t[e], e++;
  if (yt(r), e = ve(t, e), t.substring(e, e + 6).toUpperCase() === "SYSTEM")
    throw new Error("External entities are not supported");
  if (t[e] === "%")
    throw new Error("Parameter entities are not supported");
  let n = "";
  return [e, n] = Qe(t, e, "entity"), e--, [r, n, e];
}
function On(t, e) {
  e = ve(t, e);
  let r = "";
  for (; e < t.length && !/\s/.test(t[e]); )
    r += t[e], e++;
  yt(r), e = ve(t, e);
  const n = t.substring(e, e + 6).toUpperCase();
  if (n !== "SYSTEM" && n !== "PUBLIC")
    throw new Error(`Expected SYSTEM or PUBLIC, found "${n}"`);
  e += n.length, e = ve(t, e);
  let s = null, i = null;
  if (n === "PUBLIC")
    [e, s] = Qe(t, e, "publicIdentifier"), e = ve(t, e), (t[e] === '"' || t[e] === "'") && ([e, i] = Qe(t, e, "systemIdentifier"));
  else if (n === "SYSTEM" && ([e, i] = Qe(t, e, "systemIdentifier"), !i))
    throw new Error("Missing mandatory system identifier for SYSTEM notation");
  return { notationName: r, publicIdentifier: s, systemIdentifier: i, index: --e };
}
function Qe(t, e, r) {
  let n = "";
  const s = t[e];
  if (s !== '"' && s !== "'")
    throw new Error(`Expected quoted string, found "${s}"`);
  for (e++; e < t.length && t[e] !== s; )
    n += t[e], e++;
  if (t[e] !== s)
    throw new Error(`Unterminated ${r} value`);
  return e++, [e, n];
}
function Bn(t, e) {
  e = ve(t, e);
  let r = "";
  for (; e < t.length && !/\s/.test(t[e]); )
    r += t[e], e++;
  if (!yt(r))
    throw new Error(`Invalid element name: "${r}"`);
  if (e = ve(t, e), t[e] !== "(")
    throw new Error(`Expected '(', found "${t[e]}"`);
  e++;
  let n = "";
  for (; e < t.length && t[e] !== ")"; )
    n += t[e], e++;
  if (t[e] !== ")")
    throw new Error("Unterminated content model");
  return {
    elementName: r,
    contentModel: n.trim(),
    index: e
  };
}
function Fn(t, e) {
  return t[e + 1] === "!" && t[e + 2] === "-" && t[e + 3] === "-";
}
function Un(t, e) {
  return t[e + 1] === "!" && t[e + 2] === "E" && t[e + 3] === "N" && t[e + 4] === "T" && t[e + 5] === "I" && t[e + 6] === "T" && t[e + 7] === "Y";
}
function Pn(t, e) {
  return t[e + 1] === "!" && t[e + 2] === "E" && t[e + 3] === "L" && t[e + 4] === "E" && t[e + 5] === "M" && t[e + 6] === "E" && t[e + 7] === "N" && t[e + 8] === "T";
}
function xn(t, e) {
  return t[e + 1] === "!" && t[e + 2] === "A" && t[e + 3] === "T" && t[e + 4] === "T" && t[e + 5] === "L" && t[e + 6] === "I" && t[e + 7] === "S" && t[e + 8] === "T";
}
function Vn(t, e) {
  return t[e + 1] === "!" && t[e + 2] === "N" && t[e + 3] === "O" && t[e + 4] === "T" && t[e + 5] === "A" && t[e + 6] === "T" && t[e + 7] === "I" && t[e + 8] === "O" && t[e + 9] === "N";
}
function yt(t) {
  if (bt(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const Mn = /^[-+]?0x[a-fA-F0-9]+$/, qn = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, jn = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function Gn(t, e = {}) {
  if (e = Object.assign({}, jn, e), !t || typeof t != "string") return t;
  let r = t.trim();
  if (e.skipLike !== void 0 && e.skipLike.test(r)) return t;
  if (t === "0") return 0;
  if (e.hex && Mn.test(r))
    return Wn(r, 16);
  if (r.search(/[eE]/) !== -1) {
    const n = r.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
    if (n) {
      if (e.leadingZeros)
        r = (n[1] || "") + n[3];
      else if (!(n[2] === "0" && n[3][0] === ".")) return t;
      return e.eNotation ? Number(r) : t;
    } else
      return t;
  } else {
    const n = qn.exec(r);
    if (n) {
      const s = n[1], i = n[2];
      let c = Hn(n[3]);
      if (!e.leadingZeros && i.length > 0 && s && r[2] !== ".") return t;
      if (!e.leadingZeros && i.length > 0 && !s && r[1] !== ".") return t;
      if (e.leadingZeros && i === t) return 0;
      {
        const o = Number(r), l = "" + o;
        return l.search(/[eE]/) !== -1 ? e.eNotation ? o : t : r.indexOf(".") !== -1 ? l === "0" && c === "" || l === c || s && l === "-" + c ? o : t : i ? c === l || s + c === l ? o : t : r === l || r === s + l ? o : t;
      }
    } else
      return t;
  }
}
function Hn(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substr(0, t.length - 1))), t;
}
function Wn(t, e) {
  if (parseInt) return parseInt(t, e);
  if (Number.parseInt) return Number.parseInt(t, e);
  if (window && window.parseInt) return window.parseInt(t, e);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function $n(t) {
  return typeof t == "function" ? t : Array.isArray(t) ? (e) => {
    for (const r of t)
      if (typeof r == "string" && e === r || r instanceof RegExp && r.test(e))
        return !0;
  } : () => !1;
}
class _n {
  constructor(e) {
    this.options = e, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
      apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
      gt: { regex: /&(gt|#62|#x3E);/g, val: ">" },
      lt: { regex: /&(lt|#60|#x3C);/g, val: "<" },
      quot: { regex: /&(quot|#34|#x22);/g, val: '"' }
    }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = {
      space: { regex: /&(nbsp|#160);/g, val: " " },
      // "lt" : { regex: /&(lt|#60);/g, val: "<" },
      // "gt" : { regex: /&(gt|#62);/g, val: ">" },
      // "amp" : { regex: /&(amp|#38);/g, val: "&" },
      // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
      // "apos" : { regex: /&(apos|#39);/g, val: "'" },
      cent: { regex: /&(cent|#162);/g, val: "¢" },
      pound: { regex: /&(pound|#163);/g, val: "£" },
      yen: { regex: /&(yen|#165);/g, val: "¥" },
      euro: { regex: /&(euro|#8364);/g, val: "€" },
      copyright: { regex: /&(copy|#169);/g, val: "©" },
      reg: { regex: /&(reg|#174);/g, val: "®" },
      inr: { regex: /&(inr|#8377);/g, val: "₹" },
      num_dec: { regex: /&#([0-9]{1,7});/g, val: (r, n) => String.fromCodePoint(Number.parseInt(n, 10)) },
      num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (r, n) => String.fromCodePoint(Number.parseInt(n, 16)) }
    }, this.addExternalEntities = Yn, this.parseXml = Zn, this.parseTextData = zn, this.resolveNameSpace = Kn, this.buildAttributesMap = Qn, this.isItStopNode = ri, this.replaceEntitiesValue = ei, this.readStopNodeData = ii, this.saveTextToParentTag = ti, this.addChild = Jn, this.ignoreAttributesFn = $n(this.options.ignoreAttributes);
  }
}
function Yn(t) {
  const e = Object.keys(t);
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    this.lastEntities[n] = {
      regex: new RegExp("&" + n + ";", "g"),
      val: t[n]
    };
  }
}
function zn(t, e, r, n, s, i, c) {
  if (t !== void 0 && (this.options.trimValues && !n && (t = t.trim()), t.length > 0)) {
    c || (t = this.replaceEntitiesValue(t));
    const o = this.options.tagValueProcessor(e, t, r, s, i);
    return o == null ? t : typeof o != typeof t || o !== t ? o : this.options.trimValues ? Tt(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? Tt(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function Kn(t) {
  if (this.options.removeNSPrefix) {
    const e = t.split(":"), r = t.charAt(0) === "/" ? "/" : "";
    if (e[0] === "xmlns")
      return "";
    e.length === 2 && (t = r + e[1]);
  }
  return t;
}
const Xn = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function Qn(t, e, r) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const n = Lr(t, Xn), s = n.length, i = {};
    for (let c = 0; c < s; c++) {
      const o = this.resolveNameSpace(n[c][1]);
      if (this.ignoreAttributesFn(o, e))
        continue;
      let l = n[c][4], h = this.options.attributeNamePrefix + o;
      if (o.length)
        if (this.options.transformAttributeName && (h = this.options.transformAttributeName(h)), h === "__proto__" && (h = "#__proto__"), l !== void 0) {
          this.options.trimValues && (l = l.trim()), l = this.replaceEntitiesValue(l);
          const p = this.options.attributeValueProcessor(o, l, e);
          p == null ? i[h] = l : typeof p != typeof l || p !== l ? i[h] = p : i[h] = Tt(
            l,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (i[h] = !0);
    }
    if (!Object.keys(i).length)
      return;
    if (this.options.attributesGroupName) {
      const c = {};
      return c[this.options.attributesGroupName] = i, c;
    }
    return i;
  }
}
const Zn = function(t) {
  t = t.replace(/\r\n?/g, `
`);
  const e = new we("!xml");
  let r = e, n = "", s = "";
  for (let i = 0; i < t.length; i++)
    if (t[i] === "<")
      if (t[i + 1] === "/") {
        const o = Ie(t, ">", i, "Closing Tag is not closed.");
        let l = t.substring(i + 2, o).trim();
        if (this.options.removeNSPrefix) {
          const E = l.indexOf(":");
          E !== -1 && (l = l.substr(E + 1));
        }
        this.options.transformTagName && (l = this.options.transformTagName(l)), r && (n = this.saveTextToParentTag(n, r, s));
        const h = s.substring(s.lastIndexOf(".") + 1);
        if (l && this.options.unpairedTags.indexOf(l) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${l}>`);
        let p = 0;
        h && this.options.unpairedTags.indexOf(h) !== -1 ? (p = s.lastIndexOf(".", s.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : p = s.lastIndexOf("."), s = s.substring(0, p), r = this.tagsNodeStack.pop(), n = "", i = o;
      } else if (t[i + 1] === "?") {
        let o = vt(t, i, !1, "?>");
        if (!o) throw new Error("Pi Tag is not closed.");
        if (n = this.saveTextToParentTag(n, r, s), !(this.options.ignoreDeclaration && o.tagName === "?xml" || this.options.ignorePiTags)) {
          const l = new we(o.tagName);
          l.add(this.options.textNodeName, ""), o.tagName !== o.tagExp && o.attrExpPresent && (l[":@"] = this.buildAttributesMap(o.tagExp, s, o.tagName)), this.addChild(r, l, s, i);
        }
        i = o.closeIndex + 1;
      } else if (t.substr(i + 1, 3) === "!--") {
        const o = Ie(t, "-->", i + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const l = t.substring(i + 4, o - 2);
          n = this.saveTextToParentTag(n, r, s), r.add(this.options.commentPropName, [{ [this.options.textNodeName]: l }]);
        }
        i = o;
      } else if (t.substr(i + 1, 2) === "!D") {
        const o = Ln(t, i);
        this.docTypeEntities = o.entities, i = o.i;
      } else if (t.substr(i + 1, 2) === "![") {
        const o = Ie(t, "]]>", i, "CDATA is not closed.") - 2, l = t.substring(i + 9, o);
        n = this.saveTextToParentTag(n, r, s);
        let h = this.parseTextData(l, r.tagname, s, !0, !1, !0, !0);
        h == null && (h = ""), this.options.cdataPropName ? r.add(this.options.cdataPropName, [{ [this.options.textNodeName]: l }]) : r.add(this.options.textNodeName, h), i = o + 2;
      } else {
        let o = vt(t, i, this.options.removeNSPrefix), l = o.tagName;
        const h = o.rawTagName;
        let p = o.tagExp, E = o.attrExpPresent, v = o.closeIndex;
        this.options.transformTagName && (l = this.options.transformTagName(l)), r && n && r.tagname !== "!xml" && (n = this.saveTextToParentTag(n, r, s, !1));
        const y = r;
        y && this.options.unpairedTags.indexOf(y.tagname) !== -1 && (r = this.tagsNodeStack.pop(), s = s.substring(0, s.lastIndexOf("."))), l !== e.tagname && (s += s ? "." + l : l);
        const R = i;
        if (this.isItStopNode(this.options.stopNodes, s, l)) {
          let C = "";
          if (p.length > 0 && p.lastIndexOf("/") === p.length - 1)
            l[l.length - 1] === "/" ? (l = l.substr(0, l.length - 1), s = s.substr(0, s.length - 1), p = l) : p = p.substr(0, p.length - 1), i = o.closeIndex;
          else if (this.options.unpairedTags.indexOf(l) !== -1)
            i = o.closeIndex;
          else {
            const k = this.readStopNodeData(t, h, v + 1);
            if (!k) throw new Error(`Unexpected end of ${h}`);
            i = k.i, C = k.tagContent;
          }
          const T = new we(l);
          l !== p && E && (T[":@"] = this.buildAttributesMap(p, s, l)), C && (C = this.parseTextData(C, l, s, !0, E, !0, !0)), s = s.substr(0, s.lastIndexOf(".")), T.add(this.options.textNodeName, C), this.addChild(r, T, s, R);
        } else {
          if (p.length > 0 && p.lastIndexOf("/") === p.length - 1) {
            l[l.length - 1] === "/" ? (l = l.substr(0, l.length - 1), s = s.substr(0, s.length - 1), p = l) : p = p.substr(0, p.length - 1), this.options.transformTagName && (l = this.options.transformTagName(l));
            const C = new we(l);
            l !== p && E && (C[":@"] = this.buildAttributesMap(p, s, l)), this.addChild(r, C, s, R), s = s.substr(0, s.lastIndexOf("."));
          } else {
            const C = new we(l);
            this.tagsNodeStack.push(r), l !== p && E && (C[":@"] = this.buildAttributesMap(p, s, l)), this.addChild(r, C, s, R), r = C;
          }
          n = "", i = v;
        }
      }
    else
      n += t[i];
  return e.child;
};
function Jn(t, e, r, n) {
  this.options.captureMetaData || (n = void 0);
  const s = this.options.updateTag(e.tagname, r, e[":@"]);
  s === !1 || (typeof s == "string" && (e.tagname = s), t.addChild(e, n));
}
const ei = function(t) {
  if (this.options.processEntities) {
    for (let e in this.docTypeEntities) {
      const r = this.docTypeEntities[e];
      t = t.replace(r.regx, r.val);
    }
    for (let e in this.lastEntities) {
      const r = this.lastEntities[e];
      t = t.replace(r.regex, r.val);
    }
    if (this.options.htmlEntities)
      for (let e in this.htmlEntities) {
        const r = this.htmlEntities[e];
        t = t.replace(r.regex, r.val);
      }
    t = t.replace(this.ampEntity.regex, this.ampEntity.val);
  }
  return t;
};
function ti(t, e, r, n) {
  return t && (n === void 0 && (n = e.child.length === 0), t = this.parseTextData(
    t,
    e.tagname,
    r,
    !1,
    e[":@"] ? Object.keys(e[":@"]).length !== 0 : !1,
    n
  ), t !== void 0 && t !== "" && e.add(this.options.textNodeName, t), t = ""), t;
}
function ri(t, e, r) {
  const n = "*." + r;
  for (const s in t) {
    const i = t[s];
    if (n === i || e === i) return !0;
  }
  return !1;
}
function ni(t, e, r = ">") {
  let n, s = "";
  for (let i = e; i < t.length; i++) {
    let c = t[i];
    if (n)
      c === n && (n = "");
    else if (c === '"' || c === "'")
      n = c;
    else if (c === r[0])
      if (r[1]) {
        if (t[i + 1] === r[1])
          return {
            data: s,
            index: i
          };
      } else
        return {
          data: s,
          index: i
        };
    else c === "	" && (c = " ");
    s += c;
  }
}
function Ie(t, e, r, n) {
  const s = t.indexOf(e, r);
  if (s === -1)
    throw new Error(n);
  return s + e.length - 1;
}
function vt(t, e, r, n = ">") {
  const s = ni(t, e + 1, n);
  if (!s) return;
  let i = s.data;
  const c = s.index, o = i.search(/\s/);
  let l = i, h = !0;
  o !== -1 && (l = i.substring(0, o), i = i.substring(o + 1).trimStart());
  const p = l;
  if (r) {
    const E = l.indexOf(":");
    E !== -1 && (l = l.substr(E + 1), h = l !== s.data.substr(E + 1));
  }
  return {
    tagName: l,
    tagExp: i,
    closeIndex: c,
    attrExpPresent: h,
    rawTagName: p
  };
}
function ii(t, e, r) {
  const n = r;
  let s = 1;
  for (; r < t.length; r++)
    if (t[r] === "<")
      if (t[r + 1] === "/") {
        const i = Ie(t, ">", r, `${e} is not closed`);
        if (t.substring(r + 2, i).trim() === e && (s--, s === 0))
          return {
            tagContent: t.substring(n, r),
            i
          };
        r = i;
      } else if (t[r + 1] === "?")
        r = Ie(t, "?>", r + 1, "StopNode is not closed.");
      else if (t.substr(r + 1, 3) === "!--")
        r = Ie(t, "-->", r + 3, "StopNode is not closed.");
      else if (t.substr(r + 1, 2) === "![")
        r = Ie(t, "]]>", r, "StopNode is not closed.") - 2;
      else {
        const i = vt(t, r, ">");
        i && ((i && i.tagName) === e && i.tagExp[i.tagExp.length - 1] !== "/" && s++, r = i.closeIndex);
      }
}
function Tt(t, e, r) {
  if (e && typeof t == "string") {
    const n = t.trim();
    return n === "true" ? !0 : n === "false" ? !1 : Gn(t, r);
  } else
    return An(t) ? t : "";
}
const pt = we.getMetaDataSymbol();
function si(t, e) {
  return kr(t, e);
}
function kr(t, e, r) {
  let n;
  const s = {};
  for (let i = 0; i < t.length; i++) {
    const c = t[i], o = ui(c);
    let l = "";
    if (r === void 0 ? l = o : l = r + "." + o, o === e.textNodeName)
      n === void 0 ? n = c[o] : n += "" + c[o];
    else {
      if (o === void 0)
        continue;
      if (c[o]) {
        let h = kr(c[o], e, l);
        const p = oi(h, e);
        c[pt] !== void 0 && (h[pt] = c[pt]), c[":@"] ? ai(h, c[":@"], l, e) : Object.keys(h).length === 1 && h[e.textNodeName] !== void 0 && !e.alwaysCreateTextNode ? h = h[e.textNodeName] : Object.keys(h).length === 0 && (e.alwaysCreateTextNode ? h[e.textNodeName] = "" : h = ""), s[o] !== void 0 && s.hasOwnProperty(o) ? (Array.isArray(s[o]) || (s[o] = [s[o]]), s[o].push(h)) : e.isArray(o, l, p) ? s[o] = [h] : s[o] = h;
      }
    }
  }
  return typeof n == "string" ? n.length > 0 && (s[e.textNodeName] = n) : n !== void 0 && (s[e.textNodeName] = n), s;
}
function ui(t) {
  const e = Object.keys(t);
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    if (n !== ":@") return n;
  }
}
function ai(t, e, r, n) {
  if (e) {
    const s = Object.keys(e), i = s.length;
    for (let c = 0; c < i; c++) {
      const o = s[c];
      n.isArray(o, r + "." + o, !0, !0) ? t[o] = [e[o]] : t[o] = e[o];
    }
  }
}
function oi(t, e) {
  const { textNodeName: r } = e, n = Object.keys(t).length;
  return !!(n === 0 || n === 1 && (t[r] || typeof t[r] == "boolean" || t[r] === 0));
}
class li {
  constructor(e) {
    this.externalEntities = {}, this.options = Sn(e);
  }
  /**
   * Parse XML dats to JS object 
   * @param {string|Buffer} xmlData 
   * @param {boolean|Object} validationOption 
   */
  parse(e, r) {
    if (typeof e != "string") if (e.toString)
      e = e.toString();
    else
      throw new Error("XML data is accepted in String or Bytes[] form.");
    if (r) {
      r === !0 && (r = {});
      const i = vn(e, r);
      if (i !== !0)
        throw Error(`${i.err.msg}:${i.err.line}:${i.err.col}`);
    }
    const n = new _n(this.options);
    n.addExternalEntities(this.externalEntities);
    const s = n.parseXml(e);
    return this.options.preserveOrder || s === void 0 ? s : si(s, this.options);
  }
  /**
   * Add Entity which is not by default supported by this library
   * @param {string} key 
   * @param {string} value 
   */
  addEntity(e, r) {
    if (r.indexOf("&") !== -1)
      throw new Error("Entity value can't have '&'");
    if (e.indexOf("&") !== -1 || e.indexOf(";") !== -1)
      throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    if (r === "&")
      throw new Error("An entity with value '&' is not permitted");
    this.externalEntities[e] = r;
  }
  /**
   * Returns a Symbol that can be used to access the metadata
   * property on a node.
   * 
   * If Symbol is not available in the environment, an ordinary property is used
   * and the name of the property is here returned.
   * 
   * The XMLMetaData property is only present when `captureMetaData`
   * is true in the options.
   */
  static getMetaDataSymbol() {
    return we.getMetaDataSymbol();
  }
}
const ci = /^\d{2}:\d{2}(?::\d{2}(?:\.\d{3})?)?$/;
function er(t) {
  if (t == "start")
    return 0;
  if (t == "end")
    return -1;
  if (ci.test(t)) {
    const [e = "00", r = "00", n = "00"] = t.split(":");
    let s = "00", i = "000";
    return n.includes(".") ? [s, i] = n.split(".") : s = n, (parseInt(e, 10) * 3600 + parseInt(r, 10) * 60 + parseInt(s, 10)) * 1e3 + parseInt(i, 10);
  }
  return parseFloat(t);
}
function di(t) {
  return new Promise((e, r) => {
    t.preload = "auto", t.load();
    const n = () => {
      t.removeEventListener("canplay", n), e();
    }, s = () => {
      t.removeEventListener("error", s), r(new Error("Video failed to load"));
    };
    t.addEventListener("canplaythrough", n), t.addEventListener("error", s);
  });
}
const tr = [
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
  "abort"
], hi = 500, _ = "ima:AdsManager";
class pi {
  constructor(e, r) {
    g(this, "adsRequest");
    g(this, "adDisplayContainer");
    g(this, "adsRenderingSettings");
    g(this, "vastTracker");
    g(this, "content");
    g(this, "eventEmitter");
    g(this, "cuePoints");
    g(this, "cueMapPoints");
    g(this, "started", !1);
    g(this, "nextAds", []);
    g(this, "totalAds", 0);
    g(this, "totalTimeAds", 0);
    g(this, "currentPodIndex", 0);
    // 0 = PREROLL, -1 = POSTROLL, 1 = MIDROLL
    g(this, "currentPodTimeOffset", 0);
    g(this, "canBeAdSkippable", !1);
    g(this, "currentAdVast");
    g(this, "currentAd");
    g(this, "currentCreative");
    g(this, "queueCreatives", []);
    g(this, "processingAdv", !1);
    g(this, "timerUpdateContentTime");
    g(this, "adRemainingTime", -1);
    g(this, "adDuration", -1);
    g(this, "quartilesFired", {
      start: !1,
      firstQuartile: !1,
      midpoint: !1,
      thirdQuartile: !1,
      complete: !1
    });
    this.adsRequest = e, this.adDisplayContainer = r, this.eventEmitter = new Er(), this.content = void 0, this.cuePoints = [], this.cueMapPoints = {}, this.adsRenderingSettings = void 0, this.started = !1, this.processingAdv = !1, this.canBeAdSkippable = !1, this.adRemainingTime = -1, this.adDuration = -1, this.fetchAds = this.fetchAds.bind(this), this.attachContentMediaEventListeners = this.attachContentMediaEventListeners.bind(this), this.detachContentMediaEventListeners = this.detachContentMediaEventListeners.bind(this), this.handleContentTimeUpdate = this.handleContentTimeUpdate.bind(this), this.adsVideoEventsListener = this.adsVideoEventsListener.bind(this), this.adsVideoErrorListener = this.adsVideoErrorListener.bind(this);
  }
  collapse() {
    throw new Error("Method not implemented.");
  }
  configureAdsManager(e, r) {
    this.content = e, this.adsRenderingSettings = r || void 0;
  }
  destroy() {
    this.detachContentMediaEventListeners(), this.eventEmitter.clearAllEventListeners(), this.content = void 0, this.adsRenderingSettings = void 0;
  }
  discardAdBreak() {
  }
  expand() {
  }
  focus() {
  }
  getAdSkippableState() {
    return this.canBeAdSkippable;
  }
  getCuePoints() {
    return this.cuePoints;
  }
  getRemainingTime() {
    return this.currentCreative ? this.adRemainingTime : -1;
  }
  getVolume() {
    return this.adDisplayContainer.getVideoAdsElement().volume;
  }
  init(e, r, n, s) {
    x.debug(
      _,
      `init width[${e}] height[${r}] viewMode[${n}] videoElement[${s}]`
    );
  }
  isCustomClickTrackingUsed() {
    return x.debug(_, "isCustomClickTrackingUsed"), !1;
  }
  isCustomPlaybackUsed() {
    return x.debug(_, "isCustomPlaybackUsed"), !0;
  }
  pause() {
    x.debug(_, "pause");
  }
  resize(e, r, n) {
    x.debug(_, `resize width[${e}] height[${r}] viewMode[${n}]`);
  }
  resume() {
    x.debug(_, "resume");
  }
  setVolume(e) {
    const r = this.adDisplayContainer.getVideoAdsElement();
    r && (r.volume = e);
  }
  skip() {
    var n, s;
    const e = this.adDisplayContainer.getVideoAdsElement(), r = ((n = this.currentCreative) == null ? void 0 : n.skipDelay) || 0;
    if (!(!e || r <= 0 || this.adRemainingTime > r && this.adRemainingTime < this.adDuration))
      try {
        e.pause();
      } finally {
        x.debug(_, "video user skipped"), (s = this.vastTracker) == null || s.skip(), this.dispatchAdsEvent(google.ima.AdEvent.Type.SKIPPED), this.playCreativities();
      }
  }
  start() {
    this.started || (this.started = !0, this.cuePoints.length > 0 ? (this.fetchVastAds(0), this.attachContentMediaEventListeners()) : this.playCreativities());
  }
  stop() {
    this.started = !1;
  }
  updateAdsRenderingSettings(e) {
    x.debug(_, `updateAdsRenderingSettings [${e}]`);
  }
  addEventListener(e, r, n, s) {
    this.eventEmitter.addEventListener(e, r, n, s);
  }
  /* eslint-disable @typescript-eslint/no-unused-vars */
  removeEventListener(e, r, n, s) {
    this.eventEmitter.removeEventListener(e, r, n);
  }
  dispatchEvent(e) {
    return x.debug(_, `dispatchEvent: [${e}]`), !0;
  }
  fetchAds() {
    const e = this.adsRequest.adTagUrl;
    return fetch(e).then((r) => r.text()).then((r) => Ne(this, null, function* () {
      var i, c;
      const n = new li({
        ignoreAttributes: !1,
        attributeNamePrefix: "@_",
        textNodeName: "#text"
      }), s = n.parse(r);
      if (!s)
        return Promise.reject(new Error("Invalid XML response"));
      if (s.VAST) {
        const o = new globalThis.DOMParser().parseFromString(r, "text/xml"), h = yield new Ir().parseVAST(o), p = [];
        let E = 0, v = 0;
        x.debug(_, `fetchVastAds: [${e}]: `, h);
        const y = (i = h == null ? void 0 : h.ads) != null ? i : void 0;
        if (y && y.length > 0)
          for (const R of y) {
            const C = this.getAdValidCreative(R);
            C && (p.push(R), E += C.duration || 0, v += 1);
          }
        else
          (c = h.errorURLTemplates) == null || c.forEach((R) => {
            this.trackUrl(R);
          });
        this.nextAds = p, this.totalAds = v, this.totalTimeAds = E, x.debug(_, `fetchVastAds totalAds: [${v}] [${E}]`);
      } else {
        const o = n.parse(r), l = o == null ? void 0 : o["vmap:VMAP"]["vmap:AdBreak"];
        if (!l)
          return this;
        if (Array.isArray(l))
          l.forEach((h) => {
            const p = h["@_timeOffset"];
            if (p) {
              const E = er(p);
              if (!isNaN(E) && this.isValidAdBreak(h)) {
                x.debug(_, `vmap adBreak timeOffset [${p}]:`, E), this.cuePoints.includes(E) || this.cuePoints.push(E);
                const v = this.cueMapPoints[E] || [];
                v.push(h), this.cueMapPoints[E] = v;
              }
            }
          });
        else {
          const h = l["@_timeOffset"];
          if (h) {
            const p = er(h);
            !isNaN(p) && this.isValidAdBreak(l) && (this.cuePoints.push(p), this.cueMapPoints[p] = [l]);
          }
        }
      }
      return this.adDisplayContainer.initialize(), this;
    })).catch((r) => Promise.reject(r));
  }
  isValidContentObject(e) {
    return !!e && (e instanceof HTMLVideoElement || "currentTime" in e);
  }
  allAdsCompleted() {
    var e, r, n;
    this.removeVideoListeners(), this.cuePoints.length === 0 && this.dispatchAdsEvent(google.ima.AdEvent.Type.ALL_ADS_COMPLETED), this.nextAds = [], this.queueCreatives = [], this.vastTracker = void 0, this.currentAdVast = void 0, this.currentAd = void 0, this.currentCreative = void 0, this.adRemainingTime = -1, this.canBeAdSkippable = !1, (e = this.adDisplayContainer) == null || e.hideAdVideoElement(), (r = this.adDisplayContainer) == null || r.clearAdVideoElement(), (n = this.adDisplayContainer) == null || n.hide(), this.processingAdv = !1, this.dispatchAdsEvent(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED);
  }
  playCreativities() {
    this.processingAdv = !0;
    const e = !!this.currentAd;
    if (this.currentCreative = void 0, this.currentAdVast && this.queueCreatives.length > 0) {
      const n = this.queueCreatives.shift();
      if (!n)
        return this.playCreativities();
      const s = n.mediaFiles;
      if (s && s.length > 0)
        for (const i of s) {
          const c = i.mimeType;
          if (c && c.startsWith("video/mp4") && i.fileURL) {
            this.currentCreative = n, this.vastTracker = new pn(null, this.currentAdVast, this.currentCreative);
            const o = this.totalAds - this.nextAds.length, l = new Kr(
              o,
              !1,
              this.totalTimeAds,
              this.currentPodIndex,
              this.currentPodTimeOffset,
              this.totalAds
            );
            x.debug(_, `current podInfo: [${o}] [${this.totalTimeAds}] [${this.totalAds}]`), this.currentAd = new Wr(this.currentAdVast, n, i, l), e || this.dispatchAdsEvent(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED), this.playAdsContent(i.fileURL).catch((h) => {
              x.error(_, "playAdsContent error: ", h);
            });
            return;
          }
        }
      return this.playCreativities();
    }
    if (!this.nextAds || this.nextAds.length === 0) {
      this.allAdsCompleted();
      return;
    }
    const r = this.nextAds.shift();
    return r ? (this.currentAdVast = r, this.queueCreatives = this.getCreativities(r), this.playCreativities()) : this.playCreativities();
  }
  handleContentTimeUpdate() {
    const e = this.content;
    if (!this.isValidContentObject(e) || this.cuePoints.length === 0 || this.processingAdv)
      return;
    if (this.nextAds && this.nextAds.length > 0) {
      this.processingAdv = !0, this.playCreativities();
      return;
    }
    const r = e.currentTime * 1e3;
    x.debug(_, `Content current time: [${r}]`);
    const n = this.cuePoints.find((s) => Math.abs(s - r) <= hi);
    n && (x.debug(_, `fetchVastAds: [${n}]`), this.fetchVastAds(n));
  }
  clearTimerUpdateContentTime() {
    clearTimeout(this.timerUpdateContentTime);
  }
  startTimerUpdateContentTime() {
    var r;
    const e = (((r = globalThis.navigator) == null ? void 0 : r.hardwareConcurrency) || 0) <= 2 ? 500 : 300;
    this.clearTimerUpdateContentTime(), this.timerUpdateContentTime = setTimeout(() => {
      this.handleContentTimeUpdate(), this.startTimerUpdateContentTime();
    }, e);
  }
  attachContentMediaEventListeners() {
    const e = this.content;
    e && (e instanceof HTMLVideoElement ? e.addEventListener("timeupdate", this.handleContentTimeUpdate) : "currentTime" in e && this.startTimerUpdateContentTime());
  }
  detachContentMediaEventListeners() {
    const e = this.content;
    e && (e instanceof HTMLVideoElement ? e.removeEventListener("timeupdate", this.handleContentTimeUpdate) : "currentTime" in e && this.clearTimerUpdateContentTime());
  }
  isValidAdBreak(e) {
    var s, i;
    const r = e["vmap:AdSource"];
    return !(!r || !((i = (s = r["vmap:AdTagURI"]) == null ? void 0 : s["#text"]) == null ? void 0 : i.trim()));
  }
  getAdValidCreative(e) {
    const r = e.creatives;
    if (r && r.length > 0) {
      for (const n of r)
        if (n.type === "linear") {
          const c = n.mediaFiles;
          if (c && c.length > 0)
            for (const o of c) {
              const l = (o.mimeType || "").toLowerCase();
              if (l && l === "video/mp4" && o.fileURL)
                return n;
            }
        }
    }
  }
  getCreativities(e) {
    const r = [], n = e.creatives;
    if (n && n.length > 0) {
      for (const s of n)
        if (s.type === "linear") {
          const o = s.mediaFiles;
          if (o && o.length > 0)
            for (const l of o) {
              const h = l.mimeType;
              if (h && h.startsWith("video/mp4") && l.fileURL) {
                r.push(s);
                break;
              }
            }
        }
    }
    return r;
  }
  trackingEvent(e) {
    const r = this.currentCreative;
    if (!r)
      return;
    const n = r.trackingEvents, s = n == null ? void 0 : n[e];
    if (s)
      for (const i of s)
        this.trackUrl(i);
  }
  trackUrl(e) {
    try {
      if (globalThis) {
        const r = new globalThis.Image();
        r.src = e;
      }
    } catch (r) {
      x.error(_, `trackUrl [${e}] error: `, r);
    }
  }
  getPromiseVastClient(e) {
    return new hn().get(e);
  }
  fetchVastAds(e) {
    return Ne(this, null, function* () {
      var r, n, s, i;
      if (this.started)
        try {
          this.currentPodIndex = e > 0 ? this.currentPodIndex + 1 : e, this.currentPodTimeOffset = e;
          const c = this.cueMapPoints[e];
          delete this.cueMapPoints[e];
          const o = [];
          let l = 0, h = 0;
          if (c) {
            const p = [];
            for (const v of c) {
              const y = v["vmap:AdSource"];
              if (y) {
                const R = (n = (r = y["vmap:AdTagURI"]) == null ? void 0 : r["#text"]) == null ? void 0 : n.trim();
                R && o.push(this.getPromiseVastClient(R));
              }
            }
            const E = yield Promise.allSettled(o);
            for (const v of E)
              if (v.status === "fulfilled") {
                const y = v.value, R = (s = y == null ? void 0 : y.ads) != null ? s : void 0;
                if (R && R.length > 0)
                  for (const C of R) {
                    const T = this.getAdValidCreative(C);
                    T && (p.push(C), l += T.duration || 0, h += 1);
                  }
                else
                  (i = y.errorURLTemplates) == null || i.forEach((C) => {
                    this.trackUrl(C);
                  });
              }
            this.nextAds = p, this.totalAds = h, this.totalTimeAds = l, x.debug(_, `fetchVastAds totalAds: [${h}] [${l}]`), !this.nextAds || this.nextAds.length === 0 ? this.allAdsCompleted() : this.playCreativities();
          } else
            this.allAdsCompleted();
        } catch (c) {
          x.error(_, "fetchVastAds error:", c);
        }
    });
  }
  // REGION: ADS EVENTS
  dispatchAdsEvent(e) {
    x.debug(_, "dispatchAdsEvent: ", e), this.eventEmitter.emit(e, new gt(e, this.currentAd));
  }
  //END REGION
  // REGION: VIDEO ADS EVENTS
  adsVideoEventsListener(e) {
    var n, s, i, c;
    const r = this.adDisplayContainer.getVideoAdsElement();
    if (r)
      switch (e.type) {
        case "loadstart": {
          this.dispatchAdsEvent(google.ima.AdEvent.Type.AD_BREAK_READY);
          break;
        }
        case "durationchange": {
          const o = r.duration;
          ((n = this.currentAd) == null ? void 0 : n.getDuration()) !== o && this.dispatchAdsEvent(google.ima.AdEvent.Type.DURATION_CHANGE);
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
          this.quartilesFired.start ? this.dispatchAdsEvent(google.ima.AdEvent.Type.RESUMED) : (this.quartilesFired.start = !0, this.dispatchAdsEvent(google.ima.AdEvent.Type.STARTED));
          break;
        }
        case "pause": {
          this.dispatchAdsEvent(google.ima.AdEvent.Type.PAUSED);
          break;
        }
        case "timeupdate": {
          const o = r.duration || -1;
          if (!isNaN(o) && o >= 0) {
            const l = r.currentTime || 0, h = l / o, p = o - l, E = ((s = this.currentCreative) == null ? void 0 : s.skipDelay) || 0;
            this.adRemainingTime = p, this.adDuration = o, x.debug(
              _,
              `video adv currentTime: ${l}, Percentage: ${h}%, SkipDelay: ${E}`
            ), this.quartilesFired.start || (this.quartilesFired.start = !0, this.dispatchAdsEvent(google.ima.AdEvent.Type.STARTED)), !this.quartilesFired.firstQuartile && h >= 0.25 && (this.quartilesFired.firstQuartile = !0, this.dispatchAdsEvent(google.ima.AdEvent.Type.FIRST_QUARTILE)), !this.quartilesFired.midpoint && h >= 0.5 && (this.quartilesFired.midpoint = !0, this.dispatchAdsEvent(google.ima.AdEvent.Type.MIDPOINT)), !this.quartilesFired.thirdQuartile && h >= 0.75 && (this.quartilesFired.thirdQuartile = !0, this.dispatchAdsEvent(google.ima.AdEvent.Type.THIRD_QUARTILE)), this.dispatchAdsEvent(google.ima.AdEvent.Type.AD_PROGRESS), (i = this.vastTracker) == null || i.setProgress(l), !this.canBeAdSkippable && E > 0 && l >= E && (this.canBeAdSkippable = !0, x.debug(
              _,
              `video adv can be skippable: [${l}] [${o}] [${E}]`
            ), this.dispatchAdsEvent(google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED));
          }
          break;
        }
        case "ended": {
          this.adRemainingTime = -1, this.adDuration = -1, this.quartilesFired.complete || (this.quartilesFired.complete = !0, this.dispatchAdsEvent(google.ima.AdEvent.Type.COMPLETE)), (c = this.vastTracker) == null || c.complete(), this.playCreativities();
          break;
        }
      }
  }
  adsVideoErrorListener(e) {
    var r, n;
    x.error(_, "adsVideoErrorListener: ", e), (r = this.adDisplayContainer) == null || r.hideAdVideoElement(), (n = this.adDisplayContainer) == null || n.clearAdVideoElement(), this.playCreativities();
  }
  resetQuartilesFired() {
    this.quartilesFired = {
      start: !1,
      firstQuartile: !1,
      midpoint: !1,
      thirdQuartile: !1,
      complete: !1
    };
  }
  playAdsContent(e) {
    return Ne(this, null, function* () {
      var n, s, i, c, o, l;
      const r = this.adDisplayContainer.getVideoAdsElement();
      if (!r)
        return x.error(_, "playAdsContent no Video Ads Element: "), this.playCreativities();
      this.adRemainingTime = -1, this.adDuration = -1, this.canBeAdSkippable = !1, this.resetQuartilesFired(), this.removeVideoListeners(), (n = this.adDisplayContainer) == null || n.show(), (s = this.adDisplayContainer) == null || s.showLoader(), (i = this.adDisplayContainer) == null || i.hideAdVideoElement(), r.src = e, r.autoplay = !0;
      try {
        yield di(r), yield r.play(), this.addVideoListeners(), (c = this.adDisplayContainer) == null || c.showAdVideoElement(), (o = this.adDisplayContainer) == null || o.hideLoader(), this.dispatchAdsEvent(google.ima.AdEvent.Type.AD_CAN_PLAY);
      } catch (h) {
        x.error(_, "playAdsContent error: ", h), this.dispatchAdsEvent(google.ima.AdEvent.Type.AD_BREAK_FETCH_ERROR), (l = this.adDisplayContainer) == null || l.hideAdVideoElement(), this.playCreativities();
      } finally {
        this.adDisplayContainer.hideLoader();
      }
    });
  }
  addVideoListeners() {
    const e = this.adDisplayContainer.getVideoAdsElement();
    e && (tr.forEach((r) => e.addEventListener(r, this.adsVideoEventsListener)), e.addEventListener("error", this.adsVideoErrorListener));
  }
  removeVideoListeners() {
    const e = this.adDisplayContainer.getVideoAdsElement();
    e && (tr.forEach(
      (r) => e.removeEventListener(r, this.adsVideoEventsListener)
    ), e.removeEventListener("error", this.adsVideoErrorListener));
  }
  // END REGION: VIDEO ADS EVENTS
}
const fi = fr;
class Or {
  constructor(e) {
    g(this, "currentTarget");
    g(this, "target");
    g(this, "type");
    g(this, "adsManager");
    this.adsManager = e, this.currentTarget = null, this.target = null, this.type = "adsManagerLoaded";
  }
  getAdsManager(e, r) {
    return this.adsManager.configureAdsManager(e, r), this.adsManager;
  }
  getUserRequestContext() {
    throw new Error("Method not implemented.");
  }
  preventDefault() {
    throw new Error("Method not implemented.");
  }
  stopPropagation() {
    throw new Error("Method not implemented.");
  }
}
g(Or, "Type", fi);
const rr = "ima:AdsLoader";
class Ci {
  constructor(e) {
    g(this, "adDisplayContainer");
    g(this, "adsManager");
    g(this, "eventEmitter");
    g(this, "userRequestContext");
    g(this, "imaSdkSettings", new Ze());
    this.adDisplayContainer = e, this.eventEmitter = new Er();
  }
  addEventListener(e, r, n, s) {
    this.eventEmitter.addEventListener(e, r, n, s);
  }
  contentComplete() {
  }
  dispatchEvent(e) {
    return x.debug(rr, "dispatchEvent", e), !0;
  }
  getSettings() {
    return this.imaSdkSettings;
  }
  getVersion() {
    return "custom";
  }
  /* eslint-disable @typescript-eslint/no-unused-vars */
  removeEventListener(e, r, n, s) {
    this.eventEmitter.removeEventListener(e, r, n);
  }
  requestAds(e, r) {
    if (this.userRequestContext = r || void 0, !e.adTagUrl) {
      const s = new Je(
        google.ima.AdError.ErrorCode.FAILED_TO_REQUEST_ADS,
        "AdManager is already defined or adTagUrl is not defined"
      );
      this.eventEmitter.emit(google.ima.AdErrorEvent.Type.AD_ERROR, new et(s));
      return;
    }
    this.adsManager = new pi(e, this.adDisplayContainer), this.adsManager.fetchAds().then((s) => (this.adsManager = s, this.eventEmitter.emit(
      google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
      new Or(s)
    ))).catch((s) => {
      const i = s.message || "Unable to retrive vmap files", c = new Je(
        google.ima.AdError.ErrorCode.FAILED_TO_REQUEST_ADS,
        s.message || "Unable to retrive vmap files"
      );
      return x.error(rr, i, c), this.eventEmitter.emit(google.ima.AdErrorEvent.Type.AD_ERROR, new et(c));
    });
  }
  destroy() {
    var e;
    (e = this.adsManager) == null || e.destroy(), this.adDisplayContainer.destroy(), this.eventEmitter.clearAllEventListeners();
  }
}
class Ni {
  constructor() {
    g(this, "autoAlign", !1);
    g(this, "bitrate", -1);
    g(this, "enablePreloading", !1);
    g(this, "loadVideoTimeout", -1);
    g(this, "mimeTypes", null);
    g(this, "playAdsAfterTime", 0);
    g(this, "restoreCustomPlaybackStateOnAdBreakComplete", !1);
    g(this, "uiElements", null);
    g(this, "useStyledLinearAds", !0);
    g(this, "useStyledNonLinearAds", !1);
  }
}
const ft = "ima:AdsRequest";
class Ri {
  constructor() {
    /**
     * Specifies the ad tag url that is requested from the ad server.
     * For details on constructing the ad tag url, see
     * <a href="https://support.google.com/dfp_premium/answer/1068325">
     * Create a main ad video tag manually</a>.
     * <p>
     * This parameter is required.
     * </p>
     */
    g(this, "adTagUrl");
    /**
     * Specifies a VAST 2.0 document to be used as the ads response instead of
     * making a request through an ad tag url. This can be useful for debugging
     * and other situations where a VAST response is already available. <p> This
     * parameter is optional.
     * </p>
     */
    g(this, "adsResponse");
    /**
     * Specifies the duration of the content in seconds to be shown. It is used
     * in 2 cases: 1) AdX ad targeting and 2) deciding when to preload VMAP
     * postroll.
     * <p>
     * This parameter is optional.
     * </p>
     */
    g(this, "contentDuration");
    /**
     * Specifies the keywords used to describe the content to be shown. Used in
     * AdX requests. <p> This parameter is optional.
     * </p>
     */
    g(this, "contentKeywords");
    /**
     * Specifies the title of the content to be shown. Used in AdX requests.
     * <p>
     * This parameter is optional.
     * </p>
     */
    g(this, "contentTitle");
    /**
     * Forces non-linear AdSense ads to render as linear fullslot. If set,
     * the content video will be paused and the non-linear text or image ad will
     * be rendered as fullslot. The content video will resume once the ad has
     * been skipped or closed.
     */
    g(this, "forceNonLinearFullSlot");
    /**
     * Specifies the height of the rectangular area within which a linear ad is
     * displayed. This value is used as one of the criteria for ads selection.
     * This value does not need to match actual ad's height. <p> This parameter
     * is required.
     * </p>
     */
    g(this, "linearAdSlotHeight");
    /**
     * Specifies the width of the rectangular area within which a non linear ad
     * is displayed. This value is used as one of the criteria for ads
     * selection. This value does not need to match actual ad's width. <p> This
     * parameter is required.
     * </p>
     */
    g(this, "linearAdSlotWidth");
    /**
     * Specifies the maximum amount of time to wait in seconds, after calling
     * requestAds, before requesting the ad tag URL. This can be used to stagger
     * requests during a live-stream event, in order to mitigate spikes in the
     * number of requests.
     */
    g(this, "liveStreamPrefetchSeconds");
    /**
     * Specifies the height of the rectangular area within which a non linear ad
     * is displayed. This value is used as one of the criteria for ads
     * selection. This value does not need to match actual ad's height. <p> This
     * parameter is required.
     * </p>
     */
    g(this, "nonLinearAdSlotHeight");
    /**
     * Specifies the width of the rectangular area within which a non linear ad
     * is displayed. This value is used as one of the criteria for ads
     * selection. This value does not need to match actual ad's width. <p> This
     * parameter is required.
     * </p>
     */
    g(this, "nonLinearAdSlotWidth");
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
    g(this, "omidAccessModeRules");
    /**
     * Specifies the full url of the page that will be included in the Google ad
     * request for targeting purposes. The url needs to be a valid url. If
     * specified, this value will be used for the [PAGEURL] VAST macro.
     * <p>
     * This parameter is optional.
     * </p>
     */
    g(this, "pageUrl");
    /**
     * Override for default VAST load timeout in milliseconds for a single
     * wrapper. The default timeout is 5000ms. <p> This parameter is optional.
     * </p>
     */
    g(this, "vastLoadTimeout");
    this.adTagUrl = "", this.adsResponse = null, this.contentDuration = null, this.contentKeywords = null, this.contentTitle = null, this.forceNonLinearFullSlot = !1, this.linearAdSlotHeight = 0, this.linearAdSlotWidth = 0, this.liveStreamPrefetchSeconds = 0, this.nonLinearAdSlotHeight = 0, this.nonLinearAdSlotWidth = 0, this.omidAccessModeRules = {}, this.pageUrl = null, this.vastLoadTimeout = 0;
  }
  /**
   * Notifies the SDK whether the player intends to start the content and ad
   * in response to a user action or whether it will be automatically played.
   * Changing this setting will have no impact on ad playback.
   * @param autoPlay Whether the content and the ad will be autoplayed or
   *     whether it will be started by a user action.
   */
  setAdWillAutoPlay(e) {
    x.debug(ft, `setAdWillAutoPlay [${e}]`);
  }
  /**
   * Notifies the SDK whether the player intends to start ad while muted.
   * Changing this setting will have no impact on ad playback, but will send
   * the appropriate signal in the ad request to allow buyers to bid on muted
   * inventory.
   * @param muted Whether the ad will be played while muted.
   */
  setAdWillPlayMuted(e) {
    x.debug(ft, `setAdWillPlayMuted [${e}]`);
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
  setContinuousPlayback(e) {
    x.debug(ft, `setContinuousPlayback [${e}]`);
  }
}
const wi = Ar;
function Ii(t, e = "debug") {
  x.setEnable(t), x.setLogLevel(e);
}
const Si = qr;
var qe = {}, ge = {}, Re = {}, nr;
function it() {
  if (nr) return Re;
  nr = 1;
  function t(i, c, o) {
    if (o === void 0 && (o = Array.prototype), i && typeof o.find == "function")
      return o.find.call(i, c);
    for (var l = 0; l < i.length; l++)
      if (Object.prototype.hasOwnProperty.call(i, l)) {
        var h = i[l];
        if (c.call(void 0, h, l, i))
          return h;
      }
  }
  function e(i, c) {
    return c === void 0 && (c = Object), c && typeof c.freeze == "function" ? c.freeze(i) : i;
  }
  function r(i, c) {
    if (i === null || typeof i != "object")
      throw new TypeError("target is not an object");
    for (var o in c)
      Object.prototype.hasOwnProperty.call(c, o) && (i[o] = c[o]);
    return i;
  }
  var n = e({
    /**
     * `text/html`, the only mime type that triggers treating an XML document as HTML.
     *
     * @see DOMParser.SupportedType.isHTML
     * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
     * @see https://en.wikipedia.org/wiki/HTML Wikipedia
     * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
     * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
     */
    HTML: "text/html",
    /**
     * Helper method to check a mime type if it indicates an HTML document
     *
     * @param {string} [value]
     * @returns {boolean}
     *
     * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
     * @see https://en.wikipedia.org/wiki/HTML Wikipedia
     * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
     * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
    isHTML: function(i) {
      return i === n.HTML;
    },
    /**
     * `application/xml`, the standard mime type for XML documents.
     *
     * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
     * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
     * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
     */
    XML_APPLICATION: "application/xml",
    /**
     * `text/html`, an alias for `application/xml`.
     *
     * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
     * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
     * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
     */
    XML_TEXT: "text/xml",
    /**
     * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
     * but is parsed as an XML document.
     *
     * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
     * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
     * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
     */
    XML_XHTML_APPLICATION: "application/xhtml+xml",
    /**
     * `image/svg+xml`,
     *
     * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
     * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
     * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
     */
    XML_SVG_IMAGE: "image/svg+xml"
  }), s = e({
    /**
     * The XHTML namespace.
     *
     * @see http://www.w3.org/1999/xhtml
     */
    HTML: "http://www.w3.org/1999/xhtml",
    /**
     * Checks if `uri` equals `NAMESPACE.HTML`.
     *
     * @param {string} [uri]
     *
     * @see NAMESPACE.HTML
     */
    isHTML: function(i) {
      return i === s.HTML;
    },
    /**
     * The SVG namespace.
     *
     * @see http://www.w3.org/2000/svg
     */
    SVG: "http://www.w3.org/2000/svg",
    /**
     * The `xml:` namespace.
     *
     * @see http://www.w3.org/XML/1998/namespace
     */
    XML: "http://www.w3.org/XML/1998/namespace",
    /**
     * The `xmlns:` namespace
     *
     * @see https://www.w3.org/2000/xmlns/
     */
    XMLNS: "http://www.w3.org/2000/xmlns/"
  });
  return Re.assign = r, Re.find = t, Re.freeze = e, Re.MIME_TYPE = n, Re.NAMESPACE = s, Re;
}
var ir;
function Br() {
  if (ir) return ge;
  ir = 1;
  var t = it(), e = t.find, r = t.NAMESPACE;
  function n(u) {
    return u !== "";
  }
  function s(u) {
    return u ? u.split(/[\t\n\f\r ]+/).filter(n) : [];
  }
  function i(u, a) {
    return u.hasOwnProperty(a) || (u[a] = !0), u;
  }
  function c(u) {
    if (!u) return [];
    var a = s(u);
    return Object.keys(a.reduce(i, {}));
  }
  function o(u) {
    return function(a) {
      return u && u.indexOf(a) !== -1;
    };
  }
  function l(u, a) {
    for (var d in u)
      Object.prototype.hasOwnProperty.call(u, d) && (a[d] = u[d]);
  }
  function h(u, a) {
    var d = u.prototype;
    if (!(d instanceof a)) {
      let f = function() {
      };
      f.prototype = a.prototype, f = new f(), l(d, f), u.prototype = d = f;
    }
    d.constructor != u && (typeof u != "function" && console.error("unknown Class:" + u), d.constructor = u);
  }
  var p = {}, E = p.ELEMENT_NODE = 1, v = p.ATTRIBUTE_NODE = 2, y = p.TEXT_NODE = 3, R = p.CDATA_SECTION_NODE = 4, C = p.ENTITY_REFERENCE_NODE = 5, T = p.ENTITY_NODE = 6, k = p.PROCESSING_INSTRUCTION_NODE = 7, q = p.COMMENT_NODE = 8, M = p.DOCUMENT_NODE = 9, X = p.DOCUMENT_TYPE_NODE = 10, Y = p.DOCUMENT_FRAGMENT_NODE = 11, se = p.NOTATION_NODE = 12, V = {}, G = {};
  V.INDEX_SIZE_ERR = (G[1] = "Index size error", 1), V.DOMSTRING_SIZE_ERR = (G[2] = "DOMString size error", 2);
  var A = V.HIERARCHY_REQUEST_ERR = (G[3] = "Hierarchy request error", 3);
  V.WRONG_DOCUMENT_ERR = (G[4] = "Wrong document", 4), V.INVALID_CHARACTER_ERR = (G[5] = "Invalid character", 5), V.NO_DATA_ALLOWED_ERR = (G[6] = "No data allowed", 6), V.NO_MODIFICATION_ALLOWED_ERR = (G[7] = "No modification allowed", 7);
  var b = V.NOT_FOUND_ERR = (G[8] = "Not found", 8);
  V.NOT_SUPPORTED_ERR = (G[9] = "Not supported", 9);
  var w = V.INUSE_ATTRIBUTE_ERR = (G[10] = "Attribute in use", 10);
  V.INVALID_STATE_ERR = (G[11] = "Invalid state", 11), V.SYNTAX_ERR = (G[12] = "Syntax error", 12), V.INVALID_MODIFICATION_ERR = (G[13] = "Invalid modification", 13), V.NAMESPACE_ERR = (G[14] = "Invalid namespace", 14), V.INVALID_ACCESS_ERR = (G[15] = "Invalid access", 15);
  function N(u, a) {
    if (a instanceof Error)
      var d = a;
    else
      d = this, Error.call(this, G[u]), this.message = G[u], Error.captureStackTrace && Error.captureStackTrace(this, N);
    return d.code = u, a && (this.message = this.message + ": " + a), d;
  }
  N.prototype = Error.prototype, l(V, N);
  function S() {
  }
  S.prototype = {
    /**
     * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
     * @standard level1
     */
    length: 0,
    /**
     * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
     * @standard level1
     * @param index  unsigned long
     *   Index into the collection.
     * @return Node
     * 	The node at the indexth position in the NodeList, or null if that is not a valid index.
     */
    item: function(u) {
      return u >= 0 && u < this.length ? this[u] : null;
    },
    toString: function(u, a) {
      for (var d = [], f = 0; f < this.length; f++)
        Oe(this[f], d, u, a);
      return d.join("");
    },
    /**
     * @private
     * @param {function (Node):boolean} predicate
     * @returns {Node[]}
     */
    filter: function(u) {
      return Array.prototype.filter.call(this, u);
    },
    /**
     * @private
     * @param {Node} item
     * @returns {number}
     */
    indexOf: function(u) {
      return Array.prototype.indexOf.call(this, u);
    }
  };
  function U(u, a) {
    this._node = u, this._refresh = a, P(this);
  }
  function P(u) {
    var a = u._node._inc || u._node.ownerDocument._inc;
    if (u._inc !== a) {
      var d = u._refresh(u._node);
      if (Lt(u, "length", d.length), !u.$$length || d.length < u.$$length)
        for (var f = d.length; f in u; f++)
          Object.prototype.hasOwnProperty.call(u, f) && delete u[f];
      l(d, u), u._inc = a;
    }
  }
  U.prototype.item = function(u) {
    return P(this), this[u] || null;
  }, h(U, S);
  function j() {
  }
  function O(u, a) {
    for (var d = u.length; d--; )
      if (u[d] === a)
        return d;
  }
  function B(u, a, d, f) {
    if (f ? a[O(a, f)] = d : a[a.length++] = d, u) {
      d.ownerElement = u;
      var D = u.ownerDocument;
      D && (f && Ue(D, u, f), Z(D, u, d));
    }
  }
  function F(u, a, d) {
    var f = O(a, d);
    if (f >= 0) {
      for (var D = a.length - 1; f < D; )
        a[f] = a[++f];
      if (a.length = D, u) {
        var L = u.ownerDocument;
        L && (Ue(L, u, d), d.ownerElement = null);
      }
    } else
      throw new N(b, new Error(u.tagName + "@" + d));
  }
  j.prototype = {
    length: 0,
    item: S.prototype.item,
    getNamedItem: function(u) {
      for (var a = this.length; a--; ) {
        var d = this[a];
        if (d.nodeName == u)
          return d;
      }
    },
    setNamedItem: function(u) {
      var a = u.ownerElement;
      if (a && a != this._ownerElement)
        throw new N(w);
      var d = this.getNamedItem(u.nodeName);
      return B(this._ownerElement, this, u, d), d;
    },
    /* returns Node */
    setNamedItemNS: function(u) {
      var a = u.ownerElement, d;
      if (a && a != this._ownerElement)
        throw new N(w);
      return d = this.getNamedItemNS(u.namespaceURI, u.localName), B(this._ownerElement, this, u, d), d;
    },
    /* returns Node */
    removeNamedItem: function(u) {
      var a = this.getNamedItem(u);
      return F(this._ownerElement, this, a), a;
    },
    // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
    //for level2
    removeNamedItemNS: function(u, a) {
      var d = this.getNamedItemNS(u, a);
      return F(this._ownerElement, this, d), d;
    },
    getNamedItemNS: function(u, a) {
      for (var d = this.length; d--; ) {
        var f = this[d];
        if (f.localName == a && f.namespaceURI == u)
          return f;
      }
      return null;
    }
  };
  function K() {
  }
  K.prototype = {
    /**
     * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
     * The different implementations fairly diverged in what kind of features were reported.
     * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
     *
     * @deprecated It is deprecated and modern browsers return true in all cases.
     *
     * @param {string} feature
     * @param {string} [version]
     * @returns {boolean} always true
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
     * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
     * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
     */
    hasFeature: function(u, a) {
      return !0;
    },
    /**
     * Creates an XML Document object of the specified type with its document element.
     *
     * __It behaves slightly different from the description in the living standard__:
     * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
     * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
     * - this implementation is not validating names or qualified names
     *   (when parsing XML strings, the SAX parser takes care of that)
     *
     * @param {string|null} namespaceURI
     * @param {string} qualifiedName
     * @param {DocumentType=null} doctype
     * @returns {Document}
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
     * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
     * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
     *
     * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
     * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
     * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
     */
    createDocument: function(u, a, d) {
      var f = new Q();
      if (f.implementation = this, f.childNodes = new S(), f.doctype = d || null, d && f.appendChild(d), a) {
        var D = f.createElementNS(u, a);
        f.appendChild(D);
      }
      return f;
    },
    /**
     * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
     *
     * __This behavior is slightly different from the in the specs__:
     * - this implementation is not validating names or qualified names
     *   (when parsing XML strings, the SAX parser takes care of that)
     *
     * @param {string} qualifiedName
     * @param {string} [publicId]
     * @param {string} [systemId]
     * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
     * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
     * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
     * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
     *
     * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
     * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
     * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
     */
    createDocumentType: function(u, a, d) {
      var f = new Ye();
      return f.name = u, f.nodeName = u, f.publicId = a || "", f.systemId = d || "", f;
    }
  };
  function I() {
  }
  I.prototype = {
    firstChild: null,
    lastChild: null,
    previousSibling: null,
    nextSibling: null,
    attributes: null,
    parentNode: null,
    childNodes: null,
    ownerDocument: null,
    nodeValue: null,
    namespaceURI: null,
    prefix: null,
    localName: null,
    // Modified in DOM Level 2:
    insertBefore: function(u, a) {
      return Ae(this, u, a);
    },
    replaceChild: function(u, a) {
      Ae(this, u, a, $e), a && this.removeChild(a);
    },
    removeChild: function(u) {
      return ne(this, u);
    },
    appendChild: function(u) {
      return this.insertBefore(u, null);
    },
    hasChildNodes: function() {
      return this.firstChild != null;
    },
    cloneNode: function(u) {
      return dt(this.ownerDocument || this, this, u);
    },
    // Modified in DOM Level 2:
    normalize: function() {
      for (var u = this.firstChild; u; ) {
        var a = u.nextSibling;
        a && a.nodeType == y && u.nodeType == y ? (this.removeChild(a), u.appendData(a.data)) : (u.normalize(), u = a);
      }
    },
    // Introduced in DOM Level 2:
    isSupported: function(u, a) {
      return this.ownerDocument.implementation.hasFeature(u, a);
    },
    // Introduced in DOM Level 2:
    hasAttributes: function() {
      return this.attributes.length > 0;
    },
    /**
     * Look up the prefix associated to the given namespace URI, starting from this node.
     * **The default namespace declarations are ignored by this method.**
     * See Namespace Prefix Lookup for details on the algorithm used by this method.
     *
     * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
     *
     * @param {string | null} namespaceURI
     * @returns {string | null}
     * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
     * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
     * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
     * @see https://github.com/xmldom/xmldom/issues/322
     */
    lookupPrefix: function(u) {
      for (var a = this; a; ) {
        var d = a._nsMap;
        if (d) {
          for (var f in d)
            if (Object.prototype.hasOwnProperty.call(d, f) && d[f] === u)
              return f;
        }
        a = a.nodeType == v ? a.ownerDocument : a.parentNode;
      }
      return null;
    },
    // Introduced in DOM Level 3:
    lookupNamespaceURI: function(u) {
      for (var a = this; a; ) {
        var d = a._nsMap;
        if (d && Object.prototype.hasOwnProperty.call(d, u))
          return d[u];
        a = a.nodeType == v ? a.ownerDocument : a.parentNode;
      }
      return null;
    },
    // Introduced in DOM Level 3:
    isDefaultNamespace: function(u) {
      var a = this.lookupPrefix(u);
      return a == null;
    }
  };
  function ue(u) {
    return u == "<" && "&lt;" || u == ">" && "&gt;" || u == "&" && "&amp;" || u == '"' && "&quot;" || "&#" + u.charCodeAt() + ";";
  }
  l(p, I), l(p, I.prototype);
  function he(u, a) {
    if (a(u))
      return !0;
    if (u = u.firstChild)
      do
        if (he(u, a))
          return !0;
      while (u = u.nextSibling);
  }
  function Q() {
    this.ownerDocument = this;
  }
  function Z(u, a, d) {
    u && u._inc++;
    var f = d.namespaceURI;
    f === r.XMLNS && (a._nsMap[d.prefix ? d.localName : ""] = d.value);
  }
  function Ue(u, a, d, f) {
    u && u._inc++;
    var D = d.namespaceURI;
    D === r.XMLNS && delete a._nsMap[d.prefix ? d.localName : ""];
  }
  function Se(u, a, d) {
    if (u && u._inc) {
      u._inc++;
      var f = a.childNodes;
      if (d)
        f[f.length++] = d;
      else {
        for (var D = a.firstChild, L = 0; D; )
          f[L++] = D, D = D.nextSibling;
        f.length = L, delete f[f.length];
      }
    }
  }
  function ne(u, a) {
    var d = a.previousSibling, f = a.nextSibling;
    return d ? d.nextSibling = f : u.firstChild = f, f ? f.previousSibling = d : u.lastChild = d, a.parentNode = null, a.previousSibling = null, a.nextSibling = null, Se(u.ownerDocument, u), a;
  }
  function ce(u) {
    return u && (u.nodeType === I.DOCUMENT_NODE || u.nodeType === I.DOCUMENT_FRAGMENT_NODE || u.nodeType === I.ELEMENT_NODE);
  }
  function Pe(u) {
    return u && (le(u) || Le(u) || oe(u) || u.nodeType === I.DOCUMENT_FRAGMENT_NODE || u.nodeType === I.COMMENT_NODE || u.nodeType === I.PROCESSING_INSTRUCTION_NODE);
  }
  function oe(u) {
    return u && u.nodeType === I.DOCUMENT_TYPE_NODE;
  }
  function le(u) {
    return u && u.nodeType === I.ELEMENT_NODE;
  }
  function Le(u) {
    return u && u.nodeType === I.TEXT_NODE;
  }
  function te(u, a) {
    var d = u.childNodes || [];
    if (e(d, le) || oe(a))
      return !1;
    var f = e(d, oe);
    return !(a && f && d.indexOf(f) > d.indexOf(a));
  }
  function ke(u, a) {
    var d = u.childNodes || [];
    function f(L) {
      return le(L) && L !== a;
    }
    if (e(d, f))
      return !1;
    var D = e(d, oe);
    return !(a && D && d.indexOf(D) > d.indexOf(a));
  }
  function J(u, a, d) {
    if (!ce(u))
      throw new N(A, "Unexpected parent node type " + u.nodeType);
    if (d && d.parentNode !== u)
      throw new N(b, "child not in parent");
    if (
      // 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
      !Pe(a) || // 5. If either `node` is a Text node and `parent` is a document,
      // the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
      // || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
      // or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
      oe(a) && u.nodeType !== I.DOCUMENT_NODE
    )
      throw new N(
        A,
        "Unexpected node type " + a.nodeType + " for parent node type " + u.nodeType
      );
  }
  function We(u, a, d) {
    var f = u.childNodes || [], D = a.childNodes || [];
    if (a.nodeType === I.DOCUMENT_FRAGMENT_NODE) {
      var L = D.filter(le);
      if (L.length > 1 || e(D, Le))
        throw new N(A, "More than one element or text in fragment");
      if (L.length === 1 && !te(u, d))
        throw new N(A, "Element in fragment can not be inserted before doctype");
    }
    if (le(a) && !te(u, d))
      throw new N(A, "Only one element can be added and only after doctype");
    if (oe(a)) {
      if (e(f, oe))
        throw new N(A, "Only one doctype is allowed");
      var $ = e(f, le);
      if (d && f.indexOf($) < f.indexOf(d))
        throw new N(A, "Doctype can only be inserted before an element");
      if (!d && $)
        throw new N(A, "Doctype can not be appended since element is present");
    }
  }
  function $e(u, a, d) {
    var f = u.childNodes || [], D = a.childNodes || [];
    if (a.nodeType === I.DOCUMENT_FRAGMENT_NODE) {
      var L = D.filter(le);
      if (L.length > 1 || e(D, Le))
        throw new N(A, "More than one element or text in fragment");
      if (L.length === 1 && !ke(u, d))
        throw new N(A, "Element in fragment can not be inserted before doctype");
    }
    if (le(a) && !ke(u, d))
      throw new N(A, "Only one element can be added and only after doctype");
    if (oe(a)) {
      if (e(f, function(pe) {
        return oe(pe) && pe !== d;
      }))
        throw new N(A, "Only one doctype is allowed");
      var $ = e(f, le);
      if (d && f.indexOf($) < f.indexOf(d))
        throw new N(A, "Doctype can only be inserted before an element");
    }
  }
  function Ae(u, a, d, f) {
    J(u, a, d), u.nodeType === I.DOCUMENT_NODE && (f || We)(u, a, d);
    var D = a.parentNode;
    if (D && D.removeChild(a), a.nodeType === Y) {
      var L = a.firstChild;
      if (L == null)
        return a;
      var $ = a.lastChild;
    } else
      L = $ = a;
    var ae = d ? d.previousSibling : u.lastChild;
    L.previousSibling = ae, $.nextSibling = d, ae ? ae.nextSibling = L : u.firstChild = L, d == null ? u.lastChild = $ : d.previousSibling = $;
    do
      L.parentNode = u;
    while (L !== $ && (L = L.nextSibling));
    return Se(u.ownerDocument || u, u), a.nodeType == Y && (a.firstChild = a.lastChild = null), a;
  }
  function _e(u, a) {
    return a.parentNode && a.parentNode.removeChild(a), a.parentNode = u, a.previousSibling = u.lastChild, a.nextSibling = null, a.previousSibling ? a.previousSibling.nextSibling = a : u.firstChild = a, u.lastChild = a, Se(u.ownerDocument, u, a), a;
  }
  Q.prototype = {
    //implementation : null,
    nodeName: "#document",
    nodeType: M,
    /**
     * The DocumentType node of the document.
     *
     * @readonly
     * @type DocumentType
     */
    doctype: null,
    documentElement: null,
    _inc: 1,
    insertBefore: function(u, a) {
      if (u.nodeType == Y) {
        for (var d = u.firstChild; d; ) {
          var f = d.nextSibling;
          this.insertBefore(d, a), d = f;
        }
        return u;
      }
      return Ae(this, u, a), u.ownerDocument = this, this.documentElement === null && u.nodeType === E && (this.documentElement = u), u;
    },
    removeChild: function(u) {
      return this.documentElement == u && (this.documentElement = null), ne(this, u);
    },
    replaceChild: function(u, a) {
      Ae(this, u, a, $e), u.ownerDocument = this, a && this.removeChild(a), le(u) && (this.documentElement = u);
    },
    // Introduced in DOM Level 2:
    importNode: function(u, a) {
      return St(this, u, a);
    },
    // Introduced in DOM Level 2:
    getElementById: function(u) {
      var a = null;
      return he(this.documentElement, function(d) {
        if (d.nodeType == E && d.getAttribute("id") == u)
          return a = d, !0;
      }), a;
    },
    /**
     * The `getElementsByClassName` method of `Document` interface returns an array-like object
     * of all child elements which have **all** of the given class name(s).
     *
     * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
     *
     *
     * Warning: This is a live LiveNodeList.
     * Changes in the DOM will reflect in the array as the changes occur.
     * If an element selected by this array no longer qualifies for the selector,
     * it will automatically be removed. Be aware of this for iteration purposes.
     *
     * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
     * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
     */
    getElementsByClassName: function(u) {
      var a = c(u);
      return new U(this, function(d) {
        var f = [];
        return a.length > 0 && he(d.documentElement, function(D) {
          if (D !== d && D.nodeType === E) {
            var L = D.getAttribute("class");
            if (L) {
              var $ = u === L;
              if (!$) {
                var ae = c(L);
                $ = a.every(o(ae));
              }
              $ && f.push(D);
            }
          }
        }), f;
      });
    },
    //document factory method:
    createElement: function(u) {
      var a = new H();
      a.ownerDocument = this, a.nodeName = u, a.tagName = u, a.localName = u, a.childNodes = new S();
      var d = a.attributes = new j();
      return d._ownerElement = a, a;
    },
    createDocumentFragment: function() {
      var u = new ze();
      return u.ownerDocument = this, u.childNodes = new S(), u;
    },
    createTextNode: function(u) {
      var a = new st();
      return a.ownerDocument = this, a.appendData(u), a;
    },
    createComment: function(u) {
      var a = new ut();
      return a.ownerDocument = this, a.appendData(u), a;
    },
    createCDATASection: function(u) {
      var a = new at();
      return a.ownerDocument = this, a.appendData(u), a;
    },
    createProcessingInstruction: function(u, a) {
      var d = new lt();
      return d.ownerDocument = this, d.tagName = d.nodeName = d.target = u, d.nodeValue = d.data = a, d;
    },
    createAttribute: function(u) {
      var a = new ee();
      return a.ownerDocument = this, a.name = u, a.nodeName = u, a.localName = u, a.specified = !0, a;
    },
    createEntityReference: function(u) {
      var a = new ot();
      return a.ownerDocument = this, a.nodeName = u, a;
    },
    // Introduced in DOM Level 2:
    createElementNS: function(u, a) {
      var d = new H(), f = a.split(":"), D = d.attributes = new j();
      return d.childNodes = new S(), d.ownerDocument = this, d.nodeName = a, d.tagName = a, d.namespaceURI = u, f.length == 2 ? (d.prefix = f[0], d.localName = f[1]) : d.localName = a, D._ownerElement = d, d;
    },
    // Introduced in DOM Level 2:
    createAttributeNS: function(u, a) {
      var d = new ee(), f = a.split(":");
      return d.ownerDocument = this, d.nodeName = a, d.name = a, d.namespaceURI = u, d.specified = !0, f.length == 2 ? (d.prefix = f[0], d.localName = f[1]) : d.localName = a, d;
    }
  }, h(Q, I);
  function H() {
    this._nsMap = {};
  }
  H.prototype = {
    nodeType: E,
    hasAttribute: function(u) {
      return this.getAttributeNode(u) != null;
    },
    getAttribute: function(u) {
      var a = this.getAttributeNode(u);
      return a && a.value || "";
    },
    getAttributeNode: function(u) {
      return this.attributes.getNamedItem(u);
    },
    setAttribute: function(u, a) {
      var d = this.ownerDocument.createAttribute(u);
      d.value = d.nodeValue = "" + a, this.setAttributeNode(d);
    },
    removeAttribute: function(u) {
      var a = this.getAttributeNode(u);
      a && this.removeAttributeNode(a);
    },
    //four real opeartion method
    appendChild: function(u) {
      return u.nodeType === Y ? this.insertBefore(u, null) : _e(this, u);
    },
    setAttributeNode: function(u) {
      return this.attributes.setNamedItem(u);
    },
    setAttributeNodeNS: function(u) {
      return this.attributes.setNamedItemNS(u);
    },
    removeAttributeNode: function(u) {
      return this.attributes.removeNamedItem(u.nodeName);
    },
    //get real attribute name,and remove it by removeAttributeNode
    removeAttributeNS: function(u, a) {
      var d = this.getAttributeNodeNS(u, a);
      d && this.removeAttributeNode(d);
    },
    hasAttributeNS: function(u, a) {
      return this.getAttributeNodeNS(u, a) != null;
    },
    getAttributeNS: function(u, a) {
      var d = this.getAttributeNodeNS(u, a);
      return d && d.value || "";
    },
    setAttributeNS: function(u, a, d) {
      var f = this.ownerDocument.createAttributeNS(u, a);
      f.value = f.nodeValue = "" + d, this.setAttributeNode(f);
    },
    getAttributeNodeNS: function(u, a) {
      return this.attributes.getNamedItemNS(u, a);
    },
    getElementsByTagName: function(u) {
      return new U(this, function(a) {
        var d = [];
        return he(a, function(f) {
          f !== a && f.nodeType == E && (u === "*" || f.tagName == u) && d.push(f);
        }), d;
      });
    },
    getElementsByTagNameNS: function(u, a) {
      return new U(this, function(d) {
        var f = [];
        return he(d, function(D) {
          D !== d && D.nodeType === E && (u === "*" || D.namespaceURI === u) && (a === "*" || D.localName == a) && f.push(D);
        }), f;
      });
    }
  }, Q.prototype.getElementsByTagName = H.prototype.getElementsByTagName, Q.prototype.getElementsByTagNameNS = H.prototype.getElementsByTagNameNS, h(H, I);
  function ee() {
  }
  ee.prototype.nodeType = v, h(ee, I);
  function Te() {
  }
  Te.prototype = {
    data: "",
    substringData: function(u, a) {
      return this.data.substring(u, u + a);
    },
    appendData: function(u) {
      u = this.data + u, this.nodeValue = this.data = u, this.length = u.length;
    },
    insertData: function(u, a) {
      this.replaceData(u, 0, a);
    },
    appendChild: function(u) {
      throw new Error(G[A]);
    },
    deleteData: function(u, a) {
      this.replaceData(u, a, "");
    },
    replaceData: function(u, a, d) {
      var f = this.data.substring(0, u), D = this.data.substring(u + a);
      d = f + d + D, this.nodeValue = this.data = d, this.length = d.length;
    }
  }, h(Te, I);
  function st() {
  }
  st.prototype = {
    nodeName: "#text",
    nodeType: y,
    splitText: function(u) {
      var a = this.data, d = a.substring(u);
      a = a.substring(0, u), this.data = this.nodeValue = a, this.length = a.length;
      var f = this.ownerDocument.createTextNode(d);
      return this.parentNode && this.parentNode.insertBefore(f, this.nextSibling), f;
    }
  }, h(st, Te);
  function ut() {
  }
  ut.prototype = {
    nodeName: "#comment",
    nodeType: q
  }, h(ut, Te);
  function at() {
  }
  at.prototype = {
    nodeName: "#cdata-section",
    nodeType: R
  }, h(at, Te);
  function Ye() {
  }
  Ye.prototype.nodeType = X, h(Ye, I);
  function Ct() {
  }
  Ct.prototype.nodeType = se, h(Ct, I);
  function Nt() {
  }
  Nt.prototype.nodeType = T, h(Nt, I);
  function ot() {
  }
  ot.prototype.nodeType = C, h(ot, I);
  function ze() {
  }
  ze.prototype.nodeName = "#document-fragment", ze.prototype.nodeType = Y, h(ze, I);
  function lt() {
  }
  lt.prototype.nodeType = k, h(lt, I);
  function Rt() {
  }
  Rt.prototype.serializeToString = function(u, a, d) {
    return wt.call(u, a, d);
  }, I.prototype.toString = wt;
  function wt(u, a) {
    var d = [], f = this.nodeType == 9 && this.documentElement || this, D = f.prefix, L = f.namespaceURI;
    if (L && D == null) {
      var D = f.lookupPrefix(L);
      if (D == null)
        var $ = [
          { namespace: L, prefix: null }
          //{namespace:uri,prefix:''}
        ];
    }
    return Oe(this, d, u, a, $), d.join("");
  }
  function It(u, a, d) {
    var f = u.prefix || "", D = u.namespaceURI;
    if (!D || f === "xml" && D === r.XML || D === r.XMLNS)
      return !1;
    for (var L = d.length; L--; ) {
      var $ = d[L];
      if ($.prefix === f)
        return $.namespace !== D;
    }
    return !0;
  }
  function ct(u, a, d) {
    u.push(" ", a, '="', d.replace(/[<>&"\t\n\r]/g, ue), '"');
  }
  function Oe(u, a, d, f, D) {
    if (D || (D = []), f)
      if (u = f(u), u) {
        if (typeof u == "string") {
          a.push(u);
          return;
        }
      } else
        return;
    switch (u.nodeType) {
      case E:
        var L = u.attributes, $ = L.length, re = u.firstChild, ae = u.tagName;
        d = r.isHTML(u.namespaceURI) || d;
        var pe = ae;
        if (!d && !u.prefix && u.namespaceURI) {
          for (var Ee, fe = 0; fe < L.length; fe++)
            if (L.item(fe).name === "xmlns") {
              Ee = L.item(fe).value;
              break;
            }
          if (!Ee)
            for (var De = D.length - 1; De >= 0; De--) {
              var be = D[De];
              if (be.prefix === "" && be.namespace === u.namespaceURI) {
                Ee = be.namespace;
                break;
              }
            }
          if (Ee !== u.namespaceURI)
            for (var De = D.length - 1; De >= 0; De--) {
              var be = D[De];
              if (be.namespace === u.namespaceURI) {
                be.prefix && (pe = be.prefix + ":" + ae);
                break;
              }
            }
        }
        a.push("<", pe);
        for (var ye = 0; ye < $; ye++) {
          var de = L.item(ye);
          de.prefix == "xmlns" ? D.push({ prefix: de.localName, namespace: de.value }) : de.nodeName == "xmlns" && D.push({ prefix: "", namespace: de.value });
        }
        for (var ye = 0; ye < $; ye++) {
          var de = L.item(ye);
          if (It(de, d, D)) {
            var Ce = de.prefix || "", xe = de.namespaceURI;
            ct(a, Ce ? "xmlns:" + Ce : "xmlns", xe), D.push({ prefix: Ce, namespace: xe });
          }
          Oe(de, a, d, f, D);
        }
        if (ae === pe && It(u, d, D)) {
          var Ce = u.prefix || "", xe = u.namespaceURI;
          ct(a, Ce ? "xmlns:" + Ce : "xmlns", xe), D.push({ prefix: Ce, namespace: xe });
        }
        if (re || d && !/^(?:meta|link|img|br|hr|input)$/i.test(ae)) {
          if (a.push(">"), d && /^script$/i.test(ae))
            for (; re; )
              re.data ? a.push(re.data) : Oe(re, a, d, f, D.slice()), re = re.nextSibling;
          else
            for (; re; )
              Oe(re, a, d, f, D.slice()), re = re.nextSibling;
          a.push("</", pe, ">");
        } else
          a.push("/>");
        return;
      case M:
      case Y:
        for (var re = u.firstChild; re; )
          Oe(re, a, d, f, D.slice()), re = re.nextSibling;
        return;
      case v:
        return ct(a, u.name, u.value);
      case y:
        return a.push(
          u.data.replace(/[<&>]/g, ue)
        );
      case R:
        return a.push("<![CDATA[", u.data, "]]>");
      case q:
        return a.push("<!--", u.data, "-->");
      case X:
        var kt = u.publicId, Be = u.systemId;
        if (a.push("<!DOCTYPE ", u.name), kt)
          a.push(" PUBLIC ", kt), Be && Be != "." && a.push(" ", Be), a.push(">");
        else if (Be && Be != ".")
          a.push(" SYSTEM ", Be, ">");
        else {
          var Ot = u.internalSubset;
          Ot && a.push(" [", Ot, "]"), a.push(">");
        }
        return;
      case k:
        return a.push("<?", u.target, " ", u.data, "?>");
      case C:
        return a.push("&", u.nodeName, ";");
      //case ENTITY_NODE:
      //case NOTATION_NODE:
      default:
        a.push("??", u.nodeName);
    }
  }
  function St(u, a, d) {
    var f;
    switch (a.nodeType) {
      case E:
        f = a.cloneNode(!1), f.ownerDocument = u;
      //var attrs = node2.attributes;
      //var len = attrs.length;
      //for(var i=0;i<len;i++){
      //node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
      //}
      case Y:
        break;
      case v:
        d = !0;
        break;
    }
    if (f || (f = a.cloneNode(!1)), f.ownerDocument = u, f.parentNode = null, d)
      for (var D = a.firstChild; D; )
        f.appendChild(St(u, D, d)), D = D.nextSibling;
    return f;
  }
  function dt(u, a, d) {
    var f = new a.constructor();
    for (var D in a)
      if (Object.prototype.hasOwnProperty.call(a, D)) {
        var L = a[D];
        typeof L != "object" && L != f[D] && (f[D] = L);
      }
    switch (a.childNodes && (f.childNodes = new S()), f.ownerDocument = u, f.nodeType) {
      case E:
        var $ = a.attributes, ae = f.attributes = new j(), pe = $.length;
        ae._ownerElement = f;
        for (var Ee = 0; Ee < pe; Ee++)
          f.setAttributeNode(dt(u, $.item(Ee), !0));
        break;
      case v:
        d = !0;
    }
    if (d)
      for (var fe = a.firstChild; fe; )
        f.appendChild(dt(u, fe, d)), fe = fe.nextSibling;
    return f;
  }
  function Lt(u, a, d) {
    u[a] = d;
  }
  try {
    if (Object.defineProperty) {
      let u = function(a) {
        switch (a.nodeType) {
          case E:
          case Y:
            var d = [];
            for (a = a.firstChild; a; )
              a.nodeType !== 7 && a.nodeType !== 8 && d.push(u(a)), a = a.nextSibling;
            return d.join("");
          default:
            return a.nodeValue;
        }
      };
      Object.defineProperty(U.prototype, "length", {
        get: function() {
          return P(this), this.$$length;
        }
      }), Object.defineProperty(I.prototype, "textContent", {
        get: function() {
          return u(this);
        },
        set: function(a) {
          switch (this.nodeType) {
            case E:
            case Y:
              for (; this.firstChild; )
                this.removeChild(this.firstChild);
              (a || String(a)) && this.appendChild(this.ownerDocument.createTextNode(a));
              break;
            default:
              this.data = a, this.value = a, this.nodeValue = a;
          }
        }
      }), Lt = function(a, d, f) {
        a["$$" + d] = f;
      };
    }
  } catch (u) {
  }
  return ge.DocumentType = Ye, ge.DOMException = N, ge.DOMImplementation = K, ge.Element = H, ge.Node = I, ge.NodeList = S, ge.XMLSerializer = Rt, ge;
}
var je = {}, mt = {}, sr;
function mi() {
  return sr || (sr = 1, function(t) {
    var e = it().freeze;
    t.XML_ENTITIES = e({
      amp: "&",
      apos: "'",
      gt: ">",
      lt: "<",
      quot: '"'
    }), t.HTML_ENTITIES = e({
      Aacute: "Á",
      aacute: "á",
      Abreve: "Ă",
      abreve: "ă",
      ac: "∾",
      acd: "∿",
      acE: "∾̳",
      Acirc: "Â",
      acirc: "â",
      acute: "´",
      Acy: "А",
      acy: "а",
      AElig: "Æ",
      aelig: "æ",
      af: "⁡",
      Afr: "𝔄",
      afr: "𝔞",
      Agrave: "À",
      agrave: "à",
      alefsym: "ℵ",
      aleph: "ℵ",
      Alpha: "Α",
      alpha: "α",
      Amacr: "Ā",
      amacr: "ā",
      amalg: "⨿",
      AMP: "&",
      amp: "&",
      And: "⩓",
      and: "∧",
      andand: "⩕",
      andd: "⩜",
      andslope: "⩘",
      andv: "⩚",
      ang: "∠",
      ange: "⦤",
      angle: "∠",
      angmsd: "∡",
      angmsdaa: "⦨",
      angmsdab: "⦩",
      angmsdac: "⦪",
      angmsdad: "⦫",
      angmsdae: "⦬",
      angmsdaf: "⦭",
      angmsdag: "⦮",
      angmsdah: "⦯",
      angrt: "∟",
      angrtvb: "⊾",
      angrtvbd: "⦝",
      angsph: "∢",
      angst: "Å",
      angzarr: "⍼",
      Aogon: "Ą",
      aogon: "ą",
      Aopf: "𝔸",
      aopf: "𝕒",
      ap: "≈",
      apacir: "⩯",
      apE: "⩰",
      ape: "≊",
      apid: "≋",
      apos: "'",
      ApplyFunction: "⁡",
      approx: "≈",
      approxeq: "≊",
      Aring: "Å",
      aring: "å",
      Ascr: "𝒜",
      ascr: "𝒶",
      Assign: "≔",
      ast: "*",
      asymp: "≈",
      asympeq: "≍",
      Atilde: "Ã",
      atilde: "ã",
      Auml: "Ä",
      auml: "ä",
      awconint: "∳",
      awint: "⨑",
      backcong: "≌",
      backepsilon: "϶",
      backprime: "‵",
      backsim: "∽",
      backsimeq: "⋍",
      Backslash: "∖",
      Barv: "⫧",
      barvee: "⊽",
      Barwed: "⌆",
      barwed: "⌅",
      barwedge: "⌅",
      bbrk: "⎵",
      bbrktbrk: "⎶",
      bcong: "≌",
      Bcy: "Б",
      bcy: "б",
      bdquo: "„",
      becaus: "∵",
      Because: "∵",
      because: "∵",
      bemptyv: "⦰",
      bepsi: "϶",
      bernou: "ℬ",
      Bernoullis: "ℬ",
      Beta: "Β",
      beta: "β",
      beth: "ℶ",
      between: "≬",
      Bfr: "𝔅",
      bfr: "𝔟",
      bigcap: "⋂",
      bigcirc: "◯",
      bigcup: "⋃",
      bigodot: "⨀",
      bigoplus: "⨁",
      bigotimes: "⨂",
      bigsqcup: "⨆",
      bigstar: "★",
      bigtriangledown: "▽",
      bigtriangleup: "△",
      biguplus: "⨄",
      bigvee: "⋁",
      bigwedge: "⋀",
      bkarow: "⤍",
      blacklozenge: "⧫",
      blacksquare: "▪",
      blacktriangle: "▴",
      blacktriangledown: "▾",
      blacktriangleleft: "◂",
      blacktriangleright: "▸",
      blank: "␣",
      blk12: "▒",
      blk14: "░",
      blk34: "▓",
      block: "█",
      bne: "=⃥",
      bnequiv: "≡⃥",
      bNot: "⫭",
      bnot: "⌐",
      Bopf: "𝔹",
      bopf: "𝕓",
      bot: "⊥",
      bottom: "⊥",
      bowtie: "⋈",
      boxbox: "⧉",
      boxDL: "╗",
      boxDl: "╖",
      boxdL: "╕",
      boxdl: "┐",
      boxDR: "╔",
      boxDr: "╓",
      boxdR: "╒",
      boxdr: "┌",
      boxH: "═",
      boxh: "─",
      boxHD: "╦",
      boxHd: "╤",
      boxhD: "╥",
      boxhd: "┬",
      boxHU: "╩",
      boxHu: "╧",
      boxhU: "╨",
      boxhu: "┴",
      boxminus: "⊟",
      boxplus: "⊞",
      boxtimes: "⊠",
      boxUL: "╝",
      boxUl: "╜",
      boxuL: "╛",
      boxul: "┘",
      boxUR: "╚",
      boxUr: "╙",
      boxuR: "╘",
      boxur: "└",
      boxV: "║",
      boxv: "│",
      boxVH: "╬",
      boxVh: "╫",
      boxvH: "╪",
      boxvh: "┼",
      boxVL: "╣",
      boxVl: "╢",
      boxvL: "╡",
      boxvl: "┤",
      boxVR: "╠",
      boxVr: "╟",
      boxvR: "╞",
      boxvr: "├",
      bprime: "‵",
      Breve: "˘",
      breve: "˘",
      brvbar: "¦",
      Bscr: "ℬ",
      bscr: "𝒷",
      bsemi: "⁏",
      bsim: "∽",
      bsime: "⋍",
      bsol: "\\",
      bsolb: "⧅",
      bsolhsub: "⟈",
      bull: "•",
      bullet: "•",
      bump: "≎",
      bumpE: "⪮",
      bumpe: "≏",
      Bumpeq: "≎",
      bumpeq: "≏",
      Cacute: "Ć",
      cacute: "ć",
      Cap: "⋒",
      cap: "∩",
      capand: "⩄",
      capbrcup: "⩉",
      capcap: "⩋",
      capcup: "⩇",
      capdot: "⩀",
      CapitalDifferentialD: "ⅅ",
      caps: "∩︀",
      caret: "⁁",
      caron: "ˇ",
      Cayleys: "ℭ",
      ccaps: "⩍",
      Ccaron: "Č",
      ccaron: "č",
      Ccedil: "Ç",
      ccedil: "ç",
      Ccirc: "Ĉ",
      ccirc: "ĉ",
      Cconint: "∰",
      ccups: "⩌",
      ccupssm: "⩐",
      Cdot: "Ċ",
      cdot: "ċ",
      cedil: "¸",
      Cedilla: "¸",
      cemptyv: "⦲",
      cent: "¢",
      CenterDot: "·",
      centerdot: "·",
      Cfr: "ℭ",
      cfr: "𝔠",
      CHcy: "Ч",
      chcy: "ч",
      check: "✓",
      checkmark: "✓",
      Chi: "Χ",
      chi: "χ",
      cir: "○",
      circ: "ˆ",
      circeq: "≗",
      circlearrowleft: "↺",
      circlearrowright: "↻",
      circledast: "⊛",
      circledcirc: "⊚",
      circleddash: "⊝",
      CircleDot: "⊙",
      circledR: "®",
      circledS: "Ⓢ",
      CircleMinus: "⊖",
      CirclePlus: "⊕",
      CircleTimes: "⊗",
      cirE: "⧃",
      cire: "≗",
      cirfnint: "⨐",
      cirmid: "⫯",
      cirscir: "⧂",
      ClockwiseContourIntegral: "∲",
      CloseCurlyDoubleQuote: "”",
      CloseCurlyQuote: "’",
      clubs: "♣",
      clubsuit: "♣",
      Colon: "∷",
      colon: ":",
      Colone: "⩴",
      colone: "≔",
      coloneq: "≔",
      comma: ",",
      commat: "@",
      comp: "∁",
      compfn: "∘",
      complement: "∁",
      complexes: "ℂ",
      cong: "≅",
      congdot: "⩭",
      Congruent: "≡",
      Conint: "∯",
      conint: "∮",
      ContourIntegral: "∮",
      Copf: "ℂ",
      copf: "𝕔",
      coprod: "∐",
      Coproduct: "∐",
      COPY: "©",
      copy: "©",
      copysr: "℗",
      CounterClockwiseContourIntegral: "∳",
      crarr: "↵",
      Cross: "⨯",
      cross: "✗",
      Cscr: "𝒞",
      cscr: "𝒸",
      csub: "⫏",
      csube: "⫑",
      csup: "⫐",
      csupe: "⫒",
      ctdot: "⋯",
      cudarrl: "⤸",
      cudarrr: "⤵",
      cuepr: "⋞",
      cuesc: "⋟",
      cularr: "↶",
      cularrp: "⤽",
      Cup: "⋓",
      cup: "∪",
      cupbrcap: "⩈",
      CupCap: "≍",
      cupcap: "⩆",
      cupcup: "⩊",
      cupdot: "⊍",
      cupor: "⩅",
      cups: "∪︀",
      curarr: "↷",
      curarrm: "⤼",
      curlyeqprec: "⋞",
      curlyeqsucc: "⋟",
      curlyvee: "⋎",
      curlywedge: "⋏",
      curren: "¤",
      curvearrowleft: "↶",
      curvearrowright: "↷",
      cuvee: "⋎",
      cuwed: "⋏",
      cwconint: "∲",
      cwint: "∱",
      cylcty: "⌭",
      Dagger: "‡",
      dagger: "†",
      daleth: "ℸ",
      Darr: "↡",
      dArr: "⇓",
      darr: "↓",
      dash: "‐",
      Dashv: "⫤",
      dashv: "⊣",
      dbkarow: "⤏",
      dblac: "˝",
      Dcaron: "Ď",
      dcaron: "ď",
      Dcy: "Д",
      dcy: "д",
      DD: "ⅅ",
      dd: "ⅆ",
      ddagger: "‡",
      ddarr: "⇊",
      DDotrahd: "⤑",
      ddotseq: "⩷",
      deg: "°",
      Del: "∇",
      Delta: "Δ",
      delta: "δ",
      demptyv: "⦱",
      dfisht: "⥿",
      Dfr: "𝔇",
      dfr: "𝔡",
      dHar: "⥥",
      dharl: "⇃",
      dharr: "⇂",
      DiacriticalAcute: "´",
      DiacriticalDot: "˙",
      DiacriticalDoubleAcute: "˝",
      DiacriticalGrave: "`",
      DiacriticalTilde: "˜",
      diam: "⋄",
      Diamond: "⋄",
      diamond: "⋄",
      diamondsuit: "♦",
      diams: "♦",
      die: "¨",
      DifferentialD: "ⅆ",
      digamma: "ϝ",
      disin: "⋲",
      div: "÷",
      divide: "÷",
      divideontimes: "⋇",
      divonx: "⋇",
      DJcy: "Ђ",
      djcy: "ђ",
      dlcorn: "⌞",
      dlcrop: "⌍",
      dollar: "$",
      Dopf: "𝔻",
      dopf: "𝕕",
      Dot: "¨",
      dot: "˙",
      DotDot: "⃜",
      doteq: "≐",
      doteqdot: "≑",
      DotEqual: "≐",
      dotminus: "∸",
      dotplus: "∔",
      dotsquare: "⊡",
      doublebarwedge: "⌆",
      DoubleContourIntegral: "∯",
      DoubleDot: "¨",
      DoubleDownArrow: "⇓",
      DoubleLeftArrow: "⇐",
      DoubleLeftRightArrow: "⇔",
      DoubleLeftTee: "⫤",
      DoubleLongLeftArrow: "⟸",
      DoubleLongLeftRightArrow: "⟺",
      DoubleLongRightArrow: "⟹",
      DoubleRightArrow: "⇒",
      DoubleRightTee: "⊨",
      DoubleUpArrow: "⇑",
      DoubleUpDownArrow: "⇕",
      DoubleVerticalBar: "∥",
      DownArrow: "↓",
      Downarrow: "⇓",
      downarrow: "↓",
      DownArrowBar: "⤓",
      DownArrowUpArrow: "⇵",
      DownBreve: "̑",
      downdownarrows: "⇊",
      downharpoonleft: "⇃",
      downharpoonright: "⇂",
      DownLeftRightVector: "⥐",
      DownLeftTeeVector: "⥞",
      DownLeftVector: "↽",
      DownLeftVectorBar: "⥖",
      DownRightTeeVector: "⥟",
      DownRightVector: "⇁",
      DownRightVectorBar: "⥗",
      DownTee: "⊤",
      DownTeeArrow: "↧",
      drbkarow: "⤐",
      drcorn: "⌟",
      drcrop: "⌌",
      Dscr: "𝒟",
      dscr: "𝒹",
      DScy: "Ѕ",
      dscy: "ѕ",
      dsol: "⧶",
      Dstrok: "Đ",
      dstrok: "đ",
      dtdot: "⋱",
      dtri: "▿",
      dtrif: "▾",
      duarr: "⇵",
      duhar: "⥯",
      dwangle: "⦦",
      DZcy: "Џ",
      dzcy: "џ",
      dzigrarr: "⟿",
      Eacute: "É",
      eacute: "é",
      easter: "⩮",
      Ecaron: "Ě",
      ecaron: "ě",
      ecir: "≖",
      Ecirc: "Ê",
      ecirc: "ê",
      ecolon: "≕",
      Ecy: "Э",
      ecy: "э",
      eDDot: "⩷",
      Edot: "Ė",
      eDot: "≑",
      edot: "ė",
      ee: "ⅇ",
      efDot: "≒",
      Efr: "𝔈",
      efr: "𝔢",
      eg: "⪚",
      Egrave: "È",
      egrave: "è",
      egs: "⪖",
      egsdot: "⪘",
      el: "⪙",
      Element: "∈",
      elinters: "⏧",
      ell: "ℓ",
      els: "⪕",
      elsdot: "⪗",
      Emacr: "Ē",
      emacr: "ē",
      empty: "∅",
      emptyset: "∅",
      EmptySmallSquare: "◻",
      emptyv: "∅",
      EmptyVerySmallSquare: "▫",
      emsp: " ",
      emsp13: " ",
      emsp14: " ",
      ENG: "Ŋ",
      eng: "ŋ",
      ensp: " ",
      Eogon: "Ę",
      eogon: "ę",
      Eopf: "𝔼",
      eopf: "𝕖",
      epar: "⋕",
      eparsl: "⧣",
      eplus: "⩱",
      epsi: "ε",
      Epsilon: "Ε",
      epsilon: "ε",
      epsiv: "ϵ",
      eqcirc: "≖",
      eqcolon: "≕",
      eqsim: "≂",
      eqslantgtr: "⪖",
      eqslantless: "⪕",
      Equal: "⩵",
      equals: "=",
      EqualTilde: "≂",
      equest: "≟",
      Equilibrium: "⇌",
      equiv: "≡",
      equivDD: "⩸",
      eqvparsl: "⧥",
      erarr: "⥱",
      erDot: "≓",
      Escr: "ℰ",
      escr: "ℯ",
      esdot: "≐",
      Esim: "⩳",
      esim: "≂",
      Eta: "Η",
      eta: "η",
      ETH: "Ð",
      eth: "ð",
      Euml: "Ë",
      euml: "ë",
      euro: "€",
      excl: "!",
      exist: "∃",
      Exists: "∃",
      expectation: "ℰ",
      ExponentialE: "ⅇ",
      exponentiale: "ⅇ",
      fallingdotseq: "≒",
      Fcy: "Ф",
      fcy: "ф",
      female: "♀",
      ffilig: "ﬃ",
      fflig: "ﬀ",
      ffllig: "ﬄ",
      Ffr: "𝔉",
      ffr: "𝔣",
      filig: "ﬁ",
      FilledSmallSquare: "◼",
      FilledVerySmallSquare: "▪",
      fjlig: "fj",
      flat: "♭",
      fllig: "ﬂ",
      fltns: "▱",
      fnof: "ƒ",
      Fopf: "𝔽",
      fopf: "𝕗",
      ForAll: "∀",
      forall: "∀",
      fork: "⋔",
      forkv: "⫙",
      Fouriertrf: "ℱ",
      fpartint: "⨍",
      frac12: "½",
      frac13: "⅓",
      frac14: "¼",
      frac15: "⅕",
      frac16: "⅙",
      frac18: "⅛",
      frac23: "⅔",
      frac25: "⅖",
      frac34: "¾",
      frac35: "⅗",
      frac38: "⅜",
      frac45: "⅘",
      frac56: "⅚",
      frac58: "⅝",
      frac78: "⅞",
      frasl: "⁄",
      frown: "⌢",
      Fscr: "ℱ",
      fscr: "𝒻",
      gacute: "ǵ",
      Gamma: "Γ",
      gamma: "γ",
      Gammad: "Ϝ",
      gammad: "ϝ",
      gap: "⪆",
      Gbreve: "Ğ",
      gbreve: "ğ",
      Gcedil: "Ģ",
      Gcirc: "Ĝ",
      gcirc: "ĝ",
      Gcy: "Г",
      gcy: "г",
      Gdot: "Ġ",
      gdot: "ġ",
      gE: "≧",
      ge: "≥",
      gEl: "⪌",
      gel: "⋛",
      geq: "≥",
      geqq: "≧",
      geqslant: "⩾",
      ges: "⩾",
      gescc: "⪩",
      gesdot: "⪀",
      gesdoto: "⪂",
      gesdotol: "⪄",
      gesl: "⋛︀",
      gesles: "⪔",
      Gfr: "𝔊",
      gfr: "𝔤",
      Gg: "⋙",
      gg: "≫",
      ggg: "⋙",
      gimel: "ℷ",
      GJcy: "Ѓ",
      gjcy: "ѓ",
      gl: "≷",
      gla: "⪥",
      glE: "⪒",
      glj: "⪤",
      gnap: "⪊",
      gnapprox: "⪊",
      gnE: "≩",
      gne: "⪈",
      gneq: "⪈",
      gneqq: "≩",
      gnsim: "⋧",
      Gopf: "𝔾",
      gopf: "𝕘",
      grave: "`",
      GreaterEqual: "≥",
      GreaterEqualLess: "⋛",
      GreaterFullEqual: "≧",
      GreaterGreater: "⪢",
      GreaterLess: "≷",
      GreaterSlantEqual: "⩾",
      GreaterTilde: "≳",
      Gscr: "𝒢",
      gscr: "ℊ",
      gsim: "≳",
      gsime: "⪎",
      gsiml: "⪐",
      Gt: "≫",
      GT: ">",
      gt: ">",
      gtcc: "⪧",
      gtcir: "⩺",
      gtdot: "⋗",
      gtlPar: "⦕",
      gtquest: "⩼",
      gtrapprox: "⪆",
      gtrarr: "⥸",
      gtrdot: "⋗",
      gtreqless: "⋛",
      gtreqqless: "⪌",
      gtrless: "≷",
      gtrsim: "≳",
      gvertneqq: "≩︀",
      gvnE: "≩︀",
      Hacek: "ˇ",
      hairsp: " ",
      half: "½",
      hamilt: "ℋ",
      HARDcy: "Ъ",
      hardcy: "ъ",
      hArr: "⇔",
      harr: "↔",
      harrcir: "⥈",
      harrw: "↭",
      Hat: "^",
      hbar: "ℏ",
      Hcirc: "Ĥ",
      hcirc: "ĥ",
      hearts: "♥",
      heartsuit: "♥",
      hellip: "…",
      hercon: "⊹",
      Hfr: "ℌ",
      hfr: "𝔥",
      HilbertSpace: "ℋ",
      hksearow: "⤥",
      hkswarow: "⤦",
      hoarr: "⇿",
      homtht: "∻",
      hookleftarrow: "↩",
      hookrightarrow: "↪",
      Hopf: "ℍ",
      hopf: "𝕙",
      horbar: "―",
      HorizontalLine: "─",
      Hscr: "ℋ",
      hscr: "𝒽",
      hslash: "ℏ",
      Hstrok: "Ħ",
      hstrok: "ħ",
      HumpDownHump: "≎",
      HumpEqual: "≏",
      hybull: "⁃",
      hyphen: "‐",
      Iacute: "Í",
      iacute: "í",
      ic: "⁣",
      Icirc: "Î",
      icirc: "î",
      Icy: "И",
      icy: "и",
      Idot: "İ",
      IEcy: "Е",
      iecy: "е",
      iexcl: "¡",
      iff: "⇔",
      Ifr: "ℑ",
      ifr: "𝔦",
      Igrave: "Ì",
      igrave: "ì",
      ii: "ⅈ",
      iiiint: "⨌",
      iiint: "∭",
      iinfin: "⧜",
      iiota: "℩",
      IJlig: "Ĳ",
      ijlig: "ĳ",
      Im: "ℑ",
      Imacr: "Ī",
      imacr: "ī",
      image: "ℑ",
      ImaginaryI: "ⅈ",
      imagline: "ℐ",
      imagpart: "ℑ",
      imath: "ı",
      imof: "⊷",
      imped: "Ƶ",
      Implies: "⇒",
      in: "∈",
      incare: "℅",
      infin: "∞",
      infintie: "⧝",
      inodot: "ı",
      Int: "∬",
      int: "∫",
      intcal: "⊺",
      integers: "ℤ",
      Integral: "∫",
      intercal: "⊺",
      Intersection: "⋂",
      intlarhk: "⨗",
      intprod: "⨼",
      InvisibleComma: "⁣",
      InvisibleTimes: "⁢",
      IOcy: "Ё",
      iocy: "ё",
      Iogon: "Į",
      iogon: "į",
      Iopf: "𝕀",
      iopf: "𝕚",
      Iota: "Ι",
      iota: "ι",
      iprod: "⨼",
      iquest: "¿",
      Iscr: "ℐ",
      iscr: "𝒾",
      isin: "∈",
      isindot: "⋵",
      isinE: "⋹",
      isins: "⋴",
      isinsv: "⋳",
      isinv: "∈",
      it: "⁢",
      Itilde: "Ĩ",
      itilde: "ĩ",
      Iukcy: "І",
      iukcy: "і",
      Iuml: "Ï",
      iuml: "ï",
      Jcirc: "Ĵ",
      jcirc: "ĵ",
      Jcy: "Й",
      jcy: "й",
      Jfr: "𝔍",
      jfr: "𝔧",
      jmath: "ȷ",
      Jopf: "𝕁",
      jopf: "𝕛",
      Jscr: "𝒥",
      jscr: "𝒿",
      Jsercy: "Ј",
      jsercy: "ј",
      Jukcy: "Є",
      jukcy: "є",
      Kappa: "Κ",
      kappa: "κ",
      kappav: "ϰ",
      Kcedil: "Ķ",
      kcedil: "ķ",
      Kcy: "К",
      kcy: "к",
      Kfr: "𝔎",
      kfr: "𝔨",
      kgreen: "ĸ",
      KHcy: "Х",
      khcy: "х",
      KJcy: "Ќ",
      kjcy: "ќ",
      Kopf: "𝕂",
      kopf: "𝕜",
      Kscr: "𝒦",
      kscr: "𝓀",
      lAarr: "⇚",
      Lacute: "Ĺ",
      lacute: "ĺ",
      laemptyv: "⦴",
      lagran: "ℒ",
      Lambda: "Λ",
      lambda: "λ",
      Lang: "⟪",
      lang: "⟨",
      langd: "⦑",
      langle: "⟨",
      lap: "⪅",
      Laplacetrf: "ℒ",
      laquo: "«",
      Larr: "↞",
      lArr: "⇐",
      larr: "←",
      larrb: "⇤",
      larrbfs: "⤟",
      larrfs: "⤝",
      larrhk: "↩",
      larrlp: "↫",
      larrpl: "⤹",
      larrsim: "⥳",
      larrtl: "↢",
      lat: "⪫",
      lAtail: "⤛",
      latail: "⤙",
      late: "⪭",
      lates: "⪭︀",
      lBarr: "⤎",
      lbarr: "⤌",
      lbbrk: "❲",
      lbrace: "{",
      lbrack: "[",
      lbrke: "⦋",
      lbrksld: "⦏",
      lbrkslu: "⦍",
      Lcaron: "Ľ",
      lcaron: "ľ",
      Lcedil: "Ļ",
      lcedil: "ļ",
      lceil: "⌈",
      lcub: "{",
      Lcy: "Л",
      lcy: "л",
      ldca: "⤶",
      ldquo: "“",
      ldquor: "„",
      ldrdhar: "⥧",
      ldrushar: "⥋",
      ldsh: "↲",
      lE: "≦",
      le: "≤",
      LeftAngleBracket: "⟨",
      LeftArrow: "←",
      Leftarrow: "⇐",
      leftarrow: "←",
      LeftArrowBar: "⇤",
      LeftArrowRightArrow: "⇆",
      leftarrowtail: "↢",
      LeftCeiling: "⌈",
      LeftDoubleBracket: "⟦",
      LeftDownTeeVector: "⥡",
      LeftDownVector: "⇃",
      LeftDownVectorBar: "⥙",
      LeftFloor: "⌊",
      leftharpoondown: "↽",
      leftharpoonup: "↼",
      leftleftarrows: "⇇",
      LeftRightArrow: "↔",
      Leftrightarrow: "⇔",
      leftrightarrow: "↔",
      leftrightarrows: "⇆",
      leftrightharpoons: "⇋",
      leftrightsquigarrow: "↭",
      LeftRightVector: "⥎",
      LeftTee: "⊣",
      LeftTeeArrow: "↤",
      LeftTeeVector: "⥚",
      leftthreetimes: "⋋",
      LeftTriangle: "⊲",
      LeftTriangleBar: "⧏",
      LeftTriangleEqual: "⊴",
      LeftUpDownVector: "⥑",
      LeftUpTeeVector: "⥠",
      LeftUpVector: "↿",
      LeftUpVectorBar: "⥘",
      LeftVector: "↼",
      LeftVectorBar: "⥒",
      lEg: "⪋",
      leg: "⋚",
      leq: "≤",
      leqq: "≦",
      leqslant: "⩽",
      les: "⩽",
      lescc: "⪨",
      lesdot: "⩿",
      lesdoto: "⪁",
      lesdotor: "⪃",
      lesg: "⋚︀",
      lesges: "⪓",
      lessapprox: "⪅",
      lessdot: "⋖",
      lesseqgtr: "⋚",
      lesseqqgtr: "⪋",
      LessEqualGreater: "⋚",
      LessFullEqual: "≦",
      LessGreater: "≶",
      lessgtr: "≶",
      LessLess: "⪡",
      lesssim: "≲",
      LessSlantEqual: "⩽",
      LessTilde: "≲",
      lfisht: "⥼",
      lfloor: "⌊",
      Lfr: "𝔏",
      lfr: "𝔩",
      lg: "≶",
      lgE: "⪑",
      lHar: "⥢",
      lhard: "↽",
      lharu: "↼",
      lharul: "⥪",
      lhblk: "▄",
      LJcy: "Љ",
      ljcy: "љ",
      Ll: "⋘",
      ll: "≪",
      llarr: "⇇",
      llcorner: "⌞",
      Lleftarrow: "⇚",
      llhard: "⥫",
      lltri: "◺",
      Lmidot: "Ŀ",
      lmidot: "ŀ",
      lmoust: "⎰",
      lmoustache: "⎰",
      lnap: "⪉",
      lnapprox: "⪉",
      lnE: "≨",
      lne: "⪇",
      lneq: "⪇",
      lneqq: "≨",
      lnsim: "⋦",
      loang: "⟬",
      loarr: "⇽",
      lobrk: "⟦",
      LongLeftArrow: "⟵",
      Longleftarrow: "⟸",
      longleftarrow: "⟵",
      LongLeftRightArrow: "⟷",
      Longleftrightarrow: "⟺",
      longleftrightarrow: "⟷",
      longmapsto: "⟼",
      LongRightArrow: "⟶",
      Longrightarrow: "⟹",
      longrightarrow: "⟶",
      looparrowleft: "↫",
      looparrowright: "↬",
      lopar: "⦅",
      Lopf: "𝕃",
      lopf: "𝕝",
      loplus: "⨭",
      lotimes: "⨴",
      lowast: "∗",
      lowbar: "_",
      LowerLeftArrow: "↙",
      LowerRightArrow: "↘",
      loz: "◊",
      lozenge: "◊",
      lozf: "⧫",
      lpar: "(",
      lparlt: "⦓",
      lrarr: "⇆",
      lrcorner: "⌟",
      lrhar: "⇋",
      lrhard: "⥭",
      lrm: "‎",
      lrtri: "⊿",
      lsaquo: "‹",
      Lscr: "ℒ",
      lscr: "𝓁",
      Lsh: "↰",
      lsh: "↰",
      lsim: "≲",
      lsime: "⪍",
      lsimg: "⪏",
      lsqb: "[",
      lsquo: "‘",
      lsquor: "‚",
      Lstrok: "Ł",
      lstrok: "ł",
      Lt: "≪",
      LT: "<",
      lt: "<",
      ltcc: "⪦",
      ltcir: "⩹",
      ltdot: "⋖",
      lthree: "⋋",
      ltimes: "⋉",
      ltlarr: "⥶",
      ltquest: "⩻",
      ltri: "◃",
      ltrie: "⊴",
      ltrif: "◂",
      ltrPar: "⦖",
      lurdshar: "⥊",
      luruhar: "⥦",
      lvertneqq: "≨︀",
      lvnE: "≨︀",
      macr: "¯",
      male: "♂",
      malt: "✠",
      maltese: "✠",
      Map: "⤅",
      map: "↦",
      mapsto: "↦",
      mapstodown: "↧",
      mapstoleft: "↤",
      mapstoup: "↥",
      marker: "▮",
      mcomma: "⨩",
      Mcy: "М",
      mcy: "м",
      mdash: "—",
      mDDot: "∺",
      measuredangle: "∡",
      MediumSpace: " ",
      Mellintrf: "ℳ",
      Mfr: "𝔐",
      mfr: "𝔪",
      mho: "℧",
      micro: "µ",
      mid: "∣",
      midast: "*",
      midcir: "⫰",
      middot: "·",
      minus: "−",
      minusb: "⊟",
      minusd: "∸",
      minusdu: "⨪",
      MinusPlus: "∓",
      mlcp: "⫛",
      mldr: "…",
      mnplus: "∓",
      models: "⊧",
      Mopf: "𝕄",
      mopf: "𝕞",
      mp: "∓",
      Mscr: "ℳ",
      mscr: "𝓂",
      mstpos: "∾",
      Mu: "Μ",
      mu: "μ",
      multimap: "⊸",
      mumap: "⊸",
      nabla: "∇",
      Nacute: "Ń",
      nacute: "ń",
      nang: "∠⃒",
      nap: "≉",
      napE: "⩰̸",
      napid: "≋̸",
      napos: "ŉ",
      napprox: "≉",
      natur: "♮",
      natural: "♮",
      naturals: "ℕ",
      nbsp: " ",
      nbump: "≎̸",
      nbumpe: "≏̸",
      ncap: "⩃",
      Ncaron: "Ň",
      ncaron: "ň",
      Ncedil: "Ņ",
      ncedil: "ņ",
      ncong: "≇",
      ncongdot: "⩭̸",
      ncup: "⩂",
      Ncy: "Н",
      ncy: "н",
      ndash: "–",
      ne: "≠",
      nearhk: "⤤",
      neArr: "⇗",
      nearr: "↗",
      nearrow: "↗",
      nedot: "≐̸",
      NegativeMediumSpace: "​",
      NegativeThickSpace: "​",
      NegativeThinSpace: "​",
      NegativeVeryThinSpace: "​",
      nequiv: "≢",
      nesear: "⤨",
      nesim: "≂̸",
      NestedGreaterGreater: "≫",
      NestedLessLess: "≪",
      NewLine: `
`,
      nexist: "∄",
      nexists: "∄",
      Nfr: "𝔑",
      nfr: "𝔫",
      ngE: "≧̸",
      nge: "≱",
      ngeq: "≱",
      ngeqq: "≧̸",
      ngeqslant: "⩾̸",
      nges: "⩾̸",
      nGg: "⋙̸",
      ngsim: "≵",
      nGt: "≫⃒",
      ngt: "≯",
      ngtr: "≯",
      nGtv: "≫̸",
      nhArr: "⇎",
      nharr: "↮",
      nhpar: "⫲",
      ni: "∋",
      nis: "⋼",
      nisd: "⋺",
      niv: "∋",
      NJcy: "Њ",
      njcy: "њ",
      nlArr: "⇍",
      nlarr: "↚",
      nldr: "‥",
      nlE: "≦̸",
      nle: "≰",
      nLeftarrow: "⇍",
      nleftarrow: "↚",
      nLeftrightarrow: "⇎",
      nleftrightarrow: "↮",
      nleq: "≰",
      nleqq: "≦̸",
      nleqslant: "⩽̸",
      nles: "⩽̸",
      nless: "≮",
      nLl: "⋘̸",
      nlsim: "≴",
      nLt: "≪⃒",
      nlt: "≮",
      nltri: "⋪",
      nltrie: "⋬",
      nLtv: "≪̸",
      nmid: "∤",
      NoBreak: "⁠",
      NonBreakingSpace: " ",
      Nopf: "ℕ",
      nopf: "𝕟",
      Not: "⫬",
      not: "¬",
      NotCongruent: "≢",
      NotCupCap: "≭",
      NotDoubleVerticalBar: "∦",
      NotElement: "∉",
      NotEqual: "≠",
      NotEqualTilde: "≂̸",
      NotExists: "∄",
      NotGreater: "≯",
      NotGreaterEqual: "≱",
      NotGreaterFullEqual: "≧̸",
      NotGreaterGreater: "≫̸",
      NotGreaterLess: "≹",
      NotGreaterSlantEqual: "⩾̸",
      NotGreaterTilde: "≵",
      NotHumpDownHump: "≎̸",
      NotHumpEqual: "≏̸",
      notin: "∉",
      notindot: "⋵̸",
      notinE: "⋹̸",
      notinva: "∉",
      notinvb: "⋷",
      notinvc: "⋶",
      NotLeftTriangle: "⋪",
      NotLeftTriangleBar: "⧏̸",
      NotLeftTriangleEqual: "⋬",
      NotLess: "≮",
      NotLessEqual: "≰",
      NotLessGreater: "≸",
      NotLessLess: "≪̸",
      NotLessSlantEqual: "⩽̸",
      NotLessTilde: "≴",
      NotNestedGreaterGreater: "⪢̸",
      NotNestedLessLess: "⪡̸",
      notni: "∌",
      notniva: "∌",
      notnivb: "⋾",
      notnivc: "⋽",
      NotPrecedes: "⊀",
      NotPrecedesEqual: "⪯̸",
      NotPrecedesSlantEqual: "⋠",
      NotReverseElement: "∌",
      NotRightTriangle: "⋫",
      NotRightTriangleBar: "⧐̸",
      NotRightTriangleEqual: "⋭",
      NotSquareSubset: "⊏̸",
      NotSquareSubsetEqual: "⋢",
      NotSquareSuperset: "⊐̸",
      NotSquareSupersetEqual: "⋣",
      NotSubset: "⊂⃒",
      NotSubsetEqual: "⊈",
      NotSucceeds: "⊁",
      NotSucceedsEqual: "⪰̸",
      NotSucceedsSlantEqual: "⋡",
      NotSucceedsTilde: "≿̸",
      NotSuperset: "⊃⃒",
      NotSupersetEqual: "⊉",
      NotTilde: "≁",
      NotTildeEqual: "≄",
      NotTildeFullEqual: "≇",
      NotTildeTilde: "≉",
      NotVerticalBar: "∤",
      npar: "∦",
      nparallel: "∦",
      nparsl: "⫽⃥",
      npart: "∂̸",
      npolint: "⨔",
      npr: "⊀",
      nprcue: "⋠",
      npre: "⪯̸",
      nprec: "⊀",
      npreceq: "⪯̸",
      nrArr: "⇏",
      nrarr: "↛",
      nrarrc: "⤳̸",
      nrarrw: "↝̸",
      nRightarrow: "⇏",
      nrightarrow: "↛",
      nrtri: "⋫",
      nrtrie: "⋭",
      nsc: "⊁",
      nsccue: "⋡",
      nsce: "⪰̸",
      Nscr: "𝒩",
      nscr: "𝓃",
      nshortmid: "∤",
      nshortparallel: "∦",
      nsim: "≁",
      nsime: "≄",
      nsimeq: "≄",
      nsmid: "∤",
      nspar: "∦",
      nsqsube: "⋢",
      nsqsupe: "⋣",
      nsub: "⊄",
      nsubE: "⫅̸",
      nsube: "⊈",
      nsubset: "⊂⃒",
      nsubseteq: "⊈",
      nsubseteqq: "⫅̸",
      nsucc: "⊁",
      nsucceq: "⪰̸",
      nsup: "⊅",
      nsupE: "⫆̸",
      nsupe: "⊉",
      nsupset: "⊃⃒",
      nsupseteq: "⊉",
      nsupseteqq: "⫆̸",
      ntgl: "≹",
      Ntilde: "Ñ",
      ntilde: "ñ",
      ntlg: "≸",
      ntriangleleft: "⋪",
      ntrianglelefteq: "⋬",
      ntriangleright: "⋫",
      ntrianglerighteq: "⋭",
      Nu: "Ν",
      nu: "ν",
      num: "#",
      numero: "№",
      numsp: " ",
      nvap: "≍⃒",
      nVDash: "⊯",
      nVdash: "⊮",
      nvDash: "⊭",
      nvdash: "⊬",
      nvge: "≥⃒",
      nvgt: ">⃒",
      nvHarr: "⤄",
      nvinfin: "⧞",
      nvlArr: "⤂",
      nvle: "≤⃒",
      nvlt: "<⃒",
      nvltrie: "⊴⃒",
      nvrArr: "⤃",
      nvrtrie: "⊵⃒",
      nvsim: "∼⃒",
      nwarhk: "⤣",
      nwArr: "⇖",
      nwarr: "↖",
      nwarrow: "↖",
      nwnear: "⤧",
      Oacute: "Ó",
      oacute: "ó",
      oast: "⊛",
      ocir: "⊚",
      Ocirc: "Ô",
      ocirc: "ô",
      Ocy: "О",
      ocy: "о",
      odash: "⊝",
      Odblac: "Ő",
      odblac: "ő",
      odiv: "⨸",
      odot: "⊙",
      odsold: "⦼",
      OElig: "Œ",
      oelig: "œ",
      ofcir: "⦿",
      Ofr: "𝔒",
      ofr: "𝔬",
      ogon: "˛",
      Ograve: "Ò",
      ograve: "ò",
      ogt: "⧁",
      ohbar: "⦵",
      ohm: "Ω",
      oint: "∮",
      olarr: "↺",
      olcir: "⦾",
      olcross: "⦻",
      oline: "‾",
      olt: "⧀",
      Omacr: "Ō",
      omacr: "ō",
      Omega: "Ω",
      omega: "ω",
      Omicron: "Ο",
      omicron: "ο",
      omid: "⦶",
      ominus: "⊖",
      Oopf: "𝕆",
      oopf: "𝕠",
      opar: "⦷",
      OpenCurlyDoubleQuote: "“",
      OpenCurlyQuote: "‘",
      operp: "⦹",
      oplus: "⊕",
      Or: "⩔",
      or: "∨",
      orarr: "↻",
      ord: "⩝",
      order: "ℴ",
      orderof: "ℴ",
      ordf: "ª",
      ordm: "º",
      origof: "⊶",
      oror: "⩖",
      orslope: "⩗",
      orv: "⩛",
      oS: "Ⓢ",
      Oscr: "𝒪",
      oscr: "ℴ",
      Oslash: "Ø",
      oslash: "ø",
      osol: "⊘",
      Otilde: "Õ",
      otilde: "õ",
      Otimes: "⨷",
      otimes: "⊗",
      otimesas: "⨶",
      Ouml: "Ö",
      ouml: "ö",
      ovbar: "⌽",
      OverBar: "‾",
      OverBrace: "⏞",
      OverBracket: "⎴",
      OverParenthesis: "⏜",
      par: "∥",
      para: "¶",
      parallel: "∥",
      parsim: "⫳",
      parsl: "⫽",
      part: "∂",
      PartialD: "∂",
      Pcy: "П",
      pcy: "п",
      percnt: "%",
      period: ".",
      permil: "‰",
      perp: "⊥",
      pertenk: "‱",
      Pfr: "𝔓",
      pfr: "𝔭",
      Phi: "Φ",
      phi: "φ",
      phiv: "ϕ",
      phmmat: "ℳ",
      phone: "☎",
      Pi: "Π",
      pi: "π",
      pitchfork: "⋔",
      piv: "ϖ",
      planck: "ℏ",
      planckh: "ℎ",
      plankv: "ℏ",
      plus: "+",
      plusacir: "⨣",
      plusb: "⊞",
      pluscir: "⨢",
      plusdo: "∔",
      plusdu: "⨥",
      pluse: "⩲",
      PlusMinus: "±",
      plusmn: "±",
      plussim: "⨦",
      plustwo: "⨧",
      pm: "±",
      Poincareplane: "ℌ",
      pointint: "⨕",
      Popf: "ℙ",
      popf: "𝕡",
      pound: "£",
      Pr: "⪻",
      pr: "≺",
      prap: "⪷",
      prcue: "≼",
      prE: "⪳",
      pre: "⪯",
      prec: "≺",
      precapprox: "⪷",
      preccurlyeq: "≼",
      Precedes: "≺",
      PrecedesEqual: "⪯",
      PrecedesSlantEqual: "≼",
      PrecedesTilde: "≾",
      preceq: "⪯",
      precnapprox: "⪹",
      precneqq: "⪵",
      precnsim: "⋨",
      precsim: "≾",
      Prime: "″",
      prime: "′",
      primes: "ℙ",
      prnap: "⪹",
      prnE: "⪵",
      prnsim: "⋨",
      prod: "∏",
      Product: "∏",
      profalar: "⌮",
      profline: "⌒",
      profsurf: "⌓",
      prop: "∝",
      Proportion: "∷",
      Proportional: "∝",
      propto: "∝",
      prsim: "≾",
      prurel: "⊰",
      Pscr: "𝒫",
      pscr: "𝓅",
      Psi: "Ψ",
      psi: "ψ",
      puncsp: " ",
      Qfr: "𝔔",
      qfr: "𝔮",
      qint: "⨌",
      Qopf: "ℚ",
      qopf: "𝕢",
      qprime: "⁗",
      Qscr: "𝒬",
      qscr: "𝓆",
      quaternions: "ℍ",
      quatint: "⨖",
      quest: "?",
      questeq: "≟",
      QUOT: '"',
      quot: '"',
      rAarr: "⇛",
      race: "∽̱",
      Racute: "Ŕ",
      racute: "ŕ",
      radic: "√",
      raemptyv: "⦳",
      Rang: "⟫",
      rang: "⟩",
      rangd: "⦒",
      range: "⦥",
      rangle: "⟩",
      raquo: "»",
      Rarr: "↠",
      rArr: "⇒",
      rarr: "→",
      rarrap: "⥵",
      rarrb: "⇥",
      rarrbfs: "⤠",
      rarrc: "⤳",
      rarrfs: "⤞",
      rarrhk: "↪",
      rarrlp: "↬",
      rarrpl: "⥅",
      rarrsim: "⥴",
      Rarrtl: "⤖",
      rarrtl: "↣",
      rarrw: "↝",
      rAtail: "⤜",
      ratail: "⤚",
      ratio: "∶",
      rationals: "ℚ",
      RBarr: "⤐",
      rBarr: "⤏",
      rbarr: "⤍",
      rbbrk: "❳",
      rbrace: "}",
      rbrack: "]",
      rbrke: "⦌",
      rbrksld: "⦎",
      rbrkslu: "⦐",
      Rcaron: "Ř",
      rcaron: "ř",
      Rcedil: "Ŗ",
      rcedil: "ŗ",
      rceil: "⌉",
      rcub: "}",
      Rcy: "Р",
      rcy: "р",
      rdca: "⤷",
      rdldhar: "⥩",
      rdquo: "”",
      rdquor: "”",
      rdsh: "↳",
      Re: "ℜ",
      real: "ℜ",
      realine: "ℛ",
      realpart: "ℜ",
      reals: "ℝ",
      rect: "▭",
      REG: "®",
      reg: "®",
      ReverseElement: "∋",
      ReverseEquilibrium: "⇋",
      ReverseUpEquilibrium: "⥯",
      rfisht: "⥽",
      rfloor: "⌋",
      Rfr: "ℜ",
      rfr: "𝔯",
      rHar: "⥤",
      rhard: "⇁",
      rharu: "⇀",
      rharul: "⥬",
      Rho: "Ρ",
      rho: "ρ",
      rhov: "ϱ",
      RightAngleBracket: "⟩",
      RightArrow: "→",
      Rightarrow: "⇒",
      rightarrow: "→",
      RightArrowBar: "⇥",
      RightArrowLeftArrow: "⇄",
      rightarrowtail: "↣",
      RightCeiling: "⌉",
      RightDoubleBracket: "⟧",
      RightDownTeeVector: "⥝",
      RightDownVector: "⇂",
      RightDownVectorBar: "⥕",
      RightFloor: "⌋",
      rightharpoondown: "⇁",
      rightharpoonup: "⇀",
      rightleftarrows: "⇄",
      rightleftharpoons: "⇌",
      rightrightarrows: "⇉",
      rightsquigarrow: "↝",
      RightTee: "⊢",
      RightTeeArrow: "↦",
      RightTeeVector: "⥛",
      rightthreetimes: "⋌",
      RightTriangle: "⊳",
      RightTriangleBar: "⧐",
      RightTriangleEqual: "⊵",
      RightUpDownVector: "⥏",
      RightUpTeeVector: "⥜",
      RightUpVector: "↾",
      RightUpVectorBar: "⥔",
      RightVector: "⇀",
      RightVectorBar: "⥓",
      ring: "˚",
      risingdotseq: "≓",
      rlarr: "⇄",
      rlhar: "⇌",
      rlm: "‏",
      rmoust: "⎱",
      rmoustache: "⎱",
      rnmid: "⫮",
      roang: "⟭",
      roarr: "⇾",
      robrk: "⟧",
      ropar: "⦆",
      Ropf: "ℝ",
      ropf: "𝕣",
      roplus: "⨮",
      rotimes: "⨵",
      RoundImplies: "⥰",
      rpar: ")",
      rpargt: "⦔",
      rppolint: "⨒",
      rrarr: "⇉",
      Rrightarrow: "⇛",
      rsaquo: "›",
      Rscr: "ℛ",
      rscr: "𝓇",
      Rsh: "↱",
      rsh: "↱",
      rsqb: "]",
      rsquo: "’",
      rsquor: "’",
      rthree: "⋌",
      rtimes: "⋊",
      rtri: "▹",
      rtrie: "⊵",
      rtrif: "▸",
      rtriltri: "⧎",
      RuleDelayed: "⧴",
      ruluhar: "⥨",
      rx: "℞",
      Sacute: "Ś",
      sacute: "ś",
      sbquo: "‚",
      Sc: "⪼",
      sc: "≻",
      scap: "⪸",
      Scaron: "Š",
      scaron: "š",
      sccue: "≽",
      scE: "⪴",
      sce: "⪰",
      Scedil: "Ş",
      scedil: "ş",
      Scirc: "Ŝ",
      scirc: "ŝ",
      scnap: "⪺",
      scnE: "⪶",
      scnsim: "⋩",
      scpolint: "⨓",
      scsim: "≿",
      Scy: "С",
      scy: "с",
      sdot: "⋅",
      sdotb: "⊡",
      sdote: "⩦",
      searhk: "⤥",
      seArr: "⇘",
      searr: "↘",
      searrow: "↘",
      sect: "§",
      semi: ";",
      seswar: "⤩",
      setminus: "∖",
      setmn: "∖",
      sext: "✶",
      Sfr: "𝔖",
      sfr: "𝔰",
      sfrown: "⌢",
      sharp: "♯",
      SHCHcy: "Щ",
      shchcy: "щ",
      SHcy: "Ш",
      shcy: "ш",
      ShortDownArrow: "↓",
      ShortLeftArrow: "←",
      shortmid: "∣",
      shortparallel: "∥",
      ShortRightArrow: "→",
      ShortUpArrow: "↑",
      shy: "­",
      Sigma: "Σ",
      sigma: "σ",
      sigmaf: "ς",
      sigmav: "ς",
      sim: "∼",
      simdot: "⩪",
      sime: "≃",
      simeq: "≃",
      simg: "⪞",
      simgE: "⪠",
      siml: "⪝",
      simlE: "⪟",
      simne: "≆",
      simplus: "⨤",
      simrarr: "⥲",
      slarr: "←",
      SmallCircle: "∘",
      smallsetminus: "∖",
      smashp: "⨳",
      smeparsl: "⧤",
      smid: "∣",
      smile: "⌣",
      smt: "⪪",
      smte: "⪬",
      smtes: "⪬︀",
      SOFTcy: "Ь",
      softcy: "ь",
      sol: "/",
      solb: "⧄",
      solbar: "⌿",
      Sopf: "𝕊",
      sopf: "𝕤",
      spades: "♠",
      spadesuit: "♠",
      spar: "∥",
      sqcap: "⊓",
      sqcaps: "⊓︀",
      sqcup: "⊔",
      sqcups: "⊔︀",
      Sqrt: "√",
      sqsub: "⊏",
      sqsube: "⊑",
      sqsubset: "⊏",
      sqsubseteq: "⊑",
      sqsup: "⊐",
      sqsupe: "⊒",
      sqsupset: "⊐",
      sqsupseteq: "⊒",
      squ: "□",
      Square: "□",
      square: "□",
      SquareIntersection: "⊓",
      SquareSubset: "⊏",
      SquareSubsetEqual: "⊑",
      SquareSuperset: "⊐",
      SquareSupersetEqual: "⊒",
      SquareUnion: "⊔",
      squarf: "▪",
      squf: "▪",
      srarr: "→",
      Sscr: "𝒮",
      sscr: "𝓈",
      ssetmn: "∖",
      ssmile: "⌣",
      sstarf: "⋆",
      Star: "⋆",
      star: "☆",
      starf: "★",
      straightepsilon: "ϵ",
      straightphi: "ϕ",
      strns: "¯",
      Sub: "⋐",
      sub: "⊂",
      subdot: "⪽",
      subE: "⫅",
      sube: "⊆",
      subedot: "⫃",
      submult: "⫁",
      subnE: "⫋",
      subne: "⊊",
      subplus: "⪿",
      subrarr: "⥹",
      Subset: "⋐",
      subset: "⊂",
      subseteq: "⊆",
      subseteqq: "⫅",
      SubsetEqual: "⊆",
      subsetneq: "⊊",
      subsetneqq: "⫋",
      subsim: "⫇",
      subsub: "⫕",
      subsup: "⫓",
      succ: "≻",
      succapprox: "⪸",
      succcurlyeq: "≽",
      Succeeds: "≻",
      SucceedsEqual: "⪰",
      SucceedsSlantEqual: "≽",
      SucceedsTilde: "≿",
      succeq: "⪰",
      succnapprox: "⪺",
      succneqq: "⪶",
      succnsim: "⋩",
      succsim: "≿",
      SuchThat: "∋",
      Sum: "∑",
      sum: "∑",
      sung: "♪",
      Sup: "⋑",
      sup: "⊃",
      sup1: "¹",
      sup2: "²",
      sup3: "³",
      supdot: "⪾",
      supdsub: "⫘",
      supE: "⫆",
      supe: "⊇",
      supedot: "⫄",
      Superset: "⊃",
      SupersetEqual: "⊇",
      suphsol: "⟉",
      suphsub: "⫗",
      suplarr: "⥻",
      supmult: "⫂",
      supnE: "⫌",
      supne: "⊋",
      supplus: "⫀",
      Supset: "⋑",
      supset: "⊃",
      supseteq: "⊇",
      supseteqq: "⫆",
      supsetneq: "⊋",
      supsetneqq: "⫌",
      supsim: "⫈",
      supsub: "⫔",
      supsup: "⫖",
      swarhk: "⤦",
      swArr: "⇙",
      swarr: "↙",
      swarrow: "↙",
      swnwar: "⤪",
      szlig: "ß",
      Tab: "	",
      target: "⌖",
      Tau: "Τ",
      tau: "τ",
      tbrk: "⎴",
      Tcaron: "Ť",
      tcaron: "ť",
      Tcedil: "Ţ",
      tcedil: "ţ",
      Tcy: "Т",
      tcy: "т",
      tdot: "⃛",
      telrec: "⌕",
      Tfr: "𝔗",
      tfr: "𝔱",
      there4: "∴",
      Therefore: "∴",
      therefore: "∴",
      Theta: "Θ",
      theta: "θ",
      thetasym: "ϑ",
      thetav: "ϑ",
      thickapprox: "≈",
      thicksim: "∼",
      ThickSpace: "  ",
      thinsp: " ",
      ThinSpace: " ",
      thkap: "≈",
      thksim: "∼",
      THORN: "Þ",
      thorn: "þ",
      Tilde: "∼",
      tilde: "˜",
      TildeEqual: "≃",
      TildeFullEqual: "≅",
      TildeTilde: "≈",
      times: "×",
      timesb: "⊠",
      timesbar: "⨱",
      timesd: "⨰",
      tint: "∭",
      toea: "⤨",
      top: "⊤",
      topbot: "⌶",
      topcir: "⫱",
      Topf: "𝕋",
      topf: "𝕥",
      topfork: "⫚",
      tosa: "⤩",
      tprime: "‴",
      TRADE: "™",
      trade: "™",
      triangle: "▵",
      triangledown: "▿",
      triangleleft: "◃",
      trianglelefteq: "⊴",
      triangleq: "≜",
      triangleright: "▹",
      trianglerighteq: "⊵",
      tridot: "◬",
      trie: "≜",
      triminus: "⨺",
      TripleDot: "⃛",
      triplus: "⨹",
      trisb: "⧍",
      tritime: "⨻",
      trpezium: "⏢",
      Tscr: "𝒯",
      tscr: "𝓉",
      TScy: "Ц",
      tscy: "ц",
      TSHcy: "Ћ",
      tshcy: "ћ",
      Tstrok: "Ŧ",
      tstrok: "ŧ",
      twixt: "≬",
      twoheadleftarrow: "↞",
      twoheadrightarrow: "↠",
      Uacute: "Ú",
      uacute: "ú",
      Uarr: "↟",
      uArr: "⇑",
      uarr: "↑",
      Uarrocir: "⥉",
      Ubrcy: "Ў",
      ubrcy: "ў",
      Ubreve: "Ŭ",
      ubreve: "ŭ",
      Ucirc: "Û",
      ucirc: "û",
      Ucy: "У",
      ucy: "у",
      udarr: "⇅",
      Udblac: "Ű",
      udblac: "ű",
      udhar: "⥮",
      ufisht: "⥾",
      Ufr: "𝔘",
      ufr: "𝔲",
      Ugrave: "Ù",
      ugrave: "ù",
      uHar: "⥣",
      uharl: "↿",
      uharr: "↾",
      uhblk: "▀",
      ulcorn: "⌜",
      ulcorner: "⌜",
      ulcrop: "⌏",
      ultri: "◸",
      Umacr: "Ū",
      umacr: "ū",
      uml: "¨",
      UnderBar: "_",
      UnderBrace: "⏟",
      UnderBracket: "⎵",
      UnderParenthesis: "⏝",
      Union: "⋃",
      UnionPlus: "⊎",
      Uogon: "Ų",
      uogon: "ų",
      Uopf: "𝕌",
      uopf: "𝕦",
      UpArrow: "↑",
      Uparrow: "⇑",
      uparrow: "↑",
      UpArrowBar: "⤒",
      UpArrowDownArrow: "⇅",
      UpDownArrow: "↕",
      Updownarrow: "⇕",
      updownarrow: "↕",
      UpEquilibrium: "⥮",
      upharpoonleft: "↿",
      upharpoonright: "↾",
      uplus: "⊎",
      UpperLeftArrow: "↖",
      UpperRightArrow: "↗",
      Upsi: "ϒ",
      upsi: "υ",
      upsih: "ϒ",
      Upsilon: "Υ",
      upsilon: "υ",
      UpTee: "⊥",
      UpTeeArrow: "↥",
      upuparrows: "⇈",
      urcorn: "⌝",
      urcorner: "⌝",
      urcrop: "⌎",
      Uring: "Ů",
      uring: "ů",
      urtri: "◹",
      Uscr: "𝒰",
      uscr: "𝓊",
      utdot: "⋰",
      Utilde: "Ũ",
      utilde: "ũ",
      utri: "▵",
      utrif: "▴",
      uuarr: "⇈",
      Uuml: "Ü",
      uuml: "ü",
      uwangle: "⦧",
      vangrt: "⦜",
      varepsilon: "ϵ",
      varkappa: "ϰ",
      varnothing: "∅",
      varphi: "ϕ",
      varpi: "ϖ",
      varpropto: "∝",
      vArr: "⇕",
      varr: "↕",
      varrho: "ϱ",
      varsigma: "ς",
      varsubsetneq: "⊊︀",
      varsubsetneqq: "⫋︀",
      varsupsetneq: "⊋︀",
      varsupsetneqq: "⫌︀",
      vartheta: "ϑ",
      vartriangleleft: "⊲",
      vartriangleright: "⊳",
      Vbar: "⫫",
      vBar: "⫨",
      vBarv: "⫩",
      Vcy: "В",
      vcy: "в",
      VDash: "⊫",
      Vdash: "⊩",
      vDash: "⊨",
      vdash: "⊢",
      Vdashl: "⫦",
      Vee: "⋁",
      vee: "∨",
      veebar: "⊻",
      veeeq: "≚",
      vellip: "⋮",
      Verbar: "‖",
      verbar: "|",
      Vert: "‖",
      vert: "|",
      VerticalBar: "∣",
      VerticalLine: "|",
      VerticalSeparator: "❘",
      VerticalTilde: "≀",
      VeryThinSpace: " ",
      Vfr: "𝔙",
      vfr: "𝔳",
      vltri: "⊲",
      vnsub: "⊂⃒",
      vnsup: "⊃⃒",
      Vopf: "𝕍",
      vopf: "𝕧",
      vprop: "∝",
      vrtri: "⊳",
      Vscr: "𝒱",
      vscr: "𝓋",
      vsubnE: "⫋︀",
      vsubne: "⊊︀",
      vsupnE: "⫌︀",
      vsupne: "⊋︀",
      Vvdash: "⊪",
      vzigzag: "⦚",
      Wcirc: "Ŵ",
      wcirc: "ŵ",
      wedbar: "⩟",
      Wedge: "⋀",
      wedge: "∧",
      wedgeq: "≙",
      weierp: "℘",
      Wfr: "𝔚",
      wfr: "𝔴",
      Wopf: "𝕎",
      wopf: "𝕨",
      wp: "℘",
      wr: "≀",
      wreath: "≀",
      Wscr: "𝒲",
      wscr: "𝓌",
      xcap: "⋂",
      xcirc: "◯",
      xcup: "⋃",
      xdtri: "▽",
      Xfr: "𝔛",
      xfr: "𝔵",
      xhArr: "⟺",
      xharr: "⟷",
      Xi: "Ξ",
      xi: "ξ",
      xlArr: "⟸",
      xlarr: "⟵",
      xmap: "⟼",
      xnis: "⋻",
      xodot: "⨀",
      Xopf: "𝕏",
      xopf: "𝕩",
      xoplus: "⨁",
      xotime: "⨂",
      xrArr: "⟹",
      xrarr: "⟶",
      Xscr: "𝒳",
      xscr: "𝓍",
      xsqcup: "⨆",
      xuplus: "⨄",
      xutri: "△",
      xvee: "⋁",
      xwedge: "⋀",
      Yacute: "Ý",
      yacute: "ý",
      YAcy: "Я",
      yacy: "я",
      Ycirc: "Ŷ",
      ycirc: "ŷ",
      Ycy: "Ы",
      ycy: "ы",
      yen: "¥",
      Yfr: "𝔜",
      yfr: "𝔶",
      YIcy: "Ї",
      yicy: "ї",
      Yopf: "𝕐",
      yopf: "𝕪",
      Yscr: "𝒴",
      yscr: "𝓎",
      YUcy: "Ю",
      yucy: "ю",
      Yuml: "Ÿ",
      yuml: "ÿ",
      Zacute: "Ź",
      zacute: "ź",
      Zcaron: "Ž",
      zcaron: "ž",
      Zcy: "З",
      zcy: "з",
      Zdot: "Ż",
      zdot: "ż",
      zeetrf: "ℨ",
      ZeroWidthSpace: "​",
      Zeta: "Ζ",
      zeta: "ζ",
      Zfr: "ℨ",
      zfr: "𝔷",
      ZHcy: "Ж",
      zhcy: "ж",
      zigrarr: "⇝",
      Zopf: "ℤ",
      zopf: "𝕫",
      Zscr: "𝒵",
      zscr: "𝓏",
      zwj: "‍",
      zwnj: "‌"
    }), t.entityMap = t.HTML_ENTITIES;
  }(mt)), mt;
}
var Ke = {}, ur;
function gi() {
  if (ur) return Ke;
  ur = 1;
  var t = it().NAMESPACE, e = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, r = new RegExp("[\\-\\.0-9" + e.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), n = new RegExp("^" + e.source + r.source + "*(?::" + e.source + r.source + "*)?$"), s = 0, i = 1, c = 2, o = 3, l = 4, h = 5, p = 6, E = 7;
  function v(A, b) {
    this.message = A, this.locator = b, Error.captureStackTrace && Error.captureStackTrace(this, v);
  }
  v.prototype = new Error(), v.prototype.name = v.name;
  function y() {
  }
  y.prototype = {
    parse: function(A, b, w) {
      var N = this.domBuilder;
      N.startDocument(), X(b, b = {}), R(
        A,
        b,
        w,
        N,
        this.errorHandler
      ), N.endDocument();
    }
  };
  function R(A, b, w, N, S) {
    function U(H) {
      if (H > 65535) {
        H -= 65536;
        var ee = 55296 + (H >> 10), Te = 56320 + (H & 1023);
        return String.fromCharCode(ee, Te);
      } else
        return String.fromCharCode(H);
    }
    function P(H) {
      var ee = H.slice(1, -1);
      return Object.hasOwnProperty.call(w, ee) ? w[ee] : ee.charAt(0) === "#" ? U(parseInt(ee.substr(1).replace("x", "0x"))) : (S.error("entity not found:" + H), H);
    }
    function j(H) {
      if (H > Q) {
        var ee = A.substring(Q, H).replace(/&#?\w+;/g, P);
        I && O(Q), N.characters(ee, 0, H - Q), Q = H;
      }
    }
    function O(H, ee) {
      for (; H >= F && (ee = K.exec(A)); )
        B = ee.index, F = B + ee[0].length, I.lineNumber++;
      I.columnNumber = H - B + 1;
    }
    for (var B = 0, F = 0, K = /.*(?:\r\n?|\n)|.*$/g, I = N.locator, ue = [{ currentNSMap: b }], he = {}, Q = 0; ; ) {
      try {
        var Z = A.indexOf("<", Q);
        if (Z < 0) {
          if (!A.substr(Q).match(/^\s*$/)) {
            var Ue = N.doc, Se = Ue.createTextNode(A.substr(Q));
            Ue.appendChild(Se), N.currentElement = Se;
          }
          return;
        }
        switch (Z > Q && j(Z), A.charAt(Z + 1)) {
          case "/":
            var J = A.indexOf(">", Z + 3), ne = A.substring(Z + 2, J).replace(/[ \t\n\r]+$/g, ""), ce = ue.pop();
            J < 0 ? (ne = A.substring(Z + 2).replace(/[\s<].*/, ""), S.error("end tag name: " + ne + " is not complete:" + ce.tagName), J = Z + 1 + ne.length) : ne.match(/\s</) && (ne = ne.replace(/[\s<].*/, ""), S.error("end tag name: " + ne + " maybe not complete"), J = Z + 1 + ne.length);
            var Pe = ce.localNSMap, oe = ce.tagName == ne, le = oe || ce.tagName && ce.tagName.toLowerCase() == ne.toLowerCase();
            if (le) {
              if (N.endElement(ce.uri, ce.localName, ne), Pe)
                for (var Le in Pe)
                  Object.prototype.hasOwnProperty.call(Pe, Le) && N.endPrefixMapping(Le);
              oe || S.fatalError("end tag name: " + ne + " is not match the current start tagName:" + ce.tagName);
            } else
              ue.push(ce);
            J++;
            break;
          // end elment
          case "?":
            I && O(Z), J = se(A, Z, N);
            break;
          case "!":
            I && O(Z), J = Y(A, Z, N, S);
            break;
          default:
            I && O(Z);
            var te = new V(), ke = ue[ue.length - 1].currentNSMap, J = T(A, Z, te, ke, P, S), We = te.length;
            if (!te.closed && M(A, J, te.tagName, he) && (te.closed = !0, w.nbsp || S.warning("unclosed xml attribute")), I && We) {
              for (var $e = C(I, {}), Ae = 0; Ae < We; Ae++) {
                var _e = te[Ae];
                O(_e.offset), _e.locator = C(I, {});
              }
              N.locator = $e, k(te, N, ke) && ue.push(te), N.locator = I;
            } else
              k(te, N, ke) && ue.push(te);
            t.isHTML(te.uri) && !te.closed ? J = q(A, J, te.tagName, P, N) : J++;
        }
      } catch (H) {
        if (H instanceof v)
          throw H;
        S.error("element parse error: " + H), J = -1;
      }
      J > Q ? Q = J : j(Math.max(Z, Q) + 1);
    }
  }
  function C(A, b) {
    return b.lineNumber = A.lineNumber, b.columnNumber = A.columnNumber, b;
  }
  function T(A, b, w, N, S, U) {
    function P(I, ue, he) {
      w.attributeNames.hasOwnProperty(I) && U.fatalError("Attribute " + I + " redefined"), w.addValue(
        I,
        // @see https://www.w3.org/TR/xml/#AVNormalize
        // since the xmldom sax parser does not "interpret" DTD the following is not implemented:
        // - recursive replacement of (DTD) entity references
        // - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
        ue.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, S),
        he
      );
    }
    for (var j, O, B = ++b, F = s; ; ) {
      var K = A.charAt(B);
      switch (K) {
        case "=":
          if (F === i)
            j = A.slice(b, B), F = o;
          else if (F === c)
            F = o;
          else
            throw new Error("attribute equal must after attrName");
          break;
        case "'":
        case '"':
          if (F === o || F === i)
            if (F === i && (U.warning('attribute value must after "="'), j = A.slice(b, B)), b = B + 1, B = A.indexOf(K, b), B > 0)
              O = A.slice(b, B), P(j, O, b - 1), F = h;
            else
              throw new Error("attribute value no end '" + K + "' match");
          else if (F == l)
            O = A.slice(b, B), P(j, O, b), U.warning('attribute "' + j + '" missed start quot(' + K + ")!!"), b = B + 1, F = h;
          else
            throw new Error('attribute value must after "="');
          break;
        case "/":
          switch (F) {
            case s:
              w.setTagName(A.slice(b, B));
            case h:
            case p:
            case E:
              F = E, w.closed = !0;
            case l:
            case i:
              break;
            case c:
              w.closed = !0;
              break;
            //case S_EQ:
            default:
              throw new Error("attribute invalid close char('/')");
          }
          break;
        case "":
          return U.error("unexpected end of input"), F == s && w.setTagName(A.slice(b, B)), B;
        case ">":
          switch (F) {
            case s:
              w.setTagName(A.slice(b, B));
            case h:
            case p:
            case E:
              break;
            //normal
            case l:
            //Compatible state
            case i:
              O = A.slice(b, B), O.slice(-1) === "/" && (w.closed = !0, O = O.slice(0, -1));
            case c:
              F === c && (O = j), F == l ? (U.warning('attribute "' + O + '" missed quot(")!'), P(j, O, b)) : ((!t.isHTML(N[""]) || !O.match(/^(?:disabled|checked|selected)$/i)) && U.warning('attribute "' + O + '" missed value!! "' + O + '" instead!!'), P(O, O, b));
              break;
            case o:
              throw new Error("attribute value missed!!");
          }
          return B;
        /*xml space '\x20' | #x9 | #xD | #xA; */
        case "":
          K = " ";
        default:
          if (K <= " ")
            switch (F) {
              case s:
                w.setTagName(A.slice(b, B)), F = p;
                break;
              case i:
                j = A.slice(b, B), F = c;
                break;
              case l:
                var O = A.slice(b, B);
                U.warning('attribute "' + O + '" missed quot(")!!'), P(j, O, b);
              case h:
                F = p;
                break;
            }
          else
            switch (F) {
              //case S_TAG:void();break;
              //case S_ATTR:void();break;
              //case S_ATTR_NOQUOT_VALUE:void();break;
              case c:
                w.tagName, (!t.isHTML(N[""]) || !j.match(/^(?:disabled|checked|selected)$/i)) && U.warning('attribute "' + j + '" missed value!! "' + j + '" instead2!!'), P(j, j, b), b = B, F = i;
                break;
              case h:
                U.warning('attribute space is required"' + j + '"!!');
              case p:
                F = i, b = B;
                break;
              case o:
                F = l, b = B;
                break;
              case E:
                throw new Error("elements closed character '/' and '>' must be connected to");
            }
      }
      B++;
    }
  }
  function k(A, b, w) {
    for (var N = A.tagName, S = null, K = A.length; K--; ) {
      var U = A[K], P = U.qName, j = U.value, I = P.indexOf(":");
      if (I > 0)
        var O = U.prefix = P.slice(0, I), B = P.slice(I + 1), F = O === "xmlns" && B;
      else
        B = P, O = null, F = P === "xmlns" && "";
      U.localName = B, F !== !1 && (S == null && (S = {}, X(w, w = {})), w[F] = S[F] = j, U.uri = t.XMLNS, b.startPrefixMapping(F, j));
    }
    for (var K = A.length; K--; ) {
      U = A[K];
      var O = U.prefix;
      O && (O === "xml" && (U.uri = t.XML), O !== "xmlns" && (U.uri = w[O || ""]));
    }
    var I = N.indexOf(":");
    I > 0 ? (O = A.prefix = N.slice(0, I), B = A.localName = N.slice(I + 1)) : (O = null, B = A.localName = N);
    var ue = A.uri = w[O || ""];
    if (b.startElement(ue, B, N, A), A.closed) {
      if (b.endElement(ue, B, N), S)
        for (O in S)
          Object.prototype.hasOwnProperty.call(S, O) && b.endPrefixMapping(O);
    } else
      return A.currentNSMap = w, A.localNSMap = S, !0;
  }
  function q(A, b, w, N, S) {
    if (/^(?:script|textarea)$/i.test(w)) {
      var U = A.indexOf("</" + w + ">", b), P = A.substring(b + 1, U);
      if (/[&<]/.test(P))
        return /^script$/i.test(w) ? (S.characters(P, 0, P.length), U) : (P = P.replace(/&#?\w+;/g, N), S.characters(P, 0, P.length), U);
    }
    return b + 1;
  }
  function M(A, b, w, N) {
    var S = N[w];
    return S == null && (S = A.lastIndexOf("</" + w + ">"), S < b && (S = A.lastIndexOf("</" + w)), N[w] = S), S < b;
  }
  function X(A, b) {
    for (var w in A)
      Object.prototype.hasOwnProperty.call(A, w) && (b[w] = A[w]);
  }
  function Y(A, b, w, N) {
    var S = A.charAt(b + 2);
    switch (S) {
      case "-":
        if (A.charAt(b + 3) === "-") {
          var U = A.indexOf("-->", b + 4);
          return U > b ? (w.comment(A, b + 4, U - b - 4), U + 3) : (N.error("Unclosed comment"), -1);
        } else
          return -1;
      default:
        if (A.substr(b + 3, 6) == "CDATA[") {
          var U = A.indexOf("]]>", b + 9);
          return w.startCDATA(), w.characters(A, b + 9, U - b - 9), w.endCDATA(), U + 3;
        }
        var P = G(A, b), j = P.length;
        if (j > 1 && /!doctype/i.test(P[0][0])) {
          var O = P[1][0], B = !1, F = !1;
          j > 3 && (/^public$/i.test(P[2][0]) ? (B = P[3][0], F = j > 4 && P[4][0]) : /^system$/i.test(P[2][0]) && (F = P[3][0]));
          var K = P[j - 1];
          return w.startDTD(O, B, F), w.endDTD(), K.index + K[0].length;
        }
    }
    return -1;
  }
  function se(A, b, w) {
    var N = A.indexOf("?>", b);
    if (N) {
      var S = A.substring(b, N).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
      return S ? (S[0].length, w.processingInstruction(S[1], S[2]), N + 2) : -1;
    }
    return -1;
  }
  function V() {
    this.attributeNames = {};
  }
  V.prototype = {
    setTagName: function(A) {
      if (!n.test(A))
        throw new Error("invalid tagName:" + A);
      this.tagName = A;
    },
    addValue: function(A, b, w) {
      if (!n.test(A))
        throw new Error("invalid attribute:" + A);
      this.attributeNames[A] = this.length, this[this.length++] = { qName: A, value: b, offset: w };
    },
    length: 0,
    getLocalName: function(A) {
      return this[A].localName;
    },
    getLocator: function(A) {
      return this[A].locator;
    },
    getQName: function(A) {
      return this[A].qName;
    },
    getURI: function(A) {
      return this[A].uri;
    },
    getValue: function(A) {
      return this[A].value;
    }
    //	,getIndex:function(uri, localName)){
    //		if(localName){
    //
    //		}else{
    //			var qName = uri
    //		}
    //	},
    //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
    //	getType:function(uri,localName){}
    //	getType:function(i){},
  };
  function G(A, b) {
    var w, N = [], S = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (S.lastIndex = b, S.exec(A); w = S.exec(A); )
      if (N.push(w), w[1]) return N;
  }
  return Ke.XMLReader = y, Ke.ParseError = v, Ke;
}
var ar;
function Ai() {
  if (ar) return je;
  ar = 1;
  var t = it(), e = Br(), r = mi(), n = gi(), s = e.DOMImplementation, i = t.NAMESPACE, c = n.ParseError, o = n.XMLReader;
  function l(T) {
    return T.replace(/\r[\n\u0085]/g, `
`).replace(/[\r\u0085\u2028]/g, `
`);
  }
  function h(T) {
    this.options = T || { locator: {} };
  }
  h.prototype.parseFromString = function(T, k) {
    var q = this.options, M = new o(), X = q.domBuilder || new E(), Y = q.errorHandler, se = q.locator, V = q.xmlns || {}, G = /\/x?html?$/.test(k), A = G ? r.HTML_ENTITIES : r.XML_ENTITIES;
    se && X.setDocumentLocator(se), M.errorHandler = p(Y, X, se), M.domBuilder = q.domBuilder || X, G && (V[""] = i.HTML), V.xml = V.xml || i.XML;
    var b = q.normalizeLineEndings || l;
    return T && typeof T == "string" ? M.parse(
      b(T),
      V,
      A
    ) : M.errorHandler.error("invalid doc source"), X.doc;
  };
  function p(T, k, q) {
    if (!T) {
      if (k instanceof E)
        return k;
      T = k;
    }
    var M = {}, X = T instanceof Function;
    q = q || {};
    function Y(se) {
      var V = T[se];
      !V && X && (V = T.length == 2 ? function(G) {
        T(se, G);
      } : T), M[se] = V && function(G) {
        V("[xmldom " + se + "]	" + G + y(q));
      } || function() {
      };
    }
    return Y("warning"), Y("error"), Y("fatalError"), M;
  }
  function E() {
    this.cdata = !1;
  }
  function v(T, k) {
    k.lineNumber = T.lineNumber, k.columnNumber = T.columnNumber;
  }
  E.prototype = {
    startDocument: function() {
      this.doc = new s().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
    },
    startElement: function(T, k, q, M) {
      var X = this.doc, Y = X.createElementNS(T, q || k), se = M.length;
      C(this, Y), this.currentElement = Y, this.locator && v(this.locator, Y);
      for (var V = 0; V < se; V++) {
        var T = M.getURI(V), G = M.getValue(V), q = M.getQName(V), A = X.createAttributeNS(T, q);
        this.locator && v(M.getLocator(V), A), A.value = A.nodeValue = G, Y.setAttributeNode(A);
      }
    },
    endElement: function(T, k, q) {
      var M = this.currentElement;
      M.tagName, this.currentElement = M.parentNode;
    },
    startPrefixMapping: function(T, k) {
    },
    endPrefixMapping: function(T) {
    },
    processingInstruction: function(T, k) {
      var q = this.doc.createProcessingInstruction(T, k);
      this.locator && v(this.locator, q), C(this, q);
    },
    ignorableWhitespace: function(T, k, q) {
    },
    characters: function(T, k, q) {
      if (T = R.apply(this, arguments), T) {
        if (this.cdata)
          var M = this.doc.createCDATASection(T);
        else
          var M = this.doc.createTextNode(T);
        this.currentElement ? this.currentElement.appendChild(M) : /^\s*$/.test(T) && this.doc.appendChild(M), this.locator && v(this.locator, M);
      }
    },
    skippedEntity: function(T) {
    },
    endDocument: function() {
      this.doc.normalize();
    },
    setDocumentLocator: function(T) {
      (this.locator = T) && (T.lineNumber = 0);
    },
    //LexicalHandler
    comment: function(T, k, q) {
      T = R.apply(this, arguments);
      var M = this.doc.createComment(T);
      this.locator && v(this.locator, M), C(this, M);
    },
    startCDATA: function() {
      this.cdata = !0;
    },
    endCDATA: function() {
      this.cdata = !1;
    },
    startDTD: function(T, k, q) {
      var M = this.doc.implementation;
      if (M && M.createDocumentType) {
        var X = M.createDocumentType(T, k, q);
        this.locator && v(this.locator, X), C(this, X), this.doc.doctype = X;
      }
    },
    /**
     * @see org.xml.sax.ErrorHandler
     * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
     */
    warning: function(T) {
      console.warn("[xmldom warning]	" + T, y(this.locator));
    },
    error: function(T) {
      console.error("[xmldom error]	" + T, y(this.locator));
    },
    fatalError: function(T) {
      throw new c(T, this.locator);
    }
  };
  function y(T) {
    if (T)
      return `
@` + (T.systemId || "") + "#[line:" + T.lineNumber + ",col:" + T.columnNumber + "]";
  }
  function R(T, k, q) {
    return typeof T == "string" ? T.substr(k, q) : T.length >= k + q || k ? new java.lang.String(T, k, q) + "" : T;
  }
  "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(T) {
    E.prototype[T] = function() {
      return null;
    };
  });
  function C(T, k) {
    T.currentElement ? T.currentElement.appendChild(k) : T.doc.appendChild(k);
  }
  return je.__DOMHandler = E, je.normalizeLineEndings = l, je.DOMParser = h, je;
}
var or;
function Ei() {
  if (or) return qe;
  or = 1;
  var t = Br();
  return qe.DOMImplementation = t.DOMImplementation, qe.XMLSerializer = t.XMLSerializer, qe.DOMParser = Ai().DOMParser, qe;
}
var vi = Ei();
const Ti = /* @__PURE__ */ Mr({
  __proto__: null
}, [vi]);
export {
  Wr as Ad,
  yi as AdDisplayContainer,
  Je as AdError,
  et as AdErrorEvent,
  gt as AdEvent,
  Kr as AdPodInfo,
  Ci as AdsLoader,
  pi as AdsManager,
  Or as AdsManagerLoadedEvent,
  Ni as AdsRenderingSettings,
  Ri as AdsRequest,
  Ze as ImaSdkSettings,
  Si as VERSION,
  wi as ViewMode,
  Ii as activateDebug,
  bi as settings
};


/* Built on 2025-05-26T22:35:45.686Z */