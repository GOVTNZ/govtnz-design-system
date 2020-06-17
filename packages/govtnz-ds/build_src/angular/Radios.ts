import { Component, Input } from "@angular/core";
@Component({
  selector: "g-Radios",
  template: `
<div class="g-radios{{inline ? " g-radios--inline" : ""}}{{big ? " g-radios--big" : ""}}">

  <slot></slot>


</div>


`
})
export class AppComponent {
  @Input() inline: boolean | undefined;
  @Input() big: boolean | undefined;
  @Input() children: React.ReactNode;
  title = "Radios";
}
