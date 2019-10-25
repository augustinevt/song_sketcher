import * as Key from 'tonal-key';
import * as Chord from 'tonal-chord';

import { entries } from "@tonaljs/chord-dictionary";
import { simplify } from "@tonaljs/note";

import uuid from 'uuid';

const progBank = [
  ["I","V","vi","IV"],
  ["V","vi","IV"],
  ["vi","IV","I","V","V"],
];

export const getAllChords = ({key, mode, theme}) => {
  const chordNames = Key.chords(
    `${key} ${mode}`
  );

  const returnObject = {};

  chordNames.forEach(chordName => {
    returnObject[chordName] = Chord.notes(chordName).map( note => note + '4');
  })

  return returnObject;
}

export const getRandomProgression = (({key, mode}) => {
  const randProgI = Math.floor(Math.random() * progBank.length);

  const chordNames = Key.chords(
    `${key} ${mode}`,
     progBank[randProgI]
  );

  const chordNotes = chordNames.map((chord) => {
    return Chord.notes(chord).map(note => note + '4');
  });

  return {
    id: uuid(),
    chordNames,
    chordNotes,
    theoryAttrs: {
      key,
      mode,
    }
  }
});

export default {
  getRandomProgression,
  getAllChords,
  chordNotes: (chord) => Chord.notes(chord).map( note => simplify(note) + '4'),
}