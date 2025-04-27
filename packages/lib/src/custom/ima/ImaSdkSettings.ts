export namespace ImaSdkSettings {
  export enum CompanionBackfillMode {
    ALWAYS = "always",
    ON_MASTER_AD = "on_master_ad",
  }
  /**
   * A set of constants for enabling VPAID functionality.
   */
  export enum VpaidMode {
    /**
     * VPAID ads will not play and an error will be returned.
     */
    DISABLED = 0,
    /**
     * VPAID ads are enabled using a cross domain iframe. The VPAID ad cannot
     * access the site. VPAID ads that depend on friendly iframe access may
     * error. This is the default.
     */
    ENABLED = 1,
    /**
     * VPAID ads are enabled using a friendly iframe. This allows the ad
     * access to the site through JavaScript.
     */
    INSECURE = 2,
  }

  export class ImaSdkSettings implements google.ima.ImaSdkSettings {
    getCompanionBackfill(): CompanionBackfillMode {
      return CompanionBackfillMode.ALWAYS;
    }
    getDisableCustomPlaybackForIOS10Plus(): boolean {
      return true;
    }
    getFeatureFlags(): Record<string, unknown> {
      return {};
    }
    getLocale(): string {
      return "";
    }
    getNumRedirects(): number {
      return -1;
    }
    getPlayerType(): string {
      return "lib";
    }
    getPlayerVersion(): string {
      return "1.0.0";
    }
    getPpid(): string | null {
      return "";
    }
    isCookiesEnabled(): boolean {
      return false;
    }
    setAutoPlayAdBreaks(autoPlayAdBreaks: boolean): void {}
    setCompanionBackfill(): void {}
    setCookiesEnabled(cookiesEnabled: boolean): void {}
    setDisableCustomPlaybackForIOS10Plus(disable: boolean): void {}
    setFeatureFlags(featureFlags: Record<string, unknown>): void {}
    setLocale(locale: string): void {}
    setNumRedirects(numRedirects: number): void {}
    setPlayerType(playerType: string): void {}
    setPlayerVersion(playerVersion: string): void {}
    setPpid(ppid: string): void {}
    setSessionId(sessionId: string): void {}
    setVpaidAllowed(allowVpaid: boolean): void {}
    setVpaidMode(vpaidMode: VpaidMode): void {}
  }
}
