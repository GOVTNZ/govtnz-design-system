import React from 'react';
import { Link } from 'gatsby';
import { Details, Summary } from 'react-accessible-details';
import Icon from './Icon';
import iconDown from '../commons/svgs/icon-down.svg';

type Props = {
  to: string;
  label: string;
  childMenu?: Array<any>;
};

const NavigationItemsDetails = ({ to, label, childMenu }: Props) => {
  return (
    <Details className="">
      <Summary className="navigation__link">
        {label}
        <Icon
          className="navigation__link-icon navigation__link-icon--down icon icon--theme-highlight"
          role="presentation"
          id={iconDown.id}
          title={iconDown.id}
        />
      </Summary>
      <ul className="sidebar__navigation">
        <li>
          <Link
            to={to}
            className="sidebar__link"
            activeClassName="sidebar__link--current"
          >
            {label} overview
          </Link>
        </li>
        {childMenu.map((item) => {
          if (item.items) {
            // is a Component category
            return (
              <li>
                <span className="sidebar__category-title sidebar__category-title--small">
                  {item.title}
                </span>
                <ul className="sidebar__category">
                  {item.items.map((item) => {
                    const toString = `${to}${item.id}/`;
                    return (
                      <li>
                        <Link
                          to={toString}
                          className="sidebar__link"
                          activeClassName="sidebar__link--current"
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          } else {
            const toString = `${to}${item.id}/`;
            return (
              <li>
                <Link
                  to={toString}
                  className="sidebar__link"
                  activeClassName="sidebar__link--current"
                >
                  {item.name}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </Details>
  );
};

export default NavigationItemsDetails;
