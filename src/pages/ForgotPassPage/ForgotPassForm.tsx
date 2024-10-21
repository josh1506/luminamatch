import React from "react";
import Form from "../../components/Form.tsx";
import InputText from "../../components/InputText.tsx";
import Button from "../../components/Button.tsx";

const ForgotPassForm: React.FC = () => {
    return (
        <Form action="#" method="POST">
            <InputText
                label="Email"
                name="email"
                inputType="email"
                placeholder="example@gmail.com"
                isRequired={true}
            />
            <div className={"flex gap-2"}>
                <Button
                    extraClassNames={"w-1/2"}
                    buttonType="button"
                    label="Cancel"
                />
                <Button
                    extraClassNames={"w-full"}
                    buttonType="submit"
                    buttonColor={"primary"}
                    label="Send"
                />
            </div>
        </Form>
    )
}

export default ForgotPassForm
