import { Component, Input } from "@angular/core";
@Component({
  selector: "g-Checkbox",
  template: `
    <input
      aria-describedby="{{ hintId }}"
      class="g-checkboxes__input"
      id="{{ id }}"
      type="checkbox"
      disabled="{{ disabled }}"
      readonly="{{ readOnly }}"
      autofocus="{{ autoFocus }}"
      name="{{ name }}"
      value="{{ value }}"
      checked="{{ checked }}"
    />
  `
})
export class AppComponent {
  @Input() id: string | undefined;
  @Input() hintId: string | undefined;
  @Input() disabled: boolean | undefined;
  @Input() readOnly: boolean | undefined;
  @Input() autoFocus: boolean | undefined;
  @Input() name: string;
  @Input() value: string | undefined;
  @Input() checked: boolean | undefined;
  title = "Checkbox";
}
