import React from "react";
import Header from "@/shared/components/Header";
import StatusBadge from "@/shared/components/StatusBadge";

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-full min-h-[420px] bg-moss-950 p-4 gap-4">
      <Header />

      <div className="flex items-center justify-between border border-moss-900 rounded px-3 py-2">
        <span className="text-moss-500 text-xs tracking-widest uppercase">System</span>
        <StatusBadge status="idle" />
      </div>

      <div className="flex-1 border border-moss-900 rounded p-3">
        <p className="text-moss-500 text-xs tracking-widest uppercase mb-3">Modules</p>
        <p className="text-moss-100/40 text-xs">No modules loaded yet.</p>
      </div>

      <footer className="text-moss-900 text-[10px] text-center tracking-widest">
        MOSS v0.1.0 · MV3
      </footer>
    </div>
  );
};

export default App;
