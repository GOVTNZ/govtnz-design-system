import * as React from "react";

type Props = {
  href: string;
  rel?: string | undefined;
  target?: "Blank" | "Top" | "Self" | "Parent" | undefined;
};

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

const SkipLink = ({ href, rel, target }: Props) => (
  <a
    className="g-skip-link"
    href={href}
    rel={rel}
    target={constants.target[target]}
  >
    Skip to main content
  </a>
);

export default SkipLink;
