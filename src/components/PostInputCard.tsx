import React from "react";
import InputTextarea from "./InputTextarea.tsx";
import Button from "./Button.tsx";

const PostInputCard: React.FC = () => {
    return (
        <div className="bg-gray-200 p-4 rounded-lg pb-2">
            <InputTextarea
                placeholder="What's in your mind?"
                onChange={() => {
                }}
            />
            <div>
                <div className="flex gap-2">
                    <Button
                        buttonType="button"
                        buttonColor="none"
                        label="Post"
                        extraClassNames="hover:bg-gray-300"
                    />
                    <Button
                        buttonType="button"
                        buttonColor="none"
                        label="Upload photo"
                        extraClassNames="hover:bg-gray-300"
                    />
                </div>
            </div>
        </div>
    )
}

export default PostInputCard
