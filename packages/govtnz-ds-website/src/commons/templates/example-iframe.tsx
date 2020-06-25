import React, { Fragment, useState, Component } from 'react';
import ReactDOM from 'react-dom';

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

type WrappedMainNavProps = {
  Component: React.Component;
};

type WrappedMainNavState = {
  activeIndex: number;
};

class WrappedMainNav extends React.Component<
  WrappedMainNavProps,
  WrappedMainNavState
> {
  constructor(props: WrappedMainNavProps) {
    super(props);

    this.state = {
      activeIndex: 0,
    };

    this.setActiveIndex = this.setActiveIndex.bind(this);
  }

  setActiveIndex(activeIndex: number) {
    this.setState({ activeIndex });
  }

  render() {
    const props = this.props;
    const { activeIndex } = this.state;

    const that = this;

    return (
      <MobileMenuContext.Consumer>
        {(value) => {
          const Component = props.Component;
          const newProps = {
            ...props,
            isOpen: value.isOpen.toString(),
            onClick: () => {
              value.setIsOpen(!value.isOpen);
            },
            children: React.Children.map(
              props.children,
              (child: React.ReactChild, index: number) => {
                const props = {
                  onClick: (e: React.MouseEvent<HTMLElement>) => {
                    e.preventDefault();
                    that.setActiveIndex(index);
                  },
                };

                if (index === activeIndex) {
                  props['ariaCurrent'] = 'page';
                } else {
                  props['ariaCurrent'] = undefined;
                }

                const newChild = React.cloneElement(child, props);

                return newChild;
              }
            ),
          };
          return <Component {...newProps} />;
        }}
      </MobileMenuContext.Consumer>
    );
  }
}

type WrappedAlertProps = {
  mode?: 'live' | 'static';
  level: string;
  Component: any;
};

type WrappedAlertState = {
  isChecked: boolean;
  id: string;
};

class WrappedAlert extends React.Component<
  WrappedAlertProps,
  WrappedAlertState
> {
  constructor(props: WrappedAlertProps) {
    super(props);
    this.state = {
      isChecked: false,
      id: `id${props.headingId.replace(/[^a-zA-Z0-9]/g, '')}`,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { isChecked } = this.state;

    this.setState({
      isChecked: !isChecked,
    });
  }

  render() {
    const { mode, level, Component } = this.props;
    const { isChecked, id } = this.state;

    if (mode === 'live') {
      return (
        <Fragment>
          <button
            type="button"
            aria-controls={id}
            aria-expanded={isChecked}
            onClick={this.toggle}
            className="g-button g-button--secondary"
          >
            Toggle live {level} alert
          </button>
          <div id={id}>
            {isChecked ? (
              <Component key={`${id}_alert`} {...this.props} />
            ) : (
              <Component
                key={`${id}_alert`}
                {...this.props}
                children={undefined}
              />
            )}
          </div>
        </Fragment>
      );
    }
    return <Component {...this.props} />;
  }
}
