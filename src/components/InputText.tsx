import React from "react";
import classNames from "../services/utils/classNames.tsx";
import {InputTextProps} from "../interfaces/components/InputTextProps.tsx";

const InputText: React.FC<InputTextProps> = ({label, name, inputType, isRequired, ...props}) => {
    return (
        <div>
            {label && (
                <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
                    {label}
                </label>
            )}
            <div className="mt-2">
                <input
                    className={classNames(`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm
                    sm:leading-6 px-2`, props.extraClassName)}
                    id={name}
                    name={name}
                    required={isRequired}
                    type={inputType}
                    {...props}
                />
            </div>
        </div>
    )
}

export default InputText
