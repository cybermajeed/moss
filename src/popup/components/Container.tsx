import { useState } from "react";
import EditorArea from "./EditorArea";
import Sidebar from "./Sidebar";
import { useScripts } from "@/shared/hooks/useScripts";


export default function Container() {
  const [open, setOpen] = useState(true);
  const [activeId, setActiveId] = useState<string | null>(null);
  const { scripts, addScript, updateScript, deleteScript, toggleEnabled } = useScripts();
 
  const activeScript = scripts.find((s) => s.id === activeId) ?? null;

  return (
    <div className="flex flex-row gap-2 h-full min-h-0">
      <Sidebar
        open={open}
        scripts={scripts}
        activeId={activeId}
        onSelect={(s) => setActiveId(s.id)}
        onAdd={async (s) => { await addScript(s); setActiveId(s.id); }}
        onDelete={async (id) => {
          await deleteScript(id);
          if (activeId === id) setActiveId(null);
        }}
        onToggle={toggleEnabled}

      />
      <EditorArea
        open={open}
        setOpen={setOpen}
        activeScript={activeScript}
        onSave={updateScript}
      />
    </div>
  );
}
