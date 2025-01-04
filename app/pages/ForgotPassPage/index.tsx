import React from "react";
import ForgotPassHeader from "~/pages/ForgotPassPage/ForgotPassHeader";
import ForgotPassForm from "~/pages/ForgotPassPage/ForgotPassForm";

const ForgotPassPage: React.FC = () => {
    return (
        <div className="mx-auto w-full max-w-sm lg:w-96">
            <ForgotPassHeader/>
            <div className="mt-10">
                <ForgotPassForm/>
            </div>
        </div>
    )
}

export default ForgotPassPage
