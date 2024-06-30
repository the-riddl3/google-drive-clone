import { DirectoryItem } from "@/app/_components/Directory";

export default function FileOrFolder({ item, onClick }: { item: DirectoryItem, onClick?: () => void }) {
    return (
        <div onClick={onClick} className="flex flex-col m-3 hover:scale-105 hover:cursor-pointer">
            {
                item.isDirectory ? (
                    <img src="/folder.png" alt="folder" className="w-16 h-16" />
                ) : (
                    <img src="/file.png" alt="file" className="w-16 h-16" />
                )
            }
            < span className="text-blue-500 mt-1 text-center" >{item.name}</span>
        </div >
    );
}