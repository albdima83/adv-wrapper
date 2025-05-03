import { Ad } from "./Ad";
import { google_ima_AdEvent_Type } from "../../generated";

const ImaType = google_ima_AdEvent_Type;
export class AdEvent implements google.ima.AdEvent {
  static Type = ImaType;

  currentTarget?: object | null | undefined;
  target?: object | null | undefined;
  type: string = AdEvent.Type.LOADED;
  ad: Ad | undefined = undefined;
  adData: object | null = null;

  constructor(type: string, ad: Ad | undefined) {
    this.type = type;
    this.ad = ad;
  }

  getAd(): google.ima.Ad | null {
    return this.ad || null;
  }
  getAdData(): object | null {
    return this.adData;
  }

  preventDefault(): void {}
  stopPropagation(): void {}
}
