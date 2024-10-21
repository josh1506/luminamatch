import React from "react";
import ForgotPassForm from "./ForgotPassForm.tsx";
import ForgotPassHeader from "./ForgotPassHeader.tsx";
import SignInImage from "../SignInPage/SignInImage.tsx";

const ForgotPassPage: React.FC = () => {
    return (
        <div className="flex min-h-full flex-1">
            <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <ForgotPassHeader/>
                    <div className="mt-10">
                        <ForgotPassForm/>
                    </div>
                </div>
            </div>
            <SignInImage/>
        </div>
    )
}

export default ForgotPassPage
