declare module "@dailymotion/vast-client" {
  export interface VASTMediaFile {
    id?: string;
    delivery: string;
    type: string;
    width: number;
    height: number;
    mimeType?: string;
    codec?: string;
    fileURL: string;
    bitrate?: number;
    minBitrate?: number;
    maxBitrate?: number;
    scalable?: boolean;
    maintainAspectRatio?: boolean;
    apiFramework?: string;
  }

  export interface VASTCreative {
    adId?: string;
    adParameters?: string;
    apiFramework?: string;
    duration?: number;
    id?: string;
    mediaFiles: VASTMediaFile[];
    sequence?: string;
    skipDelay?: number;
    type: string;
    videoClickThroughURLTemplate?: { id: string; url: string };
    universalAdIds?: Array<{ idRegistry: string; value: string }>;
    trackingEvents?: Record<string, string[]>;
  }

  export interface VASTAd {
    id?: string;
    sequence?: number;
    adSystem?: string;
    adTitle?: string;
    description?: string;
    advertiser?: string;
    pricing?: string;
    creatives: VASTCreative[];
  }

  export interface VASTResponse {
    ads: VASTAd[];
    errorURLTemplates: string[];
    impressionURLTemplates: string[];
    getAd(index: number): VASTAd;
  }

  export class VASTClient {
    constructor(options?: object);

    get(
      url: string,
      options?: {
        withCredentials?: boolean;
        wrapperLimit?: number;
        timeout?: number;
      },
      wrapperDepth?: number
    ): Promise<VASTResponse>;

    on(event: string, callback: (...args: unknown[]) => void): void;
    off(event: string, callback: (...args: unknown[]) => void): void;
  }

  export class VASTParser {
    constructor();

    parseVAST(xml: string): Promise<VASTResponse>;

    fetchVAST(
      url: string,
      options?: { withCredentials?: boolean }
    ): Promise<string>;

    on(event: string, callback: (...args: unknown[]) => void): void;
    off(event: string, callback: (...args: unknown[]) => void): void;
  }

  export class VASTTracker {
    constructor(
      client: VASTClient | null,
      ad: VASTAd,
      creative: VASTCreative,
      variation?: unknown,
      muted?: boolean
    );

    ad: VASTAd;
    creative: VASTCreative;
    variation: unknown;
    muted: boolean;
    impressed: boolean;
    skippable: boolean;
    trackingEvents: Record<string, unknown>;
    trackedProgressEvents: unknown[];
    lastPercentage: number;
    _alreadyTriggeredQuartiles: Record<string, boolean>;
    emitAlwaysEvents: string[];
    linear: boolean;
    skipDelay: number;
    clickThroughURLTemplate: string;
    clickTrackingURLTemplates: string;
    assetDuration: number;
    quartiles: {
      firstQuartile: number;
      midpoint: number;
      thirdQuartile: number;
    };
    paused: boolean;
    fullscreen: boolean;
    expanded: boolean;
    progress: number;

    _initLinearTracking(): void;
    _initVariationTracking(): void;
    setDuration(duration: number): void;
    setProgress(
      progress: number,
      macros?: Record<string, unknown>,
      trackOnce?: boolean
    ): void;
    isQuartileReached(
      quartile: string,
      time: number,
      progress: number
    ): boolean;
    setMuted(muted: boolean, macros?: Record<string, unknown>): void;
    setPaused(paused: boolean, macros?: Record<string, unknown>): void;
    setFullscreen(fullscreen: boolean, macros?: Record<string, unknown>): void;
    setExpand(expanded: boolean, macros?: Record<string, unknown>): void;
    setSkipDelay(duration: number): void;
    trackImpression(macros?: Record<string, unknown>): void;
    trackViewableImpression(macros?: Record<string, unknown>): void;
    trackNotViewableImpression(macros?: Record<string, unknown>): void;
    trackUndeterminedImpression(macros?: Record<string, unknown>): void;
    error(macros?: Record<string, unknown>, isCustomCode?: boolean): void;
    errorWithCode(errorCode: string, isCustomCode?: boolean): void;
    complete(macros?: Record<string, unknown>): void;
    notUsed(macros?: Record<string, unknown>): void;
    otherAdInteraction(macros?: Record<string, unknown>): void;
    acceptInvitation(macros?: Record<string, unknown>): void;
    adExpand(macros?: Record<string, unknown>): void;
    adCollapse(macros?: Record<string, unknown>): void;
    minimize(macros?: Record<string, unknown>): void;
    verificationNotExecuted(
      vendor: string,
      macros?: Record<string, unknown>
    ): void;
    overlayViewDuration(
      formattedDuration: string,
      macros?: Record<string, unknown>
    ): void;
    close(macros?: Record<string, unknown>): void;
    skip(macros?: Record<string, unknown>): void;
    load(macros?: Record<string, unknown>): void;
    click(
      fallbackClickThroughURL?: string | null,
      macros?: Record<string, unknown>
    ): void;
    trackProgressEvents(
      eventName: string,
      macros: Record<string, unknown>,
      once: boolean
    ): void;
    track(
      eventName: string,
      options?: {
        macros?: Record<string, unknown>;
        once?: boolean;
      }
    ): void;
    trackURLs(
      URLTemplates: string[],
      macros?: Record<string, unknown>,
      options?: Record<string, unknown>
    ): void;
    convertToTimecode(timeInSeconds: number): string;
    progressFormatted(): string;
  }
}
