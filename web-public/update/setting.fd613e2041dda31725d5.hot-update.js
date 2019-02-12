webpackHotUpdateMyDoc("setting",{

/***/ "./src/setting/index.js":
/*!******************************!*\
  !*** ./src/setting/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _head = __webpack_require__(/*! components/head */ \"./src/components/head/index.js\");\n\nvar _head2 = _interopRequireDefault(_head);\n\nvar _nav = __webpack_require__(/*! components/nav */ \"./src/components/nav/index.js\");\n\nvar _nav2 = _interopRequireDefault(_nav);\n\nvar _util = __webpack_require__(/*! ../../api/util */ \"./api/util/index.js\");\n\nvar _util2 = _interopRequireDefault(_util);\n\n__webpack_require__(/*! ./index.scss */ \"./src/setting/index.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar date = _util2.default.date;\nvar getParam = _util2.default.getParam;\n\nvar css = {\n    main: {\n        margin: '20px 0',\n        display: 'flex',\n        flexDirection: 'row',\n        flexWrap: 'nowrap',\n        paddingTop: '80px',\n        minWidth: '1400px'\n    },\n    indexMain: {\n        minWidth: '700px',\n        flex: 1,\n        padding: '0px 50px'\n    }\n};\n\nvar App = function (_React$Component) {\n    _inherits(App, _React$Component);\n\n    function App(props) {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n        _this.state = {\n            day: getParam('day') || date.formatTime(),\n            project: getParam('project'),\n            pageData: { _id: getParam('url'), data: [{ title: getParam('title') }] }\n        };\n        _this.onChangeDate = _this.onChangeDate.bind(_this);\n        _this.setPageData = _this.setPageData.bind(_this);\n        _this.changePageDataData = _this.changePageDataData.bind(_this);\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: 'onChangeDate',\n        value: function onChangeDate(day) {\n            this.setState({\n                day: day\n            });\n        }\n    }, {\n        key: 'setPageData',\n        value: function setPageData(pageData) {\n            this.setState({\n                pageData: pageData\n            });\n        }\n    }, {\n        key: 'changePageDataData',\n        value: function changePageDataData(data) {\n            this.setState({\n                pageData: data\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_head2.default, null),\n                _react2.default.createElement(\n                    'div',\n                    { style: css.main },\n                    _react2.default.createElement(_nav2.default, null),\n                    _react2.default.createElement(\n                        'div',\n                        { style: { width: '1100px' } },\n                        _react2.default.createElement(\n                            antd.List,\n                            null,\n                            _react2.default.createElement(\n                                antd.List.Item,\n                                null,\n                                _react2.default.createElement(InputNumber, { min: 1, max: 10, defaultValue: 3, onChange: onChange })\n                            ),\n                            _react2.default.createElement(\n                                antd.List.Item,\n                                null,\n                                'df'\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return App;\n}(_react2.default.Component);\n\n_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('root'));\n\n//# sourceURL=webpack://MyDoc/./src/setting/index.js?");

/***/ })

})