import React from "react";
import Button from "~/components/Button";
import ProfileAvatar from "~/components/ProfileAvatar";
import parseParagraph from "~/services/utils/parsePargraph";

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
                <div className="bg-white h-12 w-12 rounded-full overflow-hidden">
                    <ProfileAvatar/>
                </div>
                <div className="flex gap-4 items-center">
                    <span className="font-semibold max-w-44 text-ellipsis truncate">Jane Doe</span>
                    <span>-</span>
                    <div className="flex gap-2 text-sm">
                        <span>Dec 08, 2024</span>
                        <span>12:32 AM</span>
                    </div>
                </div>

                <div className="flex gap-2 absolute top-0 right-2 px-1 py-1">
                    <Button
                        buttonType="button"
                        buttonColor="none"
                        label="Like"
                        extraClassNames="hover:bg-gray-300"
                    />
                    <Button
                        buttonType="button"
                        buttonColor="none"
                        label="Share"
                        extraClassNames="hover:bg-gray-300"
                    />
                    <Button
                        buttonType="button"
                        buttonColor="none"
                        label="Hide"
                        extraClassNames=""
                    />
                </div>
            </div>
            <div className="mt-4">
                <p className="whitespace-pre-wrap">
                    {parseParagraph(userPost)}
                </p>
            </div>
            <div className="flex gap-2">
                {["React Icons", "Comments"].map((label, index) => (
                    <Button
                        buttonType="button"
                        buttonColor="none"
                        label={label}
                        extraClassNames="hover:bg-gray-300"
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default UserPost
