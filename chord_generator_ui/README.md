# Example

```shell
$ npm install package-name --save
```

```javascript
const { thing } = require('')

// ES2015
import MusicUI from 'chord-sketch-ui'

const {
  ProgressionChordOptions,
  ProgressionWorkbench,
  ProgressionPatternOptions,
  GenerateButton,
} = MusicUI

<ProgressionChordOptions
  keyVal={key}
  modeVal={mode}
  tempoVal={tempo}
  onKeyChange={ value => setKey(value) }
  onModeChange={ value => setMode(value)}
  onTempoChange={ value => setTempo(parseInt(value))}
/>

<ProgressionPatternOptions
  onChange={(pattern) => {setChordPattern(pattern)}}
/>

<ProgressionWorkbench
  getKeyChords={() => getAllChords({mode, key})}
  changeChord={({name, notes, index}) => {
    const newChords = {...chords}
    const newNotes = chordNotes(name)
    newChords.chordNames[index] = name
    newChords.chordNotes[index] = newNotes
    setChords(newChords)
  }}

  addChord={
    ({name, notes, index}) => {
      const newChords = {...chords}
      const newNotes = chordNotes(name)
      newChords.chordNames.splice(index+1,0,name)
      newChords.chordNotes.splice(index+1,0,newNotes)
      setChords(newChords)
    }
  }

  removeChord={(index) => {
    const newChords = {...chords}
    newChords.chordNames.splice(index,1)
    newChords.chordNotes.splice(index,1)
    setChords(newChords)
  }}

  chords={chords.chordNames}

  play={() => playWorkbench({
    sections: [chords],
    stateUpdater: (i) => {setActiveIndex(i)},
    params: { pattern: chordPattern, tempo }
  })}

  activeIndex={activeIndex}

  stop={stopWorkbench}
/>

```

