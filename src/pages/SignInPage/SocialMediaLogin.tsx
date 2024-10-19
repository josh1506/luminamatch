import React from "react";
import ActionLink from "../../components/ActionLink.tsx";
import Text from "../../components/TextHeader.tsx";

const SocialMediaLogin: React.FC = () => {
    return (
        <div className="mt-10">
            <div className="relative">
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"/>
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                    <Text component={"span"} className="bg-white px-6">
                        Or continue with
                    </Text>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
                <ActionLink link="#" linkType="button">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                        <path
                            d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                            fill="#EA4335"
                        />
                        <path
                            d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                            fill="#4285F4"
                        />
                        <path
                            d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                            fill="#34A853"
                        />
                    </svg>
                    <Text component={"span"} className="text-sm font-semibold leading-6">
                        Google
                    </Text>
                </ActionLink>

                <ActionLink link="#" linkType="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor"
                         className="h-5 w-5 fill-blue-600" viewBox="0 0 438 502">
                        <path
                            d="M64 32C28.7 32 0 60.7.0 96V416c0 35.3 28.7 64 64
                            64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5 16.2.0
                            44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1-42 0-58.2
                            15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3.0
                            64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
                        />
                    </svg>
                    <Text component={"span"} extraClassNames="text-sm font-semibold leading-6">
                        Facebook
                    </Text>
                </ActionLink>
            </div>
        </div>
    )
}

export default SocialMediaLogin
