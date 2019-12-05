import { Component, Input } from "@angular/core";
@Component({
  selector: "g-CheckboxBlock",
  template: `
<div class="g-checkboxes__item{{errorId ? " g-checkboxBlock-form-group--error" : ""}}">

  
<input aria-describedby="{{hintId}}" class="g-checkboxes__input" id="{{id}}" type="checkbox" disabled="{{disabled}}" readonly="{{readOnly}}" autofocus="{{autoFocus}}" name="{{name}}" value="{{value}}" checked="{{checked}}"/>

  
<label class="g-checkboxBlock-label g-checkboxes__label" for="{{id}}">
<slot name="label"></slot>

</label>


  
    
<div class="g-checkboxBlock-hint g-checkboxes__hint" id="{{hintId}}">

      <slot name="hint"></slot>
    

</div>


  
  
    
<div class="g-checkboxBlock-error-message" id="{{errorId}}">

      
<span class="g-checkboxBlock-visually-hidden">

        Error:
      

</span>


      <slot name="error"></slot>
    

</div>


  


</div>


`
})
export class AppComponent {
  @Input() errorId: string | undefined;
  @Input() id: string | undefined;
  @Input() hintId: string | undefined;
  @Input() disabled: boolean | undefined;
  @Input() readOnly: boolean | undefined;
  @Input() autoFocus: boolean | undefined;
  @Input() name: string;
  @Input() value: string | undefined;
  @Input() checked: boolean | undefined;
  @Input() label: React.ReactNode;
  @Input() hint: React.ReactNode;
  @Input() error: React.ReactNode;
  title = "CheckboxBlock";
}
