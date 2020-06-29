import React from "react";

const SkipLink = ({ href, rel, target, onClick }) => (
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
