import React from 'react'
import styled from 'styled-components'

const Cello = styled.div`
  /* border-radius: 10%; */
  border: solid;
  color: ${({cellVal}) => {
    if (cellVal === 2) return 'salmon'
    else if (cellVal === 1) return 'orange'
    else return 'grey'
  }};
  background: ${({cellVal}) => {
    if (cellVal === 2) return 'blue'
    else if (cellVal === 1) return 'orange'
    else return 'white'
  }};
  width: 40px;
  height: 40px;
`

const Cell = ({cellVal, index, onClick, onDragOver, mouseLeave, cellMouseDown}) => {
  return (
    <Cello
      onClick={()=>{onClick(index, cellVal)}}
      onMouseDown={()=>{cellMouseDown(index, cellVal)}}
      onMouseOver={()=>{onDragOver(index, cellVal)}}
      onMouseOut={()=>{mouseLeave(index, cellVal)}}
      cellVal={cellVal}
    />
  )
}

export default Cell;