import React from "react";
import Sponsors from "./Sponsors.tsx";
import FriendSuggest from "./FriendSuggest.tsx";

const RightPanel: React.FC = () => {
    return (
        <div className="hidden lg:flex lg:flex-col lg:gap-4 w-80 border-l px-2 py-4 overflow-y-auto">
            <FriendSuggest/>
            <Sponsors/>
        </div>
    )
}

export default RightPanel
