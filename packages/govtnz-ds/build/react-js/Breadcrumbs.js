import React from "react";

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

const Breadcrumbs = ({ href, rel, target, href2, rel2, target2 }) => (
  <div className="g-breadcrumbs">
    <ol className="g-breadcrumbs__list">
      <li className="g-breadcrumbs__list-item">
        <a
          className="g-breadcrumbs__link"
          href={href}
          rel={rel}
          target={constants.target[target]}
        >
          Section
        </a>
      </li>
      <li className="g-breadcrumbs__list-item">
        <a
          className="g-breadcrumbs__link"
          href={href2}
          rel={rel2}
          target={constants.target2[target2]}
        >
          Sub-section
        </a>
      </li>
    </ol>
  </div>
);
Breadcrumbs.props = ["href", "rel", "target", "href2", "rel2", "target2"];
export default Breadcrumbs;
