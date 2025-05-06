import { google_ima_AdError_ErrorCode, google_ima_AdError_Type } from "../../generated";

const ImaErrorCode = google_ima_AdError_ErrorCode;
const ImaType = google_ima_AdError_Type;

export class AdError implements google.ima.AdError {
	static ErrorCode = ImaErrorCode;
	static Type = ImaType;
	name: string;
	code: number;
	message: string;
	stack?: string | undefined;
	cause?: unknown;

	constructor(code: number, message: string) {
		this.name = "AdError";
		this.message = message;
		this.code = code;
	}
	getErrorCode(): number {
		return this.code;
	}
	getInnerError(): Error | null {
		return new Error(this.message);
	}
	getMessage(): string {
		return this.message;
	}
	getType(): string {
		return "";
	}
	getVastErrorCode(): number {
		return this.code;
	}
}
