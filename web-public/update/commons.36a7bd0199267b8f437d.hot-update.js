webpackHotUpdateMyDoc("commons",{

/***/ "./src/components/head/index.js":
/*!**************************************!*\
  !*** ./src/components/head/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _logo = __webpack_require__(/*! ./logo.png */ \"./src/components/head/logo.png\");\n\nvar _logo2 = _interopRequireDefault(_logo);\n\nvar _util = __webpack_require__(/*! ../../../api/util */ \"./api/util/index.js\");\n\nvar _util2 = _interopRequireDefault(_util);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar getParam = _util2.default.getParam;\nvar css = {\n  header: {\n    padding: '0 20px',\n    height: '60px',\n    lineHeight: '60px',\n    background: \"rgba(255,255,255,0.9)\",\n    boxShadow: '0 1px 3px #f3f3f3',\n    display: 'flex',\n    alignItems: 'center',\n    position: 'fixed',\n    zIndex: '100',\n    left: 0,\n    top: 0,\n    width: '100vw',\n    boxSizing: 'border-box'\n  },\n  logo: {\n    height: '40px'\n  },\n  btn: {\n    display: 'inline-block',\n    margin: '0 0 0 20px',\n    color: '#3faaf0',\n    cursor: \"pointer\"\n  },\n  antdButton: {\n    margin: '0 10px'\n  }\n};\n\nvar Header = function (_React$Component) {\n  _inherits(Header, _React$Component);\n\n  function Header(props) {\n    _classCallCheck(this, Header);\n\n    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));\n\n    _this.state = { visible: false, placement: 'top' };\n    _this.showDrawer = _this.showDrawer.bind(_this);\n    _this.onClose = _this.onClose.bind(_this);\n    _this.onChange = _this.onChange.bind(_this);\n    return _this;\n  }\n\n  _createClass(Header, [{\n    key: 'showDrawer',\n    value: function showDrawer() {\n      this.setState({\n        visible: true\n      });\n    }\n  }, {\n    key: 'onClose',\n    value: function onClose() {\n      this.setState({\n        visible: false\n      });\n    }\n  }, {\n    key: 'onChange',\n    value: function onChange(e) {\n      this.setState({\n        placement: e.target.value\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { style: css.header },\n        _react2.default.createElement(\n          'a',\n          { href: '/?project=' + getParam('project') },\n          _react2.default.createElement('img', { src: _logo2.default, style: css.logo })\n        ),\n        '\\u4E91\\u5BA2\\u8D5E\\u524D\\u7AEF\\u76D1\\u63A7',\n        _react2.default.createElement(\n          'span',\n          { style: css.btn, onClick: this.showDrawer },\n          '[\\u67E5\\u770B\\u5176\\u4ED6\\u9879\\u76EE]'\n        ),\n        _react2.default.createElement(\n          antd.Drawer,\n          {\n            title: '\\u67E5\\u770B\\u5176\\u4ED6\\u9879\\u76EE',\n            placement: this.state.placement,\n            closable: false,\n            onClose: this.onClose,\n            visible: this.state.visible\n          },\n          _react2.default.createElement(\n            antd.Button,\n            { style: css.antdButton },\n            '\\u4E91\\u5BA2\\u8D5E'\n          ),\n          _react2.default.createElement(\n            antd.Button,\n            { style: css.antdButton },\n            '\\u5206\\u9500\\u7CFB\\u7EDF'\n          ),\n          _react2.default.createElement(\n            antd.Button,\n            { style: css.antdButton },\n            'm\\u7248'\n          ),\n          _react2.default.createElement(\n            antd.Button,\n            { style: css.antdButton },\n            '\\u4E13\\u9898'\n          ),\n          _react2.default.createElement(\n            antd.Button,\n            { style: css.antdButton },\n            '\\u6D3B\\u52A8'\n          ),\n          _react2.default.createElement(\n            antd.Button,\n            { style: css.antdButton },\n            '\\u5B98\\u7F51'\n          ),\n          _react2.default.createElement(\n            antd.Button,\n            { style: css.antdButton },\n            '\\u4E1A\\u7EE9\\u770B\\u677F'\n          )\n        )\n      );\n    }\n  }]);\n\n  return Header;\n}(_react2.default.Component);\n\nmodule.exports = Header;\n\n//# sourceURL=webpack://MyDoc/./src/components/head/index.js?");

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