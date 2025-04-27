import { AdsManager } from "./AdsManager";

export namespace AdsManagerLoadedEvent {
  export enum Type {
    /**
     * Fired when the ads have been loaded and an AdsManager is available.
     */
    ADS_MANAGER_LOADED = "adsManagerLoaded",
  }
  export class AdsManagerLoadedEvent
    implements google.ima.AdsManagerLoadedEvent
  {
    public currentTarget?: object | null | undefined;
    public target?: object | null | undefined;
    public type: string;
    private adsManager: AdsManager;

    constructor(adsManager: AdsManager) {
      this.adsManager = adsManager;
      this.currentTarget = null;
      this.target = null;
      this.type = "adsManagerLoaded";
    }

    getAdsManager(
      contentPlayback: object,
      adsRenderingSettings?: google.ima.AdsRenderingSettings
    ): AdsManager {
      this.adsManager.configureAdsManager(
        contentPlayback,
        adsRenderingSettings
      );
      return this.adsManager;
    }
    getUserRequestContext(): object | null {
      throw new Error("Method not implemented.");
    }

    preventDefault(): void {
      throw new Error("Method not implemented.");
    }
    stopPropagation(): void {
      throw new Error("Method not implemented.");
    }
  }
}
