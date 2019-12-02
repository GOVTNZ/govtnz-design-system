"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Textarea";
    }
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "moreDetail", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "moreDetailHint", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "readOnly", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "rows", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "cols", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "autoFocus", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "spellCheck", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "autoComplete", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "maxLength", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "value", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "g-Textarea",
            template: "\n<div class=\"g-textarea-form-group\">\n\n  \n<label class=\"g-textarea-label\" for=\"{{moreDetail}}\">\n\n    Can you provide more detail?\n  \n\n</label>\n\n\n  \n<span class=\"g-textarea-hint\" id=\"{{moreDetailHint}}\">\n\n    Don't include personal or financial information, eg your National Insurance\n    number or credit card details.\n  \n\n</span>\n\n\n  \n<textarea aria-describedby=\"{{moreDetailHint}}\" class=\"g-textarea\" id=\"{{moreDetail}}\" name=\"{{name}}\" rows=\"{{rows}}\" disabled=\"{{disabled}}\" readonly=\"{{readOnly}}\" cols=\"{{cols}}\" autofocus=\"{{autoFocus}}\" spellcheck=\"{{spellCheck}}\" autocomplete=\"{{autoComplete}}\" maxlength=\"{{maxLength}}\" value=\"{{value}}\"/>\n\n\n\n</div>\n\n\n"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=Textarea.js.map