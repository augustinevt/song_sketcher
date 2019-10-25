import React, {useState} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
`
const Button = styled.div`
  margin: 4px;
  color: ${ ({active}) => (active) ? "red" : "blue"};
`

export default ({sym, handler, active}) => {
  return (
    <Wrapper >
      <Button active={active} onClick={() => handler(sym)}>{sym}</Button>
    </Wrapper>
  )
}