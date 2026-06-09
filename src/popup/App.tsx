import React from "react";
import Header from "@/shared/components/Header";
import Footer from "@/shared/components/Footer";
import { Home } from "lucide-react";

const App: React.FC = () => {
  return (
    <div className="flex justify-between flex-col h-dvh bg-moss-950 p-4 gap-4">
      <Header />
      <div className="flex items-center justify-between border border-moss-900 rounded px-3 py-2">
        <span className="text-moss-500 text-xs tracking-widest uppercase">System</span>
        <div>
          <Home size={30} className="text-moss-200" />
        </div>
      </div>

      <div className="flex-1 border border-moss-900 rounded p-3">
        <p className="text-moss-500 text-xs tracking-widest uppercase mb-3">Modules</p>
        <p className="text-moss-100/40 text-xs">No modules loaded yet.</p>
      </div>
      <Footer />
    </div>
  );
};

export default App;
