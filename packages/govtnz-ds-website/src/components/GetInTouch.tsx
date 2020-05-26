import React from 'react';
import H2 from '@govtnz/ds/build/react-ts/H2';
import P from '@govtnz/ds/build/react-ts/P';
import A from '@govtnz/ds/build/react-ts/A';
import './color-swatch.scss';

type Props = {
  title: string;
};

const GetInTouch = ({ title }: Props) => (
  <div className="g-inset-text g-inset-text--borderless">
    <H2 styleSize="medium">Get in touch</H2>
    <P styleSize="medium">
      If you’ve got a question, idea, or suggestion, email the Design System
      (DS) team at{' '}
      <A href="mailto:info@digital.govt.nz">info@digital.govt.nz</A>, use our{' '}
      <A href="https://nz-aog-design-system.slack.com">NZGDS Slack app</A>, or{' '}
      <A href="https://github.com/GOVTNZ/govtnz-design-system/issues">
        discuss {title || ''} on 'GitHub issues'.
      </A>
    </P>
  </div>
);

export default GetInTouch;
