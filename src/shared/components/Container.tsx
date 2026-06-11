import { useEffect, useRef, useState } from "react";
import EditorArea from "./EditorArea";
import Sidebar from "./Sidebar";

//TODO: put textarea in editor, then store it locally
export default function Container() {
    const [open, setOpen] = useState(true);
    const [height, setHeight] = useState(0);

    const divref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (divref.current) {
            setHeight(divref.current.clientHeight);
        }
    })
    return (
        <div ref={divref} className="flex flex-row gap-2 bg-transparent h-full p-0 rounded-md">
            <Sidebar  open={open} />
            <EditorArea height={height} open={open} setOpen={setOpen} />
        </div>
    );

}

