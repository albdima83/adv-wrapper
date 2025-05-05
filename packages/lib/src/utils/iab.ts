import { TCString, TCModel, GVL } from "@iabtcf/core";

/**
 * Function to retrive consent data from tcString
 * @param tcString
 * @returns
 */
export function getConsentData(tcString: string): Promise<TCModel> {
  const tcModel = TCString.decode(tcString);
  const gvl = new GVL();
  return gvl.readyPromise.then(() => tcModel);
}

export function getTCData(): Promise<{
  tcString: string;
  eventStatus: string;
  cmpStatus: string;
}> {
  return new Promise((resolve, reject) => {
    if (typeof window.__tcfapi !== "function") {
      return reject(new Error("__tcfapi is not available"));
    }

    window.__tcfapi("getTCData", 2, (tcData, success) => {
      if (success) {
        resolve(tcData);
      } else {
        reject(new Error("Failed to retrieve TCData"));
      }
    });
  });
}
