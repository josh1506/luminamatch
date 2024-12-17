import React from "react";
import ProfileAvatar from "../../../components/ProfileAvatar.tsx";

const UserStories: React.FC = () => {
    return (
        <div className="w-full overflow-x-auto flex gap-2 pb-2 ">
            {[0, 0, 0, 0, 0, 0, 0, 0, 0].map((_, i) => (
                <div className="flex flex-col w-20 flex-shrink-0" key={i}>
                    <button
                        className="h-20 w-full rounded-full bg-red-400 hover:opacity-85 duration-300 border-4 border-blue-500 hover:border-blue-400"
                    >
                        <ProfileAvatar/>
                    </button>
                    <span className="truncate px-1 text-center">Rachelle</span>
                </div>
            ))}
        </div>
    )
}

export default UserStories
