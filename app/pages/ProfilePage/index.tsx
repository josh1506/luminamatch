import React from "react";
import ProfileBanner from "./ProfileBanner.tsx";
import ProfilePostsSection from "./ProfilePostsSection.tsx";
import ProfileSummary from "./ProfileSummary.tsx";

const ProfilePage: React.FC = () => {
    return (
        <div className="flex justify-center">
            <div className="max-w-screen-xl w-full mb-4">
                <ProfileBanner/>
                <div className="lg:flex mt-2 lg:mt-3">
                    <ProfileSummary/>
                    <ProfilePostsSection/>
                </div>
            </div>
        </div>
    )
};

export default ProfilePage;
