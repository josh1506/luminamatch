import React from "react";
import classNames from "../services/utils/classNames.tsx";
import {ButtonProps} from "../interfaces/components/ButtonProps.tsx";

const Button: React.FC<ButtonProps> = ({buttonType = "submit", buttonColor="default", label, ...props}) => {
    const handleButtonColor = (buttonColor: string) => {
        switch (buttonColor) {
            case "primary":
                return "text-white bg-blue-500 hover:bg-blue-400 focus-visible:outline-blue-500";
            case "secondary":
                return "text-white bg-gray-500 hover:bg-gray-400 focus-visible:outline-gray-500";
            case "success":
                return "text-white bg-green-500 hover:bg-green-400 focus-visible:outline-green-500";
            case "danger":
                return "text-white bg-red-500 hover:bg-red-400 focus-visible:outline-red-500";
            case "none":
                return "text-black focus-visible:outline-gray-500";
            default:
                return "text-black border border-gay-500 bg-white hover:bg-gray-100 focus-visible:outline-gray-500";
        }
    }

    return (
        <button
            type={buttonType}
            className={classNames(
                `flex justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                duration-300`,
                handleButtonColor(buttonColor),
                props.extraClassNames
            )}
            {...props}
        >
            {label}
        </button>
    )
};

export default Button
