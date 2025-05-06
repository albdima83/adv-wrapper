import {
	google_ima_ImaSdkSettings_CompanionBackfillMode,
	google_ima_ImaSdkSettings_VpaidMode,
} from "../../generated";

const ImaCompanionBackfillMode = google_ima_ImaSdkSettings_CompanionBackfillMode;
const ImaVpaidMode = google_ima_ImaSdkSettings_VpaidMode;

export class ImaSdkSettings implements google.ima.ImaSdkSettings {
	static CompanionBackfillMode = ImaCompanionBackfillMode;
	static VpaidMode = ImaVpaidMode;

	private autoPlayAdBreaks: boolean = true;
	private cookiesEnabled: boolean = true;
	private companionBackfill: google.ima.ImaSdkSettings.CompanionBackfillMode =
		google.ima.ImaSdkSettings.CompanionBackfillMode.ALWAYS;
	private featureFlags: Record<string, unknown> = {};
	private locale: string = "en";
	private vpaidMode: google.ima.ImaSdkSettings.VpaidMode = google.ima.ImaSdkSettings.VpaidMode.ENABLED;
	private numRedirects: number = -1;
	private disableCustomPlaybackForIOS10Plus: boolean = false;
	private playerType = "";
	private playerVersion = "";
	private ppid: string = "";
	private sessionId: string = "";
	private allowVpaid: boolean = true;

	getCompanionBackfill(): google.ima.ImaSdkSettings.CompanionBackfillMode {
		return google.ima.ImaSdkSettings.CompanionBackfillMode.ALWAYS;
	}
	getDisableCustomPlaybackForIOS10Plus(): boolean {
		return true;
	}
	getFeatureFlags(): Record<string, unknown> {
		return this.featureFlags;
	}
	getLocale(): string {
		return this.locale;
	}
	getNumRedirects(): number {
		return this.numRedirects;
	}
	getPlayerType(): string {
		return this.playerType;
	}
	getPlayerVersion(): string {
		return this.playerVersion;
	}
	getPpid(): string | null {
		return this.ppid;
	}
	isCookiesEnabled(): boolean {
		return this.cookiesEnabled;
	}
	setAutoPlayAdBreaks(autoPlayAdBreaks: boolean): void {
		this.autoPlayAdBreaks = autoPlayAdBreaks;
	}
	setCompanionBackfill(): void {
		this.companionBackfill = google.ima.ImaSdkSettings.CompanionBackfillMode.ALWAYS;
	}
	setCookiesEnabled(cookiesEnabled: boolean): void {
		this.cookiesEnabled = cookiesEnabled;
	}
	setDisableCustomPlaybackForIOS10Plus(disable: boolean): void {
		this.disableCustomPlaybackForIOS10Plus = disable;
	}
	setFeatureFlags(featureFlags: Record<string, unknown>): void {
		this.featureFlags = featureFlags;
	}
	setLocale(locale: string): void {
		this.locale = locale;
	}
	setNumRedirects(numRedirects: number): void {
		this.numRedirects = numRedirects;
	}
	setPlayerType(playerType: string): void {
		this.playerType = playerType;
	}
	setPlayerVersion(playerVersion: string): void {
		this.playerVersion = playerVersion;
	}
	setPpid(ppid: string): void {
		this.ppid = ppid;
	}
	setSessionId(sessionId: string): void {
		this.sessionId = sessionId;
	}
	setVpaidAllowed(allowVpaid: boolean): void {
		this.allowVpaid = allowVpaid;
	}
	setVpaidMode(vpaidMode: google.ima.ImaSdkSettings.VpaidMode): void {
		this.vpaidMode = vpaidMode;
	}
}
