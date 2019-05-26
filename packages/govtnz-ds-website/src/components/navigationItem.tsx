import React from 'react'
import { Link } from 'gatsby'
import NavigationItemAccordion from './NavigationItemAccordion'
import './navigation-item.scss'

type Props = {
  to: string
  disabled?: boolean
  label: string
  childMenu?: Array<any>
}

const CLASSNAME = 'navigation__link'
const CLASSNAME_ACTIVE = 'navigation__link--active'

const NavigationItem = ({ to, disabled, label, childMenu }: Props) => (
  <li className="navigation-list__item">
    {childMenu && !disabled && (
      <NavigationItemAccordion to={to} label={label} childMenu={childMenu} />
    )}
    {!disabled && !childMenu && (
      <Link
        to={to}
        className={CLASSNAME}
        activeClassName={CLASSNAME_ACTIVE}
        getProps={({ isPartiallyCurrent }) => {
          return isPartiallyCurrent
            ? { className: `${CLASSNAME} ${CLASSNAME_ACTIVE}` }
            : null
        }}
      >
        {label}
      </Link>
    )}
    {disabled && (
      <span className={`${CLASSNAME} navigation__link--disabled`}>{label}</span>
    )}
  </li>
)

export default NavigationItem
