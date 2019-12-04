import { Component, Input } from "@angular/core";
@Component({
  selector: "g-CaptionL",
  template: `
    <span class="g-caption-l">
      <slot></slot>
    </span>
  `
})
export class AppComponent {
  @Input() children: React.ReactNode;
  title = "CaptionL";
}
