import { Client } from '@notionhq/client';
import type { GetStaticProps, NextPage } from 'next';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import Instructions from '../components/Instructions';
import Layout from '../components/Layout';
import { AppColors } from '../constants/Colors';
import useKeyDown from '../hooks/useKeyDown';
import { shuffle } from '../utils/shuffle';

interface Props {
  tastingNotes: any[];
}

const TastingNotesWrapper = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  justify-content: stretch;
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

  const getColor = (color: Notion.Color | undefined) => {
    if (!color) {
      return AppColors.default;
    }

    return AppColors[color];
  };

  return (
    <Layout>
      <TastingNotesWrapper>
        {randomNotes.map((note) => (
          <TastingNote key={note.id} $background={getColor(note.color)}>
            <h1>{note.name}</h1>
          </TastingNote>
        ))}
      </TastingNotesWrapper>
      <Instructions onRandomiseClick={getRandomNotes} />
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
