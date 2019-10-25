"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.beats = exports.stopSectionChain = exports.playSectionChain = exports.stopWorkbench = exports.playWorkbench = void 0;

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
  console.log('pattern', pattern);
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
  }); // should I make a different pattern thing? why is the performace so poor?

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

var playSectionChain = function playSectionChain(_ref2) {
  var sections = _ref2.sections,
      stateUpdater = _ref2.stateUpdater;

  if (sections.length === 0) {
    return;
  }

  var playableSections = [];
  sections.reduce(function (runningMeasures, section) {
    section.chordNotes.forEach(function (notes, j) {
      playableSections.push({
        time: "".concat(runningMeasures, ":0"),
        notes: notes
      });
      runningMeasures += 1;
    });
    return runningMeasures;
  }, 0);
  var part = new _tone["default"].Part(function (time, value) {
    stateUpdater({
      i: time
    });
    console.log(value.notes);
    synth.triggerAttackRelease(value.notes, "4n", time);
  }, playableSections);

  _tone["default"].Transport.cancel();

  _tone["default"].Transport.position = 0;

  _tone["default"].Transport.start();

  part.start(0);
  obj.currSectionChain = part;
};

exports.playSectionChain = playSectionChain;

var stopSectionChain = function stopSectionChain() {
  obj.currSectionChain.stop();
  obj.currSectionChain.dispose();
}; //////// BEATS


exports.stopSectionChain = stopSectionChain;
var kick = new _tone["default"].MembraneSynth({
  'envelope': {
    'sustain': 0,
    'attack': 0.02,
    'decay': 0.8
  },
  'octaves': 10
}).toMaster();
var snare = new _tone["default"].NoiseSynth({
  'volume': -5,
  'envelope': {
    'attack': 0.001,
    'decay': 0.2,
    'sustain': 0
  },
  'filterEnvelope': {
    'attack': 0.001,
    'decay': 0.1,
    'sustain': 0
  }
}).toMaster();
var beatBank = {
  "default": {
    kick: [["0:0", "C2"], ["0:1", "C2"], ["0:2", "C3"], ["0:3", "G2"], ["1:0", "C2"], ["1:1", "C2"], ["1:2", "C3"], ["1:3", "G2"], ["2:0", "C2"], ["2:1", "C2"], ["2:2", "C3"], ["2:3", "G2"], ["3:0", "C2"], ["3:1", "C2"], ["3:2", "C3"], ["3:3", "G2"]],
    snare: [["0:0:2", "C2"], ["0:1:2", "C3"], ["0:2:2", "G2"], ["0:3:2", "G2"], ["1:0:2", "C2"], ["1:1:2", "C3"], ["1:2:2", "G2"], ["1:3:2", "G2"], ["2:0:2", "C2"], ["2:1:2", "C3"], ["2:2:2", "G2"], ["2:3:2", "G2"], ["3:0:2", "C2"], ["3:1:2", "C3"], ["3:2:2", "G2"], ["3:3:2", "G2"], ["3:3:3", "G2"]]
  },
  yas: {
    kick: [["0:3", "C2"], ["0:2", "C2"], ["0:2", "C3"], ["0:7", "G2"], ["1:0", "C2"], ["1:1", "C2"], ["1:2", "C3"], ["1:3", "G2"], ["2:4", "C2"], ["2:1", "C2"], ["2:2", "C3"], ["2:3", "G2"], ["3:0", "C2"], ["3:1", "C2"], ["3:2", "C3"], ["3:3", "G2"]],
    snare: [["0:1:2", "C2"], ["0:1:2", "C3"], ["0:1:3", "G2"], ["0:3:2", "G2"], ["1:0:2", "C2"], ["1:1:2", "C3"], ["1:2:2", "G2"], ["1:3:2", "G2"], ["2:0:2", "C2"], ["2:1:2", "C3"], ["2:2:2", "G2"], ["2:3:2", "G2"], ["3:0:2", "C2"], ["3:1:2", "C3"], ["3:2:2", "G2"], ["3:3:2", "G2"], ["3:3:3", "G2"]]
  }
};

var beats = function beats() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
  var beat = beatBank[key];
  var kickPart = new _tone["default"].Part(function (time) {
    kick.triggerAttackRelease('C2', '8n', time);
  }, beat.kick);
  var snarePart = new _tone["default"].Part(function (time) {
    snare.triggerAttackRelease(time);
  }, beat.snare);
  kickPart.loop = true;
  kickPart.loopStart = 0;
  kickPart.loopEnd = "4m";
  kickPart.start(0);
  snarePart.loop = true;
  snarePart.loopStart = 0;
  snarePart.loopEnd = "4m";
  snarePart.start(0);

  _tone["default"].Transport.start();
};

exports.beats = beats;
var _default = {
  beats: beats,
  stopWorkbench: stopWorkbench,
  playWorkbench: playWorkbench,
  stopSectionChain: stopSectionChain,
  playSectionChain: playSectionChain
};
exports["default"] = _default;