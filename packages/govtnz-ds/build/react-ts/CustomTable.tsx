import * as React from "react";

type Props = {
  href: string;
  rel?: string | undefined;
  target?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  href2: string;
  rel2?: string | undefined;
  target2?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  href3: string;
  rel3?: string | undefined;
  target3?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  href4: string;
  rel4?: string | undefined;
  target4?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  href5: string;
  rel5?: string | undefined;
  target5?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  href6: string;
  rel6?: string | undefined;
  target6?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  href7: string;
  rel7?: string | undefined;
  target7?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  href8: string;
  rel8?: string | undefined;
  target8?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  href9: string;
  rel9?: string | undefined;
  target9?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  href10: string;
  rel10?: string | undefined;
  target10?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  href11: string;
  rel11?: string | undefined;
  target11?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  href12: string;
  rel12?: string | undefined;
  target12?: "Blank" | "Top" | "Self" | "Parent" | undefined;
};

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target3: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target4: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target5: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target6: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target7: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target8: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target9: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target10: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target11: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target12: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

const CustomTable = ({
  href,
  rel,
  target,
  href2,
  rel2,
  target2,
  href3,
  rel3,
  target3,
  href4,
  rel4,
  target4,
  href5,
  rel5,
  target5,
  href6,
  rel6,
  target6,
  href7,
  rel7,
  target7,
  href8,
  rel8,
  target8,
  href9,
  rel9,
  target9,
  href10,
  rel10,
  target10,
  href11,
  rel11,
  target11,
  href12,
  rel12,
  target12
}: Props) => (
  <div className="g-customTable-fragment">
    <table className="g-customTable-table g-!-font-size-16">
      <thead className="g-customTable-table__head">
        <tr className="g-customTable-table__row">
          Who is making the request Form
        </tr>
      </thead>
      <tbody className="g-customTable-table__body">
        <tr className="g-customTable-table__row">
          An individual
          <a
            className="g-customTable-link"
            href={href}
            rel={rel}
            target={constants.target[target]}
          >
            Form V888
          </a>
        </tr>
        <tr className="g-customTable-table__row">
          A company
          <a
            className="g-customTable-link"
            href={href2}
            rel={rel2}
            target={constants.target2[target2]}
          >
            Form V8882
          </a>
        </tr>
        <tr className="g-customTable-table__row">
          A company that issues parking or trespass charge notices
          <a
            className="g-customTable-link"
            href={href3}
            rel={rel3}
            target={constants.target3[target3]}
          >
            Form V8883
          </a>
        </tr>
      </tbody>
    </table>
    <thead className="g-customTable-table__head">
      <tr className="g-customTable-table__row">
        Who is making the request Form
      </tr>
    </thead>
    <tr className="g-customTable-table__row">Who is making the request Form</tr>
    Who is making the request Form
    <tbody className="g-customTable-table__body">
      <tr className="g-customTable-table__row">
        An individual
        <a
          className="g-customTable-link"
          href={href4}
          rel={rel4}
          target={constants.target4[target4]}
        >
          Form V888
        </a>
      </tr>
      <tr className="g-customTable-table__row">
        A company
        <a
          className="g-customTable-link"
          href={href5}
          rel={rel5}
          target={constants.target5[target5]}
        >
          Form V8882
        </a>
      </tr>
      <tr className="g-customTable-table__row">
        A company that issues parking or trespass charge notices
        <a
          className="g-customTable-link"
          href={href6}
          rel={rel6}
          target={constants.target6[target6]}
        >
          Form V8883
        </a>
      </tr>
    </tbody>
    <tr className="g-customTable-table__row">
      An individual
      <a
        className="g-customTable-link"
        href={href7}
        rel={rel7}
        target={constants.target7[target7]}
      >
        Form V888
      </a>
    </tr>
    An individual
    <a
      className="g-customTable-link"
      href={href8}
      rel={rel8}
      target={constants.target8[target8]}
    >
      Form V888
    </a>
    <tr className="g-customTable-table__row">
      A company
      <a
        className="g-customTable-link"
        href={href9}
        rel={rel9}
        target={constants.target9[target9]}
      >
        Form V8882
      </a>
    </tr>
    A company
    <a
      className="g-customTable-link"
      href={href10}
      rel={rel10}
      target={constants.target10[target10]}
    >
      Form V8882
    </a>
    <tr className="g-customTable-table__row">
      A company that issues parking or trespass charge notices
      <a
        className="g-customTable-link"
        href={href11}
        rel={rel11}
        target={constants.target11[target11]}
      >
        Form V8883
      </a>
    </tr>
    A company that issues parking or trespass charge notices
    <a
      className="g-customTable-link"
      href={href12}
      rel={rel12}
      target={constants.target12[target12]}
    >
      Form V8883
    </a>
  </div>
);
CustomTable.props = [
  "href",
  "rel",
  "target",
  "href2",
  "rel2",
  "target2",
  "href3",
  "rel3",
  "target3",
  "href4",
  "rel4",
  "target4",
  "href5",
  "rel5",
  "target5",
  "href6",
  "rel6",
  "target6",
  "href7",
  "rel7",
  "target7",
  "href8",
  "rel8",
  "target8",
  "href9",
  "rel9",
  "target9",
  "href10",
  "rel10",
  "target10",
  "href11",
  "rel11",
  "target11",
  "href12",
  "rel12",
  "target12"
];
export default CustomTable;
