import { useEffect, useState } from "react";
import Toolbar from "@/popup/components/Toolbar";
import Container from "@/popup/components/Container";
import { ThemeContext } from "@/shared/context/ThemeContext";
const App = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    chrome.storage.local.get(null, console.log);
    chrome.storage.local.get("darkMode", (result: { darkMode: boolean }) => {
      console.log("theme is ", result.darkMode);
      setDark(result.darkMode ?? true);
    });
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      dark
    );
  }, [dark]);
  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <div className={`overflow-auto flex flex-col w-full h-dvh p-3 gap-3 bg-moss-300 dark:bg-moss-900`}>
        <Toolbar />
        <Container />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
