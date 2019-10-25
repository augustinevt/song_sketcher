"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ChordBuilder = _interopRequireDefault(require("./ChordBuilder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  padding: 30px;\n  position: relative;\n  width: 100%;\n  border: solid;\n  margin-bottom: 5px;\n  display: flex;\n  justify-content: center;\n  color: ", ";\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  right: -25px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid orange;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid orange;\n  margin-bottom: 5px;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  /* border: solid; */\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  /* border: solid; */\n  flex-wrap: wrap;\n  width: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  /* border: solid; */\n  flex-wrap: wrap;\n  width: 20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-bottom: 10px;\n  display: flex;\n  flex-wrap: no-wrap;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject());

var ChordMenu = _styledComponents["default"].div(_templateObject2());

var RemCol = _styledComponents["default"].div(_templateObject3());

var ChordCol = _styledComponents["default"].div(_templateObject4());

var Row = _styledComponents["default"].div(_templateObject5());

var Button = _styledComponents["default"].div(_templateObject6());

var AddButton = _styledComponents["default"].div(_templateObject7());

var AddButtonWrapper = _styledComponents["default"].div(_templateObject8());

var ButtonWrapper = _styledComponents["default"].div(_templateObject9());

var Card = _styledComponents["default"].div(_templateObject10(), function (props) {
  return props.active ? 'rgba(255, 103, 0, 1)' : 'rgba(255, 103, 0, .5)';
});

var _default = function _default(_ref) {
  var chordName = _ref.chordName,
      active = _ref.active,
      getKeyChords = _ref.getKeyChords,
      changeChord = _ref.changeChord,
      addChord = _ref.addChord,
      removeChord = _ref.removeChord,
      index = _ref.index;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      changeOpen = _useState2[0],
      toggleChange = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      addOpen = _useState4[0],
      toggleAdd = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      inKeyOnly = _useState6[0],
      toggleInKeyOnly = _useState6[1];

  var chordMenu = null;

  if (inKeyOnly) {
    var ChordSelection = getKeyChords();
    chordMenu = Object.keys(ChordSelection).map(function (chordName) {
      var params = {
        name: chordName,
        index: index,
        notes: ChordSelection[chordName]
      };

      var onClick = function onClick() {
        toggleChange(false);
        toggleAdd(false);
        changeOpen ? changeChord(params) : addChord(params);
      };

      return _react["default"].createElement("div", {
        onClick: onClick
      }, " ", chordName, " ");
    });
  } else {
    var handler = function handler(chordName) {
      var params = {
        name: chordName,
        index: index
      };
      toggleChange(false);
      toggleAdd(false);
      changeOpen ? changeChord(params) : addChord(params);
    };

    chordMenu = _react["default"].createElement(_ChordBuilder["default"], {
      handler: handler
    });
  }

  return _react["default"].createElement(Wrapper, null, _react["default"].createElement(ChordCol, null, _react["default"].createElement(Row, null, _react["default"].createElement(Card, {
    active: active
  }, chordName, !changeOpen && !addOpen ? null : _react["default"].createElement(ChordMenu, null, _react["default"].createElement(Button, {
    onClick: function onClick() {
      return toggleInKeyOnly(!inKeyOnly);
    }
  }, "In Key only"), chordMenu))), _react["default"].createElement(Row, null, !changeOpen && !addOpen ? _react["default"].createElement(AddButtonWrapper, null, _react["default"].createElement(AddButton, {
    onClick: function onClick() {
      return toggleAdd(true);
    }
  }, " A ")) : null)), _react["default"].createElement(ButtonWrapper, null, _react["default"].createElement(Button, {
    onClick: function onClick() {
      return removeChord(index);
    }
  }, " x "), _react["default"].createElement(Button, {
    onClick: function onClick() {
      return toggleChange(true);
    }
  }, " p ")));
};

exports["default"] = _default;