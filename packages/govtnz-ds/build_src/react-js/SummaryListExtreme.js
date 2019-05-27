import React from "react";

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
  target12: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target13: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target14: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target15: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target16: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target17: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target18: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target19: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target20: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target21: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target22: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target23: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target24: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target25: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target26: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target27: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target28: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target29: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target30: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target31: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target32: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target33: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target34: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target35: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target36: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target37: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target38: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target39: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target40: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target41: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target42: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target43: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target44: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target45: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target46: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target47: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target48: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target49: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target50: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target51: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target52: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target53: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target54: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target55: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target56: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target57: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target58: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target59: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target60: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target61: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target62: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target63: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target64: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target65: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target66: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target67: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target68: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

const SummaryListExtreme = ({
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
  target12,
  href13,
  rel13,
  target13,
  href14,
  rel14,
  target14,
  href15,
  rel15,
  target15,
  href16,
  rel16,
  target16,
  href17,
  rel17,
  target17,
  href18,
  rel18,
  target18,
  href19,
  rel19,
  target19,
  href20,
  rel20,
  target20,
  href21,
  rel21,
  target21,
  href22,
  rel22,
  target22,
  href23,
  rel23,
  target23,
  href24,
  rel24,
  target24,
  href25,
  rel25,
  target25,
  href26,
  rel26,
  target26,
  href27,
  rel27,
  target27,
  href28,
  rel28,
  target28,
  href29,
  rel29,
  target29,
  href30,
  rel30,
  target30,
  href31,
  rel31,
  target31,
  href32,
  rel32,
  target32,
  href33,
  rel33,
  target33,
  href34,
  rel34,
  target34,
  href35,
  rel35,
  target35,
  href36,
  rel36,
  target36,
  href37,
  rel37,
  target37,
  href38,
  rel38,
  target38,
  href39,
  rel39,
  target39,
  href40,
  rel40,
  target40,
  href41,
  rel41,
  target41,
  href42,
  rel42,
  target42,
  href43,
  rel43,
  target43,
  href44,
  rel44,
  target44,
  href45,
  rel45,
  target45,
  href46,
  rel46,
  target46,
  href47,
  rel47,
  target47,
  href48,
  rel48,
  target48,
  href49,
  rel49,
  target49,
  href50,
  rel50,
  target50,
  href51,
  rel51,
  target51,
  href52,
  rel52,
  target52,
  href53,
  rel53,
  target53,
  href54,
  rel54,
  target54,
  href55,
  rel55,
  target55,
  href56,
  rel56,
  target56,
  href57,
  rel57,
  target57,
  href58,
  rel58,
  target58,
  href59,
  rel59,
  target59,
  href60,
  rel60,
  target60,
  href61,
  rel61,
  target61,
  href62,
  rel62,
  target62,
  href63,
  rel63,
  target63,
  href64,
  rel64,
  target64,
  href65,
  rel65,
  target65,
  href66,
  rel66,
  target66,
  href67,
  rel67,
  target67,
  href68,
  rel68,
  target68
}) => (
  <dl className="g-summaryListExtreme-summary-list">
    <div className="g-summaryListExtreme-summary-list__row">
      <dt className="g-summaryListExtreme-summary-list__key">Name</dt>
      <dd className="g-summaryListExtreme-summary-list__value">
        Barnaby Marmaduke Aloysius Benjy Cobweb Dartagnan Egbert Felix Gaspar
        Humbert Ignatius Jayden Kasper Leroy Maximilian Neddy Obiajulu Pepin
        Quilliam Rosencrantz Sexton Teddy Upwood Vivatma Wayland Xylon Yardley
        Zachary Usansky
      </dd>
      <dd className="g-summaryListExtreme-summary-list__actions">
        <ul className="g-summaryListExtreme-summary-list__actions-list">
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href}
              rel={rel}
              target={constants.target[target]}
            >
              {" "}
              Buy
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href2}
              rel={rel2}
              target={constants.target2[target2]}
            >
              {" "}
              Use
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href3}
              rel={rel3}
              target={constants.target3[target3]}
            >
              {" "}
              Break
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href4}
              rel={rel4}
              target={constants.target4[target4]}
            >
              {" "}
              Fix
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href5}
              rel={rel5}
              target={constants.target5[target5]}
            >
              {" "}
              Trash
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href6}
              rel={rel6}
              target={constants.target6[target6]}
            >
              {" "}
              Change
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href7}
              rel={rel7}
              target={constants.target7[target7]}
            >
              {" "}
              Mail
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href8}
              rel={rel8}
              target={constants.target8[target8]}
            >
              {" "}
              Upgrade
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href9}
              rel={rel9}
              target={constants.target9[target9]}
            >
              {" "}
              Charge
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href10}
              rel={rel10}
              target={constants.target10[target10]}
            >
              {" "}
              Point
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href11}
              rel={rel11}
              target={constants.target11[target11]}
            >
              {" "}
              Coom
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href12}
              rel={rel12}
              target={constants.target12[target12]}
            >
              {" "}
              Press
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href13}
              rel={rel13}
              target={constants.target13[target13]}
            >
              {" "}
              Snap
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href14}
              rel={rel14}
              target={constants.target14[target14]}
            >
              {" "}
              Work
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href15}
              rel={rel15}
              target={constants.target15[target15]}
            >
              {" "}
              Quick
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href16}
              rel={rel16}
              target={constants.target16[target16]}
            >
              {" "}
              Erase
            </a>
          </li>
        </ul>
      </dd>
    </div>
    <div className="g-summaryListExtreme-summary-list__row">
      <dt className="g-summaryListExtreme-summary-list__key">
        Long website address
      </dt>
      <dd className="g-summaryListExtreme-summary-list__value">
        <a
          className="g-summaryListExtreme-link"
          href={href17}
          rel={rel17}
          target={constants.target17[target17]}
        >
          https://cs.wikipedia.org/wiki/Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch
        </a>
      </dd>
      <dd className="g-summaryListExtreme-summary-list__actions">
        <a
          className="g-summaryListExtreme-link"
          href={href18}
          rel={rel18}
          target={constants.target18[target18]}
        >
          Change
          <span className="g-summaryListExtreme-visually-hidden">
            {" "}
            long website address
          </span>
        </a>
      </dd>
    </div>
    <div className="g-summaryListExtreme-summary-list__row">
      <dt className="g-summaryListExtreme-summary-list__key">
        Long email address
      </dt>
      <dd className="g-summaryListExtreme-summary-list__value">
        <a
          className="g-summaryListExtreme-link"
          href={href19}
          rel={rel19}
          target={constants.target19[target19]}
        >
          webmaster@llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch.com
        </a>
      </dd>
      <dd className="g-summaryListExtreme-summary-list__actions">
        <a
          className="g-summaryListExtreme-link"
          href={href20}
          rel={rel20}
          target={constants.target20[target20]}
        >
          Change
          <span className="g-summaryListExtreme-visually-hidden">
            {" "}
            long email address
          </span>
        </a>
      </dd>
    </div>
    <div className="g-summaryListExtreme-summary-list__row">
      <dt className="g-summaryListExtreme-summary-list__key">
        No wrapping allowed
      </dt>
      <dd className="g-summaryListExtreme-summary-list__value">
        <p
          className="g-summaryListExtreme-body"
          style={{ whiteSpace: "nowrap" }}
        >
          michelle.longish.name@example.com
        </p>
      </dd>
      <dd className="g-summaryListExtreme-summary-list__actions">
        <a
          className="g-summaryListExtreme-link"
          href={href21}
          rel={rel21}
          target={constants.target21[target21]}
        >
          Change
          <span className="g-summaryListExtreme-visually-hidden">
            {" "}
            no wrapping allowed
          </span>
        </a>
      </dd>
    </div>
    <div className="g-summaryListExtreme-summary-list__row">
      <dt className="g-summaryListExtreme-summary-list__key">
        Pneumonoultramicroscopicsilicovolcanoconiosis
      </dt>
      <dd className="g-summaryListExtreme-summary-list__value">
        <p className="g-summaryListExtreme-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis
          consequat diam. Duis efficitur justo at congue iaculis. Quisque
          scelerisque ornare justo nec congue. Duis egestas felis nibh, eu
          cursus metus rutrum eget. In dictum lectus diam, dapibus ullamcorper
          risus gravida a. Vestibulum tempor mattis sapien, at auctor tellus
          dignissim non. Praesent dictum felis nec diam tempor, vel lobortis leo
          ultricies.
        </p>
        <p className="g-summaryListExtreme-body">
          Suspendisse potenti. Aliquam dictum eu ipsum sed facilisis. Maecenas
          hendrerit est eget ultrices venenatis. Nam ex nisl, venenatis eget
          molestie quis, hendrerit id tellus. Morbi et posuere ex, vel interdum
          sapien. Mauris ac mattis turpis, interdum eleifend erat. Morbi eget
          efficitur lectus. Sed suscipit laoreet ipsum et iaculis. Integer
          ornare ipsum quis aliquet scelerisque. Proin venenatis dictum
          suscipit. Nunc tristique, felis quis fermentum rhoncus, tortor augue
          egestas ipsum, non porttitor nulla odio vitae purus. Interdum et
          malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </dd>
      <dd className="g-summaryListExtreme-summary-list__actions">
        <ul className="g-summaryListExtreme-summary-list__actions-list">
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href22}
              rel={rel22}
              target={constants.target22[target22]}
            >
              {" "}
              Write
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href23}
              rel={rel23}
              target={constants.target23[target23]}
            >
              {" "}
              Cut
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href24}
              rel={rel24}
              target={constants.target24[target24]}
            >
              {" "}
              Paste
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href25}
              rel={rel25}
              target={constants.target25[target25]}
            >
              {" "}
              Save
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href26}
              rel={rel26}
              target={constants.target26[target26]}
            >
              {" "}
              Load
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href27}
              rel={rel27}
              target={constants.target27[target27]}
            >
              {" "}
              Check
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href28}
              rel={rel28}
              target={constants.target28[target28]}
            >
              {" "}
              Quick
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href29}
              rel={rel29}
              target={constants.target29[target29]}
            >
              {" "}
              Rewrite
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href30}
              rel={rel30}
              target={constants.target30[target30]}
            >
              {" "}
              Plug
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href31}
              rel={rel31}
              target={constants.target31[target31]}
            >
              {" "}
              Play
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href32}
              rel={rel32}
              target={constants.target32[target32]}
            >
              {" "}
              Burn
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href33}
              rel={rel33}
              target={constants.target33[target33]}
            >
              {" "}
              Rip
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href34}
              rel={rel34}
              target={constants.target34[target34]}
            >
              {" "}
              Drag and drop
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href35}
              rel={rel35}
              target={constants.target35[target35]}
            >
              {" "}
              Zip
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href36}
              rel={rel36}
              target={constants.target36[target36]}
            >
              {" "}
              Unzip
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href37}
              rel={rel37}
              target={constants.target37[target37]}
            >
              {" "}
              Lock
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href38}
              rel={rel38}
              target={constants.target38[target38]}
            >
              {" "}
              Fill
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href39}
              rel={rel39}
              target={constants.target39[target39]}
            >
              {" "}
              Curl
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href40}
              rel={rel40}
              target={constants.target40[target40]}
            >
              {" "}
              Find
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href41}
              rel={rel41}
              target={constants.target41[target41]}
            >
              {" "}
              View
            </a>
          </li>
        </ul>
      </dd>
    </div>
    <div className="g-summaryListExtreme-summary-list__row">
      <dt className="g-summaryListExtreme-summary-list__key">
        Its vanished trees, the trees that had made way for Gatsby’s house,
        Pneumonoultramicroscopicsilicovolcanoconiosis had once pandered in
        whispers to the last and greatest of all human dreams; for a transitory
        enchanted moment man must have held his breath in the presence of this
        continent, compelled into an aesthetic contemplation he neither
        understood nor desired, face to face for the last time in history with
        something commensurate to his capacity for wonder.
      </dt>
      <dd className="g-summaryListExtreme-summary-list__value">
        The Great Gatsby
      </dd>
      <dd className="g-summaryListExtreme-summary-list__actions">
        <ul className="g-summaryListExtreme-summary-list__actions-list">
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href42}
              rel={rel42}
              target={constants.target42[target42]}
            >
              {" "}
              Code
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href43}
              rel={rel43}
              target={constants.target43[target43]}
            >
              {" "}
              Jam
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href44}
              rel={rel44}
              target={constants.target44[target44]}
            >
              {" "}
              Unlock
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href45}
              rel={rel45}
              target={constants.target45[target45]}
            >
              {" "}
              Surf
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href46}
              rel={rel46}
              target={constants.target46[target46]}
            >
              {" "}
              Scroll
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href47}
              rel={rel47}
              target={constants.target47[target47]}
            >
              {" "}
              Pose
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href48}
              rel={rel48}
              target={constants.target48[target48]}
            >
              {" "}
              Click
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href49}
              rel={rel49}
              target={constants.target49[target49]}
            >
              {" "}
              Cross
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href50}
              rel={rel50}
              target={constants.target50[target50]}
            >
              {" "}
              Crack
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href51}
              rel={rel51}
              target={constants.target51[target51]}
            >
              {" "}
              Twitch
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href52}
              rel={rel52}
              target={constants.target52[target52]}
            >
              {" "}
              Update
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href53}
              rel={rel53}
              target={constants.target53[target53]}
            >
              {" "}
              Name
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href54}
              rel={rel54}
              target={constants.target54[target54]}
            >
              {" "}
              Read
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href55}
              rel={rel55}
              target={constants.target55[target55]}
            >
              {" "}
              Tune
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href56}
              rel={rel56}
              target={constants.target56[target56]}
            >
              {" "}
              Print
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href57}
              rel={rel57}
              target={constants.target57[target57]}
            >
              {" "}
              Scan
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href58}
              rel={rel58}
              target={constants.target58[target58]}
            >
              {" "}
              Send
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href59}
              rel={rel59}
              target={constants.target59[target59]}
            >
              {" "}
              Fax
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href60}
              rel={rel60}
              target={constants.target60[target60]}
            >
              {" "}
              Rename
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href61}
              rel={rel61}
              target={constants.target61[target61]}
            >
              {" "}
              Touch
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href62}
              rel={rel62}
              target={constants.target62[target62]}
            >
              {" "}
              Bring
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href63}
              rel={rel63}
              target={constants.target63[target63]}
            >
              {" "}
              Pay
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href64}
              rel={rel64}
              target={constants.target64[target64]}
            >
              {" "}
              Watch
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href65}
              rel={rel65}
              target={constants.target65[target65]}
            >
              {" "}
              Turn
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href66}
              rel={rel66}
              target={constants.target66[target66]}
            >
              {" "}
              Leave
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href67}
              rel={rel67}
              target={constants.target67[target67]}
            >
              {" "}
              Stop
            </a>
          </li>
          <li className="g-summaryListExtreme-summary-list__actions-list-item">
            <a
              className="g-summaryListExtreme-link"
              href={href68}
              rel={rel68}
              target={constants.target68[target68]}
            >
              {" "}
              Format
            </a>
          </li>
        </ul>
      </dd>
    </div>
  </dl>
);
SummaryListExtreme.props = [
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
  "target12",
  "href13",
  "rel13",
  "target13",
  "href14",
  "rel14",
  "target14",
  "href15",
  "rel15",
  "target15",
  "href16",
  "rel16",
  "target16",
  "href17",
  "rel17",
  "target17",
  "href18",
  "rel18",
  "target18",
  "href19",
  "rel19",
  "target19",
  "href20",
  "rel20",
  "target20",
  "href21",
  "rel21",
  "target21",
  "href22",
  "rel22",
  "target22",
  "href23",
  "rel23",
  "target23",
  "href24",
  "rel24",
  "target24",
  "href25",
  "rel25",
  "target25",
  "href26",
  "rel26",
  "target26",
  "href27",
  "rel27",
  "target27",
  "href28",
  "rel28",
  "target28",
  "href29",
  "rel29",
  "target29",
  "href30",
  "rel30",
  "target30",
  "href31",
  "rel31",
  "target31",
  "href32",
  "rel32",
  "target32",
  "href33",
  "rel33",
  "target33",
  "href34",
  "rel34",
  "target34",
  "href35",
  "rel35",
  "target35",
  "href36",
  "rel36",
  "target36",
  "href37",
  "rel37",
  "target37",
  "href38",
  "rel38",
  "target38",
  "href39",
  "rel39",
  "target39",
  "href40",
  "rel40",
  "target40",
  "href41",
  "rel41",
  "target41",
  "href42",
  "rel42",
  "target42",
  "href43",
  "rel43",
  "target43",
  "href44",
  "rel44",
  "target44",
  "href45",
  "rel45",
  "target45",
  "href46",
  "rel46",
  "target46",
  "href47",
  "rel47",
  "target47",
  "href48",
  "rel48",
  "target48",
  "href49",
  "rel49",
  "target49",
  "href50",
  "rel50",
  "target50",
  "href51",
  "rel51",
  "target51",
  "href52",
  "rel52",
  "target52",
  "href53",
  "rel53",
  "target53",
  "href54",
  "rel54",
  "target54",
  "href55",
  "rel55",
  "target55",
  "href56",
  "rel56",
  "target56",
  "href57",
  "rel57",
  "target57",
  "href58",
  "rel58",
  "target58",
  "href59",
  "rel59",
  "target59",
  "href60",
  "rel60",
  "target60",
  "href61",
  "rel61",
  "target61",
  "href62",
  "rel62",
  "target62",
  "href63",
  "rel63",
  "target63",
  "href64",
  "rel64",
  "target64",
  "href65",
  "rel65",
  "target65",
  "href66",
  "rel66",
  "target66",
  "href67",
  "rel67",
  "target67",
  "href68",
  "rel68",
  "target68"
];
export default SummaryListExtreme;
