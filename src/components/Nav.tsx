import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
`;

const Title = styled.h3`
  margin: 0;
  font-weight: 300;
`;

const About = styled.p`
  font-weight: 400;
`;

const Nav: React.FC = function () {
  return (
    <StyledNav>
      <Title>Snob.</Title>
      <About>Random but real coffee tasting notes.</About>
    </StyledNav>
  );
};

export default Nav;
