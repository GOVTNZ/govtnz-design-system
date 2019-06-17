/// <reference types="react" />
declare type Props = {
    fileUpload2?: string | undefined;
    fileUpload2Hint?: string | undefined;
    name: string;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    autoFocus?: boolean | undefined;
};
declare const FileUploadWithHintText: ({ fileUpload2, fileUpload2Hint, name, disabled, readOnly, autoFocus }: Props) => JSX.Element;
export default FileUploadWithHintText;
