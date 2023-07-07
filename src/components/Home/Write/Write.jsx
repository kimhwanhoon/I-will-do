import React from 'react';
import { styled } from 'styled-components';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

function Write() {
  return (
    <StyledContainer>
      <h1>Post your goal today.</h1>
      <StyledDiv>
        <textarea
          cols="30"
          rows="10"
          placeholder="Share your goal for today."
        ></textarea>
        <div>
          <AddPhotoAlternateIcon className="write-icons icon-1" />
          <InsertEmoticonIcon className="write-icons icon-2" />
        </div>
        <button>Post</button>
      </StyledDiv>
    </StyledContainer>
  );
}

export default Write;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem;
  margin-top: 3rem;
  box-shadow: var(--input_shadow);
  padding: 2rem;
  height: 300px;
  border-radius: 15px;
  background-color: var(--input_background);

  h1 {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

const StyledDiv = styled.div`
  position: relative;
  textarea {
    outline: none;
    border: none;
    resize: none;
    background-color: transparent;
    box-shadow: none;
    width: 100%;
    color: var(--color_deep);
    font-weight: 400;
    font-size: 0.9rem;
  }
  button {
    padding: 0.5rem 1.3rem;
    font-size: 0.9rem;
    color: var(--inverted_color);
    background-color: var(--button_background);
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
  }
  button:hover {
    background-color: #454f5b;
    color: white;
  }
  .write-icons {
    position: absolute;
    bottom: 0;
    color: var(--color_deep);
    cursor: pointer;
    transition: all 0.3s;
  }
  .write-icons:hover {
    transform: scale(1.05);
  }
  .icon-1 {
    right: 0;
  }
  .icon-2 {
    right: 1.75rem;
  }
`;
