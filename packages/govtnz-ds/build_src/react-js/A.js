import React from "react";

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

const A = ({ isMuted, href, rel, target, children }) => (
  <a
    className={`g-a-link${isMuted ? " g-a-link--muted" : ""}`}
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
A.props = ["isMuted", "href", "rel", "target", "children"];
export default A;
