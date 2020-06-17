import { Component, Input } from "@angular/core";
@Component({
  selector: "g-FlexColumn",
  template: `
<div class="g-flex-col{{constants.xs[xs] !== undefined ? " " +  constants.xs[xs] : ""}}{{constants.sm[sm] !== undefined ? " " +  constants.sm[sm] : ""}}{{constants.md[md] !== undefined ? " " +  constants.md[md] : ""}}{{constants.lg[lg] !== undefined ? " " +  constants.lg[lg] : ""}}{{constants.xsOffset[xsOffset] !== undefined ? " " +  constants.xsOffset[xsOffset] : ""}}{{constants.smOffset[smOffset] !== undefined ? " " +  constants.smOffset[smOffset] : ""}}{{constants.mdOffset[mdOffset] !== undefined ? " " +  constants.mdOffset[mdOffset] : ""}}{{constants.lgOffset[lgOffset] !== undefined ? " " +  constants.lgOffset[lgOffset] : ""}}{{constants.xsHorizontalAlign[xsHorizontalAlign] !== undefined ? " " +  constants.xsHorizontalAlign[xsHorizontalAlign] : ""}}{{constants.smHorizontalAlign[smHorizontalAlign] !== undefined ? " " +  constants.smHorizontalAlign[smHorizontalAlign] : ""}}{{constants.mdHorizontalAlign[mdHorizontalAlign] !== undefined ? " " +  constants.mdHorizontalAlign[mdHorizontalAlign] : ""}}{{constants.lgHorizontalAlign[lgHorizontalAlign] !== undefined ? " " +  constants.lgHorizontalAlign[lgHorizontalAlign] : ""}}{{isReversed ? " g-flex-reverse" : ""}}{{class ? " " +  class : ""}}">

  <slot></slot>


</div>


`
})
export class AppComponent {
  @Input() xs:
    | "hidden"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "auto";
  @Input() sm:
    | "hidden"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "auto";
  @Input() md:
    | "hidden"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "auto";
  @Input() lg:
    | "hidden"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "auto";
  @Input() xsOffset:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | undefined;
  @Input() smOffset:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | undefined;
  @Input() mdOffset:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | undefined;
  @Input() lgOffset:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | undefined;
  @Input() xsHorizontalAlign: "start" | "center" | "right" | undefined;
  @Input() smHorizontalAlign: "start" | "center" | "end" | undefined;
  @Input() mdHorizontalAlign: "start" | "center" | "end" | undefined;
  @Input() lgHorizontalAlign: "start" | "center" | "end" | undefined;
  @Input() isReversed: boolean | undefined;
  @Input() class: any;
  @Input() children: React.ReactNode;
  title = "FlexColumn";
}
