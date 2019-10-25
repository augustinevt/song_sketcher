"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: solid;\n  color: ", ";\n  background: ", ";\n  width: 40px;\n  height: 40px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Cello = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var cellVal = _ref.cellVal;
  if (cellVal === 2) return 'salmon';else if (cellVal === 1) return 'orange';else return 'grey';
}, function (_ref2) {
  var cellVal = _ref2.cellVal;
  if (cellVal === 2) return 'salmon';else if (cellVal === 1) return 'orange';else return 'white';
});

var Cell = function Cell(_ref3) {
  var cellVal = _ref3.cellVal,
      index = _ref3.index,
      onDragOver = _ref3.onDragOver,
      mouseLeave = _ref3.mouseLeave,
      cellMouseDown = _ref3.cellMouseDown;
  return _react["default"].createElement(Cello, {
    onMouseDown: function onMouseDown() {
      cellMouseDown(index, cellVal);
    },
    onMouseOver: function onMouseOver() {
      onDragOver(index, cellVal);
    },
    onMouseOut: function onMouseOut() {
      mouseLeave(index, cellVal);
    },
    cellVal: cellVal
  });
};

var _default = Cell;
exports["default"] = _default;