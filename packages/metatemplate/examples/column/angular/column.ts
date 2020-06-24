import { Component, Input } from "@angular/core";
@Component({
  selector: "g-column",
  template: `
<div class="g-flex-col{{constants.xs[xs] !== undefined ? " " +  constants.xs[xs] : ""}}{{constants.sm[sm] !== undefined ? " " +  constants.sm[sm] : ""}}{{constants.md[md] !== undefined ? " " +  constants.md[md] : ""}}{{constants.lg[lg] !== undefined ? " " +  constants.lg[lg] : ""}}{{constants.xsOffset[xsOffset] !== undefined ? " " +  constants.xsOffset[xsOffset] : ""}}{{constants.smOffset[smOffset] !== undefined ? " " +  constants.smOffset[smOffset] : ""}}{{constants.mdOffset[mdOffset] !== undefined ? " " +  constants.mdOffset[mdOffset] : ""}}{{constants.lgOffset[lgOffset] !== undefined ? " " +  constants.lgOffset[lgOffset] : ""}}{{isReversed ? " g-flex-reverse" : ""}}">

  <slot></slot>


</div>


`
})
export class AppComponent {
  @Input() xs:
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
  @Input() isReversed: boolean | undefined;
  @Input() children: React.ReactNode;
  title = "column";
}
