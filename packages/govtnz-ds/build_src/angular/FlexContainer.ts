import { Component, Input } from "@angular/core";
@Component({
  selector: "g-FlexContainer",
  template: `
<div class="{{constants.width[width] !== undefined ?  constants.width[width] : ""}}">
   <slot></slot> 

</div>

 `
})
export class AppComponent {
  @Input() width: "fixed" | "fluid";
  @Input() children: React.ReactNode;
  title = "FlexContainer";
}
