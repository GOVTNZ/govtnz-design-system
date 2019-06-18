/// <reference types="react" />
declare type Props = {
    fileUpload3?: string | undefined;
    fileUpload3Hint?: string | undefined;
    fileUpload3Error?: string | undefined;
    name: string;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    autoFocus?: boolean | undefined;
};
declare const FileUploadWithErrorMessage: ({ fileUpload3, fileUpload3Hint, fileUpload3Error, name, disabled, readOnly, autoFocus }: Props) => JSX.Element;
export default FileUploadWithErrorMessage;
