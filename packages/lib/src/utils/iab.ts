import { TCString, TCModel, GVL } from "@iabtcf/core";
import logger from "./logger";

const TAG = "iab";

export interface ConsentCheckOptions {
	requiredPurposeId?: number;
	requiredVendorId?: number;
	checkLegitimateInterest?: boolean;
}

/**
 * Function to retrive consent data from tcString
 * @param tcString
 * @returns
 */
export async function getConsentData(
	tcString: string,
	options?: ConsentCheckOptions,
): Promise<{
	tcModel: TCModel;
	hasPurposeConsent: boolean;
	hasVendorConsent: boolean;
}> {
	try {
		const gvl = new GVL();
		await gvl.readyPromise;
		const tcModel = TCString.decode(tcString);
		const { requiredPurposeId, requiredVendorId } = options || {};

		const hasPurposeConsent = requiredPurposeId ? !!tcModel.purposeConsents?.has(requiredPurposeId) : true;

		const hasVendorConsent = requiredVendorId ? !!tcModel.vendorConsents?.has(requiredVendorId) : true;

		return {
			tcModel,
			hasPurposeConsent,
			hasVendorConsent,
		};
	} catch (error) {
		logger.error(TAG, "Failed to decode TC string:", error);
		throw new Error("Could not decode consent data");
	}
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
