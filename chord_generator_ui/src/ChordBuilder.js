import React, {useState} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  /* border: solid; */
`
const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* border: solid; */
`
const Display = styled.div`
  display: flex;
  margin: 20px;
  /* border: solid; */
`
const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  /* border: solid; */
`

import SymbolButton from './SymbolButton'

export default ({handler}) => {

  const [root, setRoot] = useState("A")
  const [shift, setShift] = useState("#")
  const [quality, setQuality] = useState("sus")
  const [additive, setAdditive] = useState("")

  const roots = ["A", "B", "C", "D", "E", "F", "G"]
  const shifts = ["","b", "#"]
  const qualities = ["m", "dim", "sus", "aug"]

  const addNotes = {
    sus: [],
    dim: [''],
    min: [],
    aug: ['7'],
    '': ['7','5','9'],
  }

  return (
    <Wrapper>
      <Buttons>
        <ButtonWrapper>
          {
            roots.map(sym => <SymbolButton
              active={(sym !== root)}
              sym={sym}
              handler={(sym) => {
                setRoot(sym)
              }
            }/>)
          }
        </ButtonWrapper>

        <ButtonWrapper>
          {
            shifts.map(sym => <SymbolButton
              sym={sym}
              active={(sym !== shift)}
              handler={(sym) => {
                (sym !== shift) ? setShift(sym) : setShift("")
              }}
            />)
          }
        </ButtonWrapper>

        <ButtonWrapper>
          {
            qualities.map(sym => <SymbolButton
                active={ (sym !== quality)}
                sym={sym}
                handler={(sym) => {
                  (sym !== quality) ? setQuality(sym) : setQuality("")
                }}
            />)
          }
        </ButtonWrapper>

        <ButtonWrapper>
        {
          addNotes[quality].map(sym => <SymbolButton
              active={ (sym !== quality)}
              sym={sym}
              handler={(sym) => {
                (sym !== additive) ? setAdditive(sym) : setAdditive("")
              }}
          />)
        }
        </ButtonWrapper>
      </Buttons>

      <Display>

        <span>{root}</span>
        <span>{shift}</span>
        <span>{quality}</span>
        <span>{additive}</span>

      </Display>

      <button onClick={() => {handler(`${root}${shift}${quality}${additive}`)}}> Done </button>

    </Wrapper>
  )
}