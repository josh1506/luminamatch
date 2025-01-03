import React from "react";
import UserProfile from "./UserProfile.tsx";
import Shortcuts from "./Shortcuts.tsx";

const RightPanel: React.FC = () => {
    return (
        <div
            className="h-full bg-stone-700 w-0 md:w-96 lg:w-0 xl:w-96 overflow-x-hidden duration-300 space-y-8 pt-4 flex-shrink-0"
        >
            <UserProfile/>
            <Shortcuts/>
        </div>
    )
}

export default RightPanel
