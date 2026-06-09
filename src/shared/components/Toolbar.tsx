import { ALargeSmall, Palette } from "lucide-react";
import React from "react";
const buttonStyle: string = "bg-moss-950 rounded-md p-1";
const Toolbar: React.FC = () => (
    <div className="bg-moss-700 flex flex-row gap-3 items-center p-2 rounded-md">
        <div className="grow-[2] flex flex-row gap-2 items-center">
            <img src="/icons/icon48.png" width={30} alt="logo" />
            MOSS
        </div>
        <button className={buttonStyle} title="Increase font size (Shift click to decrease)">
            <ALargeSmall className="grow text-moss-100" />
        </button>
        <button className={buttonStyle} title="Change Theme">
            <Palette className="grow text-moss-100" />
        </button>
    </div>
);

export default Toolbar

