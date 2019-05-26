import * as React from "react";

type Props = {
  moreDetail?: string | undefined;
  moreDetailHint?: string | undefined;
  onChange: any;
};

const Textarea = ({ moreDetail, moreDetailHint, onChange }: Props) => (
  <div className="g-textarea-form-group">
    <label className="g-textarea-label" htmlFor={moreDetail}>
      Can you provide more detail?
    </label>
    <span className="g-textarea-hint" id={moreDetailHint}>
      Don't include personal or financial information, eg your National
      Insurance number or credit card details.
    </span>
    <textarea
      aria-describedby={moreDetailHint}
      className="g-textarea"
      id={moreDetail}
      name="more-detail"
      rows="5"
      onChange={onChange}
    />
  </div>
);
Textarea.props = ["moreDetail", "moreDetailHint", "onChange"];
export default Textarea;
