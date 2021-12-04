import { Client } from '@notionhq/client';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import { shuffle } from '../utils/shuffle';

interface Props {
  tastingNotes: any[];
}

const SSR: NextPage<Props> = (props) => {
  const { tastingNotes: allNotes } = props;
  const [tastingNotes, setTastingNotes] = useState(allNotes);

  useEffect(() => {
    setTastingNotes(shuffle(allNotes).slice(0, 3));
  }, [allNotes]);

  return (
    <div>
      <Head>
        <title>Static Generation</title>
      </Head>

      <main>
        <h1>Static Generation</h1>
        <h3>Tasting Notes</h3>
        {tastingNotes.map((note) => (
          <p key={note.id}>{note.name}</p>
        ))}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const notion = new Client({ auth: process.env.NOTION_KEY });
  const databaseId = `${process.env.NOTION_DATABASE_ID}`;

  const response = await notion.databases.retrieve({
    database_id: databaseId,
  });
  const property = response.properties['Tasting Notes'];

  if (property.type !== 'multi_select') {
    return { props: { tastingNotes: [] } };
  }
  const tastingNotes = property.multi_select.options;
  return { props: { tastingNotes } };
};

export default SSR;
