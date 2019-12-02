import { Component, Input } from "@angular/core";
@Component({
  selector: "g-RadioBlock",
  template: `
    <div class="g-radios__item">
      <input aria-describedby="{{ hintId }}" class="g-radios__input{{
        fakeFocus ? " :focus" : ""
      }}" id="{{ radioId }}" name="{{ name }}" type="radio" disabled="{{
        disabled
      }}" readonly="{{ readOnly }}" autofocus="{{ autoFocus }}" value="{{
        value
      }}" checked="{{ checked }}"/>

      <label class="g-radioBlock-label g-radios__label" for="{{ radioId }}">
        <slot name="label"></slot>
      </label>
    </div>
  `
})
export class AppComponent {
  @Input() fakeFocus: boolean | undefined;
  @Input() radioId: string | undefined;
  @Input() hintId: string | undefined;
  @Input() name: string;
  @Input() disabled: boolean | undefined;
  @Input() readOnly: boolean | undefined;
  @Input() autoFocus: boolean | undefined;
  @Input() value: string | undefined;
  @Input() checked: boolean | undefined;
  @Input() label: React.ReactNode;
  title = "RadioBlock";
}
