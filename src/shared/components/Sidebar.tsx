

interface openProps {
    open: boolean
}
export default function Sidebar({ open }: openProps) {
    return (
        <div className={`${!open ? 'hidden' : ''} w-48 bg-moss-800 row-span-2 p-2 rounded-r-0 rounded-l-md`}>
            Sidebar......
        </div>
    );
}


