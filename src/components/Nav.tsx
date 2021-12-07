import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const Title = styled.h3`
  margin: 0;
  font-weight: 300;
`;

const Instructions = styled.p`
  font-family: ${(props) => props.theme.font.sansSerif};
`;

const Key = styled.kbd`
  display: inline-block;
  margin: 0 2px 4px;
  padding: 0.15rem 0.35rem;
  border: 2px solid ${(props) => props.theme.colors.black};
  border-radius: 5px;
  font-size: ${(props) => props.theme.fontScale.sm};
  font-family: ${(props) => props.theme.font.sansSerif};
  font-weight: 500;
  vertical-align: middle;
  box-shadow: 0 3px 0 ${(props) => props.theme.colors.black};
  transition: 0.2s ease-out all;

  &:hover {
    box-shadow: 0 1px 0 ${(props) => props.theme.colors.black};
    margin-top: 2px;
    margin-bottom: 2px;
  }
`;

const Nav: React.FC = function () {
  return (
    <StyledNav>
      <Title>Snob.</Title>
      <Instructions>
        Hit <Key>space</Key> to generate random tasting notes
      </Instructions>
    </StyledNav>
  );
};

export default Nav;
