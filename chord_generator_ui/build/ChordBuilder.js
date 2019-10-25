"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _SymbolButton = _interopRequireDefault(require("./SymbolButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  padding: 10px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject());

var Buttons = _styledComponents["default"].div(_templateObject2());

var Display = _styledComponents["default"].div(_templateObject3());

var ButtonWrapper = _styledComponents["default"].div(_templateObject4());

var _default = function _default(_ref) {
  var handler = _ref.handler;

  var _useState = (0, _react.useState)("A"),
      _useState2 = _slicedToArray(_useState, 2),
      root = _useState2[0],
      setRoot = _useState2[1];

  var _useState3 = (0, _react.useState)("#"),
      _useState4 = _slicedToArray(_useState3, 2),
      shift = _useState4[0],
      setShift = _useState4[1];

  var _useState5 = (0, _react.useState)("sus"),
      _useState6 = _slicedToArray(_useState5, 2),
      quality = _useState6[0],
      setQuality = _useState6[1];

  var _useState7 = (0, _react.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      additive = _useState8[0],
      setAdditive = _useState8[1];

  var roots = ["A", "B", "C", "D", "E", "F", "G"];
  var shifts = ["", "b", "#"];
  var qualities = ["m", "dim", "sus", "aug"];
  var addNotes = {
    sus: [],
    dim: [''],
    min: [],
    aug: ['7'],
    '': ['7', '5', '9']
  };
  return _react["default"].createElement(Wrapper, null, _react["default"].createElement(Buttons, null, _react["default"].createElement(ButtonWrapper, null, roots.map(function (sym) {
    return _react["default"].createElement(_SymbolButton["default"], {
      active: sym !== root,
      sym: sym,
      handler: function handler(sym) {
        setRoot(sym);
      }
    });
  })), _react["default"].createElement(ButtonWrapper, null, shifts.map(function (sym) {
    return _react["default"].createElement(_SymbolButton["default"], {
      sym: sym,
      active: sym !== shift,
      handler: function handler(sym) {
        sym !== shift ? setShift(sym) : setShift("");
      }
    });
  })), _react["default"].createElement(ButtonWrapper, null, qualities.map(function (sym) {
    return _react["default"].createElement(_SymbolButton["default"], {
      active: sym !== quality,
      sym: sym,
      handler: function handler(sym) {
        sym !== quality ? setQuality(sym) : setQuality("");
      }
    });
  })), _react["default"].createElement(ButtonWrapper, null, addNotes[quality].map(function (sym) {
    return _react["default"].createElement(_SymbolButton["default"], {
      active: sym !== quality,
      sym: sym,
      handler: function handler(sym) {
        sym !== additive ? setAdditive(sym) : setAdditive("");
      }
    });
  }))), _react["default"].createElement(Display, null, _react["default"].createElement("span", null, root), _react["default"].createElement("span", null, shift), _react["default"].createElement("span", null, quality), _react["default"].createElement("span", null, additive)), _react["default"].createElement("button", {
    onClick: function onClick() {
      handler("".concat(root).concat(shift).concat(quality).concat(additive));
    }
  }, " Done "));
};

exports["default"] = _default;