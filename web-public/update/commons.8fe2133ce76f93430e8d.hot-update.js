webpackHotUpdateMyDoc("commons",{

/***/ "./src/components/nav/index.js":
/*!*************************************!*\
  !*** ./src/components/nav/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\n__webpack_require__(/*! ./index.scss */ \"./src/components/nav/index.scss\");\n\nvar _util = __webpack_require__(/*! ../../../api/util */ \"./api/util/index.js\");\n\nvar _util2 = _interopRequireDefault(_util);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar getParam = _util2.default.getParam;\nvar css = {\n  ItemDes: {\n    color: '#bbb',\n    fontSize: '12px',\n    textIndent: '10px',\n    display: 'inline-block'\n  }\n};\n\nvar Menu = function (_React$Component) {\n  _inherits(Menu, _React$Component);\n\n  function Menu(props) {\n    _classCallCheck(this, Menu);\n\n    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));\n\n    _this.state = {\n      defaultSelectedKeys: '',\n      defaultOpenKeys: '',\n      project: getParam('project') || 'activity'\n    };\n    return _this;\n  }\n\n  _createClass(Menu, [{\n    key: 'render',\n    value: function render() {\n\n      return _react2.default.createElement(\n        antd.Menu,\n        {\n          style: { width: 150 },\n          defaultSelectedKeys: [this.state.defaultSelectedKeys],\n          defaultOpenKeys: [this.state.defaultSelectedKeys],\n          mode: 'inline'\n        },\n        _react2.default.createElement(\n          antd.Menu.Item,\n          { key: '1' },\n          _react2.default.createElement(\n            'a',\n            { href: '/?project=' + this.state.project },\n            _react2.default.createElement(antd.Icon, { type: 'profile' }),\n            '\\u6982\\u89C8'\n          )\n        ),\n        _react2.default.createElement(\n          antd.Menu.Item,\n          { key: '2' },\n          _react2.default.createElement(\n            'a',\n            { href: '/pages?project=' + this.state.project },\n            _react2.default.createElement(antd.Icon, { type: 'bar-chart' }),\n            '\\u9875\\u9762\\u76D1\\u63A7'\n          )\n        ),\n        _react2.default.createElement(\n          antd.Menu.Item,\n          { key: '3' },\n          _react2.default.createElement(\n            'a',\n            { href: '/list?project=' + this.state.project },\n            _react2.default.createElement(antd.Icon, { type: 'exclamation' }),\n            '\\u9519\\u8BEF\\u6536\\u96C6'\n          )\n        ),\n        _react2.default.createElement(\n          antd.Menu.Item,\n          { key: '4' },\n          _react2.default.createElement(\n            'a',\n            { href: '/?setting=' + this.state.project },\n            _react2.default.createElement(antd.Icon, { type: 'tool' }),\n            '\\u8BBE\\u7F6E'\n          )\n        )\n      );\n    }\n  }]);\n\n  return Menu;\n}(_react2.default.Component);\n\nmodule.exports = Menu;\n\n//# sourceURL=webpack://MyDoc/./src/components/nav/index.js?");

/***/ }),

/***/ "./src/components/nav/index.scss":
/*!***************************************!*\
  !*** ./src/components/nav/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://MyDoc/./src/components/nav/index.scss?");

/***/ }),

/***/ "./src/components/todayData/index.scss":
/*!*********************************************!*\
  !*** ./src/components/todayData/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://MyDoc/./src/components/todayData/index.scss?");

/***/ }),

/***/ "./src/pages/index.scss":
/*!******************************!*\
  !*** ./src/pages/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://MyDoc/./src/pages/index.scss?");

/***/ }),

/***/ "?4d9d":
false,

/***/ "?b5b0":
false,

/***/ "?dd73":
false

})