import React from 'react';
import { Link } from 'gatsby';
// import FooterWrapper from '@govtnz/ds/build/react-ts/FooterWrapper'
// import FooterStandard from '@govtnz/ds/build/react-ts/FooterStandard'
import Container from '@govtnz/ds/build/react-ts/FlexContainer';
import Row from '@govtnz/ds/build/react-ts/FlexRow';
import Column from '@govtnz/ds/build/react-ts/FlexColumn';
import Icon from '../components/Icon';
import './footer.scss';

import LogoIcon from '../commons/svgs/icon-nzg.svg';
import CCIcon from '../commons/svgs/icon-cc.svg';
import CCByIcon from '../commons/svgs/icon-cc-by.svg';
import CoatIcon from '../commons/svgs/icon-coat-of-arms.svg';

const Footer = () => (
  <footer className="g-footer-wrapper" role="contentinfo">
    <div className="g-footer__standard">
      <Container width="fixed">
        <Row>
          <Column xs="12" sm="10" md="10" lg="10">
            <div className="g-footer__standard-item">
              <ul className="g-footer__standard-inline-list">
                <li className="g-footer__standard-inline-list-item">
                  <a
                    className="g-footer__standard-link"
                    href="https://www.digital.govt.nz/home/about-digital-govt-nz/contact-us/"
                  >
                    Contact
                  </a>
                </li>
                <li className="g-footer__standard-inline-list-item">
                  <Link to="/privacy" className="g-footer__standard-link">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </Column>
        </Row>
        <Row>
          <Column xs="12" sm="8" md="10" lg="9">
            <a
              href="https://www.govt.nz/"
              className="g-footer__standard-link--plain"
            >
              <Icon
                className="g-footer__icon-govt-logo"
                role="img"
                id={LogoIcon.id}
                title="New Zealand Government"
              />
            </a>
            <div className="g-footer__standard-licence">
              <p className="g-footer__standard-small-text">
                Contains public sector information licensed under the Open
                Government Licence v3.0.
              </p>
              <p
                className="g-footer__standard-small-text"
                style={{ marginBottom: 0 }}
              >
                <a
                  href="https://creativecommons.org/licenses/by/4.0/"
                  className="g-footer__standard-link--plain"
                >
                  <span className="g-footer-visually-hidden">
                    Creative Commons 4.0 International Licence
                  </span>
                  <Icon
                    className="g-footer__icon-cc"
                    role="presentation"
                    id={CCIcon.id}
                    title=""
                  />
                  &nbsp;
                  <Icon
                    className="g-footer__icon-cc"
                    role="presentation"
                    id={CCByIcon.id}
                    title=""
                  />
                </a>
                <br />
                Unless indicated otherwise, all content is licensed for re-use
                under a Creative Commons Attribution 4.0 International Licence
              </p>
            </div>
          </Column>
          <Column xs="12" sm="4" md="2" lg="3">
            <div className="g-footer__standard-copyright">
              <Icon
                className="g-footer__icon-coat-of-arms"
                role="presentation"
                id={CoatIcon.id}
                title="New Zealand Coat of Arms"
              />
              <p className="g-footer__standard-small-text">
                © Crown Copyright <span>{new Date().getFullYear()}</span>
              </p>
            </div>
          </Column>
        </Row>
      </Container>
    </div>
  </footer>
);

export default Footer;

{
  /* <FooterWrapper>
    <FooterStandard
      src={CoatOfArms}
      href="#"
      href2="#"
      href3="#"
      href4="https://www.govt.nz/"
      href5="https://creativecommons.org/licenses/by/4.0/"
      copyrightYear={new Date().getFullYear()}
    />
    
  </FooterWrapper> */
}
