import React, {JSX, ReactNode} from "react";
import classNames from "../services/utils/classNames.tsx";

interface TextProps {
    component?: keyof JSX.IntrinsicElements;
    children: ReactNode;
    className?: string;

    [key: string]: any;
}

const Text: React.FC<TextProps> = ({component: Component = "h1", children, ...props}) => {
    return (
        <Component className={classNames("text-gray-900", props.extraClassNames)} {...props}>
            {children}
        </Component>
    )
};

export default Text
