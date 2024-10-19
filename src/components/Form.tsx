import React, {ReactNode} from "react";

import classNames from "../services/utils/classNames.tsx";

interface FormProps {
    action: string;
    children: ReactNode;
    method: "DELETE" | "GET" | "POST" | "PUT";

    [key: string]: any;
}

const Form: React.FC<FormProps> = ({action="#", children, method, ...props}) => {
    return (
        <form
            action={action}
            method={method}
            className={classNames("space-y-6", props.extraClassNames)} {...props}
        >
            {children}
        </form>
    )
};

export default Form
