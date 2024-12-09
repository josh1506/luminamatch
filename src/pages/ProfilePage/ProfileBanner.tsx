import React from "react";
import profileCover from "../../assets/images/example/user/profile_cover.jpg";
import ProfileAvatar from "../../components/ProfileAvatar.tsx";
import ProfileStatsSection from "./ProfileStatsSection.tsx";
import ProfileDisplayBadge from "./ProfileDisplayBadge.tsx";

const ProfileBanner: React.FC = () => {
    return (
        <div className="relative w-full min-h-[34rem]">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${profileCover})`,
                    backgroundBlendMode: 'overlay',
                }}
            />
            <div className="absolute bottom-2 left-0 mx-6 flex">
                <div>
                    <div className="bg-white h-52 w-52 rounded-full overflow-hidden">
                        <ProfileAvatar/>
                    </div>
                </div>
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
                Partner Icon
            </div>
        </div>
    )
}

export default ProfileBanner
