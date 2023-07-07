import React from 'react';
import { styled } from 'styled-components';
import Post from './Post/Post';

function ExamplePosts() {
  return (
    <StyledDiv>
      <Post />
      <Post />
    </StyledDiv>
  );
}

export default ExamplePosts;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-right: 3rem;
`;
