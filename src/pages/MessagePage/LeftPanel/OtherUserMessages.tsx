import React from "react";
import classNames from "../../../services/utils/classNames.tsx";
import ProfileAvatar from "../../../components/ProfileAvatar.tsx";

const OtherUserMessages: React.FC = () => {
    return (
        <div className="flex-grow overflow-y-auto">
            {[0, 0, 0, 0, 0, 0, 0, 0, 0].map((_, index, array) => (
                <a
                    href=""
                    className={classNames(
                        "flex gap-2 px-2 py-4 w-full items-center",
                        index < array.length - 1 ? "border-b" : ""
                    )} key={index}
                >
                    <div className="h-16 w-16">
                        <ProfileAvatar/>
                    </div>
                    <div className="flex-grow">
                        <div className="flex justify-between">
                            <span className="font-semibold">Jane Doe</span>
                            <span>Jan. 19, 2024</span>
                        </div>
                        <div className="w-72">
                            <p className="text-ellipsis truncate">
                                This is a sample message
                            </p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    )
}

export default OtherUserMessages
