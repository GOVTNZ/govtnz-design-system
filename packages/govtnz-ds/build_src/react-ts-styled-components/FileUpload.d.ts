/// <reference types="react" />
declare type Props = {
    fileUpload1?: string | undefined;
    name: string;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    autoFocus?: boolean | undefined;
};
declare const FileUpload: {
    ({ fileUpload1, name, disabled, readOnly, autoFocus }: Props): JSX.Element;
    props: string[];
};
export default FileUpload;
