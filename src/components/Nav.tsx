import React, { useContext } from 'react';
import styled from 'styled-components';

import ViewContext from '../contexts/ViewContext';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  gap: 0.5rem;

  @media (max-width: ${(props) => props.theme.breakPoints.sm}) {
    flex-direction: column;
    text-align: center;
    padding: 1rem 2rem;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-weight: 300;
`;

// const About = styled.p`
//   margin: 0;
//   font-family: ${(props) => props.theme.font.sansSerif};
//   color: ${(props) => props.theme.colors.grey};
// `;

const Toggle = styled.div`
  border: 2px solid ${(props) => props.theme.colors.black};
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: ${(props) => props.theme.breakPoints.sm}) {
    margin-top: 0.5rem;
  }
`;

const ToggleButton = styled.button<{ $isActive?: boolean }>`
  margin: 0.1rem;
  padding: 0.15rem 0.4rem;
  border: 0;
  border-radius: 5px;
  background: none;
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontScale.md};
  font-family: ${(props) => props.theme.font.sansSerif};
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease-out all;

  ${(props) =>
    props.$isActive &&
    `
    background: ${props.theme.colors.black};
    color: ${props.theme.colors.primary};
  `}
`;

const Nav: React.FC = function () {
  const viewContext = useContext(ViewContext);

  return (
    <StyledNav>
      <Title>Snob.</Title>
      {/* <About>Random tasting notes from real coffees.</About> */}
      <Toggle>
        <ToggleButton
          $isActive={viewContext?.view === 'colors'}
          onClick={() => viewContext?.setView('colors')}
        >
          Colors
        </ToggleButton>
        <ToggleButton
          $isActive={viewContext?.view === 'aura'}
          onClick={() => viewContext?.setView('aura')}
        >
          Aura
        </ToggleButton>
      </Toggle>
    </StyledNav>
  );
};

export default Nav;
