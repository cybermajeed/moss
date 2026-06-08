import { useEffect, useState } from "react";
import { storageGet, storageSet } from "@/shared/utils/storage";

export function useStorage<T>(key: string, defaultValue: T): [T, (value: T) => Promise<void>] {
  const [state, setState] = useState<T>(defaultValue);

  useEffect(() => {
    storageGet<T>(key).then((v) => {
      if (v !== undefined) setState(v);
    });
  }, [key]);

  const set = async (value: T) => {
    setState(value);
    await storageSet(key, value);
  };

  return [state, set];
}
