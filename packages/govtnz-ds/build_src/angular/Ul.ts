import { Component, Input } from "@angular/core";
@Component({
  selector: "g-Ul",
  template: `
<ul class="g-list{{bulleted ? " g-list--bullet" : ""}}{{spacing ? " g-list--spacing" : ""}}">

  <slot></slot>


</ul>


`
})
export class AppComponent {
  @Input() bulleted: boolean | undefined;
  @Input() spacing: boolean | undefined;
  @Input() children: React.ReactNode;
  title = "Ul";
}
