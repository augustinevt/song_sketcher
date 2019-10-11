"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPattern = void 0;
var patternBank = {
  chacha: function chacha(measures) {
    var returnArray = [];
    measures.forEach(function (measure) {
      [1, 2, 3, 4].forEach(function (num, i) {
        returnArray.push({
          time: "".concat(measure.time, ":").concat(i),
          notes: measure.notes,
          duration: '8n'
        });
      });
    });
    return returnArray;
  },
  foo: function foo(measures) {
    var returnArray = [];

    try {
      measures.forEach(function (measure) {
        returnArray = returnArray.concat([{
          time: "".concat(measure.time, ":0:1"),
          notes: measure.notes,
          duration: '8n'
        }, {
          time: "".concat(measure.time, ":0:2"),
          notes: measure.notes,
          duration: '8n'
        }, {
          time: "".concat(measure.time, ":1"),
          notes: measure.notes,
          duration: '4n'
        }, {
          time: "".concat(measure.time, ":2:1"),
          notes: measure.notes,
          duration: '8n'
        }, {
          time: "".concat(measure.time, ":2:2"),
          notes: measure.notes,
          duration: '8n'
        }, {
          time: "".concat(measure.time, ":3"),
          notes: measure.notes,
          duration: '4n'
        }]);
      });
    } catch (e) {
      console.log(e);
    }

    console.log(returnArray, measures);
    return returnArray;
  }
};

var getPattern = function getPattern() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default";
  var measures = arguments.length > 1 ? arguments[1] : undefined;
  console.log('KEY', key, patternBank[key]);
  return patternBank[key](measures);
};

exports.getPattern = getPattern;