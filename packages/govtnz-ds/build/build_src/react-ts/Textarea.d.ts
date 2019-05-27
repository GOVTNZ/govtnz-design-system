/// <reference types="react" />
declare type Props = {
    moreDetail?: string | undefined;
    moreDetailHint?: string | undefined;
    onChange: any;
};
declare const Textarea: {
    ({ moreDetail, moreDetailHint, onChange }: Props): JSX.Element;
    props: string[];
};
export default Textarea;
