import React from 'react';
import { styled } from 'styled-components';

import PostTop from './PostTop';
import PostContent from './PostContent';
import PostBottom from './PostBottom';

function Post() {
  return (
    <StyledPost className="feed">
      <PostTop />
      <PostContent />
      <PostBottom />
    </StyledPost>
  );
}

export default Post;

const StyledPost = styled.div`
  width: 600px;
  color: rgb(33, 43, 54);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: hidden;
  position: relative;
  box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
    rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
  border-radius: 16px;
`;
