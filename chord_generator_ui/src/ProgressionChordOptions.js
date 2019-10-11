import React, {useState} from 'react'
import styled from 'styled-components'

import Selector from './Selector'

const Button = styled.button`

`

const Select = styled.select`
  /* border: solid; */
  /* width: 100%; */
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  width: 100%;
`

const SelectTabLabels = styled.div`
  flex-wrap: nowrap;
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* border: solid; */
  margin-bottom: 30px;
  font-size: 1.3rem;
`

const SelectTabLabel = styled.div`

`

const SelectCurrVal = styled.span`
  text-decoration: underline;
`

const SelectTabBody = styled.div`
  width: 100%;
  height: 100px;
`

export default ({onKeyChange, onModeChange, onTempoChange, onSubmit, keyVal, modeVal, tempoVal}) => {

  const [select, setSelect] = useState(1)

  const getJSX = () => {
    if (select === 1) {
      return (
        <Selector options={[
            {label: 'A', value: 'A'},
            {label: 'B', value: 'B'},
            {label: 'C', value: 'C'},
            {label: 'D', value: 'D'},
            {label: 'E', value: 'E'},
            {label: 'F', value: 'F'},
            {label: 'G', value: 'G'}
          ]}
          key={'keySelector'}
          label={"Key"}
          currentValue={keyVal}
          onSelect={ onKeyChange }
        />
      )
    } else if (select === 2) {
      return (
        <Selector options={[
            {label: 'Ionian', value: 'ionian'},
            {label: 'Dorian', value: 'dorian'},
            {label: 'Locrian', value: 'locrian'},
            {label: 'Phrygian', value: 'phrygian'},
            {label: 'Mixolydian', value: 'mixolydian'},
            {label: 'Aeolian', value: 'aeolian'},
            {label: 'Lydian', value: 'lydian'},
          ]}
          key={'modeSelector'}
          label={"Mode"}
          currentValue={modeVal}
          onSelect={ onModeChange }
        />

      )
    } else if (select === 3) {
      return (
        <Selector options={[
            {label: '60', value: '60'},
            {label: '120', value: '120'},
            {label: '180', value: '180'}
          ]}
          key={'tempoSelector'}
          label={"Tempo"}
          currentValue={tempoVal.toString()}
          onSelect={onTempoChange}
        />
      )
    }
  }

  return (
    <Wrapper>

      <SelectTabLabels>
        <SelectTabLabel onClick={() => setSelect(1)}> Key : <SelectCurrVal> {keyVal} </SelectCurrVal> </SelectTabLabel>
        <SelectTabLabel onClick={() => setSelect(2)}> Mode : <SelectCurrVal> {modeVal.charAt(0).toUpperCase() + modeVal.slice(1)} </SelectCurrVal> </SelectTabLabel>
        <SelectTabLabel onClick={() => setSelect(3)}> Tempo : <SelectCurrVal> {tempoVal} </SelectCurrVal> </SelectTabLabel>
      </SelectTabLabels>

      <SelectTabBody>
        { getJSX() }
      </SelectTabBody>

    </Wrapper>
  )
}