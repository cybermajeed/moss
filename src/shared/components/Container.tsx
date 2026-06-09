import Editor from "./Editor";
import Sidebar from "./Sidebar";

export default function Container() {
    //TODO: add usestate for navopenclose?
    return (
        <div className="flex flex-row gap-0 bg-moss-700 h-screen p-2 rounded-md">
            <Sidebar />
            <Editor />
        </div>
    );

}

