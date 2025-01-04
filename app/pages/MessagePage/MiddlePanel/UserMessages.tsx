import React from "react";
import classNames from "../../../services/utils/classNames.tsx";
import ProfileAvatar from "../../../components/ProfileAvatar.tsx";
import {chatMessages} from "../../../services/constants/examples/userMessages.ts";
import {formatDateTime} from "../../../services/utils/formatDateTime.ts";

const UserMessages: React.FC = () => {
    const getChatAlignmentClasses = (isOwner: boolean) =>
        classNames("px-6 w-full flex", isOwner ? "justify-end" : "justify-start")

    const getTimestampAlignmentClasses = (isOwner: boolean) =>
        classNames("flex", isOwner ? "justify-end" : "justify-start")

    const getMessageClasses = (isOwner: boolean) =>
        classNames(
            "max-w-96 px-4 py-4 rounded-xl whitespace-pre-wrap",
            isOwner ? "bg-stone-200 rounded-br-none" : "bg-purple-500 text-white rounded-bl-none"
        )

    return (
        <div className="pb-8 pt-8 overflow-y-auto flex flex-col gap-1">
            {chatMessages.map((chat, index) => (
                <div className={getChatAlignmentClasses(chat.isOwner)} key={index}>
                    <div className="flex items-end gap-2">
                        {!chat.isOwner && (
                            <div className="w-14 h-14">
                                <ProfileAvatar/>
                            </div>
                        )}
                        <div className="flex flex-col">
                            <p className={getMessageClasses(chat.isOwner)}>
                                {chat.content}
                            </p>
                            <div className={getTimestampAlignmentClasses(chat.isOwner)}>
                                <span className="text-sm">{formatDateTime(chat.timestamp)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UserMessages
