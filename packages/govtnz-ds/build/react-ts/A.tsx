import * as React from "react";

type Props = {
  isMuted?: boolean;
  href: string;
  rel?: string;
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  children?: React.ReactNode;
};

const A = ({ isMuted, href, rel, target, children }: Props) => (
  <a
    className={`g-link${isMuted ? " g-link--muted" : ""}`}
    href={href}
    rel={rel}
    target={target}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </a>
);

export default A;
