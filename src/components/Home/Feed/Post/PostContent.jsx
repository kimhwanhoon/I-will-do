import React from 'react';
import { styled } from 'styled-components';

function PostContent() {
  return (
    <StyledDiv className="post-content-container">
      <p className="post-content-p">
        The sun slowly set over the horizon, painting the sky in vibrant hues of
        orange and pink.
      </p>
      <img
        className="post-img"
        alt="https://api-prod-minimal-v510.vercel.app/assets/images/travel/travel_2.jpg"
        src="https://api-prod-minimal-v510.vercel.app/assets/images/travel/travel_2.jpg"
      />
    </StyledDiv>
  );
}

export default PostContent;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .post-content-p {
    line-height: 1.5;
    font-size: 0.875rem;
    font-weight: 400;
    padding: 24px 24px 16px;
  }

  .post-img {
    width: 95%;
    height: 350px;
    object-fit: cover;
    border-radius: 12px;
  }
`;
