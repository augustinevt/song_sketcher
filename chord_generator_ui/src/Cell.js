import React from 'react'
import styled from 'styled-components'

const Cello = styled.div`
  border: solid;
  color: ${({cellVal}) => {
    if (cellVal === 2) return 'salmon'
    else if (cellVal === 1) return 'orange'
    else return 'grey'
  }};
  background: ${({cellVal}) => {
    if (cellVal === 2) return 'salmon'
    else if (cellVal === 1) return 'orange'
    else return 'white'
  }};
  width: 40px;
  height: 40px;
`

const Cell = ({cellVal, index, onDragOver, mouseLeave, cellMouseDown}) => {
  return (
    <Cello
      onMouseDown={()=>{cellMouseDown(index, cellVal)}}
      onMouseOver={()=>{onDragOver(index, cellVal)}}
      onMouseOut={()=>{mouseLeave(index, cellVal)}}
      cellVal={cellVal}
    />
  )
}

export default Cell;