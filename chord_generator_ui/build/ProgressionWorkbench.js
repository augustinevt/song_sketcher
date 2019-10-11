"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ChordCard = _interopRequireDefault(require("./ChordCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  border: 2px solid orange;\n  width: 100%;\n  padding: 10px;\n  color: red;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n\n  & svg {\n    fill: red;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border: 2px solid orange;\n  border-right: none;\n  width: 100%;\n  padding: 10px;\n  color: green;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n\n  & svg {\n    fill: green;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  margin-bottom: 30px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject());

var ButtonRow = _styledComponents["default"].div(_templateObject2());

var PlayButton = _styledComponents["default"].div(_templateObject3());

var StopButton = _styledComponents["default"].div(_templateObject4());

var _default = function _default(_ref) {
  var chords = _ref.chords,
      activeIndex = _ref.activeIndex,
      play = _ref.play,
      stop = _ref.stop,
      getKeyChords = _ref.getKeyChords,
      changeChord = _ref.changeChord,
      removeChord = _ref.removeChord,
      addChord = _ref.addChord;
  console.log('->', activeIndex);
  return _react["default"].createElement(Wrapper, null, _react["default"].createElement(ButtonRow, null, _react["default"].createElement(PlayButton, {
    onClick: function onClick() {
      return play();
    }
  }, _react["default"].createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 41.999 41.999",
    width: "20px",
    height: "20px"
  }, _react["default"].createElement("path", {
    d: "M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.3970.06,0.568-0.177l29-20c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z"
  }))), _react["default"].createElement(StopButton, {
    onClick: function onClick() {
      return stop();
    }
  }, _react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    width: "16px",
    height: "16px",
    viewBox: "0 0 36 36"
  }, _react["default"].createElement("path", {
    d: "M35,0H1C0.448,0,0,0.447,0,1v34c0,0.553,0.448,1,1,1h34c0.552,0,1-0.447,1-1V1C36,0.447,35.552,0,35,0z"
  })))), !chords || chords.length === 0 ? _react["default"].createElement("span", null, " No Current Chords ") : chords.map(function (chordName, i) {
    return _react["default"].createElement(_ChordCard["default"], {
      index: i,
      active: activeIndex === i,
      changeChord: changeChord,
      addChord: addChord,
      getKeyChords: getKeyChords,
      chordName: chordName,
      removeChord: removeChord
    });
  }));
};

exports["default"] = _default;