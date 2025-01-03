import React from "react";
import UserMessages from "./UserMessages.tsx";
import ChatActions from "./ChatActions.tsx";

const MiddlePanel: React.FC = () => {
    return (
        <div className="h-full flex-grow flex flex-col relative">
            <UserMessages/>
            <ChatActions/>
        </div>
    )
}

export default MiddlePanel
