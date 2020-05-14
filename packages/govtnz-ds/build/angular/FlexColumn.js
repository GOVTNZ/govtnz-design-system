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
        this.title = "FlexColumn";
    }
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "xs", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "sm", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "md", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "lg", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "xsOffset", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "smOffset", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "mdOffset", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "lgOffset", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "isReversed", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "children", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "g-FlexColumn",
            template: "\n<div class=\"g-flex-col{{constants.xs[xs] !== undefined ? \" \" +  constants.xs[xs] : \"\"}}{{constants.sm[sm] !== undefined ? \" \" +  constants.sm[sm] : \"\"}}{{constants.md[md] !== undefined ? \" \" +  constants.md[md] : \"\"}}{{constants.lg[lg] !== undefined ? \" \" +  constants.lg[lg] : \"\"}}{{constants.xsOffset[xsOffset] !== undefined ? \" \" +  constants.xsOffset[xsOffset] : \"\"}}{{constants.smOffset[smOffset] !== undefined ? \" \" +  constants.smOffset[smOffset] : \"\"}}{{constants.mdOffset[mdOffset] !== undefined ? \" \" +  constants.mdOffset[mdOffset] : \"\"}}{{constants.lgOffset[lgOffset] !== undefined ? \" \" +  constants.lgOffset[lgOffset] : \"\"}}{{isReversed ? \" g-flex-reverse\" : \"\"}}\">\n\n  <slot></slot>\n\n\n</div>\n\n\n"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=FlexColumn.js.map