import React from "react";
import SignUpHeader from "~/pages/SignUpPage/SignUpHeader";
import SignUpForm from "~/pages/SignUpPage/SignUpForm";
import SocialMediaLogin from "~/pages/SignInPage/SocialMediaLogin";

const SignUpPage: React.FC = () => {
    return (
        <div className="mx-auto w-full max-w-sm lg:w-96">
            <SignUpHeader/>
            <div className="mt-10">
                <SignUpForm/>
                <SocialMediaLogin/>
            </div>
        </div>
    )
}

export default SignUpPage
