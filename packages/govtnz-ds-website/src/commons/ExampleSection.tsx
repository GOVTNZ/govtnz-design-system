import React from 'react'
import './styles/components-example-section.scss'

type Props = {
  children: React.ReactNode
}

export default ({ children }: Props) => (
  <div className="example__section">{children}</div>
)
