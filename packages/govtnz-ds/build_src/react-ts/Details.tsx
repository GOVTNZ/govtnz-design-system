import * as React from "react";

type Props = {
  open?: boolean | undefined;
  detailsContent021Df3Ae2Ee5440B98CbFfc001B25657?: string | undefined;
};

const Details = ({
  open,
  detailsContent021Df3Ae2Ee5440B98CbFfc001B25657
}: Props) => (
  <details className="g-details" role="group" open={open}>
    <summary
      aria-controls={detailsContent021Df3Ae2Ee5440B98CbFfc001B25657}
      aria-expanded="false"
      className="g-details__summary"
      role="button"
    >
      <span className="g-details__summary-text">Help with nationality</span>
    </summary>
    <div
      aria-hidden="true"
      className="g-details__text"
      id={detailsContent021Df3Ae2Ee5440B98CbFfc001B25657}
    >
      We need to know your nationality so we can work out which elections you’re
      entitled to vote in. If you can’t provide your nationality, you’ll have to
      send copies of identity documents through the post.
    </div>
  </details>
);

export default Details;
