import * as React from "react";
declare type Props = {
    hintId?: string | undefined;
    errorId?: string | undefined;
    legend?: React.ReactNode;
    hint?: React.ReactNode;
    error?: React.ReactNode;
    children?: React.ReactNode;
};
declare const FieldsetBlockWithError: {
    ({ hintId, errorId, legend, hint, error, children }: Props): JSX.Element;
    props: string[];
};
export default FieldsetBlockWithError;
