import type { MossMessage, RunScriptPayload } from "@/shared/types";

chrome.runtime.onInstalled.addListener(() => {
  console.log("[MOSS] installed.");
});

chrome.runtime.onMessage.addListener(
  (message: MossMessage<RunScriptPayload>, sender, sendResponse) => {
    if (message.type === "RUN_SCRIPT" && message.payload?.code) {
      (async () => {
        let tabId = sender.tab?.id;

        // If the message is not from a content script (e.g., popup or newtab), we find the active tab
        if (!tabId || sender.url?.startsWith(chrome.runtime.getURL(""))) {
          const tabs = await chrome.tabs.query({
            active: true,
            currentWindow: true,
          });
          tabId = tabs[0]?.id;
        }

        if (!tabId) {
          sendResponse({ ok: false, error: "No active tab" });
          return;
        }

        try {
          await chrome.scripting.executeScript({
            target: { tabId },
            world: "MAIN",
            func: (src: string) => {
              try {
                // Try blob injection to bypass eval() restrictions
                const blob = new Blob([src], {
                  type: "application/javascript",
                });
                const url = URL.createObjectURL(blob);
                const script = document.createElement("script");
                script.src = url;
                script.onload = () => {
                  URL.revokeObjectURL(url);
                  script.remove();
                };
                script.onerror = () => {
                  console.error(
                    "[MOSS] Failed to load injected script via Blob.",
                  );
                  script.remove();
                };
                (document.head || document.documentElement).appendChild(script);
              } catch (err) {
                console.error(
                  "[MOSS] Blob injection failed, fallback to eval",
                  err,
                );
                (0, eval)(src);
              }
            },
            args: [message.payload!.code],
          });
          sendResponse({ ok: true });
        } catch (e: any) {
          sendResponse({ ok: false, error: e.message });
        }
      })();
      return true;
    }

    sendResponse({ ok: false, error: `Unknown type: ${message.type}` });
    return false;
  },
);
