import React from 'react';
import { styled } from 'styled-components';

import ProfileMenu from './ProfileMenu';
import ThemeModeSwitch from './ThemeModeSwitch';

function Header() {
  return (
    <StyledHeader>
      <h1>Will.do</h1>
      <div id="header-right-div">
        <ThemeModeSwitch />
        <ProfileMenu />
      </div>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  height: 80px;
  box-shadow: 0 1px 3px 0px var(--color_light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  h1 /* Logo */ {
    font-size: 2rem;
    font-weight: 600;
    color: var(--color_deep);
  }
  #header-right-div {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  #header-profile {
    width: 40px;
    height: 40px;
    border-radius: 100px;
  }
  #header-arrow-down {
    color: var(--color_light);
    cursor: pointer;
  }
  #header-arrow-down:hover {
    color: var(--color_deep);
  }
`;
