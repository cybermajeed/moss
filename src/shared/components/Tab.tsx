import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useState } from "react";

export default function Tab() {
    const [open, setOpen] = useState(true);
    return (
        <div className="bg-moss-800 flex flex-row gap-2 items-center col-span-2 p-2 rounded-md">
            <button onClick={() => setOpen(!open)}>
                {open ? <PanelLeftClose /> : <PanelLeftOpen />}
            </button>
            <p>
                Tab
            </p>
        </div>
    )
}
