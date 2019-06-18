import * as React from "react";

type Props = {
  href: string;
  rel?: string | undefined;
  target?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  href2: string;
  rel2?: string | undefined;
  target2?: "Blank" | "Top" | "Self" | "Parent" | undefined;
};

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

const Breadcrumbs = ({ href, rel, target, href2, rel2, target2 }: Props) => (
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

export default Breadcrumbs;
