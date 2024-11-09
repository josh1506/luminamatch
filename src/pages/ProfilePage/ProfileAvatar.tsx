import React from "react";
import profilePhoto from "../../assets/images/example/user/profile_photo.jpg";

const ProfileAvatar: React.FC = () => {
    return (
        <div>
            <div className="bg-white h-52 w-52 rounded-full overflow-hidden p-2">
                <img
                    src={profilePhoto}
                    alt="profile_photo"
                    className="bg-yellow-300 h-full w-full rounded-full"
                    draggable={false}
                />
            </div>
        </div>
    )
};

export default ProfileAvatar;
