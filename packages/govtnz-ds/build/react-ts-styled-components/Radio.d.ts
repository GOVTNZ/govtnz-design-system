/// <reference types="react" />
declare type Props = {
    id?: string | undefined;
    hintId?: string | undefined;
    name: string;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    autoFocus?: boolean | undefined;
    value?: string | undefined;
    checked?: boolean | undefined;
    onChange: any;
};
declare const Radio: ({ id, hintId, name, disabled, readOnly, autoFocus, value, checked, onChange }: Props) => JSX.Element;
export default Radio;
