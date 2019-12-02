import { Component, Input } from "@angular/core";
@Component({
  selector: "g-FooterWrapper",
  template: `
    <footer class="g-footer-wrapper">
      <slot></slot>
    </footer>
  `
})
export class AppComponent {
  @Input() children: React.ReactNode;
  title = "FooterWrapper";
}
