import Head from 'next/head';
import React, { useState } from 'react';
import styled from 'styled-components';

import ViewContext from '../contexts/ViewContext';
import Nav from './Nav';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Layout: React.FC = function (props) {
  const { children } = props;

  const [view, setView] = useState<string>('colors');

  return (
    <ViewContext.Provider value={{ view, setView }}>
      <Head>
        <title>snob</title>
        <meta
          name="description"
          content="Random tasting notes from real coffees"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎩</text></svg>"
        />
      </Head>

      <PageWrapper>
        <Nav />

        <Main>{children}</Main>

        <footer></footer>
      </PageWrapper>
    </ViewContext.Provider>
  );
};

export default Layout;
