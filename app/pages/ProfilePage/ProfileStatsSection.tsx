import React from "react";
import Button from "../../components/Button.tsx";

const ProfileStatsSection: React.FC = () => {
    return (
        <div className="flex gap-2">
            {["2.3k Followers", "13k Following", "52k Viewers"].map((label, index) => (
                <Button
                    key={index}
                    label={label}
                    extraClassNames="font-bold text-white text-sm duration-300 bg-black bg-opacity-50 rounded border-none hover:bg-black hover:bg-opacity-70 px-0.5 pt-0 pb-0 lg:py-1.5 lg:px-3"
                />
            ))}
        </div>
    )
};

export default ProfileStatsSection;
