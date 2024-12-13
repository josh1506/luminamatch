import React from "react";
import UserPost from "../../../components/UserPost.tsx";

const MiddlePanel : React.FC = () => {
    return (
        <div className="flex flex-grow overflow-y-auto justify-center py-4">
            <div className="w-full max-w-[42rem] flex flex-col gap-4">
                <UserPost/>
            </div>
        </div>
    )
}

export default MiddlePanel
