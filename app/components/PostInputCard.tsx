import React from "react";
import Button from "~/components/Button";
import InputTextarea from "~/components/InputTextarea";
import ProfileAvatar from "~/components/ProfileAvatar";

const PostInputCard: React.FC = () => {
    return (
        <div className="bg-gray-200 p-4 rounded-lg pb-2 flex gap-2">
            <div className="h-12 w-12">
                <ProfileAvatar/>
            </div>
            <div className="w-full">
                <InputTextarea
                    placeholder="What's in your mind?"
                    onChange={() => {
                    }}
                />
                <div className="flex gap-2 justify-between">
                    <Button
                        buttonType="button"
                        buttonColor="none"
                        label="Upload photo"
                        extraClassNames="hover:bg-gray-300"
                    />
                    <Button
                        buttonType="button"
                        buttonColor="none"
                        label="Post"
                        extraClassNames="hover:bg-gray-300"
                    />
                </div>
            </div>
        </div>
    )
}

export default PostInputCard
