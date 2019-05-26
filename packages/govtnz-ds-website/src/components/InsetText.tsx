import React from 'react'
import P from '@govtnz/ds/build/react-ts/P'
import '../commons/styles/overrides-inset-text.scss'

type Props = {
  children: React.ReactNode
}

const InsetText = ({ children }: Props) => (
  <div className="g-inset-text">
    <P styleSize="medium">{children}</P>
  </div>
)

export default InsetText
