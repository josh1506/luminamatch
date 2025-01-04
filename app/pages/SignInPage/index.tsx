import React from "react";
import SignInHeader from "~/pages/SignInPage/SignInHeader";
import SignInForm from "~/pages/SignInPage/SignInForm";
import SocialMediaLogin from "~/pages/SignInPage/SocialMediaLogin";

const SignInPage: React.FC = () => {
    return (
        <div className="mx-auto w-full max-w-sm lg:w-96">
            <SignInHeader/>
            <div className="mt-10">
                <SignInForm/>
                <SocialMediaLogin/>
            </div>
        </div>
    )
}

export default SignInPage
