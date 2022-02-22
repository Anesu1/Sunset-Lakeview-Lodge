import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display:flex;
  align-items:center;
  justify-content:center;
  height:100vh;
  text-align:center;
  flex-direction:column;
  width:100vw;
  background:linear-gradient(to bottom, rgba(44, 65, 60, 0.3),rgba(44, 65, 60, 0.3)), url("./imgs/HP Sunsetlakeview/HP Sunsetlakeview/Mainhouse/Mainhouse.jpg");
color:#ffffff;
background-size:cover;
  h1{
    font-family:${props => props.theme.fam.renner};
    font-size:140px;
  }
  h3{
    font-family:${props => props.theme.fam.renner};
    font-size:30px;
  }
  
`

function Error() {
  return (
    <Wrapper>
      <h1>404</h1>
      <h3>Error Page</h3>
      
    </Wrapper>
  )
}

export default Error
