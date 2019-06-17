import React from "react";

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

const SkipLink = ({ href, rel, target }) => (
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
