import {ReactNode} from "react";

export interface ActionLinkProps {
    linkType?: "text" | "button";
    link: string;
    children: ReactNode;

    [key: string]: any;
}
