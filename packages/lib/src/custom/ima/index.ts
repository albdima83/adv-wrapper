import { ImaSdkSettings } from "./ImaSdkSettings";
import { settings } from "./settings";

enum ViewMode {
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
  NORMAL = "normal",
}

export * from "./AdDisplayContainer";
export * from "./Ad";
export * from "./AdPodInfo";
export * from "./AdError";
export * from "./AdEvent";
export * from "./AdErrorEvent";
export * from "./AdsLoader";
export * from "./AdsManager";
export * from "./AdsManagerLoadedEvent";
export * from "./AdsRenderingSettings";
export * from "./AdsRequest";
export * from "./ImaSdkSettings";
export { settings, ViewMode };
export * from "./debug";
