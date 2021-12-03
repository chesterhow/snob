import type { GetServerSideProps, NextPage } from "next";
import { Client } from '@notionhq/client';
import Head from 'next/head';
import { shuffle } from '../utils/shuffle';

interface Props {
  tastingNotes: any[];
}

const SSR: NextPage<Props> = (props) => {
  const { tastingNotes } = props;

  return (
    <div>
      <Head>
        <title>Server-side Rendering</title>
      </Head>

      <main>
        <h1>Server-side Rendering</h1>
        <h3>Tasting Notes</h3>
        {tastingNotes.map((note) => <p key={note.id}>{note.name}</p>)}
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const notion = new Client({ auth: process.env.NOTION_KEY });
  const databaseId = `${process.env.NOTION_DATABASE_ID}`;

  const response = await notion.databases.retrieve({
    database_id: databaseId,
  });
  const tastingNotes = shuffle(response.properties['Tasting Notes'].multi_select.options);

  return { props: { tastingNotes: tastingNotes.slice(0, 3) } };
}

export default SSR;