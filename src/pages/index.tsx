import { Client } from '@notionhq/client';
import type { GetStaticProps, NextPage } from 'next';
import React from 'react';

import Layout from '../components/Layout';
import TastingNotes from '../components/TastingNotes';

interface Props {
  tastingNotes: any[];
}

const Home: NextPage<Props> = (props) => {
  const { tastingNotes } = props;

  return (
    <Layout>
      <TastingNotes tastingNotes={tastingNotes} />
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
