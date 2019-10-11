const patternBank = {
  chacha: (measures) => {
    const returnArray = []
    measures.forEach(measure => {
      [1,2,3,4].forEach((num, i) => {
        returnArray.push({
          time: `${measure.time}:${i}`,
          notes: measure.notes,
          duration: '8n'
        })
      })

    })
    return returnArray;
  },

  foo: (measures) => {
    let returnArray = []
    try {
      measures.forEach(measure => {

        returnArray = returnArray.concat([
            {
              time: `${measure.time}:0:1`,
              notes: measure.notes,
              duration: '8n'
            },
            {
              time: `${measure.time}:0:2`,
              notes: measure.notes,
              duration: '8n'
            },
            {
              time: `${measure.time}:1`,
              notes: measure.notes,
              duration: '4n'
            },
            {
              time: `${measure.time}:2:1`,
              notes: measure.notes,
              duration: '8n'
            },
            {
              time: `${measure.time}:2:2`,
              notes: measure.notes,
              duration: '8n'
            },
            {
              time: `${measure.time}:3`,
              notes: measure.notes,
              duration: '4n'
            }
          ]);

      })
    } catch (e) {
      console.log(e)
    }


    console.log(returnArray, measures)
    return returnArray;
  }
}

export const getPattern = (key="default", measures) => {
  console.log('KEY', key, patternBank[key])
  return patternBank[key](measures);
}