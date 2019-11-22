"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var FPS = 10; // 10 frames-per-second
var MODAL_SELECTOR = ".ReactModal__Content";
var ReactModalBody = /** @class */ (function (_super) {
    __extends(ReactModalBody, _super);
    function ReactModalBody(props) {
        var _this = _super.call(this, props) || this;
        // @ts-ignore
        if (typeof document === "undefined")
            return _this;
        _this.bodyStart = document.createElement("div");
        _this.bodyStart.style.position = "absolute"; // pull out of flow
        _this.bodyStart.setAttribute("tabindex", "0");
        _this.bodyStart.addEventListener("focus", _this.onFocus);
        _this.bodyEnd = _this.bodyStart.cloneNode();
        _this.bodyEnd.addEventListener("focus", _this.onFocus);
        _this.setFocusTrap = _this.setFocusTrap.bind(_this);
        _this.removeFocusTrap = _this.removeFocusTrap.bind(_this);
        return _this;
    }
    ReactModalBody.prototype.componentDidUpdate = function () {
        if (!this.bodyStart || !this.bodyEnd)
            return;
        if (this.props.isOpen) {
            this.setFocusTrap();
        }
        else {
            this.removeFocusTrap();
        }
    };
    ReactModalBody.prototype.setFocusTrap = function () {
        // Place focus trap elements at start/end of <body>
        // so that users who leave react-modal via (ie) CTRL-L
        // and then tab into the page immediately fall into the
        // focus trap and then are moved to the modal.
        if (this.timer)
            clearTimeout(this.timer);
        if (document.body.firstChild !== this.bodyStart) {
            document.body.insertBefore(this.bodyStart, document.body.firstChild);
        }
        if (document.body.lastChild !== this.bodyEnd) {
            document.body.appendChild(this.bodyEnd);
        }
        // keep trying to place traps in case DOM changes while modal is open
        this.timer = setTimeout(this.setFocusTrap, 1000 / FPS);
    };
    ReactModalBody.prototype.removeFocusTrap = function () {
        if (this.timer)
            clearTimeout(this.timer);
        document.body.removeChild(this.bodyStart);
        document.body.removeChild(this.bodyEnd);
    };
    ReactModalBody.prototype.onFocus = function () {
        // FIXME: if this code is merged into React Modal we should move focus using their methods
        var target = document.querySelector(MODAL_SELECTOR);
        if (!target) {
            console.error("Unable to move focus to modal because unable to find modal.");
            return;
        }
        console.info("Focus moved to ", target);
        target.focus();
    };
    ReactModalBody.prototype.render = function () {
        return this.props.children;
    };
    return ReactModalBody;
}(react_1.Component));
exports["default"] = ReactModalBody;
