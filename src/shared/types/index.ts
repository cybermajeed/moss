export interface MossScript {
  id: string;
  name: string;
  code: string;
  host: string;
  enabled: boolean;
}

export interface MossMessage<T = unknown> {
  type: "RUN_SCRIPT" | "AUTO_RUN" | "PING";
  payload?: T;
}

export interface RunScriptPayload {
  code: string;
}
