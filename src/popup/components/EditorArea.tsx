import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";
import ReactCodeMirror from "@uiw/react-codemirror";
import { PanelLeftClose, PanelLeftOpen, Play, Save } from "lucide-react";
import { useEffect, useState } from "react";
import type { MossScript } from "@/shared/types";
import { useTheme } from "@/shared/hooks/useTheme";
import { githubLight } from "@uiw/codemirror-theme-github";
interface EditorAreaProps {
  open: boolean;
  setOpen: (v: boolean) => void;
  activeScript: MossScript | null;
  onSave: (updated: MossScript) => void;
}

export default function EditorArea({ open, setOpen, activeScript, onSave }: EditorAreaProps) {
  const [code, setCode] = useState("// select a snippet\n");
  const [dirty, setDirty] = useState(false);
  const { dark } = useTheme();
  useEffect(() => {
    if (activeScript) {
      setCode(activeScript.code);
      setDirty(false);
    }
  }, [activeScript?.id]);

  const handleChange = (val: string) => {
    setCode(val);
    setDirty(true);
  };

  const handleSave = () => {
    if (!activeScript) return;
    onSave({ ...activeScript, code });
    setDirty(false);
  };

  const handleRun = () => {
    const src = code.trim();
    if (!src) return;
    chrome.runtime.sendMessage({ type: "RUN_SCRIPT", payload: { code: src } });
  };

  // ctrl + enter for run, ctrl+s for save
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.ctrlKey && e.key === "Enter") { e.preventDefault(); handleRun(); }
    if (e.ctrlKey && e.key === "s") { e.preventDefault(); handleSave(); }
  };

  return (
    <div className="bg-transparent h-full w-full flex flex-col gap-2" onKeyDown={handleKeyDown}>
      {/* Tab bar */}
      <div className="bg-moss-50 dark:bg-moss-700 text-moss-700 dark:text-moss-200 flex flex-row gap-2 items-center p-2 rounded-md">
        <button title={`${open ? "Close" : "Open"} sidebar`} onClick={() => setOpen(!open)} className="cursor-pointer">
          {open ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
        </button>
        <span className="text-moss-400 dark:text-moss-500 text-xs">|</span>
        <span className="grow text-sm font-semibold truncate">
          {activeScript ? activeScript.name : "No file selected"}
          {dirty && <span className="text-moss-500 dark:text-moss-300 ml-1" title="File not saved">*</span>}
        </span>
        <button
          onClick={handleSave}
          disabled={!activeScript || !dirty}
          title="Save (Ctrl+S)"
          className="transition-all disabled:opacity-70 dark:disabled:opacity-60 px-2 py-1 rounded-md flex gap-1 items-center text-xs cursor-pointer bg-moss-100 dark:bg-moss-800 hover:bg-moss-200 dark:hover:bg-moss-600 text-moss-700 dark:text-moss-200"
        >
          <Save size={14} />
          save
        </button>
        <button
          onClick={handleRun}
          disabled={!activeScript}
          title="Run (Ctrl+Enter)"
          className="transition-all hover:bg-moss-800 disabled:opacity-30 px-2 py-1 rounded-md flex gap-1 items-center text-xs"
        >
          <Play size={14} />
          run
        </button>
      </div>

      {/* Editor */}
      <div className="flex-1 min-h-0 overflow-auto rounded-md bg-moss-50 dark:bg-[#282a36]">
        <ReactCodeMirror
          value={code}
          theme={dark ? dracula : githubLight}
          height="100%"
          extensions={[javascript()]}
          onChange={handleChange}
          style={{ height: "100%", width: "100%", padding: "3px 5px" }}
        />
      </div>
    </div>
  );
}
