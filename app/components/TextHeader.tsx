import React from "react";
import classNames from "../services/utils/classNames.tsx";
import {TextHeaderProps} from "../interfaces/components/TextHeaderProps.tsx";

const Text: React.FC<TextHeaderProps> = ({component: Component = "h1", children, ...props}) => {
    return (
        <Component className={classNames("text-gray-900", props.extraClassNames)} {...props}>
            {children}
        </Component>
    )
};

export default Text
