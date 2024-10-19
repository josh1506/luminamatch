import React from "react";
import SigninImage from "../../assets/images/registration/signin/sign-in-image.jpg";

const SignInImage: React.FC = () => {
    return (
        <div className="relative hidden w-0 flex-1 lg:block">
            <img
                alt="coffee"
                src={SigninImage}
                className="absolute inset-0 h-full w-full object-cover"
            />
        </div>
    )
}

export default SignInImage
