import * as React from "react";
declare type Props = {
    disabled?: boolean | undefined;
    level: "secondary" | "warning";
    name?: string | undefined;
    type?: "Submit" | "Reset" | "Button" | undefined;
    children?: React.ReactNode;
};
declare const Button: {
    ({ disabled, level, name, type, children }: Props): JSX.Element;
    props: string[];
};
export default Button;
