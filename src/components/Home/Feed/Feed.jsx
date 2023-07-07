import React from 'react';
import { styled } from 'styled-components';
import ExamplePosts from './ExamplePosts';

function Feed() {
  return (
    <StyledDiv>
      <ExamplePosts />
    </StyledDiv>
  );
}

export default Feed;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  overflow: auto;
  margin: 2rem;
  padding: 1rem;
`;
