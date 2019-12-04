import { Component, Input } from "@angular/core";
@Component({
  selector: "g-FileUpload",
  template: `
    <div class="g-fileUpload-form-group">
      <label class="g-fileUpload-label" for="{{ fileUpload1 }}">
        Upload a file
      </label>

      <input
        class="g-file-upload"
        id="{{ fileUpload1 }}"
        name="{{ name }}"
        type="file"
        disabled="{{ disabled }}"
        readonly="{{ readOnly }}"
        autofocus="{{ autoFocus }}"
      />
    </div>
  `
})
export class AppComponent {
  @Input() fileUpload1: string | undefined;
  @Input() name: string;
  @Input() disabled: boolean | undefined;
  @Input() readOnly: boolean | undefined;
  @Input() autoFocus: boolean | undefined;
  title = "FileUpload";
}
