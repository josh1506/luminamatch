import React from "react";
import ProfileAboutSection from "./ProfileAboutSection.tsx";
import ProfileSocialMediaSection from "./ProfileSocialMediaSection.tsx";
import ProfileAllBadgeSection from "./ProfileAllBadgeSection.tsx";
import ProfileAboutMe from "./ProfileAboutMe.tsx";

const ProfileSummary: React.FC = () => {
    return (
        <div className="mx-2 mb-3 lg:w-2/6 lg:mr-4 lg:ml-0 lg:mb-0">
            <div className="bg-gray-200 rounded-lg px-6 py-10 flex flex-col gap-4">
                <ProfileAboutMe/>
                <ProfileAboutSection/>
                <ProfileSocialMediaSection/>
                <ProfileAllBadgeSection/>
            </div>
        </div>
    )
}

export default ProfileSummary
