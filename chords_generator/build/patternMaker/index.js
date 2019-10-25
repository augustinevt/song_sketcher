"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.stopWorkbench = exports.playWorkbench = void 0;

var _tone = _interopRequireDefault(require("tone"));

var _patternMaker = require("./patternMaker");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var synth = new _tone["default"].PolySynth(3, _tone["default"].Synth).toMaster();
var obj = {
  currProgWork: null,
  currSectionChain: null
};

var playWorkbench = function playWorkbench(_ref) {
  var sections = _ref.sections,
      stateUpdater = _ref.stateUpdater,
      params = _ref.params;

  if (sections.length === 0) {
    return;
  }

  var loopLength = Object.keys(sections[0].chordNames).length;
  var section = sections[0];
  var chords = section.chordNotes.map(function (notes, i) {
    return {
      time: "".concat(i),
      notes: notes
    };
  });
  var pattern = params.pattern,
      measureCount = params.measureCount,
      tempo = params.tempo;
  var newPattern = [];
  chords.forEach(function (measure, i) {
    pattern.forEach(function (event) {
      var time = parseInt(i) + event.time;
      newPattern.push({
        time: time,
        notes: measure.notes,
        duration: event.duration,
        index: i
      });
    });
  });
  var part = new _tone["default"].Part(function (time, value) {
    stateUpdater(value.index);
    synth.triggerAttackRelease(value.notes, value.duration, time);
  }, newPattern);

  _tone["default"].Transport.clear();

  _tone["default"].Transport.bpm.value = parseInt(tempo);

  _tone["default"].Transport.start();

  part.loop = true;
  part.loopEnd = "".concat(loopLength, "m");
  part.start();
  obj.currProgWork = part;
};

exports.playWorkbench = playWorkbench;

var stopWorkbench = function stopWorkbench() {
  obj.currProgWork.stop();
  obj.currProgWork.dispose();

  _tone["default"].Transport.stop();
};

exports.stopWorkbench = stopWorkbench;
var _default = {
  stopWorkbench: stopWorkbench,
  playWorkbench: playWorkbench
};
exports["default"] = _default;