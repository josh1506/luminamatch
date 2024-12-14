export interface ButtonProps {
    label: string;
    buttonColor?: "primary" | "secondary" | "success" | "danger" | "default" | "none"
    buttonType?: "button" | "submit" | "reset";

    [key: string]: any;
}
