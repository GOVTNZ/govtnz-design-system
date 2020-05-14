import React, { Fragment, useState, Component } from 'react';
import ReactDOM from 'react-dom';

// export const useMobileMenuContext = (): MobileMenuContextValue => {
//   const value = React.useContext(MobileMenuContext);
//   if (!value) throw Error(`Mobile menu used outside context`);
//   return value;
// };

// @dynamicImports

const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => (
  <div className="example__section">{children}</div>
);
const Example = ({ children }) => <Fragment>{children}</Fragment>;

// @pageContentComponent

type MainNavMobileMenuContextProps = {
  children: React.ReactNode;
};

type MainNavMobileMenuContextState = {
  isOpen: boolean;
};

type MobileMenuContextValue = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenuContext = React.createContext<
  MobileMenuContextValue | undefined
>(undefined);

class MainNavMobileMenuContext extends Component<
  MainNavMobileMenuContextProps,
  MainNavMobileMenuContextState
> {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.setIsOpen = this.setIsOpen.bind(this);
  }

  setIsOpen(isOpen: boolean) {
    console.log('setting context provider value to ', isOpen);
    this.setState({
      isOpen,
    });
  }

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;

    const value = { isOpen, setIsOpen: this.setIsOpen };

    return (
      <MobileMenuContext.Provider value={value}>
        {children}
      </MobileMenuContext.Provider>
    );
  }
}

function WrappedMainNavMobileMenu(props) {
  return (
    <MobileMenuContext.Consumer>
      {value => {
        const Component = props.Component;
        return (
          <Component
            {...props}
            isOpen={value.isOpen.toString()}
            onClick={() => {
              console.log('click handler!');
              value.setIsOpen(!value.isOpen);
            }}
          />
        );
      }}
    </MobileMenuContext.Consumer>
  );
}

function WrappedMainNav(props) {
  return (
    <MobileMenuContext.Consumer>
      {value => {
        const Component = props.Component;
        console.log(
          'Wrapped mainnav component being given',
          props,
          value.isOpen.toString()
        );
        return <Component {...props} isOpen={value.isOpen.toString()} />;
      }}
    </MobileMenuContext.Consumer>
  );
}
