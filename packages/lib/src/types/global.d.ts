import { AdsManager } from "../custom/ima/AdsManager";

// region GLOBAL
declare global {
  var AdsManager: AdsManager | undefined;
}
// end region

export {};
