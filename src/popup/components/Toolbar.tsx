import { Moon, PanelRight, SquareArrowOutUpRight, Sun } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "@/shared/context/ThemeContext";


const Toolbar = () => {
  const theme = useContext(
    ThemeContext
  );

  if (!theme) return null;

  const { dark, setDark } = theme;

  console.log("sidebar: ", dark);
  const buttonStyle =
    "bg-moss-100 dark:bg-moss-900 transition-all rounded-md p-1 hover:bg-moss-200 dark:hover:bg-moss-800";
  const isNewtab = window.location.pathname.includes("newtab");
  const iconsize = 20;

  const openInNewTab = () => {
    chrome.tabs.create({ url: chrome.runtime.getURL("newtab/index.html") });
  };

  const openInSidePanel = async () => {
    await chrome.sidePanel.setOptions({ path: "newtab/index.html", enabled: true });
    await chrome.sidePanel.open({ windowId: chrome.windows.WINDOW_ID_CURRENT });
    window.close();
  };

  return (
    <div className="bg-white dark:bg-moss-950 text-moss-700 dark:text-moss-200 flex flex-row gap-3 items-center p-2 rounded-md">
      <div className="font-bold grow flex flex-row gap-2 items-center text-moss-800 dark:text-moss-50">
        <img src="/icons/icon48.png" width={30} alt="logo" />
        MOSS
      </div>

      <button className={buttonStyle} title="Switch theme" onClick={() => setDark(prev => !prev)}>
        {dark
          ? <Sun size={iconsize} className="text-moss-300" />
          : <Moon size={iconsize} className="text-moss-700" />
        }
      </button>

      {!isNewtab && (
        <>
          <button className={buttonStyle} title="Open in side panel" onClick={openInSidePanel}>
            <PanelRight size={iconsize} className="grow text-moss-700 dark:text-moss-200" />
          </button>
          <button className={buttonStyle} title="Open in new tab" onClick={openInNewTab}>
            <SquareArrowOutUpRight size={iconsize} className="grow text-moss-700 dark:text-moss-200" />
          </button>
        </>
      )}
    </div>
  );
};

export default Toolbar;
