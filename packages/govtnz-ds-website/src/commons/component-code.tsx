import React, { Component } from 'react';
import H2 from '@govtnz/ds/build/react-ts/H2';
import H3 from '@govtnz/ds/build/react-ts/H3';
import H4 from '@govtnz/ds/build/react-ts/H4';
import H5 from '@govtnz/ds/build/react-ts/H5';
import H6 from '@govtnz/ds/build/react-ts/H6';
import { SelectComponentFormat } from './code-previews';
import { getPreferredFormat, highlightCode } from './code-previews';
import { generateId } from './id';

type Props = {
  Component: Function;
  templateFormats: TemplateFormats;
  startAtHeadingLevel?: number;
};

type State = {
  formatId: string;
  ref?: any | undefined;
  code: string;
  selectId: string;
};

const DEFAULT_FORMAT_ID = 'html';

export default class ComponentCode extends Component<Props, State> {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);

    const formatId = DEFAULT_FORMAT_ID;
    const rawCode = this.getRawCode(formatId, props);

    this.state = {
      formatId,
      code: highlightCode(rawCode, formatId),
      selectId: generateId('select'),
    };
  }

  componentDidMount = () => {
    const formatId = getPreferredFormat();
    this.changeFormatId(formatId);
  };

  setRef = ref => {
    this.setState({ ref });
  };

  changeFormatId = (formatId: string) => {
    const rawCode = this.getRawCode(formatId);

    this.setState({
      formatId,
      code: highlightCode(rawCode, formatId),
    });
  };

  getRawCode = (formatId: string, props?: Props | undefined): string => {
    const p = props || this.props;
    const templateFormat = p.templateFormats && p.templateFormats[formatId];
    return templateFormat ? templateFormat.data : '';
  };

  render() {
    const { startAtHeadingLevel } = this.props;
    const { formatId, code, selectId } = this.state;

    const topLevel: number = startAtHeadingLevel || 2;

    const TopHeading = headingLevels[topLevel];
    const SecondLevelHeading = headingLevels[topLevel + 1];

    return (
      <>
        <TopHeading>Code</TopHeading>
        <SecondLevelHeading>
          <label htmlFor={selectId}>Template format: </label>
          <SelectComponentFormat
            id={selectId}
            formatId={formatId}
            onChange={this.changeFormatId}
          />
        </SecondLevelHeading>
        <pre className="language-code">
          <code dangerouslySetInnerHTML={{ __html: code }} />
        </pre>
      </>
    );
  }
}

const headingLevels = {
  2: H2,
  3: H3,
  4: H4,
  5: H5,
  6: H6,
};

type TemplateFormats = {
  [key: string]: { data: string };
};
