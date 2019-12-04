import { Component, Input } from "@angular/core";
@Component({
  selector: "g-SkipLink",
  template: `
    <a
      class="g-skip-link"
      href="{{ href }}"
      rel="{{ rel }}"
      target="{{ target }}"
    >
      Skip to main content
    </a>
  `
})
export class AppComponent {
  @Input() href: string;
  @Input() rel: string | undefined;
  @Input() target: any | undefined;
  title = "SkipLink";
}
