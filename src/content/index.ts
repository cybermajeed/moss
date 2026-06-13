import type { MossScript } from "@/shared/types";

(async () => {
  const data = await chrome.storage.local.get("savedScripts");
  const scripts: MossScript[] = data.savedScripts || [];
  const host = window.location.hostname + window.location.pathname;

  const toRun = scripts.filter((s) => s.enabled && host.startsWith(s.host));

  for (const script of toRun) {
    try {
      await chrome.runtime.sendMessage({
        type: "RUN_SCRIPT",
        payload: { code: script.code },
      });
      console.log(`[MOSS] auto-ran: ${script.name}`);
    } catch (e) {
      console.error(`[MOSS] failed to auto-run ${script.name}:`, e);
    }
  }
})();
