import { Component, Input } from "@angular/core";
@Component({
  selector: "g-FieldsetBlock",
  template: `
<div class="g-fieldsetBlock-form-group{{errorId ? " g-fieldsetBlock-form-group--error" : ""}}">

  
<fieldset aria-describedby="{{hintId ?  hintId : ""}}{{errorId ? " " +  errorId : ""}}" class="g-fieldset">

    
<legend class="g-fieldset__legend">

      <slot name="legend"></slot>
    

</legend>


    
      
<div class="g-fieldsetBlock-hint" id="{{hintId}}">

        <slot name="hint"></slot>
      

</div>


    
    
      
<div class="g-fieldsetBlock-error-message" id="{{errorId}}">

        
<span class="g-fieldsetBlock-visually-hidden">

          Error:
        

</span>


        <slot name="error"></slot>
      

</div>


    
    
<div>
<slot></slot>

</div>


  

</fieldset>




</div>


`
})
export class AppComponent {
  @Input() errorId: string | undefined;
  @Input() hintId: string | undefined;
  @Input() legend: React.ReactNode;
  @Input() hint: React.ReactNode;
  @Input() error: React.ReactNode;
  @Input() children: React.ReactNode;
  title = "FieldsetBlock";
}
