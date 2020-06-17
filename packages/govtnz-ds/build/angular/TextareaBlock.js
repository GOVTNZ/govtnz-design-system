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
        this.title = "TextareaBlock";
    }
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "errorId", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "hintId", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "hint", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "error", void 0);
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
            selector: "g-TextareaBlock",
            template: "\n<div class=\"g-textareaBlock-form-group{{errorId ? \" g-textareaBlock-form-group--error\" : \"\"}}\">\n\n  \n<label class=\"g-textareaBlock-label\" for=\"{{id}}\">\n\n    <slot name=\"label\"></slot>\n  \n\n</label>\n\n\n  \n    \n<div class=\"g-textareaBlock-hint\" id=\"{{hintId}}\">\n\n      <slot name=\"hint\"></slot>\n    \n\n</div>\n\n\n  \n  \n    \n<div class=\"g-textareaBlock-error-message\" id=\"{{errorId}}\">\n\n      \n<span class=\"g-textareaBlock-visually-hidden\">\n\n        Error:\n      \n\n</span>\n\n\n      <slot name=\"error\"></slot>\n    \n\n</div>\n\n\n  \n  \n<textarea aria-describedby=\"{{hintId ?  hintId : \"\"}}{{errorId ? \" \" +  errorId : \"\"}}\" class=\"g-textareaBlock-textarea\" id=\"{{id}}\" name=\"{{name}}\" rows=\"{{rows}}\" disabled=\"{{disabled}}\" readonly=\"{{readOnly}}\" cols=\"{{cols}}\" autofocus=\"{{autoFocus}}\" spellcheck=\"{{spellCheck}}\" autocomplete=\"{{autoComplete}}\" maxlength=\"{{maxLength}}\" value=\"{{value}}\"/>\n\n\n\n</div>\n\n\n"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=TextareaBlock.js.map