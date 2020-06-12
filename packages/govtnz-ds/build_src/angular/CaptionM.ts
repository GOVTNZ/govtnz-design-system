import { Component, Input } from "@angular/core";
@Component({
  selector: "g-CaptionM",
  template: `
    <span class="g-caption-m">
      <slot></slot>
    </span>
  `
})
export class AppComponent {
  @Input() children: React.ReactNode;
  title = "CaptionM";
}
