import React from "react";
import ProfileAvatar from "../../../components/ProfileAvatar.tsx";

const UserStories: React.FC = () => {
    return (
        <div className="w-full overflow-x-auto flex gap-2 pb-2 ">
            {[0, 0, 0, 0, 0, 0, 0, 0, 0].map((_, i) => (
                <button className="h-52 min-w-36 bg-purple-500 relative rounded hover:opacity-85 duration-300 cursor-pointer" key={i}>
                    <div className="flex flex-col items-center absolute w-full bottom-2">
                        <div
                            className="h-12 w-12 rounded-full bg-purple-500 border-4 border-blue-500"
                        >
                            <ProfileAvatar/>
                        </div>
                        <span className="truncate px-1 text-center text-white font-semibold">Rachelle</span>
                    </div>
                </button>
            ))}
        </div>
    )
}

export default UserStories
