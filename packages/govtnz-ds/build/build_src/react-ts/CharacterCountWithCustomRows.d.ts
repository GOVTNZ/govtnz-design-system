/// <reference types="react" />
declare type Props = {
    customRows?: string | undefined;
    onChange: any;
    customRowsInfo?: string | undefined;
};
declare const CharacterCountWithCustomRows: {
    ({ customRows, onChange, customRowsInfo }: Props): JSX.Element;
    props: string[];
};
export default CharacterCountWithCustomRows;
