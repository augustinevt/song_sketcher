import Tone from 'tone';
import { getPattern } from './patternMaker';

let synth = new Tone.PolySynth(3, Tone.Synth).toMaster();
let obj = {
  currProgWork: null,
  currSectionChain: null
};

export const playWorkbench = ({sections, stateUpdater, params}) => {

  if (sections.length === 0) {
    return;
  }

  const loopLength = Object.keys(sections[0].chordNames).length

  const section = sections[0];
  const chords = section.chordNotes.map((notes, i) => {
    return {
      time: `${i}`,
      notes
    };
  });

  const {pattern, measureCount, tempo} = params;

  const newPattern = [];

  chords.forEach((measure, i) => {
    pattern.forEach(event => {

      let time = parseInt(i) + event.time

      newPattern.push({
        time,
        notes: measure.notes,
        duration: event.duration,
        index: i
      })
    })
  })

  // should I make a different pattern thing? why is the performace so poor?

  console.log(newPattern)

  const part = new Tone.Part((time, value) => {
      stateUpdater(value.index)
      synth.triggerAttackRelease(value.notes, value.duration, time);
    },
    newPattern
  );

  Tone.Transport.clear();
  Tone.Transport.bpm.value = parseInt(tempo);
  Tone.Transport.start();
  part.loop = true;
  part.loopEnd = `${loopLength}m`;
  part.start();

  obj.currProgWork = part;
};

export const stopWorkbench = () => {
  obj.currProgWork.stop();
  obj.currProgWork.dispose();
  Tone.Transport.stop();
};

export const playSectionChain = ({sections, stateUpdater}) => {

  if (sections.length === 0) {
    return;
  }

  const playableSections = [];

  sections.reduce((runningMeasures, section) => {

    section.chordNotes.forEach((notes, j) => {

      playableSections.push({
          time: `${runningMeasures}:0`,
          notes,
      })

      runningMeasures += 1;
    })

    return runningMeasures;
  }, 0)

  const part = new Tone.Part((time, value) => {
      stateUpdater({i: time})
      console.log(value.notes)
      synth.triggerAttackRelease(value.notes, "4n", time);
    },
    playableSections
  );

  Tone.Transport.cancel();
  Tone.Transport.position = 0;
  Tone.Transport.start();
  part.start(0);

  obj.currSectionChain = part;
}

export const stopSectionChain = () => {
  obj.currSectionChain.stop();
  obj.currSectionChain.dispose();
};

//////// BEATS

var kick = new Tone.MembraneSynth({
  'envelope' : {
    'sustain' : 0,
    'attack' : 0.02,
    'decay' : 0.8
  },
  'octaves' : 10
}).toMaster();

var snare = new Tone.NoiseSynth({
  'volume' : -5,
  'envelope' : {
    'attack' : 0.001,
    'decay' : 0.2,
    'sustain' : 0
  },
  'filterEnvelope' : {
    'attack' : 0.001,
    'decay' : 0.1,
    'sustain' : 0
  }
}).toMaster();

const beatBank = {
  default: {
    kick: [
      ["0:0", "C2"],["0:1", "C2"], ["0:2", "C3"], ["0:3", "G2"],
      ["1:0", "C2"],["1:1", "C2"], ["1:2", "C3"], ["1:3", "G2"],
      ["2:0", "C2"],["2:1", "C2"], ["2:2", "C3"], ["2:3", "G2"],
      ["3:0", "C2"],["3:1", "C2"], ["3:2", "C3"], ["3:3", "G2"]
    ],
    snare: [
      ["0:0:2", "C2"], ["0:1:2", "C3"], ["0:2:2", "G2"], ["0:3:2", "G2"],
      ["1:0:2", "C2"], ["1:1:2", "C3"], ["1:2:2", "G2"],["1:3:2", "G2"],
      ["2:0:2", "C2"], ["2:1:2", "C3"], ["2:2:2", "G2"],["2:3:2", "G2"],
      ["3:0:2", "C2"], ["3:1:2", "C3"], ["3:2:2", "G2"],["3:3:2", "G2"], ["3:3:3", "G2"]
    ]
  },
  yas: {
    kick: [
      ["0:3", "C2"],["0:2", "C2"], ["0:2", "C3"], ["0:7", "G2"],
      ["1:0", "C2"],["1:1", "C2"], ["1:2", "C3"], ["1:3", "G2"],
      ["2:4", "C2"],["2:1", "C2"], ["2:2", "C3"], ["2:3", "G2"],
      ["3:0", "C2"],["3:1", "C2"], ["3:2", "C3"], ["3:3", "G2"]
    ],
    snare: [
      ["0:1:2", "C2"], ["0:1:2", "C3"], ["0:1:3", "G2"], ["0:3:2", "G2"],
      ["1:0:2", "C2"], ["1:1:2", "C3"], ["1:2:2", "G2"],["1:3:2", "G2"],
      ["2:0:2", "C2"], ["2:1:2", "C3"], ["2:2:2", "G2"],["2:3:2", "G2"],
      ["3:0:2", "C2"], ["3:1:2", "C3"], ["3:2:2", "G2"],["3:3:2", "G2"], ["3:3:3", "G2"]
    ]
  }
}


export const beats = (key = 'default') => {

  const beat = beatBank[key];

  var kickPart = new Tone.Part((time) => {
      kick.triggerAttackRelease('C2', '8n', time);
    },
    beat.kick
  )

  var snarePart = new Tone.Part((time) => {
      snare.triggerAttackRelease(time);
    },
    beat.snare
  )

  kickPart.loop = true;
  kickPart.loopStart = 0;
  kickPart.loopEnd = "4m";
  kickPart.start(0);
  snarePart.loop = true;
  snarePart.loopStart = 0;
  snarePart.loopEnd = "4m";
  snarePart.start(0);

  Tone.Transport.start();

}

export default {
  beats,
  stopWorkbench,
  playWorkbench,
  stopSectionChain,
  playSectionChain
}