webpackHotUpdateMyDoc("commons",{

/***/ "./src/components/nav/index.scss":
/*!***************************************!*\
  !*** ./src/components/nav/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://MyDoc/./src/components/nav/index.scss?");

/***/ }),

/***/ "./src/components/todayData/index.js":
/*!*******************************************!*\
  !*** ./src/components/todayData/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _util = __webpack_require__(/*! ../../../api/util */ \"./api/util/index.js\");\n\nvar _util2 = _interopRequireDefault(_util);\n\n__webpack_require__(/*! ./index.scss */ \"./src/components/todayData/index.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar date = _util2.default.date;\n\nvar css = {\n  TodayData: {\n    padding: \"20px 20px 0\",\n    borderBottom: '1px solid #dcdcdc',\n    position: 'relative'\n    // boxShadow:'0 0 5px #efefef',\n    // borderImage:' -webkit-linear-gradient( red, blue) 30 30'\n  },\n  Icon: {\n    marginLeft: '5px'\n  },\n  fund: {\n    marginRight: '5px'\n  },\n  title: {\n    fontSize: '20px',\n    marginBottom: '20px'\n  },\n  main: {\n    display: 'flex',\n    flexDirection: 'row',\n    flexWrap: 'wrap'\n  },\n  title2: {\n    lineHeight: '30px',\n    color: '#3faaf0'\n  },\n  url: {\n    lineHeight: '30px',\n    color: '#3faaf0',\n    marginBottom: '15px'\n  },\n  titleSpan: {\n    display: 'inline-block',\n    width: '40px'\n  },\n  Item: {\n    width: '180px',\n    marginBottom: '20px'\n  },\n  name: {\n    marginBottom: '5px'\n  },\n  val: {\n    fontSize: '18px',\n    color: 'rgb(63, 170, 240)'\n  },\n  newPage: {\n    position: 'absolute',\n    right: '20px',\n    top: '20px',\n    cursor: 'pointer',\n    color: \"#fff\"\n\n  }\n};\n\nvar today = date.formatTime();\n\nvar Item = function (_React$Component) {\n  _inherits(Item, _React$Component);\n\n  function Item(props) {\n    _classCallCheck(this, Item);\n\n    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));\n\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(Item, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var tip = function tip() {\n        if (_this2.props.tips) {\n          return _react2.default.createElement(\n            antd.Tooltip,\n            { title: _this2.props.tips },\n            _react2.default.createElement(antd.Icon, { type: 'question-circle', style: css.Icon })\n          );\n        }\n      };\n\n      return _react2.default.createElement(\n        'div',\n        { style: css.Item },\n        _react2.default.createElement(\n          'div',\n          { style: css.name, className: 'todayItemName' },\n          this.props.name,\n          ':',\n          tip()\n        ),\n        _react2.default.createElement(\n          'div',\n          { style: css.val },\n          this.props.val\n        )\n      );\n    }\n  }]);\n\n  return Item;\n}(_react2.default.Component);\n\nvar TodayData = function (_React$Component2) {\n  _inherits(TodayData, _React$Component2);\n\n  function TodayData(props) {\n    _classCallCheck(this, TodayData);\n\n    var _this3 = _possibleConstructorReturn(this, (TodayData.__proto__ || Object.getPrototypeOf(TodayData)).call(this, props));\n\n    _this3.state = {};\n    _this3.getData = _this3.getData.bind(_this3);\n    _this3.getData(_this3.props.day, _this3.props.url);\n    return _this3;\n  }\n\n  _createClass(TodayData, [{\n    key: 'getData',\n    value: function getData(day, url) {\n      var that = this,\n          _url = url;\n      if (url == undefined) {\n        _url = '';\n      }\n      fetch('/api/getDayInfo?day=' + day + '&project=' + this.props.project + '&url=' + _url, {\n        method: 'GET',\n        headers: {\n          'Accept': 'application/json',\n          'Content-Type': 'application/json'\n        }\n      }).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        if (response.code == 1) {} else {\n          alert(response.msg);\n        }\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var newPage = this.props.showNwePage && window.location.pathname != '/pagecontent' ? _react2.default.createElement(\n        'a',\n        { style: css.newPage, href: '/pagecontent?day=' + this.props.day + '&project=' + this.props.project + '&url=' + this.props.url + '&title=' + encodeURIComponent(this.props.title), target: '_blank' },\n        _react2.default.createElement(antd.Icon, { type: 'file-add' })\n      ) : '';\n      var day = this.props.day == undefined || today == this.props.day ? '今日' : this.props.day + '  ';\n      var title = this.props.url ? _react2.default.createElement(\n        'div',\n        { style: css.title2 },\n        _react2.default.createElement(\n          'span',\n          { className: 'titleSpan', style: css.titleSpan },\n          'title:'\n        ),\n        this.props.title\n      ) : '';\n      var url = this.props.url ? _react2.default.createElement(\n        'div',\n        { style: css.url },\n        _react2.default.createElement(\n          'span',\n          { className: 'titleSpan', style: css.titleSpan },\n          'url:'\n        ),\n        this.props.url\n      ) : '';\n      return _react2.default.createElement(\n        'div',\n        { style: css.TodayData },\n        _react2.default.createElement(\n          'div',\n          { style: css.title },\n          day,\n          '\\u6570\\u636E',\n          newPage\n        ),\n        title,\n        url,\n        _react2.default.createElement(\n          'div',\n          { style: css.main },\n          _react2.default.createElement(Item, { name: '\\u767D\\u5C4F\\u65F6\\u95F4', val: '2s', tips: '\\u9875\\u9762\\u7684\\u5E73\\u5747\\u767D\\u5C4F\\u65F6\\u95F4' }),\n          _react2.default.createElement(Item, { name: '\\u8D44\\u6E90\\u52A0\\u8F7D\\u65F6\\u95F4', val: '2.9s', tips: '\\u9875\\u9762\\u7684\\u5E73\\u5747\\u8D44\\u6E90\\u52A0\\u8F7D\\u65F6\\u95F4' }),\n          _react2.default.createElement(Item, { name: 'pv', val: '200' }),\n          _react2.default.createElement(Item, { name: '\\u62A5\\u9519\\u7387', val: '1/100' }),\n          _react2.default.createElement(Item, { name: '\\u9519\\u8BEF\\u6570\\u91CF', val: '39' })\n        )\n      );\n    }\n  }]);\n\n  return TodayData;\n}(_react2.default.Component);\n\nmodule.exports = TodayData;\n\n//# sourceURL=webpack://MyDoc/./src/components/todayData/index.js?");

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