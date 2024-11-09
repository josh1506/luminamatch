import React from "react";

const ProfileAboutSection: React.FC = () => {
    return (
        <div>
            <h2 className="font-bold text-xl">About</h2>
            <dl>
                <div className="flex">
                    <dt className="font-semibold">Age:</dt>
                    <dd className="ml-2">25</dd>
                </div>

                <div className="flex">
                    <dt className="font-semibold">Gender:</dt>
                    <dd className="ml-2">Male</dd>
                </div>
            </dl>
        </div>
    )
};

export default ProfileAboutSection;
