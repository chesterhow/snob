import React, { useContext } from 'react';
import styled from 'styled-components';

import ViewContext from '../contexts/ViewContext';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  gap: 0.5rem;

  @media (max-width: ${(props) => props.theme.breakPoints.md}) {
    flex-direction: column;
    text-align: center;
    padding: 1rem 2rem;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-weight: 300;
`;

const About = styled.p`
  margin: 0;
  font-family: ${(props) => props.theme.font.sansSerif};
  color: ${(props) => props.theme.colors.grey};
`;

const Nav: React.FC = function () {
  const viewContext = useContext(ViewContext);

  return (
    <StyledNav>
      <Title>Snob.</Title>
      <About>Random tasting notes from real coffees.</About>
      <button onClick={() => viewContext?.setView('colors')}>
        Colors View
      </button>
      <button onClick={() => viewContext?.setView('aura')}>Aura View</button>
    </StyledNav>
  );
};

export default Nav;
