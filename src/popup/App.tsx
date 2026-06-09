import Toolbar from "@/shared/components/Toolbar";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="wrapper flex justify-between flex-col h-dvh bg-moss-950 p-4 gap-4">
      <Toolbar />
    </div>
  );
};

export default App;
