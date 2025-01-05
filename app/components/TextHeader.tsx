import React from "react";
import classNames from "~/services/utils/classNames";
import type {TextHeaderProps} from "~/interfaces/components/TextHeaderProps";

const Text: React.FC<TextHeaderProps> = ({component: Component = "h1", children, extraClassNames}) => {
    return (
        <Component className={classNames("text-gray-900", extraClassNames)}>
            {children}
        </Component>
    )
};

export default Text
