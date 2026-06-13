import { mossScript } from "../types/scripts";


interface FileProps {
    filesArray: mossScript[];
    hostName: string
}

export default function SnippetsLists({ filesArray, hostName }: FileProps) {
    const styles = "bg-moss-600 rounded-md px-1 py-3";
    //TODO: click list ->  load to code editor
    return (
        <div className="overflow-auto max-h-[420px] LIST p-0 m-0 bg-moss-700 h-full rounded-md flex flex-col gap-2 justify-between ">
            <div className={styles}>
                <b className="break-words">{hostName}</b>
                <hr className=" mb-3 mt-1" />
                <ul>
                    {
                        filesArray.map((file) => (
                            <li className="hover:bg-moss-500 cursor-pointer px-2 p-1 rounded-sm" key={file.id}>{file.name}</li>
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