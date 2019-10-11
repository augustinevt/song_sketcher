"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _PatternManager = _interopRequireDefault(require("./PatternManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject());

var _default = function _default(_ref) {
  var chords = _ref.chords,
      onChange = _ref.onChange;
  return _react["default"].createElement(Wrapper, null, _react["default"].createElement(_PatternManager["default"], {
    handler: function handler(cells) {
      onChange(cells);
    }
  }));
};

exports["default"] = _default;