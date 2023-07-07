import Header from 'components/Header/Header';
import Feed from 'components/Home/Feed/Feed';
import Write from 'components/Home/Write/Write';
import React from 'react';
import { styled } from 'styled-components';

function Home() {
  return (
    <>
      <Header />
      <StyledMain>
        <Feed />
        <Write />
      </StyledMain>
    </>
  );
}

export default Home;

const StyledMain = styled.main`
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
`;
