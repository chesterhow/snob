import { Client } from '@notionhq/client';
import type { GetStaticProps, NextPage } from 'next';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import { AppColors } from '../constants/Colors';
import useKeyDown from '../hooks/useKeyDown';
import { shuffle } from '../utils/shuffle';

interface Props {
  tastingNotes: any[];
}

const Title = styled.h3`
  text-align: center;
`;

const TastingNotesWrapper = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  // align-items: center;
  justify-content: stretch;
  width: 100%;
`;

const TastingNote = styled.div<{ $color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.$color};
  color: #fff;
  text-align: center;
  font-size: 5rem;
  font-weight: 200;
  letter-spacing: -0.2rem;
`;

const Home: NextPage<Props> = (props) => {
  const { tastingNotes } = props;
  const [randomNotes, setRandomNotes] = useState<Notion.Option[]>([]);
  const keyPressed = useKeyDown(' ');

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

  // Randomise on button click
  const handleClick = () => {
    getRandomNotes();
  };

  const getColor = (color: Notion.Color | undefined) => {
    if (!color) {
      return AppColors.default;
    }

    return AppColors[color];
  };

  return (
    <Layout>
      <Title>snob</Title>
      <TastingNotesWrapper>
        {randomNotes.map((note) => (
          <TastingNote key={note.id} $color={getColor(note.color)}>
            <span>{note.name}</span>
          </TastingNote>
        ))}
      </TastingNotesWrapper>
      {/* <button onClick={handleClick}>Randomise</button> */}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const notion = new Client({ auth: process.env.NOTION_KEY });
  const databaseId = `${process.env.NOTION_DATABASE_ID}`;

  const response = await notion.databases.retrieve({
    database_id: databaseId,
  });
  const property = response.properties['Tasting Notes'];

  let tastingNotes: Notion.Option[] = [];
  if (property.type === 'multi_select') {
    tastingNotes = property.multi_select.options;
  }

  return { props: { tastingNotes } };
};

export default Home;
