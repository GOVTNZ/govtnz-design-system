/// <reference types="react" />
declare type Props = {
    checkboxId?: string | undefined;
    hintId?: string | undefined;
    name: string;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    autoFocus?: boolean | undefined;
    value?: string | undefined;
    checked?: boolean | undefined;
    onChange: any;
};
declare const Checkbox: ({ checkboxId, hintId, name, disabled, readOnly, autoFocus, value, checked, onChange }: Props) => JSX.Element;
export default Checkbox;
