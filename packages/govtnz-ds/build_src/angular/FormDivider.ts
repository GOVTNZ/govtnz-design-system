import { Component, Input } from "@angular/core";
@Component({
  selector: "g-FormDivider",
  template: `
    <div class="g-form-divider">
      <slot></slot>
    </div>
  `
})
export class AppComponent {
  @Input() children: React.ReactNode;
  title = "FormDivider";
}
