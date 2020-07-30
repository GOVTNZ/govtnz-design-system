import React from 'react';
import './icon.scss';

type Props = {
  className?: string | 'icon';
  role: 'presentation' | 'img';
  focusable: 'true' | 'false';
  id: string;
  title?: string;
};

const Icon = ({ className, role, focusable, id, title }: Props) => (
  <svg className={className} role={role} focusable={focusable}>
    {title && <title id={`#unique ${id}`}>{title}</title>}
    <use xlinkHref={`#${id}`} />
  </svg>
);

Icon.defaultProps = {
  focusable: 'false',
};

export default Icon;
