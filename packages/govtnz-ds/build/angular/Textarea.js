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
        this.title = "Textarea";
    }
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "describedById", void 0);
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
            template: "\n<textarea aria-describedby=\"{{describedById}}\" class=\"g-textarea\" id=\"{{id}}\" name=\"{{name}}\" rows=\"{{rows}}\" disabled=\"{{disabled}}\" readonly=\"{{readOnly}}\" cols=\"{{cols}}\" autofocus=\"{{autoFocus}}\" spellcheck=\"{{spellCheck}}\" autocomplete=\"{{autoComplete}}\" maxlength=\"{{maxLength}}\" value=\"{{value}}\"/>\n\n"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=Textarea.js.map