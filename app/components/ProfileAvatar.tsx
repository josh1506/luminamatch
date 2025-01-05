import React from "react";
import profilePhoto from "~/assets/images/example/user/profile_photo.jpg";

const ProfileAvatar: React.FC = () => {
    return (
        <img
            src={profilePhoto}
            alt="profile_photo"
            className="bg-yellow-300 h-full w-full rounded-full"
            draggable={false}
        />
    )
};

export default ProfileAvatar;
