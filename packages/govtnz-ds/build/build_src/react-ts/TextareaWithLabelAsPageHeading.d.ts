/// <reference types="react" />
declare type Props = {
    textareaWithPageHeading?: string | undefined;
    onChange: any;
};
declare const TextareaWithLabelAsPageHeading: {
    ({ textareaWithPageHeading, onChange }: Props): JSX.Element;
    props: string[];
};
export default TextareaWithLabelAsPageHeading;
