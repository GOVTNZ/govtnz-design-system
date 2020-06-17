import { Component, Input } from "@angular/core";
@Component({
  selector: "g-FileUpload",
  template: `
    <div class="g-fileUpload__form-group">
      <label class="g-fileUpload__label" for="{{ id }}">
        Upload a file
      </label>

      <input
        class="g-fileUpload__input"
        id="{{ id }}"
        name="{{ name }}"
        type="file"
        required="{{ required }}"
        disabled="{{ disabled }}"
        readonly="{{ readOnly }}"
        autofocus="{{ autoFocus }}"
      />
    </div>
  `
})
export class AppComponent {
  @Input() id: string | undefined;
  @Input() required: boolean | undefined;
  @Input() disabled: boolean | undefined;
  @Input() readOnly: boolean | undefined;
  @Input() autoFocus: boolean | undefined;
  @Input() name: string;
  title = "FileUpload";
}
