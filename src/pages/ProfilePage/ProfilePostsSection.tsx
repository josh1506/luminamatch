import React from "react";
import ProfileUserPostInput from "./ProfileUserPostInput.tsx";
import TextHeader from "../../components/TextHeader.tsx";
import PostToggleMenu from "./PostToggleMenu.tsx";
import UserPost from "../../components/UserPost.tsx";

const ProfilePostsSection: React.FC = () => {
    return (
        <div className="lg:w-4/6 lg:mx-0 mx-2">
            <ProfileUserPostInput/>
            <hr className="mt-6 mb-4"/>
            <div>
                <div className="flex justify-between">
                    <TextHeader extraClassNames="text-md font-semibold">
                        Latest posts
                    </TextHeader>
                    <PostToggleMenu/>
                </div>

                <div className="flex flex-col gap-4">
                    <UserPost/>
                </div>
            </div>
        </div>
    )
}

export default ProfilePostsSection
