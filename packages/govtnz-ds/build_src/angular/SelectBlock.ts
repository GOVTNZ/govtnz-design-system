import { Component, Input } from "@angular/core";
@Component({
  selector: "g-SelectBlock",
  template: `
<div class="{{errorId ? "g-form-group--error" : ""}}">
   
<label class="g-selectBlock-label" for="{{selectId}}">
     <slot name="label"></slot>   

</label>

   
<select class="g-selectBlock-select{{error ? " g-selectBlock-select--error" : ""}}" id="{{selectId}}" name="{{name}}" multiple="{{multiple}}">
<slot></slot>

</select>

 

</div>

 `
})
export class AppComponent {
  @Input() errorId: boolean | undefined;
  @Input() selectId: string | undefined;
  @Input() label: React.ReactNode;
  @Input() error: boolean;
  @Input() name: string;
  @Input() multiple: boolean | undefined;
  @Input() children: React.ReactNode;
  title = "SelectBlock";
}
