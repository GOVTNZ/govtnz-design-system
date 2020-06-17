import { Component, Input } from "@angular/core";
@Component({
  selector: "g-SelectBlock",
  template: `
<div class="{{errorId ? "g-form-group--error" : ""}}">

  
<label class="g-selectBlock-label" for="{{selectId}}">

    <slot name="label"></slot>
  

</label>


  
<select class="g-selectBlock-select{{error ? " g-selectBlock-select--error" : ""}}" id="{{selectId}}" name="{{name}}" required="{{required}}" multiple="{{multiple}}">
Options

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
  @Input() required: boolean | undefined;
  @Input() multiple: boolean | undefined;
  title = "SelectBlock";
}
