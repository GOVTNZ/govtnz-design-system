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
        this.title = "RadioBlock";
    }
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "hintId", void 0);
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
    ], AppComponent.prototype, "checked", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "hint", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "g-RadioBlock",
            template: "\n    <div class=\"g-radios__item\">\n      <input\n        aria-describedby=\"{{ hintId }}\"\n        class=\"g-radios__input\"\n        id=\"{{ id }}\"\n        name=\"{{ name }}\"\n        type=\"radio\"\n        disabled=\"{{ disabled }}\"\n        readonly=\"{{ readOnly }}\"\n        autofocus=\"{{ autoFocus }}\"\n        value=\"{{ value }}\"\n        checked=\"{{ checked }}\"\n      />\n\n      <label class=\"g-radioBlock-label g-radios__label\" for=\"{{ id }}\">\n        <slot name=\"label\"></slot>\n      </label>\n\n      <div class=\"g-radioBlock-hint g-checkboxes__hint\" id=\"{{ hintId }}\">\n        <slot name=\"hint\"></slot>\n      </div>\n    </div>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=RadioBlock.js.map