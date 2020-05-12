import React from "react";
declare type Props = {
    href: string;
    rel?: string;
    target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
    onClick?: React.AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
    label1?: React.ReactNode;
    label2?: React.ReactNode;
    label3?: React.ReactNode;
    src: string;
    width?: string;
    height?: string;
    srcset?: string;
    crossorigin?: React.ImgHTMLAttributes<HTMLImageElement>["crossOrigin"];
    copyrightYear?: React.ReactNode;
};
declare const FooterStandard: ({ href, rel, target, onClick, label1, label2, label3, src, width, height, srcset, crossorigin, copyrightYear }: Props) => JSX.Element;
export default FooterStandard;
