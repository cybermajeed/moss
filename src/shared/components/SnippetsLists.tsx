import { useEffect, useState } from "react";
import { mossScript } from "../types/scripts";


interface FileProps {
    filesArray: mossScript[]
}

export default function SnippetsLists({ filesArray }: FileProps) {
    const styles = "bg-moss-600 rounded-md px-1 py-3";
    const [hostName, setHostName] = useState("");
    useEffect(() => {
        async function getCurrentTab() {
            const [tab] = await chrome.tabs.query({
                active: true,
                currentWindow: true,
            });
            const url = new URL(tab.url!)
            setHostName(url.hostname + url.pathname || "");
        }
        getCurrentTab();

    }, []);
    return (
        <div className="overflow-auto max-h-[420px] LIST p-0 m-0 bg-moss-700 h-full rounded-md flex flex-col gap-2 justify-between ">
            <div className={styles}>
                <b className="break-words">{hostName}</b>
                <hr className=" mb-3 mt-1" />
                <ul>
                    {
                        filesArray.map((file) => (
                            <li key={file.id}>{file.name}</li>
                        ))
                    }
                </ul>

            </div>
            <div className={styles}>
                <span>Other sites</span>
                <hr className=" mb-3 mt-1" />
                <details>
                    <summary><b>abc.def</b></summary>
                    <ul>
                        <li>Node.js</li>
                        <li>Python</li>
                        <li>PHP</li>
                    </ul>
                </details>
            </div>

        </div >
    )
}