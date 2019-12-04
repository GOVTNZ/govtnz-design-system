import React from "react";

const SkipLink = ({ href, rel, target }) => (
  <a className="g-skip-link" href={href} rel={rel} target={target}>
    Skip to main content
  </a>
);

export default SkipLink;
