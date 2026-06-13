import { CircleCheck, CircleX, FilePlus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import type { MossScript } from "@/shared/types";

interface SidebarProps {
  open: boolean;
  scripts: MossScript[];
  activeId: string | null;
  onSelect: (script: MossScript) => void;
  onAdd: (script: MossScript) => void;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

export default function Sidebar({
  open, scripts, activeId, onSelect, onAdd, onDelete, onToggle,
}: SidebarProps) {
  const [hostName, setHostName] = useState("");

  useEffect(() => {
    chrome.tabs
      .query({ active: true, currentWindow: true })
      .then(([tab]) => {
        if (!tab?.url) return;
        const u = new URL(tab.url);
        setHostName(u.hostname + u.pathname);
      });
  }, []);
  const createNewFile = () => {
    const name = prompt("Snippet name:");
    if (!name) return;
    onAdd({
      id: crypto.randomUUID(),
      name,
      code: "// Your code here\n",
      host: hostName,
      enabled: false,
    });
  };

  const siteScripts = scripts.filter((s) => s.host === hostName);
  const otherScripts = scripts.filter((s) => s.host !== hostName);

  // group others by host
  const otherHosts = [...new Set(otherScripts.map((s) => s.host))];

  if (!open) return null;

  return (
    <div className=" flex flex-col w-fit max-w-[250px] shrink-0 bg-moss-50 dark:bg-moss-950 text-moss-700 dark:text-moss-200 gap-3 p-2 rounded-md overflow-hidden ">
      <button
        onClick={createNewFile}
        className=" hover:opacity-75 font-semibold w-full flex flex-row gap-2 items-center justify-center bg-moss-500 dark:bg-moss-800 text-moss-900 dark:text-moss-200 py-2 px-1 rounded-md cursor-pointer text-sm "      >
        <FilePlus size={16} />
        New Snippet
      </button>

      <div className="overflow-auto flex flex-col gap-3 px-2 flex-1 ">
        {/* Current host */}
        <div className="   bg-moss-200 dark:bg-moss-800   rounded-md px-2 py-2 ">
          <p className="   text-[14px]   text-moss-800 dark:text-moss-300   tracking-widest uppercase mb-1 break-all ">{hostName || "—"}</p>
          <hr className="border-moss-600 dark:border-moss-700 mb-2" />
          <ul className="flex flex-col gap-1">
            {siteScripts.length === 0 && (
              <li className="   text-moss-600 dark:text-moss-500   text-[12px] italic ">No snippets</li>
            )}
            {siteScripts.map((s) => (
              <ScriptItem
                key={s.id}
                script={s}
                active={s.id === activeId}
                onSelect={onSelect}
                onDelete={onDelete}
                onToggle={onToggle}
              />
            ))}
          </ul>
        </div>

        {/* Other hosts */}
        {otherHosts.length > 0 && (
          <div className="   bg-moss-50 dark:bg-moss-800   rounded-md px-2 py-2 ">
            <p className="text-[13px] text-moss-600 dark:text-moss-300 tracking-widest uppercase mb-1">Other Sites</p>
            <hr className="border-moss-500 mb-2" />
            {otherHosts.map((host) => (
              <details key={host} className="mb-1">
                <summary className="text-sm font-semibold cursor-pointer truncate">{host}</summary>
                <ul className="flex flex-col gap-1 mt-1 pl-1">
                  {otherScripts
                    .filter((s) => s.host === host)
                    .map((s) => (
                      <ScriptItem
                        key={s.id}
                        script={s}
                        active={s.id === activeId}
                        onSelect={onSelect}
                        onDelete={onDelete}
                        onToggle={onToggle}
                      />
                    ))}
                </ul>
              </details>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ScriptItem({
  script, active, onSelect, onDelete, onToggle,
}: {
  script: MossScript;
  active: boolean;
  onSelect: (s: MossScript) => void;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}) {
  return (
    <li
      className={`group flex items-center flex-row gap-2 px-2 py-1 rounded-md cursor-pointer text-xs ${active ? "bg-moss-400 dark:bg-moss-600 text-moss-950 font-semibold" : "hover:bg-moss-300 dark:hover:bg-moss-700 dark:hover:text-moss-200 hover:text-moss-600"
        }`}
      onClick={() => onSelect(script)}
    >
      {/* enable toggle */}
      <button
        title={script.enabled ? "Disable auto-run" : "Enable auto-run"}
        onClick={(e) => { e.stopPropagation(); onToggle(script.id); }}
        className=" shrink-0 h-fit hover:bg-moss-600 dark:hover:bg-moss-400 dark:hover:text-moss-900 hover:text-moss-50  p-2 rounded-md">
        {script.enabled ? <CircleCheck size={16} /> : <CircleX size={16} />}
      </button>
      <span className="text-md truncate flex-1">{script.name}</span>
      <button
        className="opacity-0 group-hover:opacity-70 hover:!opacity-100 shrink-0 hover:bg-moss-600 dark:hover:bg-moss-400 dark:hover:text-moss-900 hover:text-moss-50  p-2 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          if (confirm(`Do you want to delete ${script.name}?`)) {
            onDelete(script.id);
          }
        }}>
        <Trash2
          size={16}
        />
      </button>
    </li >
  );
}
