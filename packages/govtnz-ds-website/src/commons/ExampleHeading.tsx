import React from 'react';
import './styles/components-example-heading.scss';

type Props = {
  children: React.ReactNode;
  white?: boolean | undefined;
};

export default ({ children, white }: Props) => (
  <div className={`example__heading${white ? ' example__heading--white' : ''}`}>
    <h4 className="g-heading-m g-dswebsite-font example__heading-text">
      {children}
    </h4>
  </div>
);
