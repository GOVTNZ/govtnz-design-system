import React from "react";
import { Context } from "./index";

type Props = {
  children: React.ReactNode;
  className?: string | undefined;
};

export default function Summary({ children, className }: Props) {
  return (
    <Context.Consumer>
      {value => {
        return (
          <summary
            role="button"
            aria-expanded={value.isOpen}
            tabIndex={0}
            onClick={e => {
              e.preventDefault();
              value.setIsOpen(!value.isOpen);
            }}
            className={className || undefined}
          >
            {children}
          </summary>
        );
      }}
    </Context.Consumer>
  );
}
