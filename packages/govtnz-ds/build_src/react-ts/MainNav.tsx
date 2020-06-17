import React from "react";

type Props = {
  isOpen?: "true" | "false";
  id?: string;
  name?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  button?: React.ReactNode;
  children?: React.ReactNode;
};

const constants = {
  isOpen: { true: "g-main-nav--open", false: "g-main-nav--closed" }
};

const MainNav = ({
  isOpen,
  id,
  name,
  type,
  onClick,
  button,
  children
}: Props) => (
  <nav aria-label="Main" className="g-main-nav" role="navigation">
    <button
      aria-controls={id}
      aria-expanded={
        isOpen !== undefined ? isOpen.toString() === "true" : undefined
      }
      className={`g-main-nav__button${
        constants.isOpen[isOpen] !== undefined
          ? " " + constants.isOpen[isOpen]
          : ""
      }`}
      name={name}
      type={type}
      onClick={onClick}
    >
      {button !== undefined ? button : <React.Fragment> Menu </React.Fragment>}
      <svg
        className="g-main-nav__button__icon"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.992 9.55l5.6-5.6a1 1 0 0 1 1.415 0l.688.689a1 1 0 0 1 0 1.414L8.7 13.049a1 1 0 0 1-1.414 0L.29 6.053a1 1 0 0 1 0-1.414l.689-.689a1 1 0 0 1 1.414 0l5.6 5.6z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </svg>
    </button>

    <div id={id}>
      <ul
        className={`g-main-nav__ul${
          constants.isOpen[isOpen] !== undefined
            ? " " + constants.isOpen[isOpen]
            : ""
        }`}
      >
        {children !== undefined ? (
          children
        ) : (
          <React.Fragment> MainNavLink components go here </React.Fragment>
        )}
      </ul>
    </div>
  </nav>
);

export default MainNav;
