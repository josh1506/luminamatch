import React from "react";
import ActionLink from "../../components/ActionLink.tsx";
import Text from "../../components/TextHeader.tsx";
import LogoImage from "../../assets/images/common/logo/60.jpg";

const SignInHeader: React.FC = () => {
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
            <Text component={"h2"} extraClassNames="mt-8 text-2xl font-bold leading-9 tracking-tight">
                Sign in to your account
            </Text>
            <Text component={"p"} className="mt-2 text-sm leading-6 text-gray-500">
                Not a member?{' '}
                <ActionLink link="#" linkType="text">
                    Create an account
                </ActionLink>
            </Text>
        </div>
    )
}

export default SignInHeader
