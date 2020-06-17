import { Component, Input } from "@angular/core";
@Component({
  selector: "g-Input",
  template: `
    <input aria-describedby="{{ describedBy }}" class="g-input{{
      constants.width[width] !== undefined ? " " + constants.width[width] : ""
    }}{{ error ? " g-input--error" : "" }}" id="{{ id }}" name="{{ name }}"
    type="text" required="{{ required }}" disabled="{{ disabled }}" readonly="{{
      readOnly
    }}" autofocus="{{ autoFocus }}" value="{{ value }}" spellcheck="{{
      spellCheck
    }}" maxlength="{{ maxLength }}" autocomplete="{{ autoComplete }}"/>
  `
})
export class AppComponent {
  @Input() width: "30" | "20" | "10" | "5" | "4" | "3" | "2" | undefined;
  @Input() error: boolean | undefined;
  @Input() id: string | undefined;
  @Input() describedBy: string | undefined;
  @Input() required: boolean | undefined;
  @Input() disabled: boolean | undefined;
  @Input() readOnly: boolean | undefined;
  @Input() autoFocus: boolean | undefined;
  @Input() name: string;
  @Input() value: string | undefined;
  @Input() spellCheck: boolean | undefined;
  @Input() maxLength: number | undefined;
  @Input() autoComplete: any;
  title = "Input";
}
