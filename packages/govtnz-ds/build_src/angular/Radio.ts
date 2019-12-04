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
  @Input() name: string;
  @Input() disabled: boolean | undefined;
  @Input() readOnly: boolean | undefined;
  @Input() autoFocus: boolean | undefined;
  @Input() value: string | undefined;
  @Input() checked: boolean | undefined;
  title = "Radio";
}
