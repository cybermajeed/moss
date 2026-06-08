import type { MossMessage } from "@/shared/types";

chrome.runtime.onInstalled.addListener(() => {
  console.log("[MOSS] Extension installed.");
});

chrome.runtime.onMessage.addListener(
  (message: MossMessage, _sender, sendResponse) => {
    console.log("[MOSS background] received:", message);

    switch (message.type) {
      case "PING":
        sendResponse({ type: "PONG" });
        break;
      default:
        sendResponse({ error: `Unknown message type: ${message.type}` });
    }

    return false;
  }
);
