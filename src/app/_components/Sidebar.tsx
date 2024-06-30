'use client';

import ProgressBar from "@/app/_components/ProgressBar";

export default function Sidebar() {
    return (
        <div className="flex flex-col py-2 border-r" style={{height: "100vh"}}>
            <div className="p-4">
                <ProgressBar />
            </div>
        </div>
    );
}