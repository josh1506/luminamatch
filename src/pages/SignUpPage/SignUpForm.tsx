import Button from "../../components/Button.tsx";
import Form from "../../components/Form.tsx";
import InputText from "../../components/InputText.tsx";

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
                    <Button
                        buttonType={"button"}
                        label={"Back"}
                    />
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
