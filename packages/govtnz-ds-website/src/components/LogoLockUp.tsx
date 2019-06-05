import React from 'react';
import { Link } from 'gatsby';
import Icon from './Icon';
import iconNZGLogo from '../commons/svgs/icon-nzg.svg';
import iconNZGShortLogo from '../commons/svgs/icon-nzg-short.svg';

type Props = {
  siteTitle: string;
};

const LogoLockUp = ({ siteTitle }: Props) => (
  <a href="/">
    <div className="header__logo header__logo--show@medium">
      <Icon
        className="header__icon"
        role="presentation"
        id={iconNZGLogo.id}
      />
    </div>
    <div className="header__logo header__logo--hide@medium">
      <Icon
        className="header__icon"
        role="presentation"
        id={iconNZGShortLogo.id}
      />
    </div>
    <span className="visually-hidden">New Zealand Government</span>
    <div className="header__title">{siteTitle || ''}</div>
  </a>
);

export default LogoLockUp;
