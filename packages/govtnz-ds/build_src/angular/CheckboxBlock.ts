import { Component, Input } from "@angular/core";
@Component({
  selector: "g-CheckboxBlock",
  template: `
<div class="g-checkboxes__item{{errorId ? " g-form-group--error" : ""}}">

  
<input aria-describedby="{{hintId}}" class="g-checkboxes__input" id="{{id}}" type="checkbox" required="{{required}}" disabled="{{disabled}}" readonly="{{readOnly}}" autofocus="{{autoFocus}}" name="{{name}}" value="{{value}}" checked="{{checked}}"/>

  
<label class="g-checkboxes__label" for="{{id}}">
<slot name="label"></slot>

</label>


  
    
<div class="g-checkboxes__hint" id="{{hintId}}">

      <slot name="hint"></slot>
    

</div>


  
  
    
<div class="g-error-message" id="{{errorId}}">

      
<span class="g-visually-hidden">

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
  @Input() required: boolean | undefined;
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
