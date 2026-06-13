import { useCallback, useEffect, useState } from "react";
import type { MossScript } from "@/shared/types";
import { getScripts, saveScripts } from "@/shared/utils/storage";

export function useScripts() {
  const [scripts, setScripts] = useState<MossScript[]>([]);

  useEffect(() => {
    getScripts().then(setScripts);
  }, []);

  const addScript = useCallback(
    async (script: MossScript) => {
      const updated = [...scripts, script];
      setScripts(updated);
      await saveScripts(updated);
    },
    [scripts],
  );

  const updateScript = useCallback(
    async (updated: MossScript) => {
      const next = scripts.map((s) => (s.id === updated.id ? updated : s));
      setScripts(next);
      await saveScripts(next);
    },
    [scripts],
  );

  const deleteScript = useCallback(
    async (id: string) => {
      const next = scripts.filter((s) => s.id !== id);
      setScripts(next);
      await saveScripts(next);
    },
    [scripts],
  );

  const toggleEnabled = useCallback(
    async (id: string) => {
      const next = scripts.map((s) =>
        s.id === id ? { ...s, enabled: !s.enabled } : s,
      );
      setScripts(next);
      await saveScripts(next);
    },
    [scripts],
  );

  return { scripts, addScript, updateScript, deleteScript, toggleEnabled };
}
