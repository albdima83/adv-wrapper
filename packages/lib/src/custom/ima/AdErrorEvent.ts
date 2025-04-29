import { AdError } from "./AdError";

export namespace AdErrorEvent {
  export enum Type {
    /**
     * Fired when an error occurred while the ad was loading or playing.
     */
    AD_ERROR = "adError",
  }

  export class AdErrorEvent implements google.ima.AdErrorEvent {
    target?: object | null | undefined;
    currentTarget?: object | null | undefined;
    type: string = Type.AD_ERROR;
    private adError: AdError.AdError | undefined;
    private userRequestContext: object | undefined;

    constructor(
      adError: AdError.AdError | undefined,
      userRequestContext?: object | undefined
    ) {
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
}
