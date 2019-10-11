"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Selector = _interopRequireDefault(require("./Selector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: underline;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  flex-wrap: nowrap;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  /* border: solid; */\n  margin-bottom: 30px;\n  font-size: 1.3rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  /* justify-content: center; */\n  width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  /* border: solid; */\n  /* width: 100%; */\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents["default"].button(_templateObject());

var Select = _styledComponents["default"].select(_templateObject2());

var Wrapper = _styledComponents["default"].div(_templateObject3());

var SelectTabLabels = _styledComponents["default"].div(_templateObject4());

var SelectTabLabel = _styledComponents["default"].div(_templateObject5());

var SelectCurrVal = _styledComponents["default"].span(_templateObject6());

var SelectTabBody = _styledComponents["default"].div(_templateObject7());

var _default = function _default(_ref) {
  var onKeyChange = _ref.onKeyChange,
      onModeChange = _ref.onModeChange,
      onTempoChange = _ref.onTempoChange,
      onSubmit = _ref.onSubmit,
      keyVal = _ref.keyVal,
      modeVal = _ref.modeVal,
      tempoVal = _ref.tempoVal;

  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      select = _useState2[0],
      setSelect = _useState2[1];

  var getJSX = function getJSX() {
    if (select === 1) {
      return _react["default"].createElement(_Selector["default"], {
        options: [{
          label: 'A',
          value: 'A'
        }, {
          label: 'B',
          value: 'B'
        }, {
          label: 'C',
          value: 'C'
        }, {
          label: 'D',
          value: 'D'
        }, {
          label: 'E',
          value: 'E'
        }, {
          label: 'F',
          value: 'F'
        }, {
          label: 'G',
          value: 'G'
        }],
        key: 'keySelector',
        label: "Key",
        currentValue: keyVal,
        onSelect: onKeyChange
      });
    } else if (select === 2) {
      return _react["default"].createElement(_Selector["default"], {
        options: [{
          label: 'Ionian',
          value: 'ionian'
        }, {
          label: 'Dorian',
          value: 'dorian'
        }, {
          label: 'Locrian',
          value: 'locrian'
        }, {
          label: 'Phrygian',
          value: 'phrygian'
        }, {
          label: 'Mixolydian',
          value: 'mixolydian'
        }, {
          label: 'Aeolian',
          value: 'aeolian'
        }, {
          label: 'Lydian',
          value: 'lydian'
        }],
        key: 'modeSelector',
        label: "Mode",
        currentValue: modeVal,
        onSelect: onModeChange
      });
    } else if (select === 3) {
      return _react["default"].createElement(_Selector["default"], {
        options: [{
          label: '60',
          value: '60'
        }, {
          label: '120',
          value: '120'
        }, {
          label: '180',
          value: '180'
        }],
        key: 'tempoSelector',
        label: "Tempo",
        currentValue: tempoVal.toString(),
        onSelect: onTempoChange
      });
    }
  };

  return _react["default"].createElement(Wrapper, null, _react["default"].createElement(SelectTabLabels, null, _react["default"].createElement(SelectTabLabel, {
    onClick: function onClick() {
      return setSelect(1);
    }
  }, " Key : ", _react["default"].createElement(SelectCurrVal, null, " ", keyVal, " "), " "), _react["default"].createElement(SelectTabLabel, {
    onClick: function onClick() {
      return setSelect(2);
    }
  }, " Mode : ", _react["default"].createElement(SelectCurrVal, null, " ", modeVal.charAt(0).toUpperCase() + modeVal.slice(1), " "), " "), _react["default"].createElement(SelectTabLabel, {
    onClick: function onClick() {
      return setSelect(3);
    }
  }, " Tempo : ", _react["default"].createElement(SelectCurrVal, null, " ", tempoVal, " "), " ")), _react["default"].createElement(SelectTabBody, null, getJSX()));
};

exports["default"] = _default;