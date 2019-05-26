import React from 'react'
import P from '@govtnz/ds/build/react-ts/P'
import './color-swatch.scss'

type Props = {
  colorCode: string
  colorName: string
  description?: string
}

const ColorSwatch = ({ colorCode, colorName, description }: Props) => (
  <div className="color-swatch">
    <div
      className={`color-swatch__color ${colorName === 'White' &&
        'color-swatch__color--border'}`}
      style={{ backgroundColor: colorCode }}
    />
    <h3 className="color-swatch__heading">{colorName}</h3>
    <P styleSize="small">{colorCode}</P>
    {description && <P styleSize="small">{description}</P>}
  </div>
)

export default ColorSwatch
