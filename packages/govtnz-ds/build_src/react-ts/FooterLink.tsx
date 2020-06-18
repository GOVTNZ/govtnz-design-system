import React from "react";

type Props = {
  href: string;
  rel?: string;
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  onClick?: React.AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
  children?: React.ReactNode;
};

const FooterLink = ({ href, rel, target, onClick, children }: Props) => (
  <li className="g-footer-link">
    <a
      className="g-footer-link__a"
      href={href}
      rel={rel}
      target={target}
      onClick={onClick}
    >
      {children !== undefined ? (
        children
      ) : (
        <React.Fragment> Example header content </React.Fragment>
      )}
    </a>
  </li>
);

export default FooterLink;
