import { useState } from "react";
import Toolbar from "@/popup/components/Toolbar";
import Container from "@/popup/components/Container";
import { ThemeContext } from "@/shared/context/ThemeContext";
const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>

      <div className={`${dark ? "dark" : ""} flex flex-col w-full h-dvh p-3 gap-3 bg-moss-900 dark:bg-moss-950`}>
        <Toolbar />
        <Container />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
