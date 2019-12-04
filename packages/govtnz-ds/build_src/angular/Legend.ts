import { Component, Input } from "@angular/core";
@Component({
  selector: "g-Legend",
  template: `
    <legend class="g-fieldset__legend">
      <slot></slot>
    </legend>
  `
})
export class AppComponent {
  @Input() children: React.ReactNode;
  title = "Legend";
}
