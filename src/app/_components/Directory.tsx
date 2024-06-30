'use client';

import { useEffect, useState } from "react";
import FileOrFolder from "@/app/_components/FileOrFolder";
import Button from "./Button";
import { fetchDirectory } from "../_services/directory_service";
import { goToDirectory, goToParent } from "../_lib/path_helpers";

export type DirectoryItem = {
    name: string;
    size: string;
    isDirectory: boolean;
};

export default function Directory() {
    const [currentDirectory, setCurrentDirectory] = useState<string>("/");
    const [content, setContent] = useState<DirectoryItem[]>([]);

    const clickDirectoryItem = (item: DirectoryItem) => {
        if (item.isDirectory) {
            const newDirectory = goToDirectory(currentDirectory, item.name);
            setCurrentDirectory(newDirectory);
            setContent(fetchDirectory(newDirectory).data);
        }
    };

    const goBack = () => {
        if (currentDirectory === "/") return;
        const newDirectory = goToParent(currentDirectory);
        setCurrentDirectory(newDirectory);
        setContent(fetchDirectory(newDirectory).data);
    }

    useEffect(() => {
        // fetch files and folders
        const response = fetchDirectory(currentDirectory);
        setContent(response.data);
    }, []);

    return (
        <div className="p-4 flex flex-col items-center flex-grow">
            {/* directory header */}
            <div className="border-b w-full py-2 text-center flex">
                <Button onClick={goBack}>
                    back
                </Button>
                <h1 className="text-2xl grow">
                    Directory&nbsp;
                    <span className="text-blue-500">{currentDirectory}</span></h1>
            </div>

            {/* files and folders */}
            <div className="w-full mt-4 flex">
                {content.map((item, index) => (
                    <FileOrFolder item={item} key={index} onClick={() => clickDirectoryItem(item)} />
                ))}
            </div>
        </div>
    );
}