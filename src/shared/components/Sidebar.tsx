
interface openProps {
    open: boolean
}
export default function Sidebar({ open }: openProps) {
    return (
        <div className={`${!open ? 'hidden' : ''} w-60 max-w-80 bg-moss-700 row-span-2 p-2 rounded-md`}>
            Sidebar......
        </div>
    );
}


