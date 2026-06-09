import Tab from "./Tab";
import Editor from "./Editor";
import Sidebar from "./Sidebar";

const Container = () => (
    <div className="grid gap-1 grid-cols-[150px_1fr_2fr] grid-rows-[auto_1fr] bg-moss-700 h-screen p-2 rounded-md">
        <Sidebar />
        <Tab />
        <Editor />
    </div>
);

export default Container

