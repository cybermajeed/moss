export type ModuleStatus = "idle" | "active" | "error";

export interface MossModule {
  id: string;
  name: string;
  status: ModuleStatus;
}

export interface MossMessage<T = unknown> {
  type: string;
  payload?: T;
}
