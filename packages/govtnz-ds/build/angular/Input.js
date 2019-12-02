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
        this.title = "Input";
    }
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "width", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "error", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "fakeFocus", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "inputId", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "describedBy", void 0);
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
    ], AppComponent.prototype, "autoFocus", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "value", void 0);
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
            selector: "g-Input",
            template: "\n    <input aria-describedby=\"{{ describedBy }}\" class=\"g-input{{\n      constants.width[width] !== undefined ? \" \" + constants.width[width] : \"\"\n    }}{{ error ? \" g-input--error\" : \"\" }}{{ fakeFocus ? \" :focus\" : \"\" }}\"\n    id=\"{{ inputId }}\" name=\"{{ name }}\" type=\"text\" disabled=\"{{ disabled }}\"\n    readonly=\"{{ readOnly }}\" autofocus=\"{{ autoFocus }}\" value=\"{{ value }}\"\n    spellcheck=\"{{ spellCheck }}\" maxlength=\"{{ maxLength }}\" autocomplete=\"{{\n      autoComplete\n    }}\"/>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=Input.js.map