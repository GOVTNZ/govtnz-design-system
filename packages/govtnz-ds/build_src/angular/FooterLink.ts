import { Component, Input } from "@angular/core";
@Component({
  selector: "g-FooterLink",
  template: `
    <a
      class="g-footer-link"
      href="{{ href }}"
      rel="{{ rel }}"
      target="{{ target }}"
    >
      <slot></slot>
    </a>
  `
})
export class AppComponent {
  @Input() href: string;
  @Input() rel: string | undefined;
  @Input() target: any | undefined;
  @Input() children: React.ReactNode;
  title = "FooterLink";
}
