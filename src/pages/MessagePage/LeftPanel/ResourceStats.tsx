import React from "react";

const ResourceStats: React.FC = () => {
    return (
        <div className="bg-stone-700 text-white h-8 flex-shrink-0 flex items-center justify-around">
            {["Gems: 1.5k", "Diamond: 5.2k", "VIP: 6"].map((label, index) => (
                <span className="text-sm font-semibold tracking-wide" key={index}>{label}</span>
            ))}
        </div>
    )
}

export default ResourceStats
