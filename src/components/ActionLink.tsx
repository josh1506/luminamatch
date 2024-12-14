import React from "react";
import classNames from "../services/utils/classNames.tsx";
import {ActionLinkProps} from "../interfaces/components/ActionLinkProps.tsx";

const ActionLink: React.FC<ActionLinkProps> = ({linkType = "text", link, children, ...props}) => {
    const handleStyle = () => {
        if (!linkType){
            return ""
        } else if (linkType.toLowerCase() == "text") {
            return "font-semibold text-blue-500 hover:text-blue-400"
        } else if (linkType.toLowerCase() == "button") {
            return (
                `flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold
                text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50
                focus-visible:ring-transparent`
            )
        }
    }

    return (
        <a href={link} className={classNames(handleStyle(), props.extraClassNames)} {...props}>
            {children}
        </a>
    )
}

export default ActionLink
