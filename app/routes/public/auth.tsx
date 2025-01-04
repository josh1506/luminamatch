import React from "react";
import {Outlet} from "react-router";
import SignInImage from "~/pages/SignInPage/SignInImage";

const Auth: React.FC = () => {
    return (
        <div className="h-screen">
            <div className="flex min-h-full flex-1">
                <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <Outlet/>
                </div>
                <SignInImage/>
            </div>
        </div>
    )
}

export default Auth
