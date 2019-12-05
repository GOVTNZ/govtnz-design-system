/// <reference types="react" />
declare type Props = {
    checkboxId?: string;
    hintId?: string;
    disabled?: boolean;
    readOnly?: boolean;
    autoFocus?: boolean;
    name: string;
    value?: string;
    checked?: boolean;
    onChange: any;
};
declare const Checkbox: ({ checkboxId, hintId, disabled, readOnly, autoFocus, name, value, checked, onChange }: Props) => JSX.Element;
export default Checkbox;
