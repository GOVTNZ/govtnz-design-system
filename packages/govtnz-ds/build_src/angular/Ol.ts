import { Component, Input } from "@angular/core";
@Component({
  selector: "g-Ol",
  template: `
<ol class="g-list{{numbered ? " g-list--number" : ""}}">
<slot></slot>

</ol>

`
})
export class AppComponent {
  @Input() numbered: boolean | undefined;
  @Input() children: React.ReactNode;
  title = "Ol";
}
