import { Palette, PanelRight } from "lucide-react";

const buttonStyle: string = " bg-moss-950 transition-all rounded-md p-1 hover:bg-moss-800";

const Toolbar = () => (
    <div className="bg-moss-700 flex flex-row gap-3 items-center p-2 rounded-md">
        <div className="font-semibold grow-[2] flex flex-row gap-2 items-center">
            <img src="/icons/icon48.png" width={30} alt="logo" />
            MOSS
        </div>
        <button className={buttonStyle} title="Switch theme">
            <Palette className="grow text-moss-100" />
        </button>
        <button className={buttonStyle} title="Open in side panel">
            <PanelRight className="grow text-moss-100" />
        </button>
    </div>
);

export default Toolbar

