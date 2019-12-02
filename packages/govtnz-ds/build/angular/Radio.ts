import { Component, Input } from "@angular/core";
@Component({
  selector: "g-Radio",
  template: `
    <input aria-describedby="{{ hintId }}" class="g-radios__input{{
      fakeFocus ? " :focus" : ""
    }}" id="{{ gov1 }}" name="{{ name }}" type="radio" disabled="{{ disabled }}"
    readonly="{{ readOnly }}" autofocus="{{ autoFocus }}" value="{{ value }}"
    checked="{{ checked }}"/>
  `
})
export class AppComponent {
  @Input() fakeFocus: boolean | undefined;
  @Input() gov1: string | undefined;
  @Input() hintId: string | undefined;
  @Input() name: string;
  @Input() disabled: boolean | undefined;
  @Input() readOnly: boolean | undefined;
  @Input() autoFocus: boolean | undefined;
  @Input() value: string | undefined;
  @Input() checked: boolean | undefined;
  title = "Radio";
}
