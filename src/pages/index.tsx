import { Client } from '@notionhq/client';
import type { GetStaticProps, NextPage } from 'next';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import useKeyDown from '../hooks/useKeyDown';
import { shuffle } from '../utils/shuffle';

interface Props {
  tastingNotes: any[];
}

const Title = styled.h3`
  // color: green;
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

  return (
    <Layout>
      <Title>Tasting Notes</Title>
      {randomNotes.map((note) => (
        <p key={note.id}>{note.name}</p>
      ))}
      <button onClick={handleClick}>Randomise</button>
      {/* <Link href="staticGen" passHref>
          <StyledLink>Static Generation</StyledLink>
        </Link>
        <Link href="ssr" passHref>
          <StyledLink>Server-side Rendering</StyledLink>
        </Link> */}
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
