import React from 'react';
import Icon from './Icon';
import IcfoIcon from '../commons/svgs/icon-info.svg';
import './Note.scss';

type Props = {
  children: React.ReactNode;
};

const Note = ({ children }: Props) => (
  <div className="note" role="note">
    <div className="note__strip">
      <Icon
        className="note__icon"
        role="presentation"
        id={IcfoIcon.id}
      />
    </div>
    <div className="note__content">{children}</div>
  </div>
);

export default Note;
