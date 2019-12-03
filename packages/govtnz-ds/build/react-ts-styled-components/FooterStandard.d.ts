import * as React from "react";
declare type Props = {
    href: string;
    rel?: string | undefined;
    target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"] | undefined;
    label1?: React.ReactNode;
    label2?: React.ReactNode;
    label3?: React.ReactNode;
    src: string;
    width?: string | undefined;
    height?: string | undefined;
    srcset?: string | undefined;
    crossorigin?: React.ImgHTMLAttributes<HTMLImageElement>["crossOrigin"] | undefined;
    copyrightYear?: React.ReactNode;
};
declare const FooterStandard: ({ href, rel, target, label1, label2, label3, src, width, height, srcset, crossorigin, copyrightYear }: Props) => JSX.Element;
export default FooterStandard;
