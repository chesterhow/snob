import React from 'react';
import styled from 'styled-components';

import { getColor } from '../utils/getColor';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  justify-content: stretch;
  height: 100%;
  width: 100%;
`;

const TastingNote = styled.div<{ $background?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 3rem;
  background: ${(props) => props.$background};
  color: ${(props) => props.theme.colors.primary};
  text-align: center;

  h1 {
    margin: 0;
    font-weight: 200;
  }

  @media (max-width: ${(props) => props.theme.breakPoints.lg}) {
    padding: 1rem 2.5rem;
  }

  @media (max-width: ${(props) => props.theme.breakPoints.md}) {
    padding: 1rem 2rem;
  }
`;

interface Props {
  randomNotes: any[];
}

const ColorsView: React.FC<Props> = function (props) {
  const { randomNotes } = props;

  return (
    <Wrapper>
      {randomNotes.map((note) => (
        <TastingNote key={note.id} $background={getColor(note.color)}>
          <h1>{note.name}</h1>
        </TastingNote>
      ))}
    </Wrapper>
  );
};

export default ColorsView;
