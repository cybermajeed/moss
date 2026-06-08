import type { MossMessage } from "@/shared/types";

console.log("[MOSS content] injected into:", window.location.href);

chrome.runtime.onMessage.addListener(
  (message: MossMessage, _sender, sendResponse) => {
    console.log("[MOSS content] received:", message);

    switch (message.type) {
      case "PING":
        sendResponse({ type: "PONG", from: "content" });
        break;
      default:
        break;
    }

    return false;
  }
);
