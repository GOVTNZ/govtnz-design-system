import { Component, Input } from "@angular/core";
@Component({
  selector: "g-Button",
  template: `
<button class="g-button{{disabled ? " g-button--disabled" : ""}}{{constants.level[level] !== undefined ? " " +  constants.level[level] : ""}}" disabled="{{disabled}}" type="{{type}}" name="{{name}}">
   <slot></slot> 

</button>

 `
})
export class AppComponent {
  @Input() disabled: boolean | undefined;
  @Input() level: "secondary" | "warning";
  @Input() name: string | undefined;
  @Input() type: any | undefined;
  @Input() children: React.ReactNode;
  title = "Button";
}
