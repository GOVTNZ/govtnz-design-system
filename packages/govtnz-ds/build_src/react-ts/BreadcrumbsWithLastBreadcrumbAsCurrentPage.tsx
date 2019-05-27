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

const BreadcrumbsWithLastBreadcrumbAsCurrentPage = ({
  href,
  rel,
  target,
  href2,
  rel2,
  target2
}: Props) => (
  <div className="g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs">
    <ol className="g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list">
      <li className="g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list-item">
        <a
          className="g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__link"
          href={href}
          rel={rel}
          target={constants.target[target]}
        >
          Home
        </a>
      </li>
      <li className="g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list-item">
        <a
          className="g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__link"
          href={href2}
          rel={rel2}
          target={constants.target2[target2]}
        >
          Passports, travel and living abroad
        </a>
      </li>
      <li
        aria-current="page"
        className="g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list-item"
      >
        Travel abroad
      </li>
    </ol>
  </div>
);
BreadcrumbsWithLastBreadcrumbAsCurrentPage.props = [
  "href",
  "rel",
  "target",
  "href2",
  "rel2",
  "target2"
];
export default BreadcrumbsWithLastBreadcrumbAsCurrentPage;
