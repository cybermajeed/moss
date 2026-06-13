import type { MossMessage, RunScriptPayload } from "@/shared/types";

chrome.runtime.onInstalled.addListener(() => {
  console.log("[MOSS] installed.");
});

chrome.runtime.onMessage.addListener(
  (message: MossMessage<RunScriptPayload>, _sender, sendResponse) => {
    if (message.type === "RUN_SCRIPT" && message.payload?.code) {
      (async () => {
        const [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });
        if (!tab?.id) {
          sendResponse({ ok: false, error: "No active tab" });
          return;
        }
        try {
          await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            world: "MAIN",
            func: (src: string) => {
              (0, eval)(src);
            },
            args: [message.payload!.code],
          });
          sendResponse({ ok: true });
        } catch (e: any) {
          sendResponse({ ok: false, error: e.message });
        }
      })();
      return true; // async response
    }

    sendResponse({ ok: false, error: `Unknown type: ${message.type}` });
    return false;
  },
);
