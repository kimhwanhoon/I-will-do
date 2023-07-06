import React from 'react';
import { styled } from 'styled-components';

function Write() {
  return (
    <StyledDiv>
      <textarea cols="30" rows="10" placeholder="write"></textarea>
    </StyledDiv>
  );
}

export default Write;

const StyledDiv = styled.div`
  width: 300px;
  height: 300px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  textarea {
    resize: none;
    border-radius: 12px;
    outline: none;
  }
`;
