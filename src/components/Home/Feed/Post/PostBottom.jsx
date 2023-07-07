import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { styled } from 'styled-components';
function PostBottom() {
  const [like, setLike] = useState(false);
  return (
    <StyledDiv>
      <div className="post-bottom-like-div">
        <div className="post-bottom-like-group-div">
          {like ? (
            <FavoriteIcon
              className="unliked"
              style={{ color: '#ff5630' }}
              onClick={() => setLike(!like)}
            />
          ) : (
            <FavoriteBorderIcon
              className="liked"
              style={{ color: '#ff5630' }}
              onClick={() => setLike(!like)}
            />
          )}
          <p className="post-bottom-like">32 likes</p>
        </div>
      </div>
      <div className="post-bottom-comment-div">
        <div className="post-comment-div">
          <img
            src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_25.jpg"
            alt=""
            className="profile"
          />
          <div className="post-comment">
            <div className="post-comment-info">
              <h3>Lainey Davidson</h3> <span>04 Jul 2023</span>
            </div>
            <p>
              Etiam rhoncus. Nullam vel sem. Pellentesque libero tortor,
              tincidunt et, tincidunt eget, semper nec, quam. Sed lectus.
            </p>
          </div>
        </div>
        <div className="post-comment-div">
          <img
            src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_7.jpg"
            alt=""
            className="profile"
          />
          <div className="post-comment">
            <div className="post-comment-info">
              <h3>Cristopher Cardenas</h3> <span>04 Jul 2023</span>
            </div>
            <p>Praesent venenatis metus at</p>
          </div>
        </div>
      </div>
      <div className="post-bottom-write-comment-div">
        <img
          src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_5.jpg"
          alt=""
          className="profile"
        />
        <div className="post-bottom-input-div">
          <input type="text" />
          <AddPhotoAlternateIcon className="post-bottom-icons" />
          <InsertEmoticonIcon className="post-bottom-icons" />
        </div>
      </div>
    </StyledDiv>
  );
}

export default PostBottom;

const StyledDiv = styled.div`
  .post-bottom-like-div {
    display: flex;
    justify-content: space-between;
    margin: 1rem;
    align-items: center;
  }
  .post-bottom-like-group-div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .post-bottom-like {
    font-size: 0.925rem;
    color: var(--color_deep);
  }

  .unliked,
  .liked {
    width: 33px;
    height: 33px;
    cursor: pointer;
    border-radius: 100px;
    padding: 3px;
  }
  .unliked:hover,
  .liked:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  .profile {
    border-radius: 100px;
    width: 40px;
    height: 40px;
  }

  .post-comment-div {
    display: flex;
    gap: 1rem;
    margin: 1rem 1rem;
  }
  .post-comment {
    background-color: #f4f6f8;
    padding: 1rem;
    border-radius: 10px;
    width: 100%;
  }
  .post-comment h3 {
    font-weight: 600;
    font-size: 0.95rem;
    flex: 1 1 auto;
    padding-bottom: 1rem;
  }
  .post-comment span {
    color: #888;
    font-weight: 600;
    font-size: 0.8rem;
  }
  .post-comment p {
    font-weight: 400;
    font-size: 0.925rem;
    line-height: 1.3;
    color: #555;
  }
  .post-comment-info {
    display: flex;
  }
  .post-comment-info h3 {
    color: #222;
  }
  /* input div */
  .post-bottom-write-comment-div {
    display: flex;
    padding: 1rem;
    padding-top: 0;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
  .post-bottom-write-comment-div input {
    width: 100%;
    border: none;
    box-shadow: none;
    border-radius: 6px;
    font-style: inherit;
    font-variant: inherit;
    font-stretch: inherit;
    font-optical-sizing: inherit;
    font-kerning: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: var(--color_deep);
    padding: 4px 0px 5px;
    border: 0px;
    box-sizing: content-box;
    background: none;
    height: 1.4375em;
    margin: 0px;
    -webkit-tap-highlight-color: transparent;
    display: block;
    min-width: 0px;
    width: 100%;
    animation-name: mui-auto-fill-cancel;
    animation-duration: 10ms;
    line-height: 1.57143;
    font-size: 0.875rem;
    font-family: 'Public Sans', sans-serif;
    font-weight: 400;
    outline: none;
  }
  .post-bottom-input-div {
    line-height: 1.4375em;
    font-size: 1rem;
    font-family: 'Public Sans', sans-serif;
    font-weight: 400;
    color: rgb(33, 43, 54);
    box-sizing: border-box;
    position: relative;
    cursor: text;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    padding-left: 12px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid rgba(145, 158, 171, 0.32);
    padding-right: 10px;
    gap: 0.25rem;
  }
  .post-bottom-icons {
    color: var(--color_deep);
    cursor: pointer;
    transition: all 0.3s;
  }
  .post-bottom-icons:hover {
    transform: scale(1.08);
  }
`;
