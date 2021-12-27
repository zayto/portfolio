import Head from 'next/head';
import Layout from '@c/layout';
import Intro from '@c/intro';
import { IHomeIntro } from '@t/home';
import { getHomeIntro } from '../lib/api';

type IndexProps = {
  preview: boolean;
  intro: IHomeIntro;
};

const Index: React.FC<IndexProps> = ({ preview, intro }) => {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Zayto&#39;s Blog</title>
        </Head>
        <Intro {...intro} />
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async ({ preview = false }) => {
  const intro = await getHomeIntro(preview);
  return {
    props: { preview, intro },
  };
};
