import { VASTAd, VASTCreative, VASTMediaFile } from "@dailymotion/vast-client";
import { AdPodInfo } from "./AdPodInfo";
import logger from "../utils/logger";

const TAG = "ima:Ad";
export class Ad implements google.ima.Ad {
  private adId: string;
  private adPodInfo: AdPodInfo;
  private adSystem: string;
  private advertiserName: string;
  private apiFramework: string | null;
  private companionAds: google.ima.CompanionAd[];
  private creativeAdId: string;
  private creativeId: string;
  private dealId: string;
  private description: string;
  private duration: number;
  private height: number;
  private mediaUrl: string | null;
  private minSuggestedDuration: number;
  private skipTimeOffset: number;
  private surveyUrl: string | null;
  private title: string;
  private traffickingParameters: { [key: string]: string };
  private traffickingParametersString: string;
  private uiElements: string[];
  private universalAdIdRegistry: string;
  private universalAdIdValue: string;
  private universalAdIds: google.ima.UniversalAdIdInfo[];
  private vastMediaBitrate: number;
  private vastMediaHeight: number;
  private vastMediaWidth: number;
  private width: number;
  private wrapperAdIds: string[];
  private wrapperAdSystems: string[];
  private wrapperCreativeIds: string[];
  private linear: boolean;

  constructor(
    vastAd: VASTAd,
    creative: VASTCreative,
    mediaFile: VASTMediaFile,
    podInfo: AdPodInfo
  ) {
    this.adId = vastAd.id || "undefined";
    this.adPodInfo = podInfo;
    this.adSystem = vastAd.adSystem || "";
    this.advertiserName = vastAd.advertiser || "";
    this.apiFramework = creative.apiFramework || "";
    this.companionAds = [];
    this.creativeAdId = creative.adId || "";
    this.creativeId = creative.id || "";
    this.dealId = "";
    this.description = vastAd.description || "";
    this.duration = creative.duration || 0;
    this.height = 0;
    this.mediaUrl = null;
    this.minSuggestedDuration = 0;
    this.skipTimeOffset = creative.skipDelay || -1;
    this.surveyUrl = null;
    this.title = vastAd.adTitle || "";
    this.traffickingParameters = {};
    this.traffickingParametersString = "";
    this.uiElements = [];
    this.universalAdIdRegistry = "";
    this.universalAdIdValue = "";
    this.universalAdIds = [];
    this.vastMediaBitrate = 0;
    this.vastMediaHeight = 0;
    this.vastMediaWidth = 0;
    this.width = 0;
    this.wrapperAdIds = [];
    this.wrapperAdSystems = [];
    this.wrapperCreativeIds = [];
    this.linear = creative.type === "linear";
  }

  getAdId(): string {
    return this.adId;
  }
  getAdPodInfo(): google.ima.AdPodInfo {
    return this.adPodInfo;
  }
  getAdSystem(): string {
    return this.adSystem;
  }
  getAdvertiserName(): string {
    return this.advertiserName;
  }
  getApiFramework(): string | null {
    return this.apiFramework;
  }
  getCompanionAds(
    adSlotWidth: number,
    adSlotHeight: number,
    settings?: google.ima.CompanionAdSelectionSettings
  ): google.ima.CompanionAd[] {
    logger.debug(
      TAG,
      `Ad adSlotWidth:[${adSlotWidth}] adSlotHeight[${adSlotHeight}] settings:`,
      settings
    );
    return this.companionAds;
  }
  getCreativeAdId(): string {
    return this.creativeAdId;
  }
  getCreativeId(): string {
    return this.creativeId;
  }
  getDealId(): string {
    return this.dealId;
  }
  getDescription(): string {
    return this.description;
  }
  getDuration(): number {
    return this.duration;
  }
  getHeight(): number {
    return this.height;
  }
  getMediaUrl(): string | null {
    return this.mediaUrl;
  }
  getMinSuggestedDuration(): number {
    return this.minSuggestedDuration;
  }
  getSkipTimeOffset(): number {
    return this.skipTimeOffset;
  }
  getSurveyUrl(): string | null {
    return this.surveyUrl;
  }
  getTitle(): string {
    return this.title;
  }
  getTraffickingParameters(): { [key: string]: string } {
    return this.traffickingParameters;
  }
  getTraffickingParametersString(): string {
    return this.traffickingParametersString;
  }
  getUiElements(): string[] {
    return this.uiElements;
  }
  getUniversalAdIdRegistry(): string {
    throw new Error("Method not implemented.");
  }
  getUniversalAdIdValue(): string {
    return this.universalAdIdValue;
  }
  getUniversalAdIds(): google.ima.UniversalAdIdInfo[] {
    return this.universalAdIds;
  }
  getVastMediaBitrate(): number {
    return this.vastMediaBitrate;
  }
  getVastMediaHeight(): number {
    return this.vastMediaHeight;
  }
  getVastMediaWidth(): number {
    return this.vastMediaWidth;
  }
  getWidth(): number {
    return this.width;
  }
  getWrapperAdIds(): string[] {
    return this.wrapperAdIds;
  }
  getWrapperAdSystems(): string[] {
    return this.wrapperAdSystems;
  }
  getWrapperCreativeIds(): string[] {
    return this.wrapperCreativeIds;
  }
  isLinear(): boolean {
    return this.linear;
  }
}
