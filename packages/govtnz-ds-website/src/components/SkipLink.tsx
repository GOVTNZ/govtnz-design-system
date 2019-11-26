import React from 'react';
import './skip-link.scss';

type SkipLinkProps = {
  href: string;
};

const SkipLink = ({ href }: SkipLinkProps): JSX.Element => {
  const handleClick = e => {
    e.preventDefault();

    const reduceMotionQuery = '(prefers-reduced-motion: reduce)';
    const hasOSReducedMotion = window.matchMedia(reduceMotionQuery).matches;

    const href = e.target.getAttribute('href').replace(/#/g, '');

    console.log('hasOSReducedMotion', hasOSReducedMotion);
    const focusableElement = document.getElementById(href);
    if (hasOSReducedMotion) {
      focusableElement.setAttribute('tabindex', '-1');
      focusableElement.focus();
    } else {
      // e.target.href includes the domain e.g. `http://localhost#main-content
      // so getAttribute() is more appropriate here.
      focusableElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <a className="skip-link" href={href} onClick={handleClick}>
      Skip to main content
    </a>
  );
};

export default SkipLink;
