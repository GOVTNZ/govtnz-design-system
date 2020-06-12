import { Component, Input } from "@angular/core";
@Component({
  selector: "g-Fieldset",
  template: `
    <div class="g-form-group">
      <fieldset aria-describedby="{{ hintId }}" class="g-fieldset">
        <slot></slot>
      </fieldset>
    </div>
  `
})
export class AppComponent {
  @Input() hintId: string | undefined;
  @Input() children: React.ReactNode;
  title = "Fieldset";
}
