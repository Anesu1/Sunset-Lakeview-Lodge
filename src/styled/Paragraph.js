import styled from "styled-components";
import React from "react";

const Wrapper = styled.p`
  font-family: ${(props) => props.theme.fam.renner};
  font-size: 15px;
  line-height: 1.3;
`;

function Paragraph({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Paragraph;
