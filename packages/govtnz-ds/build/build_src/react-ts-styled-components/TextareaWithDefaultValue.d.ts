/// <reference types="react" />
declare type Props = {
    fullAddress?: string | undefined;
    onChange: any;
};
declare const TextareaWithDefaultValue: {
    ({ fullAddress, onChange }: Props): JSX.Element;
    props: string[];
};
export default TextareaWithDefaultValue;
