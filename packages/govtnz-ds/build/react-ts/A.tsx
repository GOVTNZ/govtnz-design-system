import * as React from "react";

type Props = {
  isMuted?: boolean | undefined;
  href: string;
  rel?: string | undefined;
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"] | undefined;
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
