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

    getError(): google.ima.AdError | null {
      return null;
    }
    getUserRequestContext(): object | null {
      return null;
    }

    preventDefault(): void {}
    stopPropagation(): void {}
  }
}
