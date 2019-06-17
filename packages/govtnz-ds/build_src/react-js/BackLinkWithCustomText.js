import React from "react";

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

const BackLinkWithCustomText = ({ href, rel, target, children }) => (
  <a
    className="g-backLinkWithCustomText-back-link"
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

export default BackLinkWithCustomText;
