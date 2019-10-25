# Example

```shell
$ npm install chord-generator --save
```

```javascript

const { thing } = require('')

// ES2015

import { thing  } from 'package-name'

const { thing } = require('package-name')

const {
  getRandomProgression,
  getAllChords,
  chordNotes
} = chordGenerator;

```

```javascript
getRandomProgression(
  { key: 'A#', mode: 'mixolydian' }
))

```
returns
```javascript
{
  id: "30d2c8e4-aa54-49ae-b2a6-e02e878f330f",
  chordNames: ["Bm7", "GMaj7", "D7", "Am7", "D7"]
  chordNotes: [
    ["B4", "D4", "F#4", "A4"],
    ["G4", "B4", "D4", "F#4"],
    ["D4", "F#4", "A4", "C4"],
    ["A4", "C4", "E4", "G4"],
    ["D4", "F#4", "A4", "C4"]
  ],
  theoryAttrs: {key: "D", mode: "mixolydian"}
}
```

```javascript
  getChordNotes(
    { key: 'A', mode: 'mixolydian' }
  ))
```
returns
```javascript
  ["D4", "F#4", "A4", "C4"]
```

```javascript
  getAllChords(
    { key: 'A', mode: 'mixolydian' }
  ))
```
returns:
```javascript
  ["D7", "Em7", "F#m7b5", "GMaj7", "Am7", "Bm7", "CMaj7"]
```

