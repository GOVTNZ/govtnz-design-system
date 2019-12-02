import { Component, Input } from "@angular/core";
@Component({
  selector: "g-DateInput",
  template: `
        
<div class="g-dateInput-form-group{{error ? " g-dateInput-form-group--error" : ""}}">

          
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


                  
<input class="g-dateInput-input g-date-input__input g-dateInput-input--width-2{{error ? " g-dateInput-input--error" : ""}}" id="{{dayId}}" maxlength="2" name="{{name}}" pattern="[0-9]*" type="text" disabled="{{disabled}}" readonly="{{readOnly}}" autofocus="{{autoFocus}}" value="{{value}}" spellcheck="{{spellCheck}}" autocomplete="{{autoComplete}}"/>

                

</div>


              

</div>


              
<div class="g-date-input__item">

                
<div class="g-dateInput-form-group">

                  
<label class="g-dateInput-label g-date-input__label" for="{{monthId}}">

                    Month
                  

</label>


                  
<input class="g-dateInput-input g-date-input__input g-dateInput-input--width-2{{error ? " g-dateInput-input--error" : ""}}" id="{{monthId}}" maxlength="2" name="{{name2}}" pattern="[0-9]*" type="text" disabled="{{disabled2}}" readonly="{{readOnly2}}" autofocus="{{autoFocus2}}" value="{{value2}}" spellcheck="{{spellCheck2}}" autocomplete="{{autoComplete2}}"/>

                

</div>


              

</div>


              
<div class="g-date-input__item">

                
<div class="g-dateInput-form-group">

                  
<label class="g-dateInput-label govuk-date-input__label" for="{{yearId}}">

                    Year
                  

</label>


                  
<input class="g-dateInput-input g-date-input__input g-dateInput-input--width-4{{error ? " g-dateInput-input--error" : ""}}" id="{{yearId}}" maxlength="4" name="{{name3}}" pattern="[0-9]*" type="text" disabled="{{disabled3}}" readonly="{{readOnly3}}" autofocus="{{autoFocus3}}" value="{{value3}}" spellcheck="{{spellCheck3}}" autocomplete="{{autoComplete3}}"/>

                

</div>


              

</div>


            

</div>


          

</fieldset>


        

</div>


      `
})
export class AppComponent {
  @Input() error: boolean | undefined;
  @Input() hintId: string | undefined;
  @Input() errorId: string | undefined;
  @Input() label: React.ReactNode;
  @Input() hint: React.ReactNode;
  @Input() id: string | undefined;
  @Input() dayId: string | undefined;
  @Input() name: string;
  @Input() disabled: boolean | undefined;
  @Input() readOnly: boolean | undefined;
  @Input() autoFocus: boolean | undefined;
  @Input() value: string | undefined;
  @Input() spellCheck: boolean | undefined;
  @Input() autoComplete: any;
  @Input() monthId: string | undefined;
  @Input() name2: string;
  @Input() disabled2: boolean | undefined;
  @Input() readOnly2: boolean | undefined;
  @Input() autoFocus2: boolean | undefined;
  @Input() value2: string | undefined;
  @Input() spellCheck2: boolean | undefined;
  @Input() autoComplete2: any;
  @Input() yearId: string | undefined;
  @Input() name3: string;
  @Input() disabled3: boolean | undefined;
  @Input() readOnly3: boolean | undefined;
  @Input() autoFocus3: boolean | undefined;
  @Input() value3: string | undefined;
  @Input() spellCheck3: boolean | undefined;
  @Input() autoComplete3: any;
  title = "DateInput";
}
