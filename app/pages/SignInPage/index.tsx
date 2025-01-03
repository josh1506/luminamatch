import React from "react";
import SignInForm from "./SignInForm.tsx";
import SignInHeader from "./SignInHeader.tsx";
import SignInImage from "./SignInImage.tsx";
import SocialMediaLogin from "./SocialMediaLogin.tsx";

const SignInPage: React.FC = () => {
    return (
        <div className="flex min-h-full flex-1">
            <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <SignInHeader/>
                    <div className="mt-10">
                        <SignInForm/>
                        <SocialMediaLogin/>
                    </div>
                </div>
            </div>
            <SignInImage/>
        </div>
    )
}

export default SignInPage
