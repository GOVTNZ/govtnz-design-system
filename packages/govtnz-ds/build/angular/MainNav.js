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
        this.title = "MainNav";
    }
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "isOpen", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "button", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "children", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "g-MainNav",
            template: "\n<nav aria-label=\"Main\" class=\"g-main-nav\" role=\"navigation\">\n\n  \n<button aria-controls=\"{{id}}\" aria-expanded=\"{{isOpen ?  isOpen : \"\"}}\" class=\"g-main-nav__button{{constants.isOpen[isOpen] !== undefined ? \" \" +  constants.isOpen[isOpen] : \"\"}}\" name=\"{{name}}\" type=\"{{type}}\">\n\n    <slot name=\"button\"></slot>\n    \n<svg class=\"g-main-nav__button__icon\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\">\n\n      \n<path d=\"M7.992 9.55l5.6-5.6a1 1 0 0 1 1.415 0l.688.689a1 1 0 0 1 0 1.414L8.7 13.049a1 1 0 0 1-1.414 0L.29 6.053a1 1 0 0 1 0-1.414l.689-.689a1 1 0 0 1 1.414 0l5.6 5.6z\" fill=\"currentColor\" fill-rule=\"nonzero\"/>\n\n    \n\n</svg>\n\n\n  \n\n</button>\n\n\n\n  \n<div id=\"{{id}}\">\n\n    \n<ul class=\"g-main-nav__ul{{constants.isOpen[isOpen] !== undefined ? \" \" +  constants.isOpen[isOpen] : \"\"}}\">\n\n      <slot></slot>\n    \n\n</ul>\n\n\n  \n\n</div>\n\n\n\n\n</nav>\n\n\n"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=MainNav.js.map