import logger from "../utils/logger";

const TAG = "ima:AdDisplayContainer";
export class AdDisplayContainer implements google.ima.AdDisplayContainer {
  private adContainer: HTMLElement;
  private videoElement: HTMLVideoElement;
  private contentElement: HTMLVideoElement | undefined;
  private adsContainerElement: HTMLElement | undefined;
  private adsSpinnerElement: HTMLElement | undefined;
  private videoAdsElement: HTMLVideoElement | undefined;

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
  constructor(
    adContainer: HTMLElement,
    videoElement: HTMLVideoElement,
    contentElement?: HTMLVideoElement
  ) {
    this.adContainer = adContainer;
    this.videoElement = videoElement;
    this.contentElement = contentElement;
  }

  public initialize(): void {
    logger.debug(TAG, "initialize");
    // Custom initialization logic can be added here
    if (!this.adsContainerElement) {
      this.adsContainerElement = this.createAdsContainer();
    }
    if (!this.videoAdsElement) {
      this.videoAdsElement = this.createAdsVideoElement();
    }
    if (!this.adsSpinnerElement) {
      this.adsSpinnerElement = this.createAdsSpinner();
    }
  }

  public destroy(): void {
    // Custom cleanup logic can be added here
    logger.debug(TAG, "destroy");
    this.videoAdsElement?.remove();
    this.adsSpinnerElement?.remove();
    this.adsContainerElement?.remove();
    this.videoAdsElement = undefined;
  }

  public addEventListener(
    type: string,
    listener: (event: google.ima.AdEvent) => void,
    useCapture?: boolean
  ): void {}

  public removeEventListener(
    type: string,
    listener: (event: google.ima.AdEvent) => void,
    useCapture?: boolean
  ): void {}

  public dispatchEvent(event: google.ima.AdEvent): boolean {
    return true;
  }
  public getVideoAdsElement(): HTMLVideoElement {
    return this.videoAdsElement || this.videoElement;
  }

  public show(): void {
    const adsContainerElement = this.adsContainerElement;
    if (!adsContainerElement) {
      return;
    }
    adsContainerElement.style.display = "block";
    adsContainerElement.style.visibility = "visible";
    adsContainerElement.style.opacity = "1";
  }

  public hide(): void {
    const adsContainerElement = this.adsContainerElement;
    if (!adsContainerElement) {
      return;
    }
    adsContainerElement.style.display = "none";
    adsContainerElement.style.visibility = "hidden";
    adsContainerElement.style.opacity = "0";
  }

  public showLoader(): void {
    const adsSpinnerElement = this.adsSpinnerElement;
    if (!adsSpinnerElement) {
      return;
    }
    adsSpinnerElement.style.visibility = "block";
  }

  public hideLoader(): void {
    const adsSpinnerElement = this.adsSpinnerElement;
    if (!adsSpinnerElement) {
      return;
    }
    adsSpinnerElement.style.visibility = "none";
  }

  private createAdsContainer(): HTMLElement | undefined {
    const adContainer = this.adContainer;
    if (!adContainer) {
      return undefined;
    }
    const advContainer =
      document.getElementById("adm-adv-container") ||
      document.createElement("div");
    advContainer.id = "adm-adv-container";
    advContainer.style.position = "absolute";
    advContainer.style.top = "0";
    advContainer.style.left = "0";
    /* @TODO: undestand if this is needed */
    advContainer.style.width = "100%";
    advContainer.style.height = "100%";
    advContainer.style.background = "rgb(0,0,0)";
    advContainer.style.display = "none";
    adContainer.appendChild(advContainer);
    return advContainer;
  }

  private createAdsSpinner(): HTMLElement | undefined {
    const adsContainerElement = this.adsContainerElement;
    if (!adsContainerElement) {
      return undefined;
    }
    const spinner =
      document.getElementById("adm-adv-spinner") ||
      document.createElement("div");
    spinner.id = "adm-adv-spinner";
    spinner.style.position = "absolute";
    spinner.style.top = "50%";
    spinner.style.left = "50%";
    spinner.style.transform = "translate(-50%, -50%)";
    spinner.style.width = "40px";
    spinner.style.height = "40px";
    spinner.style.border = "5px solid #ccc";
    spinner.style.borderTop = "5px solid #333";
    spinner.style.borderRadius = "50%";
    spinner.style.zIndex = "10";
    spinner.style.animation = "adm-spinner-animation 1s linear infinite";
    spinner.style.display = "none";
    const style = document.createElement("style");
    style.textContent = `
      @keyframes adm-spinner-animation {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
      }
    `;
    if (globalThis && globalThis.document) {
      document.head.appendChild(style);
    }
    adsContainerElement.appendChild(spinner);
    return spinner;
  }

  private createAdsVideoElement(): HTMLVideoElement | undefined {
    const adsContainerElement = this.adsContainerElement;
    if (!adsContainerElement) {
      return undefined;
    }
    const videoAdsElement =
      (document.getElementById("adm-video-ads") as HTMLVideoElement | null) ||
      document.createElement("video");
    videoAdsElement.id = "adm-video-ads";
    videoAdsElement.style.position = "absolute";
    videoAdsElement.style.top = "0";
    videoAdsElement.style.left = "0";
    videoAdsElement.style.width = "100%";
    videoAdsElement.style.height = "100%";
    videoAdsElement.controls = false;
    videoAdsElement.playsInline = false;
    videoAdsElement.setAttribute("disablePictureInPicture", "");
    videoAdsElement.setAttribute("disableRemotePlayback", "");
    videoAdsElement.setAttribute("playsinline", "false");
    videoAdsElement.setAttribute("webkit-playsinline", "true");
    videoAdsElement.setAttribute("x-webkit-airplay", "allow");
    videoAdsElement.setAttribute("object", "fit");
    videoAdsElement.removeAttribute("controls");
    adsContainerElement.appendChild(videoAdsElement);
    return videoAdsElement;
  }
}
