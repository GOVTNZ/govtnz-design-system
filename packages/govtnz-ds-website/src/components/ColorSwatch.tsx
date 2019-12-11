import React from 'react';
import P from '@govtnz/ds/build/react-ts/P';
import './color-swatch.scss';

type Props = {
  colorCode: string;
  colorName: string;
  description?: string;
};

const ColorSwatch = ({ colorCode, colorName, description }: Props) => (
  <div className="color-swatch">
    <svg
      className={`color-swatch__color ${
        colorName === 'White' ? 'color-swatch__color--border' : ''
      }`}
      role="presentation"
    >
      <rect width="100%" height="100%" fill={colorCode} />
    </svg>
    <h3 className="color-swatch__heading">{colorName}</h3>
    <P styleSize="small">{colorCode}</P>
    {description && <P styleSize="small">{description}</P>}
  </div>
);

export default ColorSwatch;
