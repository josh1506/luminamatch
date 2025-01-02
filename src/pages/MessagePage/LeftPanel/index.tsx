import React from "react";
import InboxHeader from "./InboxHeader.tsx";
import InboxFooter from "./InboxFooter.tsx";
import ResourceStats from "./ResourceStats.tsx";
import OtherUserMessages from "./OtherUserMessages.tsx";

const LeftPanel: React.FC = () => {
    return (
        <div className="w-0 lg:w-96 flex-shrink-0 h-full flex flex-col duration-300 border-r overflow-x-hidden">
            <InboxHeader/>
            <OtherUserMessages/>
            <ResourceStats/>
            <InboxFooter/>
        </div>
    )
}

export default LeftPanel
