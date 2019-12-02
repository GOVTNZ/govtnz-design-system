import { Component, Input } from "@angular/core";
@Component({
  selector: "g-Textarea",
  template: `
<textarea aria-describedby="{{describedById}}" class="g-textarea" id="{{id}}" name="{{name}}" rows="{{rows}}" disabled="{{disabled}}" readonly="{{readOnly}}" cols="{{cols}}" autofocus="{{autoFocus}}" spellcheck="{{spellCheck}}" autocomplete="{{autoComplete}}" maxlength="{{maxLength}}" value="{{value}}"/>

`
})
export class AppComponent {
  @Input() id: string | undefined;
  @Input() describedById: string | undefined;
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
