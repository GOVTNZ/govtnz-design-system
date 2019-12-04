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
        this.title = "SelectBlock";
    }
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "selectId", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "error", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "multiple", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "children", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "g-SelectBlock",
            template: "\n<div>\n\n        \n<label class=\"g-selectBlock-label\" for=\"{{selectId}}\">\n\n          <slot name=\"label\"></slot>\n        \n\n</label>\n\n\n        \n<select class=\"g-selectBlock-select{{error ? \" g-selectBlock-select--error\" : \"\"}}\" id=\"{{selectId}}\" name=\"{{name}}\" multiple=\"{{multiple}}\">\n<slot></slot>\n\n</select>\n\n\n      \n\n</div>\n\n"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=SelectBlock.js.map