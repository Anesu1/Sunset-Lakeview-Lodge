import React from 'react'
import loadingGif from '../images/gif/spinner.gif'
import styled from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
`

function Loading() {
  return (
    <Wrapper>
      
      <img src={loadingGif} alt="" />
    </Wrapper>
  )
}

export default Loading
