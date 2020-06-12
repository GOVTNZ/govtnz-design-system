import { Component, Input } from "@angular/core";
@Component({
  selector: "g-CaptionXl",
  template: `
    <span class="g-caption-xl">
      <slot></slot>
    </span>
  `
})
export class AppComponent {
  @Input() children: React.ReactNode;
  title = "CaptionXl";
}
