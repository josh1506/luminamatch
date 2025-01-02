import React from "react";

const InboxFooter: React.FC = () => {
    return (
        <div className="bg-stone-800 text-white w-full h-14  flex-shrink-0 flex items-center justify-between px-4">
            <div className="space-x-4">
                <span>Status</span>
                <span>Privacy</span>
            </div>
            <div>
                Shortcut Settings
            </div>
        </div>
    )
}

export default InboxFooter
