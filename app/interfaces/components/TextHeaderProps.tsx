import type {JSX, ReactNode} from "react";


export interface TextHeaderProps {
    component?: keyof JSX.IntrinsicElements;
    children: ReactNode;
    className?: string;

    [key: string]: any;
}
