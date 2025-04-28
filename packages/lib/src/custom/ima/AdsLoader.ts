import { EventEmitter } from "../utils/eventEmitter";
import { AdDisplayContainer } from "./AdDisplayContainer";
import { AdError } from "./AdError";
import { AdsManager } from "./AdsManager";
import { AdsManagerLoadedEvent } from "./AdsManagerLoadedEvent";
import { AdsRequest } from "./AdsRequest";
import { ImaSdkSettings } from "./ImaSdkSettings";
import { version } from "../../../package.json";

export class AdsLoader implements google.ima.AdsLoader {
  private adDisplayContainer: AdDisplayContainer;
  private adsManager: AdsManager | undefined = undefined;
  private eventEmitter: EventEmitter;
  private userRequestContext: object | undefined = undefined;
  private imaSdkSettings = new ImaSdkSettings.ImaSdkSettings();

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
    return true;
  }

  public getSettings(): google.ima.ImaSdkSettings {
    return this.imaSdkSettings;
  }
  public getVersion(): string {
    return `custom/${version}}`;
  }
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
        "Admanegger is already defined or adTagUrl is not defined"
      );
      this.eventEmitter.emit(google.ima.AdErrorEvent.Type.AD_ERROR, adError);
      return;
    }
    this.adsManager = new AdsManager(adsRequest, this.adDisplayContainer);
    this.adsManager
      .fetchVmap()
      .then((_adsManager) => {
        return this.eventEmitter.emit(
          google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
          new AdsManagerLoadedEvent.AdsManagerLoadedEvent(_adsManager)
        );
      })
      .catch((error) => {
        const adError = new AdError(
          google.ima.AdError.ErrorCode.FAILED_TO_REQUEST_ADS,
          error.message
        );
      });
  }
  destroy(): void {
    this.adsManager?.destroy();
    this.adDisplayContainer.destroy();
    this.eventEmitter.clearAllEventListeners();
  }
}
