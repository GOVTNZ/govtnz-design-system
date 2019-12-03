import { Component, Input } from "@angular/core";
@Component({
  selector: "g-Checkbox",
  template: `
    <input
      aria-describedby="{{ hintId }}"
      class="g-checkboxes__input"
      id="{{ checkboxId }}"
      type="checkbox"
      name="{{ name }}"
      disabled="{{ disabled }}"
      readonly="{{ readOnly }}"
      autofocus="{{ autoFocus }}"
      value="{{ value }}"
      checked="{{ checked }}"
    />
  `
})
export class AppComponent {
  @Input() checkboxId: string | undefined;
  @Input() hintId: string | undefined;
  @Input() name: string;
  @Input() disabled: boolean | undefined;
  @Input() readOnly: boolean | undefined;
  @Input() autoFocus: boolean | undefined;
  @Input() value: string | undefined;
  @Input() checked: boolean | undefined;
  title = "Checkbox";
}
