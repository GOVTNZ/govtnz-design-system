import { Component, Input } from "@angular/core";
@Component({
  selector: "g-input",
  template: `
    <input class="{{ hasError ? "error" : "" }}" disabled="{{ disabled }}"
    readonly="{{ readOnly }}" autofocus="{{ autoFocus }}" name="{{ name }}"
    value="{{ value }}" min="{{ min }}" max="{{ max }}" type="{{ type }}"
    spellcheck="{{ spellCheck }}" maxlength="{{ maxLength }}" autocomplete="{{
      autoComplete
    }}"/>
  `
})
export class AppComponent {
  @Input() hasError: boolean;
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
  title = "input";
}
