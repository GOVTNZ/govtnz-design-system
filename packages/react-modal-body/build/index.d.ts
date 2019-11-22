/// <reference types="node" />
import { Component, ReactNode } from "react";
declare type Props = {
    isOpen: boolean;
    children: ReactNode;
};
export default class ReactModalBody extends Component<Props> {
    bodyStart: HTMLElement;
    bodyEnd: HTMLElement;
    timer: NodeJS.Timeout;
    constructor(props: Props);
    componentDidUpdate(): void;
    setFocusTrap(): void;
    removeFocusTrap(): void;
    onFocus(): void;
    componentWillUnmount(): void;
    render(): ReactNode;
}
export {};
