import type {ReactNode} from "react";

export interface ActionLinkProps {
    linkType?: "text" | "button";
    link: string;
    children: ReactNode;
    extraClassNames?: string;
}
