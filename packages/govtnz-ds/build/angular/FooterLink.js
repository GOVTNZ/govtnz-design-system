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
        this.title = "FooterLink";
    }
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "href", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "rel", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "target", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "children", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "g-FooterLink",
            template: "\n    <a\n      class=\"g-footer-link\"\n      href=\"{{ href }}\"\n      rel=\"{{ rel }}\"\n      target=\"{{ target }}\"\n    >\n      <slot></slot>\n    </a>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=FooterLink.js.map