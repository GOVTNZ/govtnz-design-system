import { Component, Input } from "@angular/core";
@Component({
  selector: "g-InputBlock",
  template: `
<div class="g-inputBlock-form-group{{error ? " g-inputBlock-form-group--error" : ""}}">

  
<label class="g-inputBlock-label" for="{{inputId}}">

    <slot name="label"></slot>
  

</label>


  
    
<div class="g-inputBlock-hint" id="{{hintId}}">

      <slot name="hint"></slot>
    

</div>


  
  
    
<div class="g-inputBlock-error-message" id="{{errorId}}">

      
<span class="g-inputBlock-visually-hidden">
Error: 

</span>


      <slot name="error"></slot>
    

</div>


  
  
<input aria-describedby="{{hintId ?  hintId : ""}}{{errorId ? " " +  errorId : ""}}" class="g-inputBlock-input{{constants.width[width] !== undefined ? " " +  constants.width[width] : ""}}{{error ? " g-inputBlock-input--error" : ""}}" id="{{inputId}}" name="{{name}}" disabled="{{disabled}}" readonly="{{readOnly}}" autofocus="{{autoFocus}}" value="{{value}}" min="{{min}}" max="{{max}}" type="{{type}}" spellcheck="{{spellCheck}}" maxlength="{{maxLength}}" autocomplete="{{autoComplete}}"/>



</div>


`
})
export class AppComponent {
  @Input() error: boolean | undefined;
  @Input() inputId: string | undefined;
  @Input() label: React.ReactNode;
  @Input() hint: React.ReactNode;
  @Input() hintId: string | undefined;
  @Input() errorId: string | undefined;
  @Input() width: "30" | "20" | "10" | "5" | "4" | "3" | "2" | undefined;
  @Input() disabled: boolean | undefined;
  @Input() readOnly: boolean | undefined;
  @Input() autoFocus: boolean | undefined;
  @Input() name: string;
  @Input() value: string | undefined;
  @Input() min: number | undefined;
  @Input() max: number | undefined;
  @Input() type: any;
  @Input() spellCheck: boolean | undefined;
  @Input() maxLength: number | undefined;
  @Input() autoComplete: any;
  title = "InputBlock";
}
