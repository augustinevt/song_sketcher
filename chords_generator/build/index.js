"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chordGenerator = _interopRequireDefault(require("./chordGenerator"));

var _patternMaker = _interopRequireDefault(require("./patternMaker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  chordGenerator: _chordGenerator["default"],
  patternMaker: _patternMaker["default"]
};
exports["default"] = _default;