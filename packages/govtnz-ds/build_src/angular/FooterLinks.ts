import { Component, Input } from "@angular/core";
@Component({
  selector: "g-FooterLinks",
  template: `
    <ul class="g-footer-links">
      <slot></slot>
    </ul>
  `
})
export class AppComponent {
  @Input() children: React.ReactNode;
  title = "FooterLinks";
}
