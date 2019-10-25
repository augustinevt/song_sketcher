"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getRandomProgression = exports.getAllChords = void 0;

var Key = _interopRequireWildcard(require("tonal-key"));

var Chord = _interopRequireWildcard(require("tonal-chord"));

var _chordDictionary = require("@tonaljs/chord-dictionary");

var _note = require("@tonaljs/note");

var _uuid = _interopRequireDefault(require("uuid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var progBank = [["I", "V", "vi", "IV"], ["V", "vi", "IV"], ["vi", "IV", "I", "V", "V"]];

var getAllChords = function getAllChords(_ref) {
  var key = _ref.key,
      mode = _ref.mode,
      theme = _ref.theme;
  var chordNames = Key.chords("".concat(key, " ").concat(mode));
  var returnObject = {};
  chordNames.forEach(function (chordName) {
    returnObject[chordName] = Chord.notes(chordName).map(function (note) {
      return note + '4';
    });
  });
  return returnObject;
};

exports.getAllChords = getAllChords;

var getRandomProgression = function getRandomProgression(_ref2) {
  var key = _ref2.key,
      mode = _ref2.mode;
  var randProgI = Math.floor(Math.random() * progBank.length);
  var chordNames = Key.chords("".concat(key, " ").concat(mode), progBank[randProgI]);
  var chordNotes = chordNames.map(function (chord) {
    return Chord.notes(chord).map(function (note) {
      return note + '4';
    });
  });
  return {
    id: (0, _uuid["default"])(),
    chordNames: chordNames,
    chordNotes: chordNotes,
    theoryAttrs: {
      key: key,
      mode: mode
    }
  };
};

exports.getRandomProgression = getRandomProgression;
var _default = {
  getRandomProgression: getRandomProgression,
  getAllChords: getAllChords,
  chordNotes: function chordNotes(chord) {
    return Chord.notes(chord).map(function (note) {
      return (0, _note.simplify)(note) + '4';
    });
  }
};
exports["default"] = _default;