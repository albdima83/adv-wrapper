//region TCFAPI
type TCData = {
	tcString: string;
	eventStatus: string;
	cmpStatus: string;
	listenerId?: number;
	isServiceSpecific?: boolean;
	useNonStandardStacks?: boolean;
	purposeOneTreatment?: boolean;
	publisherCC?: string;
	outOfBand?: {
		allowedVendors: { [vendorId: number]: boolean };
		disclosedVendors: { [vendorId: number]: boolean };
	};
	purpose?: {
		consents: { [purposeId: number]: boolean };
		legitimateInterests: { [purposeId: number]: boolean };
	};
	vendor?: {
		consents: { [vendorId: number]: boolean };
		legitimateInterests: { [vendorId: number]: boolean };
	};
	specialFeatureOptins?: { [featureId: number]: boolean };
};

type TCFAPICallback = (tcData: TCData, success: boolean) => void;

type TCFAPICommand = "getTCData" | "addEventListener" | "removeEventListener" | "ping";

type TCFAPI = (
	command: TCFAPICommand,
	version: number,
	callback: TCFAPICallback,
	parameter?: unknown,
) => void;

// end region

// region GLOBAL
declare global {
	interface Window {
		google?: unknown;
		GoogleIma?: unknown;
		__tcfapi?: TCFAPI;
	}
}
// end region

export {};
