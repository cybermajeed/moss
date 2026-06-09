import { useState } from "react";
import Editor from "./Editor";
import Sidebar from "./Sidebar";

//TODO: put textarea in editor, then store it locally

export default function Container() {
    const [open, setOpen] = useState(true);
    return (
        <div className="flex flex-row gap-0 bg-moss-700 h-screen p-0 rounded-md">
            <Sidebar open={open} />
            <Editor open={open} setOpen={setOpen} />
        </div>
    );

}

