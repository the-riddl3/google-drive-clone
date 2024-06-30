export function goToDirectory(currentDirectory: string, directory: string) {
    return currentDirectory + directory + "/";
}

export function goToParent(currentDirectory: string) {
    if (currentDirectory === "/") return "/";
    return currentDirectory.split("/").slice(0, -2).join("/") + "/";
}