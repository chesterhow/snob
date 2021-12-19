import React, { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import ViewContext from '../contexts/ViewContext';
import useKeyDown from '../hooks/useKeyDown';
import { shuffle } from '../utils/shuffle';
import ColorsView from './ColorsView';
import Instructions from './Instructions';

const Wrapper = styled.div`
  flex-grow: 1;
`;

interface Props {
  tastingNotes: any[];
}

const TastingNotes: React.FC<Props> = function (props) {
  const { tastingNotes } = props;

  const [randomNotes, setRandomNotes] = useState<Notion.Option[]>([]);
  const keyPressed = useKeyDown(' ');
  const viewContext = useContext(ViewContext);

  const getRandomNotes = useCallback(() => {
    setRandomNotes(shuffle(tastingNotes).slice(0, 3));
  }, [tastingNotes]);

  // Randomise on mount
  useEffect(() => {
    getRandomNotes();
  }, [getRandomNotes]);

  // Randomise on keypress
  useEffect(() => {
    if (!keyPressed) {
      return;
    }
    getRandomNotes();
  }, [keyPressed, getRandomNotes]);

  return (
    <>
      <Wrapper>
        {viewContext?.view === 'colors' ? (
          <ColorsView randomNotes={randomNotes} />
        ) : (
          <div>aura</div>
        )}
      </Wrapper>
      <Instructions onRandomiseClick={getRandomNotes} />
    </>
  );
};

export default TastingNotes;
