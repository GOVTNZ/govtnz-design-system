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
      className={
        children
          ? `example__heading${white ? 'example__heading--white' : ''}`
          : 'visually-hidden'
      }
    >
      <Heading className={'g-heading-m g-dswebsite-font example__heading-text'}>
        {children ? children : 'Example default'}
      </Heading>
    </div>
  );
};
