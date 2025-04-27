export interface AdTagURI {
  "#text": string;
  "@_templateType"?: "vast1" | "vast2" | "vast3" | "vast4";
}

export interface AdSource {
  "@_id": string;
  "@_allowMultipleAds"?: "true" | "false";
  "@_followRedirects"?: "true" | "false";
  "vmap:AdTagURI"?: AdTagURI;
}

export interface Tracking {
  "@_event": string;
  "#text": string;
}

export interface TrackingEvents {
  "vmap:Tracking": Tracking[];
}

export interface Extensions {
  "vmap:Extension": Record<string, unknown>[];
}

export interface AdBreak {
  "@_timeOffset": string;
  "@_breakType"?: string;
  "@_breakId"?: string;
  "@_repeatAfter"?: string;
  "vmap:AdSource": AdSource;
  "vmap:TrackingEvents"?: TrackingEvents;
  "vmap:Extensions"?: Extensions;
}

export interface VmapVMAP {
  "vmap:VMAP": {
    "@_version": string;
    "vmap:AdBreak": AdBreak[] | AdBreak;
  };
}
