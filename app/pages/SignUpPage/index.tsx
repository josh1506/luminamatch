import React from "react";
import SignUpForm from "./SignUpForm.tsx";
import SignUpHeader from "./SignUpHeader.tsx";
import SignInImage from "../SignInPage/SignInImage.tsx";
import SocialMediaLogin from "../SignInPage/SocialMediaLogin.tsx";

const SignUpPage: React.FC = () => {
    return (
        <div className="flex min-h-full flex-1">
            <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <SignUpHeader/>
                    <div className="mt-10">
                        <SignUpForm/>
                        <SocialMediaLogin/>
                    </div>
                </div>
            </div>
            <SignInImage/>
        </div>
    )
}

export default SignUpPage
