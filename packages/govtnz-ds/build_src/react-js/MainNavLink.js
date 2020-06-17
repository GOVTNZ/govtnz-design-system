import React from "react";

const MainNavLink = ({ ariaCurrent, href, rel, target, onClick, children }) => (
  <li className="g-main-nav__link">
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
      {children !== undefined ? (
        children
      ) : (
        <React.Fragment> Example item text </React.Fragment>
      )}
    </a>
  </li>
);

export default MainNavLink;
