import { Component, Input } from "@angular/core";
@Component({
  selector: "g-RadioBlock",
  template: `
    <div class="g-radios__item">
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

      <label class="g-radios__label" for="{{ id }}">
        <slot name="label"></slot>
      </label>

      <div class="g-radios__hint" id="{{ hintId }}">
        <slot name="hint"></slot>
      </div>
    </div>
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
  @Input() label: React.ReactNode;
  @Input() hint: React.ReactNode;
  title = "RadioBlock";
}
