import { Component, Input } from "@angular/core";
@Component({
  selector: "g-FooterLink",
  template: `
    <li class="g-footer-link">
      <a
        class="g-footer-link__a"
        href="{{ href }}"
        rel="{{ rel }}"
        target="{{ target }}"
      >
        <slot></slot>
      </a>
    </li>
  `
})
export class AppComponent {
  @Input() href: string;
  @Input() rel: string | undefined;
  @Input() target: any | undefined;
  @Input() children: React.ReactNode;
  title = "FooterLink";
}
