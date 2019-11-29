import React from "react";

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target3: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target4: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

const TabsTabsWithAnchorInPanel = ({
  tabTab1,
  tab1,
  href,
  rel,
  target,
  tabTab2,
  tab2,
  href2,
  rel2,
  target2,
  href3,
  rel3,
  target3,
  anchor,
  href4,
  rel4,
  target4
}) => (
  <div className="g-tabsTabsWithAnchorInPanel-tabs" data-module="tabs">
    <h2 className="g-tabsTabsWithAnchorInPanel-tabs__title">Contents</h2>

    <ul className="g-tabsTabsWithAnchorInPanel-tabs__list" role="tablist">
      <li
        className="g-tabsTabsWithAnchorInPanel-tabs__list-item"
        role="presentation"
      >
        <a
          aria-controls={tab1}
          aria-selected="true"
          className="g-tabsTabsWithAnchorInPanel-tabs__tab g-tabsTabsWithAnchorInPanel-tabs__tab--selected"
          href={href}
          id={tabTab1}
          role="tab"
          tabIndex={0}
          rel={rel}
          target={constants.target[target]}
        >
          Tab 1
        </a>
      </li>
      <li
        className="g-tabsTabsWithAnchorInPanel-tabs__list-item"
        role="presentation"
      >
        <a
          aria-controls={tab2}
          aria-selected="false"
          className="g-tabsTabsWithAnchorInPanel-tabs__tab"
          href={href2}
          id={tabTab2}
          role="tab"
          tabIndex={-1}
          rel={rel2}
          target={constants.target2[target2]}
        >
          Tab 2
        </a>
      </li>
    </ul>

    <section
      aria-labelledby={tabTab1}
      className="g-tabsTabsWithAnchorInPanel-tabs__panel"
      id={tab1}
      role="tabpanel"
    >
      <h2 className="g-tabsTabsWithAnchorInPanel-heading-l">Tab 1</h2>
      <p>
        Testing that when you click the anchor it moves to the anchor point
        successfully
      </p>
      <a
        className="g-link"
        href={href3}
        rel={rel3}
        target={constants.target3[target3]}
      >
        Anchor
      </a>
      <a
        id={anchor}
        tabIndex={0}
        href={href4}
        rel={rel4}
        target={constants.target4[target4]}
      >
        Anchor Point
      </a>
    </section>
    <section
      aria-labelledby={tabTab2}
      className="g-tabsTabsWithAnchorInPanel-tabs__panel g-tabsTabsWithAnchorInPanel-tabs__panel--hidden"
      id={tab2}
      role="tabpanel"
    >
      <h2 className="g-tabsTabsWithAnchorInPanel-heading-l">Tab 2</h2>
    </section>
  </div>
);

export default TabsTabsWithAnchorInPanel;
