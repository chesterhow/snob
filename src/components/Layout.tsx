import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import Nav from './Nav';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
`;

const Layout: React.FC = function (props) {
  const { children } = props;

  return (
    <>
      <Head>
        <title>snob</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper>
        <Nav />

        <Main>{children}</Main>

        <Footer />
      </PageWrapper>
    </>
  );
};

export default Layout;
