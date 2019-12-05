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
        this.title = "InputBlock";
    }
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "error", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "inputId", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "hint", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "hintId", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "errorId", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "width", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "readOnly", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "autoFocus", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "min", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "max", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "spellCheck", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "maxLength", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "autoComplete", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "g-InputBlock",
            template: "\n<div class=\"g-inputBlock-form-group{{error ? \" g-inputBlock-form-group--error\" : \"\"}}\">\n\n  \n<label class=\"g-inputBlock-label\" for=\"{{inputId}}\">\n\n    <slot name=\"label\"></slot>\n  \n\n</label>\n\n\n  \n    \n<div class=\"g-inputBlock-hint\" id=\"{{hintId}}\">\n\n      <slot name=\"hint\"></slot>\n    \n\n</div>\n\n\n  \n  \n    \n<div class=\"g-inputBlock-error-message\" id=\"{{errorId}}\">\n\n      \n<span class=\"g-inputBlock-visually-hidden\">\nError: \n\n</span>\n\n\n      <slot name=\"error\"></slot>\n    \n\n</div>\n\n\n  \n  \n<input aria-describedby=\"{{hintId ?  hintId : \"\"}}{{errorId ? \" \" +  errorId : \"\"}}\" class=\"g-inputBlock-input{{constants.width[width] !== undefined ? \" \" +  constants.width[width] : \"\"}}{{error ? \" g-inputBlock-input--error\" : \"\"}}\" id=\"{{inputId}}\" name=\"{{name}}\" disabled=\"{{disabled}}\" readonly=\"{{readOnly}}\" autofocus=\"{{autoFocus}}\" value=\"{{value}}\" min=\"{{min}}\" max=\"{{max}}\" type=\"{{type}}\" spellcheck=\"{{spellCheck}}\" maxlength=\"{{maxLength}}\" autocomplete=\"{{autoComplete}}\"/>\n\n\n\n</div>\n\n\n"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=InputBlock.js.map