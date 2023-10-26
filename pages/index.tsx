import Head from 'next/head';
import GlobalWrapper from '../components/GlobalWrapper/GlobalWrapper';
import Content from '../components/Content';
import Projects from '../components/Projects';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Technical test => Socreative Digital</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <GlobalWrapper>
        <Content title='About Us' numParagraphs={30} />
        <Content title='TEAM' numParagraphs={15} id='team' />
        <Projects />
        <Content title='Contact' numParagraphs={15} id='contacts' />
      </GlobalWrapper>
    </>
  );
};

export default Home;
