/// <reference types="react" />
declare type Props = {
    id?: string;
    hintId?: string;
    disabled?: boolean;
    readOnly?: boolean;
    autoFocus?: boolean;
    name: string;
    value?: string;
    checked?: boolean;
    onChange: any;
};
declare const Checkbox: ({ id, hintId, disabled, readOnly, autoFocus, name, value, checked, onChange }: Props) => JSX.Element;
export default Checkbox;
