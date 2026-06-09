export interface MossMessage<T = unknown> {
  type: string;
  payload?: T;
}
