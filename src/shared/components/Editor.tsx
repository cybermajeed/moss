import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import React from "react";

interface openProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Editor({ open, setOpen }: openProps) {
    return (
        <div className="bg-transparent w-full flex flex-col gap-0">
            <div className={`bg-moss-800 flex flex-row gap-2 items-center p-2 ${open ? '' : 'rounded-tl-md'} rounded-tr-md`}>
                <button title={`${open ? 'Close' : 'Open'} sidebar`} onClick={() => { setOpen(!open); console.log(open); }}>
                    {open ? <PanelLeftClose /> : <PanelLeftOpen />}
                </button>
                |
                <p>
                    Tab
                </p>
            </div>

            <div className={`EDITOR h-full  bg-moss-600 p-2 ${open ? '' : 'rounded-bl-md'}  rounded-br-md`}>
                Editor
            </div>

        </div >
    );
}


