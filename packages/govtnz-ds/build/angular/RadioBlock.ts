import { Component, Input } from "@angular/core";
@Component({
  selector: "g-RadioBlock",
  template: `
<div class="g-radios__item{{errorId ? " g-radioBlock-form-group--error" : ""}}">

  
<input aria-describedby="{{hintId}}" class="g-radios__input" id="{{id}}" name="{{name}}" type="radio" disabled="{{disabled}}" readonly="{{readOnly}}" autofocus="{{autoFocus}}" value="{{value}}" checked="{{checked}}"/>

  
<label class="g-radioBlock-label g-radios__label" for="{{id}}">

    <slot name="label"></slot>
  

</label>


  
    
<div class="g-radioBlock-hint g-checkboxes__hint" id="{{hintId}}">

      <slot name="hint"></slot>
    

</div>


  


</div>


`
})
export class AppComponent {
  @Input() errorId: boolean | undefined;
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
  title = "RadioBlock";
}
