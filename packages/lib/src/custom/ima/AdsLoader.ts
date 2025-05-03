import { EventEmitter } from "../utils/eventEmitter";
import logger from "../utils/logger";
import { AdDisplayContainer } from "./AdDisplayContainer";
import { AdError } from "./AdError";
import { AdErrorEvent } from "./AdErrorEvent";
import { AdsManager } from "./AdsManager";
import { AdsManagerLoadedEvent } from "./AdsManagerLoadedEvent";
import { AdsRequest } from "./AdsRequest";
import { ImaSdkSettings } from "./ImaSdkSettings";

const TAG = "ima:AdsLoader";
export class AdsLoader implements google.ima.AdsLoader {
  private adDisplayContainer: AdDisplayContainer;
  private adsManager: AdsManager | undefined = undefined;
  private eventEmitter: EventEmitter;
  private userRequestContext: object | undefined = undefined;
  private imaSdkSettings = new ImaSdkSettings();

  constructor(adDisplayContainer: AdDisplayContainer) {
    this.adDisplayContainer = adDisplayContainer;
    this.eventEmitter = new EventEmitter();
  }

  public addEventListener(
    type: string,
    handler: null | object,
    capture?: boolean,
    handlerScope?: object | null
  ): void {
    this.eventEmitter.addEventListener(type, handler, capture, handlerScope);
  }

  public contentComplete(): void {}

  public dispatchEvent(event: Event | null): boolean {
    logger.debug(TAG, "dispatchEvent", event);
    return true;
  }

  public getSettings(): google.ima.ImaSdkSettings {
    return this.imaSdkSettings;
  }
  public getVersion(): string {
    return `custom`;
  }

  /* eslint-disable @typescript-eslint/no-unused-vars */
  public removeEventListener(
    type: string,
    handler: null | object,
    capture?: boolean,
    handlerScope?: object | null
  ): void {
    this.eventEmitter.removeEventListener(type, handler, capture);
  }

  public requestAds(
    adsRequest: AdsRequest,
    userRequestContext?: object | null
  ): void {
    this.userRequestContext = userRequestContext || undefined;
    const adTagUrl = adsRequest.adTagUrl;
    if (!adTagUrl) {
      const adError = new AdError(
        google.ima.AdError.ErrorCode.FAILED_TO_REQUEST_ADS,
        "AdManager is already defined or adTagUrl is not defined"
      );
      this.eventEmitter.emit(
        google.ima.AdErrorEvent.Type.AD_ERROR,
        new AdErrorEvent(adError)
      );
      return;
    }
    this.adsManager = new AdsManager(adsRequest, this.adDisplayContainer);
    this.adsManager
      .fetchVmap()
      .then((_adsManager) => {
        this.adsManager = _adsManager;
        return this.eventEmitter.emit(
          google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
          new AdsManagerLoadedEvent(_adsManager)
        );
      })
      .catch((error) => {
        const nessage = error.message || "Unable to retrive vmap files";
        const adError = new AdError(
          google.ima.AdError.ErrorCode.FAILED_TO_REQUEST_ADS,
          error.message || "Unable to retrive vmap files"
        );
        logger.error(TAG, nessage, adError);
        return this.eventEmitter.emit(
          google.ima.AdErrorEvent.Type.AD_ERROR,
          new AdErrorEvent(adError)
        );
      });
  }
  destroy(): void {
    this.adsManager?.destroy();
    this.adDisplayContainer.destroy();
    this.eventEmitter.clearAllEventListeners();
  }
}
