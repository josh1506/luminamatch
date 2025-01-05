import Form from "~/components/Form";
import InputText from "~/components/InputText";
import Button from "~/components/Button";
import ActionLink from "~/components/ActionLink";
import React from "react";


const SignUpForm = () => {
    return (
        <div>
            <Form action="#" method="POST">
                <div className={"flex flex-col gap-2"}>
                    <InputText
                        label={"Email"}
                        name={"email"}
                        inputType={"email"}
                        autoComplete={"email"}
                        isRequired={true}
                    />
                    <InputText
                        label={"Password"}
                        name={"password"}
                        inputType={"password"}
                        autoComplete={"password"}
                        isRequired={true}
                    />
                    <InputText
                        label={"Confirm password"}
                        name={"confirm_password"}
                        inputType={"password"}
                        autoComplete={"confirm_password"}
                        isRequired={true}
                    />
                </div>

                <div className={"flex justify-between"}>
                    <div>
                        <ActionLink link="/login" linkType="button">
                            Back
                        </ActionLink>
                    </div>
                    <Button
                        buttonType={"submit"}
                        label={"Sign up"}
                        buttonColor={"primary"}
                    />
                </div>
            </Form>
        </div>
    )
}

export default SignUpForm
