import React, { useState, useEffect } from "react";
import { Context } from "./index";
import Summary from "./summary";

type Props = {
  children: React.ReactNode;
  className?: string | undefined;
  detailsId?: string | undefined;
};

export default function Details({ detailsId, children, className }: Props) {
  let [isScriptingEnabled, setIsScriptingEnabled] = useState(false);
  useEffect(() => setIsScriptingEnabled(true), []);
  return (
    <Context.Consumer>
      {value => {
        const kids = React.Children.toArray(children);
        const SummaryChildren = kids.filter(
          kid => kid["type"] && kid["type"].toString() === Summary.toString()
        );
        const OtherChildren = kids.filter(
          kid => !kid["type"] || kid["type"].toString() !== Summary.toString()
        );

        return (
          <details
            open={value.isOpen}
            role="group"
            className={className || undefined}
            id={detailsId}
          >
            {SummaryChildren}
            <div
              style={
                isScriptingEnabled
                  ? { display: value.isOpen ? "block" : "none" }
                  : null
              }
            >
              {OtherChildren}
            </div>
          </details>
        );
      }}
    </Context.Consumer>
  );
}
