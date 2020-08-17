import React, { useState } from 'react';
import './icon.scss';

type Props = {
  className?: string | 'icon';
  role: 'presentation' | 'img';
  focusable: 'true' | 'false';
  id: string;
  title?: string;
};

const Icon = ({ className, role, focusable, id, title }: Props) => {
  const [titleId] = useState(
    `logo-${Math.random()
      .toString()
      .replace(/[^0-9]/gi, '')}`
  );

  return (
    <svg
      className={className}
      role={role}
      focusable={focusable}
      aria-labelledby={title ? titleId : undefined}
    >
      {title && <title id={titleId}>{title}</title>}
      <use xlinkHref={`#${id}`} />
    </svg>
  );
};

Icon.defaultProps = {
  focusable: 'false',
};

export default Icon;
