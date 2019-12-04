import { Component, Input } from "@angular/core";
@Component({
  selector: "g-Ol",
  template: `
<ol class="g-ol-list{{numbered ? " g-ol-list--number" : ""}}">
<slot></slot>

</ol>

`
})
export class AppComponent {
  @Input() numbered: boolean | undefined;
  @Input() children: React.ReactNode;
  title = "Ol";
}
