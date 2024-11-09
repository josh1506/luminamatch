import React from "react";
import ProfileAboutSection from "./ProfileAboutSection.tsx";
import ProfileAllBadgeSection from "./ProfileAllBadgeSection.tsx";
import ProfileAvatar from "./ProfileAvatar.tsx";
import ProfileDisplayBadge from "./ProfileDisplayBadge.tsx";
import ProfileSocialMediaSection from "./ProfileSocialMediaSection.tsx";
import ProfileStatsSection from "./ProfileStatsSection.tsx";
import profileCover from "../../assets/images/example/user/profile_cover.jpg";

const ProfilePage: React.FC = () => {
    return (
        <div className="flex justify-center">
            <div className="max-w-screen-xl w-full mb-4">
                <div className="relative w-full min-h-[34rem]">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${profileCover})`,
                            backgroundBlendMode: 'overlay',
                        }}
                    />
                    <div className="absolute bottom-2 left-0 mx-6 flex">
                        <ProfileAvatar/>
                        <div className="flex flex-col gap-1 ml-4 mt-4">
                            <h1 className="text-4xl font-bold text-white">Jane Doe</h1>
                            <ProfileStatsSection/>
                            <div className="flex items-end text-white gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25
                                        2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21
                                        18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                    />
                                </svg>
                                <span className="text-xs">Joined February 2024</span>
                            </div>
                            <ProfileDisplayBadge/>
                        </div>
                    </div>

                    <div className="absolute top-5 right-5">
                        asd
                    </div>
                </div>
                <div className="flex mt-3">
                    <div className="w-2/6 mr-4">
                        <div className="bg-gray-200 rounded-lg px-6 py-10 flex flex-col gap-4">
                            <p>
                                Adventurer at heart 🌍 | Coffee enthusiast ☕ | Living life one hike at a time 🏞️.
                                Currently exploring the world and capturing memories along the way. Let's connect and
                                share our stories!
                            </p>
                            <ProfileAboutSection/>
                            <ProfileSocialMediaSection/>
                            <ProfileAllBadgeSection/>
                        </div>
                    </div>

                    <div className="w-4/6">
                        <h1>Profile Feed</h1>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfilePage;
