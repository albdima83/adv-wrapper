import { AdError } from "./AdError";
import { google_ima_AdErrorEvent_Type } from "../../generated";

const ImaType = google_ima_AdErrorEvent_Type;

export class AdErrorEvent implements google.ima.AdErrorEvent {
	static Type = ImaType;

	target?: object | null | undefined;
	currentTarget?: object | null | undefined;
	type: string = AdErrorEvent.Type.AD_ERROR;
	private adError: AdError | undefined;
	private userRequestContext: object | undefined;

	constructor(adError: AdError | undefined, userRequestContext?: object | undefined) {
		this.adError = adError;
		this.userRequestContext = userRequestContext;
	}

	getError(): google.ima.AdError | null {
		return this.adError || null;
	}
	getUserRequestContext(): object | null {
		return this.userRequestContext || null;
	}

	preventDefault(): void {}
	stopPropagation(): void {}
}
