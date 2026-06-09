import Container from "@/shared/components/Container";
import Toolbar from "@/shared/components/Toolbar";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="wrapper flex justify-around flex-col w-full h-dvh bg-moss-950 p-4 gap-4">
      <Toolbar />
      <Container />
    </div>
  );
};

export default App;
