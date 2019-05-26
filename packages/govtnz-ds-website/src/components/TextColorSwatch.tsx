import React from 'react';
import P from '@govtnz/ds/build/react-ts/P';
import Ul from '@govtnz/ds/build/react-ts/Ul';
import Li from '@govtnz/ds/build/react-ts/Li';
import './text-color-swatch.scss';

type Props = {
  colorCode: string;
  colorName: string;
  textColors: array;
};

const TextColorSwatch = ({ colorCode, colorName, textColors }: Props) => (
  <div className="text-color-swatch">
    <h3
      className="text-color-swatch__heading"
      aria-label={`${colorName} background`}
    >
      {colorName}
    </h3>
    <P styleSize="small">{colorCode}</P>
    <div
      className="text-color-swatch__color"
      style={{ backgroundColor: colorCode }}
    >
      <Ul>
        {textColors.map(color => (
          <Li>
            <span style={{ color: color.color }}>
              {color.name} {color.color}
            </span>
          </Li>
        ))}
      </Ul>
    </div>
  </div>
);

export default TextColorSwatch;
