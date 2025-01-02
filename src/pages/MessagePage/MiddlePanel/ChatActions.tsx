import React from "react";

const ChatActions: React.FC = () => {
    return (
        <div
            className="w-full border-t flex justify-center items-center bottom-0 h-20 gap-4 flex-shrink-0 px-2">
            <div className="flex space-x-2">
                {["Files", "Gift"].map((label, index) => (
                    <button className="bg-purple-500 h-14 w-14 rounded-full text-white" key={index}>
                        {label}
                    </button>
                ))}
            </div>
            <div className="w-3/4 flex items-center">
                <textarea className="w-full resize-none border rounded"/>
            </div>
            <div className="flex space-x-2">
                <button className="bg-purple-500 h-14 w-14 rounded-full text-white">
                    Send
                </button>
            </div>
        </div>
    )
}

export default ChatActions
