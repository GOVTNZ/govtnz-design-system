import * as React from "react";

type Props = {
  isMuted?: boolean | undefined;
  href: string;
  rel?: string | undefined;
  target?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  children?: React.ReactNode;
};

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

const A = ({ isMuted, href, rel, target, children }: Props) => (
  <a
    className={`g-link${isMuted ? " g-link--muted" : ""}`}
    href={href}
    rel={rel}
    target={constants.target[target]}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </a>
);

export default A;
