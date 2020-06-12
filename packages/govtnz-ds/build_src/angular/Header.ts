import { Component, Input } from "@angular/core";
@Component({
  selector: "g-Header",
  template: `
    <header class="g-header" role="banner">
      <slot></slot>
    </header>
  `
})
export class AppComponent {
  @Input() children: React.ReactNode;
  title = "Header";
}
