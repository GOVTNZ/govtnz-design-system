import React, { useCallback } from 'react';
import './skip-link.scss';

type SkipLinkProps = {
  href: string;
};

const SkipLink = ({ href }: SkipLinkProps): JSX.Element => {
  const handleClick = useCallback(e => {
    e.preventDefault();
    const reduceMotionQuery = '(prefers-reduced-motion: reduce)';
    const hasOSReducedMotion = window.matchMedia(reduceMotionQuery).matches;
    // e.target.href includes the domain e.g. `http://localhost#main-content
    // so getAttribute() is more appropriate here.
    const href = e.target.getAttribute('href').replace(/#/g, '');
    const focusableElement = document.getElementById(href);
    const scrollOption: boolean | Object = hasOSReducedMotion
      ? {
          behavior: 'auto',
        }
      : {
          behavior: 'smooth',
        };
    focusableElement.setAttribute('tabindex', '-1');
    focusableElement.focus();
    focusableElement.scrollIntoView(scrollOption);
    e.target.blur();
  }, []);

  return (
    <a className="skip-link" href={href} onClick={handleClick}>
      Skip to main content
    </a>
  );
};

export default SkipLink;
