import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Option = styled.div`
  margin: 1%;
  font-size: 1.2rem;
  text-decoration: ${({active}) => active ? 'underline' : 'none'};
`

export default ({options, onSelect, currentValue, label}) => {
  const showLabel = false
  return (
    <Wrapper>
      {
        showLabel && <div> {label} : {currentValue} </div>
      }

      {
        options.map(({label, value}) => <Option
          key={`${label}-${value}`}
          active={currentValue === value}
          onClick={() => onSelect(value)}>
            {label}
          </Option>)
      }
    </Wrapper>
  )
}