import React from 'react'
import styled from 'styled-components'

import ChordCard from './ChordCard'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const ButtonRow = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
`

const PlayButton = styled.div`
  border: 2px solid orange;
  border-right: none;
  width: 100%;
  padding: 10px;
  color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & svg {
    fill: green;
  }
`

const StopButton = styled.div`
  border: 2px solid orange;
  width: 100%;
  padding: 10px;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & svg {
    fill: red;
  }
`

export default ({chords, activeIndex, play, stop, getKeyChords, changeChord, removeChord, addChord}) => {

  console.log('->',activeIndex)
  return (
    <Wrapper>

      <ButtonRow>
        <PlayButton onClick={() => play()}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 41.999 41.999"
            width="20px"
            height="20px"
          >
            <path d="M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.3970.06,0.568-0.177l29-20c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z"
            />
          </svg>
        </PlayButton>
        <StopButton onClick={() => stop()}>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="16px"
            height="16px"
            viewBox="0 0 36 36"
          >
             <path d="M35,0H1C0.448,0,0,0.447,0,1v34c0,0.553,0.448,1,1,1h34c0.552,0,1-0.447,1-1V1C36,0.447,35.552,0,35,0z"/>
          </svg>
        </StopButton>
      </ButtonRow>

      {
        (!chords || chords.length === 0) ?
          <span> No Current Chords </span> :
          chords.map((chordName, i) => <ChordCard
            index={i}
            active={(activeIndex === i)}
            changeChord={changeChord}
            addChord={addChord}
            getKeyChords={getKeyChords}
            chordName={chordName}
            removeChord={removeChord}
          />
        )
      }


    </Wrapper>
  )
}
