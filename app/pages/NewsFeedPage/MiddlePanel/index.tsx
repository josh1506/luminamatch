import React from "react";
import UserPost from "../../../components/UserPost.tsx";
import PostInputCard from "../../../components/PostInputCard.tsx";
import UserStories from "./UserStories.tsx";
import Button from "../../../components/Button.tsx";

const MiddlePanel : React.FC = () => {
    return (
        <div className="flex flex-col flex-grow overflow-y-auto">
            <div className="flex justify-end sticky top-0 bg-white z-20 border-b">
                <Button label="Latest posts" extraClassNames="border-0 w-full rounded-none py-4"/>
                <Button label="Trending posts" extraClassNames="border-0 w-full rounded-none py-4"/>
                <Button label="Following users" extraClassNames="border-0 w-full rounded-none py-4"/>
            </div>
            <div className="flex justify-center">
                <div className="w-full max-w-[48rem] flex flex-col gap-4">
                    <div className="pt-4">
                        <span className="font-semibold tracking-wider">Stories</span>
                        <UserStories/>
                    </div>
                    <PostInputCard/>
                    <div>
                        <div className="flex flex-col gap-4">
                            {[0, 0].map((_, i) => <UserPost key={i}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddlePanel
