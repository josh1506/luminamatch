import React from "react";
import Form from "~/components/Form";
import InputText from "~/components/InputText";
import ActionLink from "~/components/ActionLink";
import Button from "~/components/Button";

const SignInForm: React.FC = () => {
    return (
        <div>
            <Form action="#" method="POST">
                <InputText
                    label={"Email address"}
                    name={"email"}
                    inputType={"email"}
                    autoComplete={"email"}
                    isRequired={true}
                />

                <InputText
                    label={"Password"}
                    name={"password"}
                    inputType={"password"}
                    autoComplete={"current-password"}
                    isRequired={true}
                />

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                        />
                        <label htmlFor="remember-me"
                               className="ml-3 block text-sm leading-6 text-gray-700">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm leading-6">
                        <ActionLink link="/forgot/password" linkType="text">
                            Forgot password?
                        </ActionLink>
                    </div>
                </div>

                <div>
                    <Button
                        buttonType={"submit"}
                        label={"Sign in"}
                        buttonColor={"primary"}
                        extraClassNames={"w-full"}
                    />
                </div>
            </Form>
        </div>
    )
}

export default SignInForm
