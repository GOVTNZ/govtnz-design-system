/// <reference types="react" />
declare type Props = {
    fullAddress?: string | undefined;
    onChange: any;
};
declare const TextareaWithCustomRows: {
    ({ fullAddress, onChange }: Props): JSX.Element;
    props: string[];
};
export default TextareaWithCustomRows;
