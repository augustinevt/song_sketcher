import React, { useState } from 'react'
import styled from 'styled-components'

import ChordBuilder from './ChordBuilder'

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  /* border: 1px solid blue; */
  display: flex;
  flex-wrap: no-wrap;
  position: relative;
`

const ChordMenu = styled.div`
  display: flex;
`

const RemCol = styled.div`
  display: flex;
  /* border: solid; */
  flex-wrap: wrap;
  width: 20px;
`
const ChordCol = styled.div`
  display: flex;
  /* border: solid; */
  flex-wrap: wrap;
  width: 100%;
`

const Row = styled.div`
  width: 100%;
  display: flex;
  /* border: solid; */
`

const Button = styled.div`
  border: 1px solid orange;
  margin-bottom: 5px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AddButton = styled.div`
  /* position: absolute; */
  border: 1px solid orange;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

`

const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  /* padding-right: 20px; */
  /* border: solid; */
`

const ButtonWrapper = styled.div`

  position: absolute;
  right: -25px;
  /* padding-left: 5px; */
`

const Card = styled.div`
  padding: 30px;
  position: relative;
  width: 100%;
  border: solid;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  color: ${props => props.active ? 'rgba(255, 103, 0, 1)' : 'rgba(255, 103, 0, .5)' };
`

export default ({chordName, active, getKeyChords, changeChord, addChord, removeChord, index}) => {

  const [changeOpen, toggleChange] = useState(false)
  const [addOpen, toggleAdd] = useState(false)
  const [inKeyOnly, toggleInKeyOnly] = useState(true)

  let chordMenu = null;

  if (inKeyOnly) {
    const ChordSelection = getKeyChords()

    chordMenu = Object.keys(ChordSelection).map( chordName => {
      const params = {name: chordName, index, notes: ChordSelection[chordName] }
      const onClick = () => {
          toggleChange(false)
          toggleAdd(false)
          changeOpen ? changeChord(params) : addChord(params)
        }

      return <div onClick={onClick}> {chordName} </div>
    })

  } else {

      const handler = (chordName) => {
        const params = {name: chordName, index }
        toggleChange(false)
        toggleAdd(false)
        changeOpen ? changeChord(params) : addChord(params)
      }

      chordMenu = <ChordBuilder handler={handler} />
  }

  return (
    <Wrapper>

        <ChordCol>
          <Row>

            <Card active={active}>
              {chordName}

              {
                !changeOpen && !addOpen ?
                  null
                :
                  <ChordMenu>
                    <Button onClick={()=> toggleInKeyOnly(!inKeyOnly)}> In Key only </Button>
                    {chordMenu}
                  </ChordMenu>
              }

            </Card>

          </Row>

          <Row>
            {
              !changeOpen && !addOpen ?
                <AddButtonWrapper>
                  <AddButton onClick={()=> toggleAdd(true)}> A </AddButton>
                </AddButtonWrapper>
              :
                null
            }
          </Row>
        </ChordCol>


          <ButtonWrapper>
            <Button onClick={()=> removeChord(index)}> x </Button>
            <Button onClick={()=> toggleChange(true)}> p </Button>
          </ButtonWrapper>



    </Wrapper>
  )
}