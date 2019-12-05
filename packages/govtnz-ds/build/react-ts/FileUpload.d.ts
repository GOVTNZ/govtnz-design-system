/// <reference types="react" />
declare type Props = {
    id?: string;
    disabled?: boolean;
    readOnly?: boolean;
    autoFocus?: boolean;
    name: string;
};
declare const FileUpload: ({ id, disabled, readOnly, autoFocus, name }: Props) => JSX.Element;
export default FileUpload;
