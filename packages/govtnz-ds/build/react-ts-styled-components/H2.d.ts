import * as React from "react";
declare type Props = {
    styleSize: "xlarge" | "large" | "medium" | "small" | "xsmall" | "xxsmall";
    marginBottom8?: boolean | undefined;
    id?: string | undefined;
    children?: React.ReactNode;
};
declare const H2: {
    ({ styleSize, marginBottom8, id, children }: Props): JSX.Element;
    props: string[];
};
export default H2;
