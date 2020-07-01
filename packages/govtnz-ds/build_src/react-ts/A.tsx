import React from "react";

type Props = {
  className?: string;
  href: string;
  rel?: string;
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  onClick?: React.AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
  children?: React.ReactNode;
};

const A = ({ className, href, rel, target, onClick, children }: Props) => (
  <a
    className={`g-link${className ? " " + className : ""}`}
    href={href}
    rel={rel}
    target={target}
    onClick={onClick}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </a>
);

export default A;
