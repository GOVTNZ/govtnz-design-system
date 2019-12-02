import { Component, Input } from "@angular/core";
@Component({
  selector: "g-Textarea",
  template: `
<div class="g-textarea-form-group">

  
<label class="g-textarea-label" for="{{moreDetail}}">

    Can you provide more detail?
  

</label>


  
<span class="g-textarea-hint" id="{{moreDetailHint}}">

    Don't include personal or financial information, eg your National Insurance
    number or credit card details.
  

</span>


  
<textarea aria-describedby="{{moreDetailHint}}" class="g-textarea" id="{{moreDetail}}" name="{{name}}" rows="{{rows}}" disabled="{{disabled}}" readonly="{{readOnly}}" cols="{{cols}}" autofocus="{{autoFocus}}" spellcheck="{{spellCheck}}" autocomplete="{{autoComplete}}" maxlength="{{maxLength}}" value="{{value}}"/>



</div>


`
})
export class AppComponent {
  @Input() moreDetail: string | undefined;
  @Input() moreDetailHint: string | undefined;
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
  title = "Textarea";
}
