import React from 'react';
import Icon from './Icon';
import InfoIcon from '../commons/svgs/icon-info.svg';
import './Note.scss';

type Props = {
  children: React.ReactNode;
};

const Note = ({ children }: Props) => (
  <div className="note" role="note">
    <div className="note__strip">
      <Icon
        className="note__icon"
        role="img"
        title="search submit"
        aria-labelledby={`#unique ${InfoIcon.id}`}
        id={InfoIcon.id}
      />
    </div>
    <div className="note__content">{children}</div>
  </div>
);

export default Note;
