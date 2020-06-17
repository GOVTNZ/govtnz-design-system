"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var FooterStandard = function FooterStandard(_ref) {
  var href = _ref.href,
      rel = _ref.rel,
      target = _ref.target,
      onClick = _ref.onClick,
      label1 = _ref.label1,
      label2 = _ref.label2,
      label3 = _ref.label3,
      src = _ref.src,
      width = _ref.width,
      height = _ref.height,
      srcSet = _ref.srcSet,
      crossOrigin = _ref.crossOrigin,
      copyrightYear = _ref.copyrightYear;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-footer__standard"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-flex-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-flex-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-flex-col g-flex-col-xs-12 g-flex-col-sm-10 g-flex-col-md-10 g-flex-col-lg-10"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-footer__standard-item"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "g-footer__standard-inline-list"
  }, /*#__PURE__*/_react["default"].createElement("li", {
    className: "g-footer__standard-inline-list-item"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "g-footer__standard-link",
    href: href,
    rel: rel,
    target: target,
    onClick: onClick
  }, label1 !== undefined ? label1 : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Contact"))), /*#__PURE__*/_react["default"].createElement("li", {
    className: "g-footer__standard-inline-list-item"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "g-footer__standard-link",
    href: href,
    rel: rel,
    target: target,
    onClick: onClick
  }, label2 !== undefined ? label2 : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Privacy"))), /*#__PURE__*/_react["default"].createElement("li", {
    className: "g-footer__standard-inline-list-item"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "g-footer__standard-link",
    href: href,
    rel: rel,
    target: target,
    onClick: onClick
  }, label3 !== undefined ? label3 : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Copyright"))))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-flex-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-flex-col g-flex-col-xs-12 g-flex-col-sm-8 g-flex-col-md-10 g-flex-col-lg-9"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "g-footer__standard-link--plain",
    href: href,
    rel: rel,
    target: target,
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "g-footer-visually-hidden"
  }, "New Zealand Government"), /*#__PURE__*/_react["default"].createElement("svg", {
    className: "g-footer__icon-govt-logo",
    focusable: "false",
    height: "24",
    role: "presentation",
    width: "230",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 22.2s28.9-3.3 56.2-3.3C84 19 113 22.2 113 22.2v1.1s-29.2-3-57-3c-27.2 0-56.1 3-56.1 3v-1.1zm11.1-5.3H8.6L4.2 8l-2-4.5h-.1L2.3 8V17h-.9c-1 0-1.4-1-1.4-2.2V.2h2.7l4.7 9.2c.7 1.4 1.5 3.5 1.6 4h.1l-.2-5V.2H11V17zM52.5 15l-.6 2H42v-1.8l6.8-10.6 1.2-1.8-2 .1h-5.6l.5-2h9.6v2l-6.6 10.5-1 1.6h7.6zm76.3.5a9.6 9.6 0 0 1-4.9 1.3c-2.2 0-4-.8-5.3-2.2-1.3-1.6-1.9-3.6-1.9-6.3 0-2.3 1-5 2.9-6.5 1.2-1 2.5-1.4 4.2-1.4a7 7 0 0 1 4.7 1.6l-1.1 1.5a5.7 5.7 0 0 0-3.6-1.3c-1.6 0-2.8.7-3.6 2.2-.5 1-.9 2-.9 4 0 2.3.4 4 1.2 5 .7 1 2.2 1.6 3.6 1.6a5 5 0 0 0 2.4-.7V9.7h-3l-.4-2h5.7v7.9zm12.1-4.9c0 3.9-2 6.3-5.2 6.3-3.3 0-5.3-2.5-5.3-6.4 0-4 2-6.4 5.2-6.4 3.6 0 5.3 2.9 5.3 6.5zm-2.5.1c0-3.7-1-4.9-2.8-4.9-2 0-2.7 1.4-2.7 4.5 0 3.6 1 4.9 2.8 4.9 1.7 0 2.7-1.3 2.7-4.5zM152 4.6l-4.4 12.2h-2l-4.4-12.2 2.3-.4 2.4 7.4.7 2.6.8-2.7 2.3-7h2.3zm10.2 6.5h-7.4v.3c0 1 .1 1.8.5 2.4.6 1 1.6 1.4 2.8 1.4 1.1 0 2-.4 3-1.2l.8 1.4a6.2 6.2 0 0 1-4.2 1.5c-3.3 0-5.4-2.4-5.4-6.4 0-2 .4-3.4 1.5-4.7 1-1.1 2.1-1.6 3.6-1.6 1.3 0 2.4.4 3.3 1.3 1 1 1.4 2.4 1.5 5.2v.4zm-2.4-1.7c0-1.1-.2-2-.7-2.7a2.2 2.2 0 0 0-1.8-.8c-1.6 0-2.5 1.3-2.5 3.5h5zm10.4-5.1l-.8 2.2a1.8 1.8 0 0 0-.6-.1 2.5 2.5 0 0 0-2.5 2.5v7.8h-2.2v-9c0-1.4-.2-2.2-.5-3l2.2-.5c.2.5.4 1.3.4 1.9v.2c1-1.4 2-2.1 3.3-2.1h.7zm10.6 12.4h-2.2V8.5c0-1 0-1.5-.4-1.9-.2-.3-.6-.4-1.2-.4-.9 0-2.2.6-3 1.5v9h-2.2v-9c0-1.5-.1-2-.4-3l2-.5c.4.6.5 1.1.5 1.9.7-.6 1-1 1.5-1.2.7-.4 1.5-.6 2.3-.6 1.3 0 2.4.6 2.8 1.7.2.4.3 1 .3 1.5v9.2zm17.4 0H196V8c0-1.4-.4-1.9-1.4-1.9-1.1 0-2 .8-2.9 1.7v8.9h-2.1V8c0-1.3-.4-1.8-1.5-1.8-.9 0-1.8.4-2.8 1.4v9H183V7.9c0-1.7-.1-2.2-.4-3l2-.6c.3.5.4 1 .4 1.7a5 5 0 0 1 3.5-1.7c1 0 2.2.6 2.8 2 1.2-1.4 2.5-2 3.7-2 1.9 0 3.1 1.2 3.1 3.4v9zm11.6-5.6h-7.4v.3c0 1 .2 1.8.5 2.4.6 1 1.6 1.4 2.8 1.4 1.1 0 2-.4 3-1.2l.8 1.4a6.2 6.2 0 0 1-4.2 1.5c-3.3 0-5.4-2.4-5.4-6.4 0-2 .4-3.4 1.5-4.7 1-1.1 2.1-1.6 3.6-1.6 1.4 0 2.5.4 3.3 1.3 1 1 1.4 2.4 1.5 5.2v.4zm-2.3-1.7c0-1.1-.3-2-.8-2.7-.4-.5-1-.8-1.7-.8-1.7 0-2.6 1.3-2.6 3.5h5zm13.2 7.3h-2.2V8.5c0-1 0-1.5-.4-1.9-.2-.3-.6-.4-1.2-.4-.9 0-2.2.6-3 1.5v9h-2.2v-9c0-1.5-.1-2-.5-3l2.2-.5c.2.6.4 1.1.4 1.9.7-.6 1-1 1.5-1.2.7-.4 1.5-.6 2.3-.6 1.3 0 2.4.6 2.8 1.7.2.4.3 1 .3 1.5v9.2zM229 4.6l-.6 1.5h-2.4v7.3c0 1.5.4 2 1.6 2 .4 0 .7-.1 1.1-.3l.3 1.4a4.8 4.8 0 0 1-2.2.5c-.8 0-1.7-.2-2-.6-.6-.5-1-.7-1-2.5V6.1h-1.4V4.6h1.4c0-1 0-2.2.2-3.1l2.3-.6c-.1 1-.3 2.4-.3 3.7h3zM22.6 11h-7.4v.3c0 1 .2 1.8.5 2.4.7 1 1.7 1.4 2.8 1.4 1.2 0 2.1-.4 3-1.1l.9 1.3a6.2 6.2 0 0 1-4.2 1.5c-3.4 0-5.5-2.4-5.5-6.4 0-2 .5-3.5 1.5-4.7 1-1.1 2.2-1.7 3.7-1.7 1.3 0 2.4.5 3.3 1.3 1 1.1 1.4 2.5 1.4 5.3v.4zm-2.3-1.7c0-1.1-.3-2.1-.7-2.7-.4-.5-1-.9-1.8-.9-1.7 0-2.5 1.4-2.5 3.6h5zm19.1-4.9L36 16.8H34L32 10.2l-.8-3-.7 2.8-1.8 6.8h-2.2L23.3 4.6l2.3-.3L27 11l.7 3 .6-2.8 1.8-6.8h2.3l1.7 6.6.7 3h.1l.6-3L37 4.6h2.3zM62 11.1h-7.4v.3c0 1 .2 1.8.6 2.4.6 1 1.6 1.4 2.7 1.4 1.2 0 2.2-.4 3-1.1l.9 1.3a6.2 6.2 0 0 1-4.2 1.5c-3.4 0-5.4-2.4-5.4-6.4 0-2 .4-3.5 1.4-4.7 1-1.1 2.2-1.7 3.7-1.7 1.3 0 2.4.5 3.3 1.3 1 1.1 1.4 2.5 1.4 5.3v.4zm-2.3-1.7c0-1.1-.2-2.1-.7-2.7-.4-.5-1-.9-1.8-.9-1.7 0-2.5 1.4-2.5 3.6h5zm13.8 6.3l-1.1 1.5c-.8-.3-1.4-1-1.7-1.8-.3.4-1.3 1.6-3.4 1.6-2.4 0-4-1.2-4-3.5 0-2.8 2.3-4.3 6.3-4.3h.8v-.8c0-1.5-.2-2.4-1.9-2.4-1.3 0-2.7.6-3.7 1.4l-1-1.6c1.1-.7 2.7-1.6 5-1.6 1.8 0 3.1.6 3.6 1.9.2.5.2 1 .2 2.1v4.5c0 1.7 0 2.4 1 3zm-3.1-5h-.8c-1.6 0-2.7.3-3.2.8-.4.6-.6 1-.6 1.8 0 1.3.7 2.1 2 2.1 1 0 2-.6 2.5-1.6v-3zm8.4 6l-1.3.2c-1 0-1.5-.2-2-.9-.3-.5-.4-1-.4-2.1v-10c0-1.6 0-2.5-.3-3.4l2.4-.5c.2.8.2 2 .2 3.5v9.8c0 1.3 0 1.6.3 1.8.2.2.5.2.8.2l.3 1.4zm11.1-1l-1.1 1.5c-.8-.3-1.4-1-1.6-1.8-.4.4-1.4 1.6-3.5 1.6-2.4 0-4-1.2-4-3.5 0-2.8 2.3-4.3 6.3-4.3h.8v-.8c0-1.5-.2-2.4-1.9-2.4-1.3 0-2.7.6-3.7 1.4l-1-1.6c1.2-.7 2.7-1.6 5-1.6 1.8 0 3.1.6 3.6 1.9.2.5.2 1 .2 2.1v4.5c0 1.7 0 2.4 1 3zm-3.1-5H86c-1.6 0-2.7.3-3.1.8-.5.6-.7 1-.7 1.8 0 1.3.7 2.1 2 2.1 1 0 2-.6 2.5-1.6v-3zm26 6h-2.2c-.2-.4-.2-.6-.2-1.2a4 4 0 0 1-3.2 1.4c-3 0-4.9-2.4-4.9-6.2 0-2.6.9-4.6 2.5-5.7a4.2 4.2 0 0 1 2.4-.7c1.2 0 2.2.4 3 1.4V.2l2.2.3v12.1c0 2 0 3.3.3 4zm-2.7-3.1V7.2a3.1 3.1 0 0 0-2.6-1.1c-.9 0-1.6.5-2 1.2-.5.8-.7 1.8-.7 3.4 0 2.3.3 3 1 3.7.4.4 1 .6 1.7.6 1.3 0 2.2-.7 2.6-1.4zm-9.7 3h-2.2V8.6c0-1.1-.1-1.5-.4-1.9-.3-.3-.7-.5-1.2-.5-1 0-2.2.7-3 1.6v9h-1.2c-.7 0-1-.6-1-1.4V7.6c0-1.4-.2-2-.5-2.9l2-.5c.4.5.5 1 .5 1.8.7-.6 1-.9 1.6-1.2a4.5 4.5 0 0 1 2.2-.6c1.3 0 2.5.7 2.9 1.8.2.4.3 1 .3 1.5v9.2z",
    fill: "currentColor"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-footer__standard-licence"
  }, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("a", {
    className: "g-footer__standard-link--plain",
    href: href,
    rel: rel,
    target: target,
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "g-footer-visually-hidden"
  }, "Creative Commons 4.0 International Licence"), /*#__PURE__*/_react["default"].createElement("svg", {
    className: "g-footer__icon-cc",
    focusable: "false",
    height: "32",
    role: "presentation",
    width: "32",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16 0c4.4 0 8.3 1.6 11.4 4.7a15.4 15.4 0 0 1 3.4 5.1 16.3 16.3 0 0 1 0 12.4 14.7 14.7 0 0 1-3.4 5 16.4 16.4 0 0 1-5.3 3.6A16 16 0 0 1 16 32a15.6 15.6 0 0 1-6.1-1.2A16.1 16.1 0 0 1 4.7 4.7C7.7 1.6 11.5 0 16 0zm0 2.9c-3.6 0-6.7 1.3-9.2 3.8A13.8 13.8 0 0 0 3.9 11a12.6 12.6 0 0 0-1 5c0 1.7.3 3.4 1 5a13.3 13.3 0 0 0 2.9 4.2 13.2 13.2 0 0 0 4.3 2.9 12.8 12.8 0 0 0 10 0 13.8 13.8 0 0 0 4.3-3c2.5-2.4 3.7-5.4 3.7-9.1 0-1.8-.3-3.4-1-5a12.8 12.8 0 0 0-2.8-4.3A12.7 12.7 0 0 0 16 3zm-.2 10.4l-2.1 1.2c-.2-.5-.5-.9-.9-1l-.9-.3c-1.4 0-2.1 1-2.1 2.8 0 .9.2 1.5.5 2 .4.6 1 .8 1.6.8 1 0 1.6-.4 2-1.3l2 1a4.7 4.7 0 0 1-1.8 1.8 4.7 4.7 0 0 1-2.4.7c-1.5 0-2.6-.5-3.5-1.3A5 5 0 0 1 6.9 16a5 5 0 0 1 1.3-3.6c.9-1 2-1.4 3.4-1.4 2 0 3.4.8 4.2 2.3zm9.3 0l-2.2 1.2c-.2-.5-.5-.9-.8-1a2 2 0 0 0-1-.3c-1.4 0-2.1 1-2.1 2.8 0 .9.2 1.5.5 2 .4.6 1 .8 1.6.8 1 0 1.6-.4 2-1.3l2 1a5 5 0 0 1-1.8 1.8 4.6 4.6 0 0 1-2.4.7c-1.4 0-2.6-.5-3.5-1.3a5 5 0 0 1-1.3-3.7 5 5 0 0 1 1.4-3.6c.9-1 2-1.4 3.3-1.4 2 0 3.4.8 4.3 2.3z",
    fill: "currentColor"
  })), "\xA0", /*#__PURE__*/_react["default"].createElement("svg", {
    className: "g-footer__icon-cc",
    focusable: "false",
    height: "32",
    role: "presentation",
    width: "32",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16 .2c4.4 0 8.1 1.6 11.2 4.6 3 3 4.6 6.8 4.6 11.2 0 4.4-1.5 8.1-4.5 11-3.2 3.2-7 4.8-11.3 4.8-4.3 0-8-1.6-11.1-4.7C1.8 24.1.2 20.3.2 16S1.8 8 5 4.8c3-3 6.7-4.6 11-4.6zm0 2.9c-3.6 0-6.6 1.2-9 3.8A12.7 12.7 0 0 0 7 25a12.6 12.6 0 0 0 18.3 0 12 12 0 0 0 3.6-9.1c0-3.6-1.2-6.6-3.8-9.1a12.4 12.4 0 0 0-9-3.8zm4.2 9v6.4h-1.8v7.7h-4.8v-7.7h-1.8v-6.4c0-.3 0-.5.2-.7a1 1 0 0 1 .8-.3h6.4a1 1 0 0 1 .7.3c.2.2.3.4.3.7zm-6.4-4c0-1.5.7-2.3 2.2-2.3s2.2.8 2.2 2.2c0 1.5-.7 2.2-2.2 2.2s-2.2-.7-2.2-2.2z",
    fill: "currentColor"
  })))), /*#__PURE__*/_react["default"].createElement("p", {
    className: "g-footer__standard-small-text"
  }, "Unless indicated otherwise, all content on Govt.nz is licensed for re-use under a Creative Commons 4.0 International Licence"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-flex-col g-flex-col-xs-12 g-flex-col-sm-4 g-flex-col-md-2 g-flex-col-lg-3"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-footer__standard-copyright"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    alt: "New Zealand Coat of Arms",
    className: "g-footer__image-coat-of-arms",
    src: src,
    width: width,
    height: height,
    srcSet: srcSet,
    crossOrigin: crossOrigin
  }), /*#__PURE__*/_react["default"].createElement("p", {
    className: "g-footer__standard-small-text"
  }, "\xA9 Crown Copyright", " ", /*#__PURE__*/_react["default"].createElement("span", null, copyrightYear !== undefined ? copyrightYear : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "2019"))))))));
};

var _default = FooterStandard;
exports["default"] = _default;