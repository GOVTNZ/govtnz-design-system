import * as React from "react";
declare type Props = {
    hintId?: string | undefined;
    errorId?: string | undefined;
    legend?: React.ReactNode;
    hint?: React.ReactNode;
    errorId2?: React.ReactNode;
    error?: React.ReactNode;
    children?: React.ReactNode;
};
declare const FieldsetBlock: ({ hintId, errorId, legend, hint, errorId2, error, children }: Props) => JSX.Element;
export default FieldsetBlock;
