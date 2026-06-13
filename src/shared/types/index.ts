export interface MossScript {
  id: string;
  name: string;
  code: string;
  host: string;       // hostname+pathname this script is bound to
  enabled: boolean;
}

export interface MossMessage<T = unknown> {
  type: "RUN_SCRIPT" | "AUTO_RUN" | "PING";
  payload?: T;
}

export interface RunScriptPayload {
  code: string;
}
