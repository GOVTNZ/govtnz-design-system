import React from 'react';
import './styles/components-example-heading.scss';

type Props = {
  children: React.ReactNode;
  white?: boolean | undefined;
  level?: number;
};

export default ({ children, white, level }: Props) => {
  const Heading = `h${level !== undefined ? level : 4}`;
  return (
    <div
      className={`example__heading${white ? ' example__heading--white' : ''}`}
    >
      <Heading className="g-heading-m g-dswebsite-font example__heading-text">
        {children}
      </Heading>
    </div>
  );
};
