import type { MossScript } from "@/shared/types";

export async function getScripts(): Promise<MossScript[]> {
  const data = await chrome.storage.local.get("savedScripts");
  return (data.savedScripts as MossScript[]) || [];
}

export async function saveScripts(scripts: MossScript[]): Promise<void> {
  await chrome.storage.local.set({ savedScripts: scripts });
}
