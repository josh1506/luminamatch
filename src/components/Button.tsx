import React from "react";
import classNames from "../services/utils/classNames.tsx";

interface ButtonProps {
    label: string;
    buttonType?: "button" | "submit" | "reset";

    [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({buttonType="submit", label, ...props}) => {
    return (
        <button
            type={buttonType}
            className={classNames(
                `flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6
                text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-2 focus-visible:outline-blue-500`,
                props.extraClassNames
            )}
            {...props}
        >
            {label}
        </button>
    )
}

export default Button
