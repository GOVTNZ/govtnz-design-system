import React, { Fragment, useEffect, useState, useRef } from 'react';
import { GatsbyPageProps } from '../components/layout';
import SEO from '../components/seo';
import './IframePage.scss';

type Props = {
  title: string;
  id: string;
  parentUrl: string;
  pageProps: GatsbyPageProps;
  PageContent: Function;
};

const wrapperClassName = 'css-changes-for-example-only';

const IframePage = ({
  title,
  id,
  parentUrl,
  pageProps,
  PageContent,
}: Props) => {
  useEffect(() => {
    console.log('Send message to parent');
    if (!window.parent || !window.parent.postMessage) return;
    window.addEventListener('resize', updateIframeSize, false);
    window.addEventListener('orientationchange', updateIframeSize, false);
    updateIframeSize();
  }, []);

  const updateIframeSize = () => {
    const selector = `.${wrapperClassName}`;
    const exampleVisual = document.querySelector(selector);
    if (!exampleVisual) {
      console.error('Problem finding ', selector);
      return;
    }
    const data = {
      resizeById: id,
      width: document.body.offsetWidth,
      height: exampleVisual.offsetHeight,
    };
    window.parent.postMessage(data, window.location.origin);
  };

  const updateIframeSizeEventually = () => {
    setTimeout(updateIframeSize, 50); // wait for results of any interaction to be rendered to DOM
  };

  return (
    <Fragment>
      <SEO
        title={title}
        keywords={[title, `design system`, `new zealand government`]}
      />
      <GoToParentPage parentUrl={parentUrl} title={title} />
      <div className={wrapperClassName} onClick={updateIframeSizeEventually}>
        <ReactComment text="START OF EXAMPLE" />
        <PageContent {...pageProps} name={title} />
        <ReactComment text="END OF EXAMPLE" />
      </div>
    </Fragment>
  );
};

const ReactComment = props => {
  const el = useRef();
  useEffect(() => {
    el.current.outerHTML = `<!-- ${props.text} -->`;
  }, []);
  return <div ref={el} />;
};

const GoToParentPage = ({ parentUrl, title }) => {
  const [isIframed, setIsFramed] = useState(null);
  useEffect(() => {
    setIsFramed(window.self !== window.top);
  }, []);

  const linkToParent = (
    <Fragment>
      <a href={parentUrl}>This example originates from the {title} page</a>
    </Fragment>
  );
  if (isIframed === true || isIframed === null) {
    return <noscript>{linkToParent}</noscript>;
  }
  return linkToParent;
};

export default IframePage;
