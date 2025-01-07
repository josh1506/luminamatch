import React from "react";
import ProfileAvatar from "~/components/ProfileAvatar";
import ActionLink from "~/components/ActionLink";

const UserSummary: React.FC = () => {
    return (
        <div className="flex gap-2 p-2 rounded-lg relative">
            <div>
                <div className="w-20 h-20">
                    <ProfileAvatar/>
                </div>
            </div>
            <div>
                <div className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap w-44">
                    Isabella Cruz
                </div>
                <div>
                    <div className="text-sm">Gems: 1.5k</div>
                    <div className="text-sm">Diamond: 5.2k</div>
                    <div className="text-sm">VIP: 6</div>
                </div>
            </div>
            <ActionLink link="/login" extraClassNames="absolute bottom-0 right-0 font-bold text-white hover:text-white">Logout</ActionLink>
        </div>
    )
}

export default UserSummary
