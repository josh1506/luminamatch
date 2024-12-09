import React from "react";
import Button from "./Button.tsx";
import ProfileAvatar from "../components/ProfileAvatar.tsx";
import parseParagraph from "../services/utils/parsePargraph.tsx";

const UserPost: React.FC = () => {
    const userPost = (
        "Navigating the World of Online Dating\n" +
        "Dating apps have revolutionized how people connect, offering a unique way to meet individuals who share your interests and values. With features like video calls, live streams, and interactive chats, these platforms create opportunities for deeper connections beyond just swiping. It’s fascinating to see how technology bridges the gap, turning a simple app on your phone into a gateway to meaningful relationships.\n" +
        "\n" +
        "Balancing Opportunity with Caution\n" +
        "While dating apps open doors to new connections, they also remind us to navigate the digital space mindfully. Ensuring personal safety, being honest about intentions, and respecting others’ boundaries are vital in creating a positive experience. As more people turn to these platforms, it’s clear they are not just about finding love—they’re about understanding and embracing the complexities of human connection.\n" +
        "\n" +
        "https://www.facebook.com"
    )

    return (
        <div className="bg-gray-200 rounded-lg px-4 pt-4 pb-2">
            <div className="flex items-center relative gap-2">
                <div className="bg-white h-14 w-14 rounded-full overflow-hidden">
                    <ProfileAvatar/>
                </div>
                <div>
                    <span className="font-semibold">Jane Doe</span>
                    <div className="flex gap-2 text-sm">
                        <span>Dec 08, 2024</span>
                        <span>12:32 AM</span>
                    </div>
                </div>

                <Button
                    buttonType="button"
                    buttonColor="none"
                    label="Hide"
                    extraClassNames="absolute top-0 right-2 px-1 py-1"
                />
            </div>
            <div className="mt-4">
                <p className="whitespace-pre-wrap">
                    {parseParagraph(userPost)}
                </p>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <Button
                        buttonType="button"
                        buttonColor="none"
                        label="Like"
                        extraClassNames="hover:bg-gray-300"
                    />
                    <Button
                        buttonType="button"
                        buttonColor="none"
                        label="Comment"
                        extraClassNames="hover:bg-gray-300"
                    />
                    <Button
                        buttonType="button"
                        buttonColor="none"
                        label="Share"
                        extraClassNames="hover:bg-gray-300"
                    />
                </div>
                <div>
                    <Button
                        buttonType="button"
                        buttonColor="none"
                        label="Top 3 Reaction icons"
                        extraClassNames="hover:bg-gray-300"
                    />
                </div>
            </div>
        </div>
    )
}

export default UserPost
