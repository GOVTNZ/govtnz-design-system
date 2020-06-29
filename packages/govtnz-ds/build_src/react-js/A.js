import React from "react";

const A = ({ className, href, rel, target, onClick, children }) => (
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
