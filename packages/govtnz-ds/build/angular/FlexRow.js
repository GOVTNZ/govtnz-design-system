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
        this.title = "FlexRow";
    }
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "alignXs", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "alignSm", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "alignMd", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "alignLg", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "isReversed", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "children", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "g-FlexRow",
            template: "\n<div class=\"g-flex-row{{constants.alignXs[alignXs] !== undefined ? \" \" +  constants.alignXs[alignXs] : \"\"}}{{constants.alignSm[alignSm] !== undefined ? \" \" +  constants.alignSm[alignSm] : \"\"}}{{constants.alignMd[alignMd] !== undefined ? \" \" +  constants.alignMd[alignMd] : \"\"}}{{constants.alignLg[alignLg] !== undefined ? \" \" +  constants.alignLg[alignLg] : \"\"}}{{isReversed ? \" g-flex-reverse\" : \"\"}}\">\n\n  <slot></slot>\n\n\n</div>\n\n\n"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=FlexRow.js.map