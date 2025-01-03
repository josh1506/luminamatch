import React from "react";

const parseParagraph = (text: string): (React.JSX.Element | string)[] => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part: string, index: React.Key) => {
        if (urlRegex.test(part)) {
            return (
                <a
                    key={index}
                    href={part}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                >
                    {part}
                </a>
            );
        }
        return part;
    });
};

export default parseParagraph
