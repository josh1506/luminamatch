import React from "react";
import ActionLink from "~/components/ActionLink";
import Form from "~/components/Form";
import InputText from "~/components/InputText";
import Button from "~/components/Button";

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
                <ActionLink link="/login" linkType = "button">
                    Cancel
                </ActionLink>
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
