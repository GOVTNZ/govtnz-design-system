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
        this.title = "MainNavMobileMenu";
    }
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "ariaExpanded", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "isOpen", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "menuContainer", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "children", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "g-MainNavMobileMenu",
            template: "\n<button aria-controls=\"{{menuContainer}}\" aria-expanded=\"{{ariaExpanded ?  ariaExpanded : \"\"}}\" class=\"g-main-nav-mobile-menu{{constants.isOpen[isOpen] !== undefined ? \" \" +  constants.isOpen[isOpen] : \"\"}}\" name=\"{{name}}\" type=\"{{type}}\">\n\n  <slot></slot>\n\n\n</button>\n\n\n"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=MainNavMobileMenu.js.map