import * as React from "react";

type Props = {
  href: string;
  rel?: string;
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
};

const SkipLink = ({ href, rel, target }: Props) => (
  <a className="g-skip-link" href={href} rel={rel} target={target}>
    Skip to main content
  </a>
);

export default SkipLink;
