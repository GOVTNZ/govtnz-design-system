import { Component, Input } from "@angular/core";
@Component({
  selector: "g-Footer",
  template: `
    <footer class="g-footer" role="contentinfo">
      <slot></slot>
    </footer>
  `
})
export class AppComponent {
  @Input() children: React.ReactNode;
  title = "Footer";
}
