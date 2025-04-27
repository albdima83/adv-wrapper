export class AdPodInfo implements google.ima.AdPodInfo {
  private adPosition: number;
  private isBumper: boolean;
  private maxDuration: number;
  private podIndex: number;
  private timeOffset: number;
  private totalAds: number;

  constructor(
    adPosition: number,
    isBumper: boolean,
    maxDuration: number,
    podIndex: number,
    timeOffset: number,
    totalAds: number
  ) {
    this.adPosition = adPosition;
    this.isBumper = isBumper;
    this.maxDuration = maxDuration;
    this.podIndex = podIndex;
    this.timeOffset = timeOffset;
    this.totalAds = totalAds;
  }

  getAdPosition(): number {
    return this.adPosition;
  }
  getIsBumper(): boolean {
    return this.isBumper;
  }
  getMaxDuration(): number {
    return this.maxDuration;
  }
  getPodIndex(): number {
    return this.podIndex;
  }
  getTimeOffset(): number {
    return this.timeOffset;
  }
  getTotalAds(): number {
    return this.totalAds;
  }
}
