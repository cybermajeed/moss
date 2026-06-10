import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";
import ReactCodeMirror from "@uiw/react-codemirror";
import { PanelLeftClose, PanelLeftOpen, Play } from "lucide-react";
import { useState } from "react";

interface openProps {
    height: number;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditorArea({ height, open, setOpen }: openProps) {
    const [code, setCode] = useState(`//code here`);
    //TODO: fuuu, now write code -> append it in webpage
    return (
        <div className="bg-transparent h-full w-full flex flex-col gap-2">
            <div className={`TAB bg-moss-700 flex flex-row gap-2 items-center p-2 rounded-md`}>
                <button title={`${open ? 'Close' : 'Open'} sidebar`} onClick={() => { setOpen(!open); console.log(open); }}>
                    {open ? <PanelLeftClose /> : <PanelLeftOpen />}
                </button>
                |
                <span className="FILENAME grow-[2]">file1.js</span>
                <button className="text-[15px] transition-all hover:bg-moss-800 px-2 py-1 rounded-md flex flex-row gap-2 items-center">
                    <Play size={15} />
                    ctrl + enter
                </button>
            </div>

            <div className={`EDITOR min-h-0 flex-1 overflow-auto p-0 h-full bg-dracula-bg rounded-md`}>
                <ReactCodeMirror
                    value={code}
                    theme={dracula}
                    height={(height - 60).toString() + "px"}
                    extensions={[javascript()]}
                    onChange={val => setCode(val)}
                />
            </div>

        </div >
    );
}


