import { PanelLeftClose } from "lucide-react";

export default function Editor() {
    return (
        <div className="bg-transparent w-full flex flex-col gap-0">
            <div className="bg-moss-800 flex flex-row gap-2 items-center p-2 rounded-tr-md">
                <button>
                    <PanelLeftClose />
                </button>
                |
                <p>
                    Tab
                </p>
            </div>

            <div className="EDITOR h-full  bg-moss-600 p-2 rounded-br-md">
                Editor
            </div>

        </div>
    );
}


