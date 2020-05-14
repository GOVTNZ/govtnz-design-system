"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "DateInput";
    }
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "errorId", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "hintId", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "hint", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "error", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "dayId", void 0);
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
    ], AppComponent.prototype, "dayName", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "spellCheck", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "autoComplete", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "monthId", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "yearName", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "value2", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "yearId", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "value3", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "g-DateInput",
            template: "\n<div class=\"g-dateInput-form-group{{errorId ? \" g-dateInput-form-group--error\" : \"\"}}\">\n\n  \n<fieldset aria-describedby=\"{{hintId ?  hintId : \"\"}}{{errorId ? \" \" +  errorId : \"\"}}\" class=\"g-fieldset\" role=\"group\">\n\n    \n<legend class=\"g-fieldset__legend g-fieldset__legend--xl\">\n\n      <slot name=\"label\"></slot>\n    \n\n</legend>\n\n\n    \n<span class=\"g-dateInput-hint\" id=\"{{hintId}}\">\n\n      <slot name=\"hint\"></slot>\n    \n\n</span>\n\n\n    \n      \n<span class=\"g-dateInput-error-message\" id=\"{{errorId}}\">\n\n        \n<span class=\"g-dateInput-visually-hidden\">\nError: \n\n</span>\n\n\n        <slot name=\"error\"></slot>\n      \n\n</span>\n\n\n    \n    \n<div class=\"g-date-input\" id=\"{{id}}\">\n\n      \n<div class=\"g-date-input__item\">\n\n        \n<div class=\"g-dateInput-form-group\">\n\n          \n<label class=\"g-dateInput-label g-date-input__label\" for=\"{{dayId}}\">\n\n            Day\n          \n\n</label>\n\n\n          \n<input class=\"g-dateInput-input g-date-input__input g-dateInput-input--width-2{{error ? \" g-dateInput-input--error\" : \"\"}}\" id=\"{{dayId}}\" maxlength=\"2\" name=\"{{dayName}}\" pattern=\"[0-9]*\" type=\"text\" value=\"{{value}}\" disabled=\"{{disabled}}\" readonly=\"{{readOnly}}\" autofocus=\"{{autoFocus}}\" spellcheck=\"{{spellCheck}}\" autocomplete=\"{{autoComplete}}\"/>\n\n        \n\n</div>\n\n\n      \n\n</div>\n\n\n      \n<div class=\"g-date-input__item\">\n\n        \n<div class=\"g-dateInput-form-group\">\n\n          \n<label class=\"g-dateInput-label g-date-input__label\" for=\"{{monthId}}\">\n\n            Month\n          \n\n</label>\n\n\n          \n<input class=\"g-dateInput-input g-date-input__input g-dateInput-input--width-2{{error ? \" g-dateInput-input--error\" : \"\"}}\" id=\"{{monthId}}\" maxlength=\"2\" name=\"{{yearName}}\" pattern=\"[0-9]*\" type=\"text\" value=\"{{value2}}\" disabled=\"{{disabled}}\" readonly=\"{{readOnly}}\" autofocus=\"{{autoFocus}}\" spellcheck=\"{{spellCheck}}\" autocomplete=\"{{autoComplete}}\"/>\n\n        \n\n</div>\n\n\n      \n\n</div>\n\n\n      \n<div class=\"g-date-input__item\">\n\n        \n<div class=\"g-dateInput-form-group\">\n\n          \n<label class=\"g-dateInput-label g-date-input__label\" for=\"{{yearId}}\">\n\n            Year\n          \n\n</label>\n\n\n          \n<input class=\"g-dateInput-input g-date-input__input g-dateInput-input--width-4{{error ? \" g-dateInput-input--error\" : \"\"}}\" id=\"{{yearId}}\" maxlength=\"4\" name=\"{{yearName}}\" pattern=\"[0-9]*\" type=\"text\" value=\"{{value3}}\" disabled=\"{{disabled}}\" readonly=\"{{readOnly}}\" autofocus=\"{{autoFocus}}\" spellcheck=\"{{spellCheck}}\" autocomplete=\"{{autoComplete}}\"/>\n\n        \n\n</div>\n\n\n      \n\n</div>\n\n\n    \n\n</div>\n\n\n  \n\n</fieldset>\n\n\n\n\n</div>\n\n\n"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=DateInput.js.map