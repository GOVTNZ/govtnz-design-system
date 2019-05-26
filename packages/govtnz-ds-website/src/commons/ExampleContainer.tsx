import React from 'react'
import './styles/components-example-container.scss'

type Props = {
  children: React.ReactNode
  isPadded?: boolean | false
}

export default ({ children, isPadded }: Props) => (
  <div
    className={`example__container ${
      isPadded ? 'example__container--padded' : ''
    }`}
  >
    {children}
  </div>
)
