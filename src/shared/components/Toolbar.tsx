import { Palette, PanelRight, SquareArrowOutUpRight } from "lucide-react";


const Toolbar = () => {

    const buttonStyle: string = "bg-moss-900 transition-all rounded-md p-1 hover:bg-moss-800";
    const hideIfNotPopup: string = (window.location.pathname.includes("newtab")) ? "hidden" : "";
    const iconsize = 20;
    const openInNewTab = () => {
        chrome.tabs.create({
            url: chrome.runtime.getURL("src/popup/newtab.html"),
        })
    }
    const openInSidePanel = async () => {
        await chrome.sidePanel.setOptions({
            path: "src/popup/newtab.html",
            enabled: true
        })
        await chrome.sidePanel.open({
            windowId: chrome.windows.WINDOW_ID_CURRENT
        })
        window.close()
    }

    return (
        <div className="bg-moss-700 flex flex-row gap-3 items-center p-2 rounded-md">
            <div className="font-semibold grow-[2] flex flex-row gap-2 items-center">
                <img src="/icons/icon48.png" width={30} alt="logo" />
                MOSS
            </div>
            <button className={buttonStyle} title="Switch theme">
                <Palette size={iconsize} className="grow text-moss-100" />
            </button>
            <button className={`${hideIfNotPopup} ${buttonStyle}`} title="Open in side panel" onClick={openInSidePanel}>
                <PanelRight size={iconsize} className="grow text-moss-100" />
            </button>
            <button className={`${hideIfNotPopup} ${buttonStyle}`} title="Open in new tab" onClick={openInNewTab}>
                <SquareArrowOutUpRight size={iconsize} className="grow text-moss-100" />
            </button>
        </div>
    );
}

export default Toolbar

