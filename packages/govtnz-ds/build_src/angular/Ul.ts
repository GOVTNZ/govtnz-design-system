import { Component, Input } from "@angular/core";
@Component({
  selector: "g-Ul",
  template: `
<ul class="g-list{{bulleted ? " g-list--bullet" : ""}}">

  <slot></slot>


</ul>


`
})
export class AppComponent {
  @Input() bulleted: boolean | undefined;
  @Input() children: React.ReactNode;
  title = "Ul";
}
