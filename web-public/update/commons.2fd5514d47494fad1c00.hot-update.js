webpackHotUpdateMyDoc("commons",{

/***/ "./src/components/errorList/index.js":
/*!*******************************************!*\
  !*** ./src/components/errorList/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _Drawer = __webpack_require__(/*! ./Drawer.js */ \"./src/components/errorList/Drawer.js\");\n\nvar _Drawer2 = _interopRequireDefault(_Drawer);\n\nvar _util = __webpack_require__(/*! ../../../api/util */ \"./api/util/index.js\");\n\nvar _util2 = _interopRequireDefault(_util);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar date = _util2.default.date;\n\nvar css = {\n    title: {\n        fontSize: '20px',\n        marginBottom: '20px'\n    },\n    from: {\n        display: 'flex',\n        flexDirection: 'row',\n        flexWrap: 'nowrap'\n    },\n    item: {\n        display: 'flex',\n        flexDirection: 'row',\n        flexWrap: 'nowrap',\n        lineHeight: '32px'\n    },\n    list: {\n        margin: '40px 0'\n    }\n\n};\n\nvar columns = [{\n    title: '时间',\n    dataIndex: 'timestamp',\n    key: 'timestamp',\n    width: 150,\n    render: function render(text) {\n        return _react2.default.createElement(\n            'span',\n            { style: { width: '50px' } },\n            date.getFormatTime(text, 1)\n        );\n    }\n}, {\n    title: 'userID',\n    dataIndex: 'userId',\n    width: 100,\n    render: function render(text) {\n        return _react2.default.createElement(\n            'span',\n            { style: { width: '50px' } },\n            text\n        );\n    }\n}, {\n    title: '内容',\n    dataIndex: 'errorContent'\n}];\n\nvar pagination = { total: 50 };\n\nvar List = function (_React$Component) {\n    _inherits(List, _React$Component);\n\n    function List(props) {\n        _classCallCheck(this, List);\n\n        var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));\n\n        _this.clickRow = _this.clickRow.bind(_this);\n        return _this;\n    }\n\n    _createClass(List, [{\n        key: 'clickRow',\n        value: function clickRow(index) {\n            this.props.showDrawer(index);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(antd.Table, { columns: columns, dataSource: this.props.listData, size: 'small', pagination: this.props.pagination,\n                rowKey: 'timestamp',\n                onRow: function onRow(record, index) {\n                    return {\n                        onClick: function onClick() {\n                            _this2.clickRow(index);\n                        }\n                    };\n                }\n            });\n        }\n    }]);\n\n    return List;\n}(_react2.default.Component);\n\nvar errorList = function (_React$Component2) {\n    _inherits(errorList, _React$Component2);\n\n    function errorList(props) {\n        _classCallCheck(this, errorList);\n\n        var _this3 = _possibleConstructorReturn(this, (errorList.__proto__ || Object.getPrototypeOf(errorList)).call(this, props));\n\n        _this3.state = {\n            visible: false,\n            listData: [],\n            showLoading: true,\n            total: 0,\n            size: 3,\n            pagination: { total: 0 },\n            uid: '',\n            errorContent: '',\n            errorData: {}\n        };\n        _this3.showDrawer = _this3.showDrawer.bind(_this3);\n        _this3.onClose = _this3.onClose.bind(_this3);\n        _this3.getData = _this3.getData.bind(_this3);\n        _this3.onSearch = _this3.onSearch.bind(_this3);\n        _this3.changeErrorContent = _this3.changeErrorContent.bind(_this3);\n        _this3.changeUid = _this3.changeUid.bind(_this3);\n        _this3.getData(_this3.props.day, _this3.props.url);\n        return _this3;\n    }\n\n    _createClass(errorList, [{\n        key: 'changeErrorContent',\n        value: function changeErrorContent(e) {\n            this.setState({ errorContent: e.target.value });\n        }\n    }, {\n        key: 'changeUid',\n        value: function changeUid(e) {\n            this.setState({ uid: e.target.value });\n        }\n    }, {\n        key: 'onSearch',\n        value: function onSearch() {\n            console.log(11);\n            this.getData(this.props.day, this.props.url);\n        }\n    }, {\n        key: 'showDrawer',\n        value: function showDrawer(index) {\n            this.setState({\n                visible: true,\n                errorData: this.state.listData[index]\n            });\n        }\n    }, {\n        key: 'onClose',\n        value: function onClose() {\n            this.setState({\n                visible: false\n            });\n        }\n    }, {\n        key: 'getData',\n        value: function getData(day, url) {\n            var that = this;\n            fetch('/api/pageErrorList?day=' + day + '&project=' + this.props.project + '&url=' + url + '&uid=' + this.state.uid + '&errorContent=' + this.state.errorContent, {\n                method: 'GET',\n                headers: {\n                    'Accept': 'application/json',\n                    'Content-Type': 'application/json'\n                }\n            }).then(function (response) {\n                return response.json();\n            }).then(function (response) {\n                if (response.code == 1) {\n\n                    // let ChartData = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n                    //     data =  Object.assign({},that.state.data);\n                    // response.reslut.map(function(item,index){\n                    //     ChartData[item._id-1] = item.num\n                    // })\n                    // data.series[0].data = ChartData;\n                    that.setState({\n                        listData: response.reslut,\n                        showLoading: false,\n                        pagination: { total: response.total }\n                    });\n                } else {\n                    alert(response.msg);\n                }\n            });\n        }\n    }, {\n        key: 'componentWillReceiveProps',\n        value: function componentWillReceiveProps(nextProps) {\n\n            this.setState({\n                showLoading: true\n            });\n            this.getData(nextProps.day, nextProps.url);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var showLoading = this.state.showLoading ? _react2.default.createElement(\n                'div',\n                { style: { width: '100%', height: 100, lineHeight: '100px', textAlign: 'center' } },\n                _react2.default.createElement(antd.Spin, null)\n            ) : '';\n            var list = !this.state.showLoading ? _react2.default.createElement(List, { showDrawer: this.showDrawer, listData: this.state.listData, pagination: this.state.pagination }) : '';\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'div',\n                    { style: css.from },\n                    _react2.default.createElement(\n                        'div',\n                        { style: css.item },\n                        _react2.default.createElement(\n                            'span',\n                            { style: { width: '100px' } },\n                            '\\u7528\\u6237Id:'\n                        ),\n                        _react2.default.createElement(antd.Input, { onChange: this.changeUid, placeholder: '\\u7528\\u6237Id', style: { margin: '0 40px 0 10px' } })\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { style: css.item },\n                        _react2.default.createElement(\n                            'span',\n                            { style: { width: '100px' } },\n                            '\\u9519\\u8BEF\\u5185\\u5BB9:'\n                        ),\n                        _react2.default.createElement(antd.Input, { onChange: this.changeErrorContent, placeholder: '\\u9519\\u8BEF\\u5185\\u5BB9', style: { margin: '0 40px 0 10px' } })\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { style: css.item },\n                        _react2.default.createElement(\n                            antd.Button,\n                            { type: 'primary', icon: 'search', onClick: this.onSearch },\n                            '\\u641C\\u7D22'\n                        )\n                    )\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { style: css.list },\n                    showLoading,\n                    list\n                ),\n                _react2.default.createElement(_Drawer2.default, { onClose: this.onClose, visible: this.state.visible, data: this.state.errorData, project: this.props.project, day: this.props.day })\n            );\n        }\n    }]);\n\n    return errorList;\n}(_react2.default.Component);\n\nmodule.exports = errorList;\n\n//# sourceURL=webpack://MyDoc/./src/components/errorList/index.js?");

/***/ })

})