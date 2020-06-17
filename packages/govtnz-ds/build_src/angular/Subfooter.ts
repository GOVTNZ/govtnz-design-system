import { Component, Input } from "@angular/core";
@Component({
  selector: "g-Subfooter",
  template: `
    <div class="g-subfooter">
      <slot></slot>
    </div>
  `
})
export class AppComponent {
  @Input() children: React.ReactNode;
  title = "Subfooter";
}
