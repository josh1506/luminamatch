import React from "react";
import {InputTextAreaProps} from "../interfaces/components/InputTextAreaProps.tsx";

const InputTextarea : React.FC<InputTextAreaProps> = ({placeholder, onChange}) => {
    return (
        <textarea
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-28 max-h-60 resize-none"
            placeholder={placeholder}
            rows={3}
            onChange={(e) => onChange(e.target.value)}
            onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
                const target = e.currentTarget;
                target.style.height = 'auto';
                const computedHeight = target.scrollHeight;
                target.style.height = `${Math.min(computedHeight, 240)}px`;
            }}
        />
    )
}

export default InputTextarea
