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

export default {
  stopWorkbench,
  playWorkbench
}