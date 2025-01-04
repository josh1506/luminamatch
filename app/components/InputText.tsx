import React from "react";
import classNames from "~/services/utils/classNames";
import type {InputTextProps} from "~/interfaces/components/InputTextProps";

const InputText: React.FC<InputTextProps> = ({label, name, inputType, isRequired, extraClassName, placeholder}) => {
    return (
        <div>
            {label && (
                <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900 mb-2">
                    {label}
                </label>
            )}
            <div className="">
                <input
                    className={classNames(`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm
                    sm:leading-6 px-2`, extraClassName)}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    required={isRequired}
                    type={inputType}
                />
            </div>
        </div>
    )
}

export default InputText
