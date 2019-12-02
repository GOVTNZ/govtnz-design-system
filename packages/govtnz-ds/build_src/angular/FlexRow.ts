import { Component, Input } from "@angular/core";
@Component({
  selector: "g-FlexRow",
  template: `
<div class="g-flex-row{{constants.alignXs[alignXs] !== undefined ? " " +  constants.alignXs[alignXs] : ""}}{{constants.alignSm[alignSm] !== undefined ? " " +  constants.alignSm[alignSm] : ""}}{{constants.alignMd[alignMd] !== undefined ? " " +  constants.alignMd[alignMd] : ""}}{{constants.alignLg[alignLg] !== undefined ? " " +  constants.alignLg[alignLg] : ""}}{{isReversed ? " g-flex-reverse" : ""}}">

  <slot></slot>


</div>


`
})
export class AppComponent {
  @Input() alignXs: "start" | "center" | "end" | undefined;
  @Input() alignSm: "start" | "center" | "end" | undefined;
  @Input() alignMd: "start" | "center" | "end" | undefined;
  @Input() alignLg: "start" | "center" | "end" | undefined;
  @Input() isReversed: boolean | undefined;
  @Input() children: React.ReactNode;
  title = "FlexRow";
}
