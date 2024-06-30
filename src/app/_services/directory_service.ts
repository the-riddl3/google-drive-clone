import { DirectoryItem } from "../_components/Directory";

export const fetchDirectory = (directory: string) => {
        const directories: { [key: string]: DirectoryItem[] } = {
            "/": [
                { name: "folder1", size: "1.2MB", isDirectory: true },
                { name: "file1", size: "1.2MB", isDirectory: false }
            ],
            "/folder1/": [
                { name: "folder2", size: "1.2MB", isDirectory: true },
                { name: "file2", size: "1.2MB", isDirectory: false }
            ],
            "/folder1/folder2/": [
                { name: "file3", size: "1.2MB", isDirectory: false }
            ]
        };

        return {
            data: directories[directory] || []
        }
    };