import React from 'react';
import './skip-link.scss';

type SkipLinkProps = {
  href: string;
};

const SkipLink = ({ href }: SkipLinkProps): JSX.Element => {
  const handleClick = e => {
    e.preventDefault();
    // e.target.href includes the domain e.g. `http://localhost#main-content
    // so getAttribute() is more appropriate here.
    const href = e.target.getAttribute('href').replace(/#/g, '');
    document.getElementById(href).scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <a className="skip-link" href={href} onClick={handleClick}>
      Skip to main content
    </a>
  );
};

export default SkipLink;
