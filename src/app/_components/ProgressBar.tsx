'use client';

import Button from "@/app/_components/Button";

export default function ProgressBar() {
    return (
        <div className="flex flex-col p-2">
            <div className="w-full h-1 bg-gray-300 mb-2">
                <div className="h-1 bg-blue-500" style={{ width: '50%' }}></div>
            </div>
            <h1 className="mb-2">5GB out of 10 used.</h1>
            <Button>Increase Quota</Button>
        </div>
    );
}