import { Component, Input } from "@angular/core";
@Component({
  selector: "g-CheckboxBlock",
  template: `
    <div class="g-checkboxes__item">
      <input
        aria-describedby="{{ hintId }}"
        class="g-checkboxes__input"
        id="{{ checkboxId }}"
        type="checkbox"
        disabled="{{ disabled }}"
        readonly="{{ readOnly }}"
        autofocus="{{ autoFocus }}"
        name="{{ name }}"
        value="{{ value }}"
        checked="{{ checked }}"
      />

      <label
        class="g-checkboxBlock-label g-checkboxes__label"
        for="{{ checkboxId }}"
      >
        <slot name="label"></slot>
      </label>

      <div class="g-checkboxBlock-hint g-checkboxes__hint" id="{{ hintId }}">
        <slot name="hint"></slot>
      </div>
    </div>
  `
})
export class AppComponent {
  @Input() checkboxId: string | undefined;
  @Input() hintId: string | undefined;
  @Input() disabled: boolean | undefined;
  @Input() readOnly: boolean | undefined;
  @Input() autoFocus: boolean | undefined;
  @Input() name: string;
  @Input() value: string | undefined;
  @Input() checked: boolean | undefined;
  @Input() label: React.ReactNode;
  @Input() hint: React.ReactNode;
  title = "CheckboxBlock";
}
