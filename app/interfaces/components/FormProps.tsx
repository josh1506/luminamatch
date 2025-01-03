import {ReactNode} from "react";

export interface FormProps {
    action: string;
    children: ReactNode;
    method: "DELETE" | "GET" | "POST" | "PUT";

    [key: string]: any;
}