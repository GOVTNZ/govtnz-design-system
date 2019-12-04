import React from 'react';
import { Link, PageRendererProps } from 'gatsby';
import basicsMenuItems from './basics.json';

const BasicsMenu = ({ pageProps }: BasicsMenuProps) => (
  <nav className="sidebar" aria-label="Design System Basics">
    <ul className="sidebar__navigation">
      {basicsMenuItems.map(item => {
        const currentTo =
          pageProps && pageProps.location && pageProps.location.pathname;
        const to = `/basics/${item.id}/`;
        const props: Object =
          currentTo === to
            ? {
                'aria-current': 'page',
                className: 'sidebar__link sidebar__link--current',
              }
            : { className: 'sidebar__link' };

        return (
          <li key={item.id} className="sidebar__item">
            <Link to={to} {...props}>
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>
);

type BasicsMenuProps = {
  pageProps: PageRendererProps;
};

export default BasicsMenu;
