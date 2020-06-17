import React from "react";

type Props = {
  isMuted?: boolean;
  className?: any;
  href: string;
  rel?: string;
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  onClick?: React.AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
  children?: React.ReactNode;
};

const A = ({
  isMuted,
  className,
  href,
  rel,
  target,
  onClick,
  children
}: Props) => (
  <a
    className={`g-link${isMuted ? " g-link--muted" : ""}${
      className ? " " + className : ""
    }`}
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
