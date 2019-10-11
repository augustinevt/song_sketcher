"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n\n  border: solid;\n  padding: 10px;\n  color: orange;\n\n  & svg {\n    fill: gold;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  margin-bottom: 30px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject());

var Button = _styledComponents["default"].div(_templateObject2());

var _default = function _default(_ref) {
  var onSubmit = _ref.onSubmit;
  return _react["default"].createElement(Wrapper, null, _react["default"].createElement(Button, {
    onClick: function onClick() {
      return onSubmit();
    }
  }, _react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink",
    width: "30px",
    height: "30px",
    viewBox: "0 0 512 512"
  }, _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M400.268,175.599c-1.399-3.004-4.412-4.932-7.731-4.932h-101.12l99.797-157.568c1.664-2.628,1.766-5.956,0.265-8.678 C389.977,1.69,387.109,0,384.003,0H247.47c-3.234,0-6.187,1.826-7.637,4.719l-128,256c-1.323,2.637-1.178,5.777,0.375,8.294 c1.562,2.517,4.301,4.053,7.262,4.053h87.748l-95.616,227.089c-1.63,3.883-0.179,8.388,3.413,10.59 c1.382,0.845,2.918,1.254,4.446,1.254c2.449,0,4.864-1.05,6.537-3.029l273.067-324.267 C401.206,182.161,401.667,178.611,400.268,175.599z"
  })))));
};

exports["default"] = _default;