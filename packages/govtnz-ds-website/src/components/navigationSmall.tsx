import React from 'react';
import Modal from 'react-modal';
// import 'inert-polyfill'
import Container from '@govtnz/ds/build/react-ts/FlexContainer';
import Row from '@govtnz/ds/build/react-ts/FlexRow';
import Column from '@govtnz/ds/build/react-ts/FlexColumn';
import NavigationItem from './navigationItem';
import componentMenu from '../commons/component-menu.json';
import basicsMenuItems from './basics.json';
import LogoLockUp from './LogoLockUp';
import Icon from './Icon';
import iconMenu from '../commons/svgs/icon-menu.svg';
import iconClose from '../commons/svgs/icon-close.svg';
import './navigation-small.scss';

type State = {
  showModal: boolean;
};

type Props = {
  siteTitle: string;
};

class NavigationSmall extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  componentWillMount = () => {
    Modal.setAppElement('#___gatsby');
  };

  render() {
    const { showModal } = this.state;
    // const elm = document.getElementById('___gatsby')
    // showModal ? elm.setAttribute('inert', '') : elm.removeAttribute('inert')
    return (
      <div className="navigation-small">
        <nav>
          <button
            className="navigation-small__button"
            id="navigation-toggle-button"
            aria-expanded={showModal}
            onClick={this.handleOpenModal}
          >
            <Icon
              className="navigation-small__button-icon icon"
              role="presentation"
              id={iconMenu.id}
            />
            <span className="navigation-small__button-span">Menu</span>
          </button>
        </nav>

        <Modal
          closeTimeoutMS={460}
          isOpen={showModal}
          onRequestClose={this.handleCloseModal}
          contentLabel="Main menu"
          className="navigation-small__modal"
          overlayClassName="navigation-small__modal-overlay"
        >
          <div className="navigation-modal__header header">
            <Container width="fixed">
              <Row>
                <Column xs="2" sm="2" md="4" lg="4" xsOffset="10" mdOffset="8">
                  <button
                    onClick={this.handleCloseModal}
                    className="navigation-small__button"
                  >
                    <Icon
                      className="navigation-small__button-icon icon"
                      role="presentation"
                      id={iconClose.id}
                    />
                    <span className="navigation-small__button-span">Close</span>
                  </button>
                </Column>
              </Row>
            </Container>
            <div className="navigation-modal__heading">
              <LogoLockUp />
            </div>
            <div className="navigation-modal__content">
              <div className="navigation-modal__scroll">
                <ul className="navigation-modal__list">
                  <NavigationItem to="/get-started/" label="Get started" />
                  <NavigationItem
                    to="/basics/"
                    label="Basics"
                    childMenu={basicsMenuItems}
                  />
                  <NavigationItem
                    to="/components/"
                    label="Components"
                    childMenu={componentMenu}
                  />
                  <NavigationItem to="/patterns/" label="Patterns" />
                  <NavigationItem to="/prototypes/" label="Prototypes" />
                  <NavigationItem to="/community/" label="Community" />
                  <NavigationItem to="/about/" label="About" />
                </ul>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default NavigationSmall;
