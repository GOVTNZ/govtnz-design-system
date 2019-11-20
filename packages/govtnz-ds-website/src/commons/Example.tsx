import React, { Component, Fragment } from 'react';
import { Details, Summary } from 'react-accessible-details';
import copyToClipboard from './copy-text-to-clipboard';
import './styles/clipboard.scss';
import './styles/components-button.scss';
import iconDown from './svgs/icon-down.svg';
import A from '@govtnz/ds/build/react-ts/A';
import {
  getPreferredFormat,
  SelectExampleFormat,
  highlightCode,
  CodeToName,
  trackFormat,
} from './code-previews';
import Icon from '../components/Icon';

type Props = {
  iframeProps: AnyObject;
  code: AnyObject;
  codeOnly?: boolean | undefined;
};

type State = {
  formatId: string;
  id: string;
  summaryId: string,
  templateChooserId: string,
  code: string;
  hasClickedExpand: boolean;
  supportsJavaScript: boolean;
  supportsClipboard: boolean;
  iframeHeight: number;
  iframeWidth: number;
  copyingMode: false | 'start' | 'end';
};

const DEFAULT_FORMAT_ID = 'html';

const TOOLTIP_DURATION_MS = 5000;

export default class Example extends Component<Props, State> {
  props: Props;
  state: State;

  timer?: any;

  constructor(props: Props) {
    super(props);

    const formatId = DEFAULT_FORMAT_ID;
    const rawCode = props.code[formatId];
    const randomId = Math.random()
    .toString(36)
    .replace(/[^0-9a-fA-F]/gi, '');

    this.state = {
      id: `select_${randomId}`,
      summaryId: `summary_${randomId}`,
      templateChooserId: `template_${randomId}`,
      formatId: formatId,
      code: highlightCode(rawCode, formatId),
      hasClickedExpand: false,
      copyingMode: false,
      supportsJavaScript: false,
      supportsClipboard: false,
      iframeWidth: 300,
      iframeHeight:
        (props.iframeProps && (props.iframeProps.height as number)) || 200,
    };
  }

  componentDidMount = () => {
    this.resetFormatChoice();
    this.setState({
      supportsJavaScript: true,
      supportsClipboard: true,
    });

    window.addEventListener('message', this.handleMessage, false);
  };

  componentWillUnmount = () => {
    window.removeEventListener('message', this.handleMessage);
  };

  handleMessage = e => {
    if (e.origin !== window.location.origin) {
      console.info('Ignoring postMessage from', e.origin, e);
      return;
    }
    const data = e.data;
    const resizeById = data && data.resizeById;
    if (
      this.props.iframeProps &&
      this.props.iframeProps.id &&
      this.props.iframeProps.id === resizeById
    ) {
      const iframeHeightClamped = data.height > 50 ? data.height : 50;
      this.setState({
        // iframeWidth: data.width > 300 ? data.width : 300,
        iframeHeight: iframeHeightClamped,
      });
    }
  };

  resetFormatChoice = () => {
    const formatId = getPreferredFormat();
    this.changeFormatId(formatId);

    // FIXME: For some reason Prism formatting isn't working sometimes
    // so this is a temporary hack to force re-renders.
    //
    const redrawCode = () => {
      const { formatId } = this.state;
      this.changeFormatId(formatId);
    };
    setTimeout(redrawCode, 250);
    setTimeout(redrawCode, 500);
    setTimeout(redrawCode, 750);
  };

  copyToClipboard = e => {
    e.preventDefault();
    const { code } = this.props;
    const { formatId } = this.state;
    const rawCode = code[formatId];
    if (!rawCode) return;
    copyToClipboard(rawCode.toString());
    this.setState({
      copyingMode: false,
    });
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.setState({
        copyingMode: 'start',
      });
      this.timer = setTimeout(() => {
        this.setState({
          copyingMode: 'end',
        });
        this.timer = setTimeout(() => {
          this.setState({
            copyingMode: false,
          });
        }, TOOLTIP_DURATION_MS);
      }, 75);
    }, 75);
  };

  resetCopyToClipboard = () => {
    this.setState({
      copyingMode: false,
    });
  };

  clickFormat = () => {
    const { hasClickedExpand, formatId } = this.state;
    if (hasClickedExpand) {
      return;
    }
    trackFormat(formatId);
    this.setState({ hasClickedExpand: true });
    this.resetFormatChoice();
  };

  changeFormatId = formatId => {
    this.setState({
      formatId,
      code: highlightCode(this.props.code[formatId], formatId),
    });
  };

  render() {
    const { iframeProps, codeOnly, code: allCode } = this.props;
    const {
      id,
      summaryId,
      templateChooserId,
      formatId,
      code,
      supportsClipboard,
      supportsJavaScript,
      copyingMode,
      iframeWidth,
      iframeHeight,
    } = this.state;

    const codePreview = (
      <div className="example--bg-off-white">
        {supportsJavaScript && (
          <React.Fragment>
            <div className="example__format">
              <h6 id={templateChooserId} style={{ margin: '0 0 24px' }}>
                <label className="example__label" htmlFor={id}>
                  Template format:{' '}
                </label>
                <span className="example__select">
                  <Icon
                    className="example__select-icon-down"
                    role="presentation"
                    id={iconDown.id}
                  />
                  <SelectExampleFormat
                    id={id}
                    formatId={formatId}
                    onChange={this.changeFormatId}
                  />
                </span>
              </h6>

              {supportsJavaScript && supportsClipboard ? (
                <div className="clipboard">
                  <button
                    key="clipboard-button"
                    className="g-button g-button--secondary g-button--small g-button--nowrap"
                    onClick={this.copyToClipboard}
                    type="button"
                  >
                    Copy code
                  </button>
                  <div
                    key="clipboard-message"
                    aria-live="assertive"
                    className={`clipboard__tooltip${
                      copyingMode ? ` clipboard__tooltip--${copyingMode}` : ''
                    }`}
                  >
                    {copyingMode !== false ? 'Code copied' : ''}
                  </div>
                </div>
              ) : null}
            </div>

            {formatId === 'mustache' && (
              <p className="example__note">
                Please note that our Mustache templates are currently beta
                quality. We recommend using HTML until we can give you guidance
                on how to integrate specific technologies. If you wish to see
                the <code>.mustache</code> template files{' '}
                <A href="https://github.com/GOVTNZ/govtnz-design-system/tree/master/packages/govtnz-ds/build/mustache">
                  see our GitHub repository
                </A>{' '}
                and{' '}
                <A href="https://github.com/GOVTNZ/govtnz-design-system#mustache">
                  Mustache install docs
                </A>
                .
              </p>
            )}

            {formatId === 'silverstripe-components' && (
              <p className="example__note">
                Please note that our SilverStripe Components are currently alpha
                quality. We recommend using HTML until we can give you guidance
                on how to integrate specific technologies. If you wish to see
                the <code>.ss</code> template files{' '}
                <A href="https://github.com/GOVTNZ/govtnz-design-system/tree/master/packages/govtnz-ds/build/silverstripe-components">
                  see our GitHub repository
                </A>{' '}
                and{' '}
                <A href="https://github.com/GOVTNZ/govtnz-design-system#silverstripe">
                  SilverStripe install docs
                </A>
                .
              </p>
            )}

            {(formatId === 'vue-js' || formatId === 'vue-ts') && (
              <p className="example__note">
                Please note that our Vue components are currently beta quality.
                We recommend using HTML until we can give you guidance on how to
                integrate specific technologies. If you wish to see the{' '}
                <code>.vue</code> template files{' '}
                <A href="https://github.com/GOVTNZ/govtnz-design-system/tree/master/packages/govtnz-ds/build/vue-js">
                  see our GitHub repository
                </A>{' '}
                and{' '}
                <A href="https://github.com/GOVTNZ/govtnz-design-system#vue">
                  Vue install docs
                </A>
                .
              </p>
            )}

            <pre
              className="language-code example__code"
              tabIndex={0}
              role="group"
              aria-labelledby={`${summaryId} ${templateChooserId}`}
            >
              <code dangerouslySetInnerHTML={{ __html: code }} />
            </pre>
          </React.Fragment>
        )}
        {Object.keys(allCode).map(codeType => {
          if (!allCode[codeType]) return null;
          return (
            <noscript key={codeType}>
              <h3>{CodeToName[codeType] || codeType}</h3>
              <pre>
                <code>{allCode[codeType]}</code>
              </pre>
            </noscript>
          );
        })}
      </div>
    );

    return (
      <div className="example">
        {!codeOnly && (
          <Fragment>
            <div className="example__iframe-wrapper">
              <iframe
                {...iframeProps}
                width={iframeWidth}
                height={iframeHeight}
                style={{ width: '100%' }}
              />
            </div>
            <Details className="example__details" onChange={this.clickFormat}>
              <Summary id={summaryId} className="example__summary">
                <h5 className="example__summary-button">
                  Code
                  <Icon
                    className="example__summary-icon-down icon icon--theme-highlight"
                    role="presentation"
                    id={iconDown.id}
                  />
                </h5>
              </Summary>
              {codePreview}
            </Details>
          </Fragment>
        )}
        {codeOnly && <Fragment>{codePreview}</Fragment>}
      </div>
    );
  }
}

type AnyObject = {
  [key: string]: string | number;
};
