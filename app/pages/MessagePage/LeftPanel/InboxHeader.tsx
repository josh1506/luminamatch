import React from "react";

const InboxHeader: React.FC = () => {
    return (
        <div className="border-b w-full h-14 flex-shrink-0 flex items-center px-2 justify-between">
            <div className="flex gap-2">
                <div className="bg-purple-500 rounded-full flex justify-center items-center">
                    icon
                </div>
                <h1 className="text-2xl tracking-wide font-semibold">Inbox</h1>
            </div>
            <div className="space-x-4">
                <span>Create</span>
                <span>Settings</span>
            </div>
        </div>
    )
}

export default InboxHeader
