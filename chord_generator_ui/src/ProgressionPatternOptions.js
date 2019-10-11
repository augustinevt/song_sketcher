import React from 'react'
import styled from 'styled-components'

import PatternManager from './PatternManager'

const Wrapper = styled.div`
  width: 100%;
`

export default ({chords, onChange}) => {
  return (
    <Wrapper>
      <PatternManager
        handler={(cells) => {
          onChange(cells)
        }}
      />
    </Wrapper>
  )
}
