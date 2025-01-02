import React from "react";
import LeftPanel from "./LeftPanel";
import MiddlePanel from "./MiddlePanel";
import RightPanel from "./RightPanel";

const MessagePage: React.FC = () => {
    return (
        <div className="flex h-full">
            <LeftPanel/>
            <div className="flex-grow flex flex-col h-full">
                <div className="flex-grow flex h-full">
                    <MiddlePanel/>
                    <RightPanel/>
                </div>
            </div>
        </div>
    )
}

export default MessagePage
