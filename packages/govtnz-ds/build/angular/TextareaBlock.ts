import { Component, Input } from "@angular/core";
@Component({
  selector: "g-TextareaBlock",
  template: `
<div class="g-textareaBlock-form-group">

  
<label class="g-textareaBlock-label" for="{{id}}">

    <slot name="label"></slot>
  

</label>


  
<span class="g-textareaBlock-hint" id="{{hintId}}">

    <slot name="hint"></slot>
  

</span>


  
<textarea aria-describedby="{{hintId}}" class="g-textareaBlock-textarea" id="{{id}}" name="{{name}}" rows="{{rows}}" disabled="{{disabled}}" readonly="{{readOnly}}" cols="{{cols}}" autofocus="{{autoFocus}}" spellcheck="{{spellCheck}}" autocomplete="{{autoComplete}}" maxlength="{{maxLength}}" value="{{value}}"/>



</div>


`
})
export class AppComponent {
  @Input() id: string | undefined;
  @Input() label: React.ReactNode;
  @Input() hintId: string | undefined;
  @Input() hint: React.ReactNode;
  @Input() name: string;
  @Input() disabled: boolean | undefined;
  @Input() readOnly: boolean | undefined;
  @Input() rows: number | undefined;
  @Input() cols: number | undefined;
  @Input() autoFocus: boolean | undefined;
  @Input() spellCheck: boolean | undefined;
  @Input() autoComplete: any;
  @Input() maxLength: number | undefined;
  @Input() value: string | undefined;
  title = "TextareaBlock";
}
