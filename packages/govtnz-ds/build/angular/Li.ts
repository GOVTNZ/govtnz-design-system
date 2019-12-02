import { Component, Input } from "@angular/core";
@Component({
  selector: "g-Li",
  template: `
    <li>
      <slot></slot>
    </li>
  `
})
export class AppComponent {
  @Input() children: React.ReactNode;
  title = "Li";
}
