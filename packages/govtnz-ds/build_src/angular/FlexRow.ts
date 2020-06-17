import { Component, Input } from "@angular/core";
@Component({
  selector: "g-FlexRow",
  template: `
<div class="g-flex-row{{constants.xsVerticalAlign[xsVerticalAlign] !== undefined ? " " +  constants.xsVerticalAlign[xsVerticalAlign] : ""}}{{constants.smVerticalAlign[smVerticalAlign] !== undefined ? " " +  constants.smVerticalAlign[smVerticalAlign] : ""}}{{constants.mdVerticalAlign[mdVerticalAlign] !== undefined ? " " +  constants.mdVerticalAlign[mdVerticalAlign] : ""}}{{constants.lgVerticalAlign[lgVerticalAlign] !== undefined ? " " +  constants.lgVerticalAlign[lgVerticalAlign] : ""}}{{constants.xsReversed[xsReversed] !== undefined ? " " +  constants.xsReversed[xsReversed] : ""}}{{constants.smReversed[smReversed] !== undefined ? " " +  constants.smReversed[smReversed] : ""}}{{constants.mdReversed[mdReversed] !== undefined ? " " +  constants.mdReversed[mdReversed] : ""}}{{constants.lgReversed[lgReversed] !== undefined ? " " +  constants.lgReversed[lgReversed] : ""}}{{isReversed ? " g-flex-reverse" : ""}}{{class ? " " +  class : ""}}">

  <slot></slot>


</div>


`
})
export class AppComponent {
  @Input() xsVerticalAlign: "top" | "middle" | "bottom" | undefined;
  @Input() smVerticalAlign: "top" | "middle" | "bottom" | undefined;
  @Input() mdVerticalAlign: "top" | "middle" | "bottom" | undefined;
  @Input() lgVerticalAlign: "top" | "middle" | "bottom" | undefined;
  @Input() xsReversed: "true" | "false" | undefined;
  @Input() smReversed: "true" | "false" | undefined;
  @Input() mdReversed: "true" | "false" | undefined;
  @Input() lgReversed: "true" | "false" | undefined;
  @Input() isReversed: boolean | undefined;
  @Input() class: any;
  @Input() children: React.ReactNode;
  title = "FlexRow";
}
