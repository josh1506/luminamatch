import React from "react";
import ProfileAvatar from "../../../components/ProfileAvatar.tsx";

const UserProfile: React.FC = () => {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="h-72 w-72">
                <ProfileAvatar/>
            </div>
            <span className="text-2xl font-bold tracking-wide text-white">Jane Doe</span>
        </div>
    )
}

export default UserProfile
