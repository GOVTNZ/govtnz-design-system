import { Component, Input } from "@angular/core";
@Component({
  selector: "g-P",
  template: `
<p class="{{constants.styleSize[styleSize] !== undefined ?  constants.styleSize[styleSize] : ""}}">
<slot></slot>

</p>

 `
})
export class AppComponent {
  @Input() styleSize: "large" | "medium" | "small" | "x-small";
  @Input() children: React.ReactNode;
  title = "P";
}
