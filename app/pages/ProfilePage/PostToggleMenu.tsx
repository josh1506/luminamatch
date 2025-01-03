import React from "react";
import Button from "../../components/Button.tsx";

const PostToggleMenu: React.FC = () => {
    const toggleTypes = ["Posts", "Replies", "Media", "Likes"]
    return (
        <div className="flex gap-1 mb-1">
            {toggleTypes.map((label, index) => (
                <Button
                    key={index}
                    buttonType="button"
                    buttonColor="none"
                    label={label}
                    extraClassNames="hover:bg-gray-300 py-0"
                />
            ))}
        </div>
    )
}

export default PostToggleMenu
