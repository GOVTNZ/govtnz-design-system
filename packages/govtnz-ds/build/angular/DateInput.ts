import { Component, Input } from "@angular/core";
@Component({
  selector: "g-DateInput",
  template: `
<div class="g-dateInput-form-group{{errorId ? " g-dateInput-form-group--error" : ""}}">

  
<fieldset aria-describedby="{{hintId ?  hintId : ""}}{{errorId ? " " +  errorId : ""}}" class="g-fieldset" role="group">

    
<legend class="g-fieldset__legend g-fieldset__legend--xl">

      <slot name="label"></slot>
    

</legend>


    
<span class="g-dateInput-hint" id="{{hintId}}">

      <slot name="hint"></slot>
    

</span>


    
      
<span class="g-dateInput-error-message" id="{{errorId}}">

        
<span class="g-dateInput-visually-hidden">
Error: 

</span>


        <slot name="error"></slot>
      

</span>


    
    
<div class="g-date-input" id="{{id}}">

      
<div class="g-date-input__item">

        
<div class="g-dateInput-form-group">

          
<label class="g-dateInput-label g-date-input__label" for="{{dayId}}">

            Day
          

</label>


          
<input class="g-dateInput-input g-date-input__input g-dateInput-input--width-2{{error ? " g-dateInput-input--error" : ""}}" id="{{dayId}}" maxlength="2" name="{{dayName}}" pattern="[0-9]*" type="text" disabled="{{disabled}}" readonly="{{readOnly}}" autofocus="{{autoFocus}}" value="{{value}}" spellcheck="{{spellCheck}}" autocomplete="{{autoComplete}}"/>

        

</div>


      

</div>


      
<div class="g-date-input__item">

        
<div class="g-dateInput-form-group">

          
<label class="g-dateInput-label g-date-input__label" for="{{monthId}}">

            Month
          

</label>


          
<input class="g-dateInput-input g-date-input__input g-dateInput-input--width-2{{error ? " g-dateInput-input--error" : ""}}" id="{{monthId}}" maxlength="2" name="{{yearName}}" pattern="[0-9]*" type="text" disabled="{{disabled}}" readonly="{{readOnly}}" autofocus="{{autoFocus}}" value="{{value}}" spellcheck="{{spellCheck}}" autocomplete="{{autoComplete}}"/>

        

</div>


      

</div>


      
<div class="g-date-input__item">

        
<div class="g-dateInput-form-group">

          
<label class="g-dateInput-label g-date-input__label" for="{{yearId}}">

            Year
          

</label>


          
<input class="g-dateInput-input g-date-input__input g-dateInput-input--width-4{{error ? " g-dateInput-input--error" : ""}}" id="{{yearId}}" maxlength="4" name="{{yearName}}" pattern="[0-9]*" type="text" disabled="{{disabled}}" readonly="{{readOnly}}" autofocus="{{autoFocus}}" value="{{value}}" spellcheck="{{spellCheck}}" autocomplete="{{autoComplete}}"/>

        

</div>


      

</div>


    

</div>


  

</fieldset>




</div>


`
})
export class AppComponent {
  @Input() errorId: string | undefined;
  @Input() hintId: string | undefined;
  @Input() label: React.ReactNode;
  @Input() hint: React.ReactNode;
  @Input() error: boolean | undefined;
  @Input() id: string | undefined;
  @Input() dayId: string | undefined;
  @Input() disabled: boolean | undefined;
  @Input() readOnly: boolean | undefined;
  @Input() autoFocus: boolean | undefined;
  @Input() dayName: string;
  @Input() value: string | undefined;
  @Input() spellCheck: boolean | undefined;
  @Input() autoComplete: any;
  @Input() monthId: string | undefined;
  @Input() yearName: string;
  @Input() yearId: string | undefined;
  title = "DateInput";
}
