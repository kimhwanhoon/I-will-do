import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from 'styled-components';
function PostTop() {
  return (
    <StyledDiv className="post-top-container">
      <img
        src="https://i.ibb.co/wK9wmGG/anonymous-avatar-icon-25.png"
        alt=""
        className="post-top-profile-photo"
      />
      <div className="post-top-info-div">
        <h1>Jaydon Frankie</h1>
        <p className="post-top-date">06 Jul 2023</p>
      </div>
      <MoreVertIcon className="post-top-menu-icon" />
    </StyledDiv>
  );
}

export default PostTop;

const StyledDiv = styled.div`
  display: flex;
  padding: 24px 24px 0px;
  align-items: center;

  .post-top-profile-photo {
    width: 38px;
    height: 38px;
    border-radius: 100px;
    margin-right: 1rem;
  }
  .post-top-menu-icon {
    color: var(--color_deep);
  }
  .post-top-info-div {
    flex: 1 1 auto;
    line-height: 1.5;
  }
  h1 {
    font-weight: 600;
    font-size: 1rem;
  }
  .post-top-date {
    font-size: 0.8rem;
    color: #888;
  }
`;
