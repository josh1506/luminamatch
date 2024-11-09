import React from "react";

const ProfileStatsSection: React.FC = () => {
    return (
        <div className="flex gap-6 text-white">
            <button className="font-bold text-blue-400 text-sm hover:text-blue-500 duration-300">2.3k Followers</button>
            <button className="font-bold text-blue-400 text-sm hover:text-blue-500 duration-300">13k Following</button>
            <button className="font-bold text-blue-400 text-sm hover:text-blue-500 duration-300">52k Viewers</button>
        </div>
    )
};

export default ProfileStatsSection;
