import { FilePlusCorner } from "lucide-react";
import SnippetsLists from "./SnippetsLists";
import { useEffect, useState } from "react";
import { mossScript } from "../types/scripts";

interface openProps {
    open: boolean;
}
export default function Sidebar({ open }: openProps) {
    const [fileNames, setFileNames] = useState<mossScript[]>([]);
    function createNewFile() {
        let file_name = prompt("FIlename: ");
        if (!file_name) return;
        const newScript: mossScript = {
            id: crypto.randomUUID(),
            name: file_name,
            code: "",
            enabled: false
        }
        const updatedScripts = [...fileNames, newScript]
        setFileNames(updatedScripts)

        chrome.storage.local.set({
            savedScripts: updatedScripts
        }).then(() => console.log("saved scripts: ", updatedScripts))
    }
    //load data
    async function loadScript() {
        const data = await chrome.storage.local.get("savedScripts");
        console.log("loaded scripts");
        setFileNames((data.savedScripts ?? []) as mossScript[]);
    }
    useEffect(() => {
        loadScript()
    }, [])

    return (
        <div className={`${!open ? 'hidden' : ''} flex flex-col  w-fit min-w-[250px] bg-moss-700 gap-3 row-span-2 p-2 rounded-md`}>
            <div className="NAV">
                <button onClick={createNewFile} className="hover:opacity-65 font-semibold w-full flex flex-row gap-2 items-center justify-center bg-moss-800 px-1 py-2 rounded-md cursor-pointer">
                    <FilePlusCorner size={20} />
                    New Snippet
                </button>
            </div>
            <SnippetsLists filesArray={fileNames} />
        </div>
    );
}


