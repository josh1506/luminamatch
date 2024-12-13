import React from "react";
import Button from "../../../components/Button.tsx";
import ProfileAvatar from "../../../components/ProfileAvatar.tsx";

const FriendSuggest: React.FC = () => {
    return (
        <div>
            <h3 className="font-semibold">
                Suggest friends
            </h3>
            <div className="flex flex-col gap-1">
                <div className="flex gap-2 px-2 py-2 bg-gray-300 rounded-lg">
                    <div className="h-16 w-16">
                        <ProfileAvatar/>
                    </div>
                    <div className="flex flex-col">
                        <a href=""
                           className="font-semibold w-52 overflow-hidden text-ellipsis whitespace-nowrap">
                            Sophia Bennett
                        </a>
                        <div className="flex gap-2">
                            <Button
                                label="Add"
                                extraClassNames="pt-1 pb-1"
                            />
                            <Button
                                label="Cancel"
                                extraClassNames="pt-1 pb-1"
                            />
                            <Button
                                label="Hide"
                                extraClassNames="pt-1 pb-1"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendSuggest
