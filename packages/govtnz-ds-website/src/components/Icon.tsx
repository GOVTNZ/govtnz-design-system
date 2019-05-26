import React from 'react'
import './icon.scss'

type Props = {
  className?: string | 'icon'
  role: 'presentation' | 'img'
  id: string
  title?: string
}

const Icon = ({ className, role, id, title }: Props) => (
  <svg className={className} role={role}>
    {title && <title>{title}</title>}
    <use xlinkHref={`#${id}`} />
  </svg>
)

export default Icon
