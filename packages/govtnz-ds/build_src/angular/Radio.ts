import { Component, Input } from "@angular/core";
@Component({
  selector: "g-Radio",
  template: `
    <input
      aria-describedby="{{ hintId }}"
      class="g-radios__input"
      id="{{ id }}"
      name="{{ name }}"
      type="radio"
      required="{{ required }}"
      disabled="{{ disabled }}"
      readonly="{{ readOnly }}"
      autofocus="{{ autoFocus }}"
      value="{{ value }}"
      checked="{{ checked }}"
    />
  `
})
export class AppComponent {
  @Input() id: string | undefined;
  @Input() hintId: string | undefined;
  @Input() required: boolean | undefined;
  @Input() disabled: boolean | undefined;
  @Input() readOnly: boolean | undefined;
  @Input() autoFocus: boolean | undefined;
  @Input() name: string;
  @Input() value: string | undefined;
  @Input() checked: boolean | undefined;
  title = "Radio";
}
