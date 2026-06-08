import type { MossMessage } from "@/shared/types";

export async function sendToBackground<T, R>(message: MossMessage<T>): Promise<R> {
  return chrome.runtime.sendMessage(message);
}

export async function sendToActiveTab<T, R>(message: MossMessage<T>): Promise<R> {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id) throw new Error("No active tab found");
  return chrome.tabs.sendMessage(tab.id, message);
}
