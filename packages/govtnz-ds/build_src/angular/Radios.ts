import { Component, Input } from "@angular/core";
@Component({
  selector: "g-Radios",
  template: `
<div class="g-radios{{inline ? " g-radios--inline" : ""}}">
   <slot></slot> 

</div>

 `
})
export class AppComponent {
  @Input() inline: boolean | undefined;
  @Input() children: React.ReactNode;
  title = "Radios";
}
