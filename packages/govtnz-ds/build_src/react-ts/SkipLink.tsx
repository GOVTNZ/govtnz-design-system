import React from "react";

type Props = {
  href: string;
  rel?: string;
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  onClick?: React.AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
};

const SkipLink = ({ href, rel, target, onClick }: Props) => (
  <a
    className="g-skip-link"
    href={href}
    rel={rel}
    target={target}
    onClick={onClick}
  >
    Skip to main content
  </a>
);

export default SkipLink;
