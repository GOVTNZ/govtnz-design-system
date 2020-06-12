import { Component, Input } from "@angular/core";
@Component({
  selector: "g-FlexRow",
  template: `
<div class="g-flex-row{{constants.xsVerticalAlign[xsVerticalAlign] !== undefined ? " " +  constants.xsVerticalAlign[xsVerticalAlign] : ""}}{{constants.smVerticalAlign[smVerticalAlign] !== undefined ? " " +  constants.smVerticalAlign[smVerticalAlign] : ""}}{{constants.mdVerticalAlign[mdVerticalAlign] !== undefined ? " " +  constants.mdVerticalAlign[mdVerticalAlign] : ""}}{{constants.lgVerticalAlign[lgVerticalAlign] !== undefined ? " " +  constants.lgVerticalAlign[lgVerticalAlign] : ""}}{{isReversed ? " g-flex-reverse" : ""}}">
   <slot></slot> 

</div>

 `
})
export class AppComponent {
  @Input() xsVerticalAlign: "top" | "middle" | "bottom" | undefined;
  @Input() smVerticalAlign: "top" | "middle" | "bottom" | undefined;
  @Input() mdVerticalAlign: "top" | "middle" | "bottom" | undefined;
  @Input() lgVerticalAlign: "top" | "middle" | "bottom" | undefined;
  @Input() isReversed: boolean | undefined;
  @Input() children: React.ReactNode;
  title = "FlexRow";
}
