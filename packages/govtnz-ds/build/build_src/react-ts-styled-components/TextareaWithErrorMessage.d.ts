/// <reference types="react" />
declare type Props = {
    noNiReason?: string | undefined;
    noNiReasonError?: string | undefined;
    onChange: any;
};
declare const TextareaWithErrorMessage: {
    ({ noNiReason, noNiReasonError, onChange }: Props): JSX.Element;
    props: string[];
};
export default TextareaWithErrorMessage;
