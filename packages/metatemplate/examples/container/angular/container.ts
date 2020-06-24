import { Component, Input } from "@angular/core";
@Component({
  selector: "g-container",
  template: `
<div class="{{constants.width[width] !== undefined ?  constants.width[width] : ""}}">

  <slot></slot>


</div>


`
})
export class AppComponent {
  @Input() width: "fixed" | "fluid";
  @Input() children: React.ReactNode;
  title = "container";
}
