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
        this.title = "FieldsetBlock";
    }
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "hintId", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "errorId", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "legend", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "hint", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "errorId2", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "error", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "children", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "g-FieldsetBlock",
            template: "\n<div class=\"g-fieldsetBlock-form-group\">\n\n  \n<fieldset aria-describedby=\"{{hintId ?  hintId : \"\"}}{{errorId ? \" \" +  errorId : \"\"}}\" class=\"g-fieldset\">\n\n    \n<legend class=\"g-fieldset__legend\">\n\n      <slot name=\"legend\"></slot>\n    \n\n</legend>\n\n\n    \n      \n<div class=\"g-fieldsetBlock-hint\" id=\"{{hintId}}\">\n\n        <slot name=\"hint\"></slot>\n      \n\n</div>\n\n\n    \n    \n      \n<div class=\"g-fieldsetBlock-error-message\" id=\"{{errorId}}\">\n\n        \n<span class=\"g-fieldsetBlock-visually-hidden\">\n\n          Error:\n        \n\n</span>\n\n\n        <slot name=\"error\"></slot>\n      \n\n</div>\n\n\n    \n    \n<div>\n<slot></slot>\n\n</div>\n\n\n  \n\n</fieldset>\n\n\n\n\n</div>\n\n\n"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=FieldsetBlock.js.map