import React from "react";
import Text from "../../components/TextHeader.tsx";
import LogoImage from "../../assets/images/common/logo/60.jpg";

const ForgotPassHeader: React.FC = () => {
    return (
        <div>
            <div className={"flex items-center gap-2"}>
                <img
                    alt="Your Company"
                    src={LogoImage}
                />
                <Text component={"span"} className={"text-3xl font-semibold tracking-wide"}>
                    Lumina Match
                </Text>
            </div>
            <Text component={"h2"} className="mt-8 text-2xl font-bold leading-9 tracking-tight">
                Forgot Password
            </Text>
            <Text component={"p"} className="mt-2 text-sm leading-6 text-gray-500">
                {
                    "No worries! Just enter your email address below, and we'll send you a link to reset your" +
                    " password. Follow the instructions in the email to regain access to your account. If you" +
                    " don't receive an email, make sure to check your spam or junk folder."
                }
            </Text>
        </div>
    )
}

export default ForgotPassHeader
