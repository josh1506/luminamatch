import React from "react";
import classNames from "~/services/utils/classNames";
import type {FormProps} from "~/interfaces/components/FormProps";

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
