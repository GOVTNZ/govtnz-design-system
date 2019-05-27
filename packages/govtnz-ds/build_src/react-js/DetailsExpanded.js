import React from "react";

const DetailsExpanded = ({
  helpWithNationality,
  open,
  detailsContent3E1674E973084F93B79C1A8694B6F4D5
}) => (
  <details
    className="g-detailsExpanded-details"
    id={helpWithNationality}
    open={open}
    role="group"
  >
    <summary
      aria-controls={detailsContent3E1674E973084F93B79C1A8694B6F4D5}
      aria-expanded="true"
      className="g-detailsExpanded-details__summary"
      role="button"
    >
      <span className="g-detailsExpanded-details__summary-text">
        Help with nationality
      </span>
    </summary>
    <div
      aria-hidden="false"
      className="g-detailsExpanded-details__text"
      id={detailsContent3E1674E973084F93B79C1A8694B6F4D5}
    >
      We need to know your nationality so we can work out which elections you’re
      entitled to vote in. If you can’t provide your nationality, you’ll have to
      send copies of identity documents through the post.
    </div>
  </details>
);
DetailsExpanded.props = [
  "helpWithNationality",
  "open",
  "detailsContent3E1674E973084F93B79C1A8694B6F4D5"
];
export default DetailsExpanded;
