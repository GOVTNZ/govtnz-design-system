// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
import P from '@govtnz/ds/build/react-ts/P.tsx';
import '../../commons/styles/ds/themed-P.scss';
import H2 from '@govtnz/ds/build/react-ts/H2.tsx';
import '../../commons/styles/ds/themed-H2.scss';
import Ul from '@govtnz/ds/build/react-ts/Ul.tsx';
import '../../commons/styles/ds/themed-Ul.scss';
import Li from '@govtnz/ds/build/react-ts/Li.tsx';
import '../../commons/styles/ds/themed-Li.scss';
import components__FlexGrid from '../../commons/examples/components__FlexGrid';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page';
import ComponentCode from '../../commons/component-code';
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';
import '../../commons/styles/ds/themed-Button.scss';
import '../../commons/styles/ds/themed-CaptionL.scss';

const PageContent = (props) => <React.Fragment><P styleSize="large">Use our flexible grid to structure website content. The grid is mobile-first, powered by Flexbox, and based on a 12-column system. The grid includes gutters, column spanning, 4 breakpoints, and column alignment.</P>

<H2 {...onChangeGenerator()} styleSize="large" id="how-it-works">How it works</H2>
<p>The grid system uses a series of containers, rows, and columns to lay out and align content.</p>
<p>The following layout (non-responsive) example creates three equal-width columns on tablet, desktop, and widescreen devices using our predefined grid classes. Those columns are centered in the page with the parent flex container.</p>
<div className="flexgrid-preview">
<ExampleContainer {...onChangeGenerator()}>
    <ExampleHeading {...onChangeGenerator()}>Example of 3-column Flexbox grid</ExampleHeading>
    <Example {...onChangeGenerator()}  code={components__FlexGrid[0]} iframeProps={{
        id:"iframe_componentsFlexGrid0",
        className: "example__iframe",
        src:"/components/FlexGrid__example0.html",
        title:"Example of 3-column Flexbox grid",
        height: 102
      }}></Example>
</ExampleContainer>
</div>

<h3 id="containers">Containers</h3>
<p>Flex container width can be fixed or fluid. The fixed container fills the available width until it reaches the maximum of 1366 pixels.</p>
<p>The fluid container has no constraints and fills all of the available space. This is ideal for display uses, such as widescreen HD display.</p>
<h3 id="rows">Rows</h3>
<p>All columns must have a flex row as a parent.</p>
<h3 id="columns">Columns</h3>
<p>Our 12-column grid has gutters, column spanning, four breakpoints, and column alignment.</p>
<p>The &quot;md&quot; in the above example refers to the breakpoint size. Here&#39;s the full range of breakpoint options:</p>
<Ul {...onChangeGenerator()} bulleted>
<Li {...onChangeGenerator()}>xs = minimum width of 0 pixels</Li>
<Li {...onChangeGenerator()}>sm = minimum width of 768 pixels</Li>
<Li {...onChangeGenerator()}>md = minimum width of 1024 pixels</Li>
<Li {...onChangeGenerator()}>lg = minimum width of 1200 pixels</Li>
</Ul>
<p>We also support offsets to allow flexibility of design, essentially allowing blank columns to assist aesthetics in layout.</p>
<p>The following example shows all the possible variants of column widths.</p>
<div className="flexgrid-preview">
<ExampleContainer {...onChangeGenerator()}>
    <ExampleHeading {...onChangeGenerator()}>Example of Flexgrid column variants</ExampleHeading>
    <Example {...onChangeGenerator()}  code={components__FlexGrid[1]} iframeProps={{
        id:"iframe_componentsFlexGrid1",
        className: "example__iframe",
        src:"/components/FlexGrid__example1.html",
        title:"Example of Flexgrid column variants",
        height: 388
      }}></Example>
</ExampleContainer>
</div>

<h2 id="why-use-a-flexbox-grid">Why use a Flexbox grid?</h2>
<p>We chose Flexbox because it&#39;s implemented by our supported browsers. We have labelled this grid type &quot;Flex&quot; so that we can add other grid types later. We&#39;re considering adding support for CSS Grid.</p>
<h2 id="credit">Credit</h2>
<p>Original HTML and CSS derived from <a href="http://flexboxgrid.com/">FlexboxGrid</a> version 6.3.2. Licensed under <a href="https://github.com/kristoferjoseph/flexboxgrid">the Apache Licence version 2.0</a>.</p>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"FlexGrid"}
      id={"FlexGrid"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}
