import * as React from "react";
declare type Props = {
    errorId?: string | undefined;
    hintId?: string | undefined;
    legend?: React.ReactNode;
    hint?: React.ReactNode;
    error?: React.ReactNode;
    children?: React.ReactNode;
};
declare const FieldsetBlock: ({ errorId, hintId, legend, hint, error, children }: Props) => JSX.Element;
export default FieldsetBlock;
