import React from "react";

type Props = {
  ariaCurrent?: React.InputHTMLAttributes<HTMLInputElement>["aria-current"];
  href: string;
  rel?: string;
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  onClick?: React.AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
  children?: React.ReactNode;
};

const MainNavLink = ({
  ariaCurrent,
  href,
  rel,
  target,
  onClick,
  children
}: Props) => (
  <li className="g-main-nav__link">
    {" "}
    <a
      aria-current={ariaCurrent}
      className={`g-main-nav__link__a${
        ariaCurrent ? " g-main-nav__link__a--active" : ""
      }`}
      href={href}
      rel={rel}
      target={target}
      onClick={onClick}
    >
      {" "}
      {children !== undefined ? (
        children
      ) : (
        <React.Fragment> Example item text </React.Fragment>
      )}{" "}
    </a>{" "}
  </li>
);

export default MainNavLink;
