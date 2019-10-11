"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  /* width: 15%; */\n  margin: 1%;\n  font-size: 1.2rem;\n  text-decoration: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject());

var Option = _styledComponents["default"].div(_templateObject2(), function (_ref) {
  var active = _ref.active;
  return active ? 'underline' : 'none';
});

var _default = function _default(_ref2) {
  var options = _ref2.options,
      onSelect = _ref2.onSelect,
      currentValue = _ref2.currentValue,
      label = _ref2.label;
  var showLabel = false;
  console.log(options);
  return _react["default"].createElement(Wrapper, null, showLabel && _react["default"].createElement("div", null, " ", label, " : ", currentValue, " "), options.map(function (_ref3) {
    var label = _ref3.label,
        value = _ref3.value;
    return _react["default"].createElement(Option, {
      active: currentValue === value,
      onClick: function onClick() {
        return onSelect(value);
      }
    }, label);
  }));
};

exports["default"] = _default;