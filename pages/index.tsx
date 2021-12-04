import Head from 'next/head';
import Container from '@c/container';
import MoreStories from '@c/more-stories';
import HeroPost from '@c/hero-post';
import Layout from '@c/layout';
import Intro from '@c/intro';
import { IHomeIntro } from '@t/home';
import { IPost } from '@t/content-types/post';
import { getAllPostsForHome, getHomeIntro } from '../lib/api';

type IndexProps = {
  preview: boolean;
  allPosts: IPost[];
  intro: IHomeIntro;
};

const Index: React.FC<IndexProps> = ({ preview, allPosts, intro }) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Zayto&#39;s Blog</title>
        </Head>
        <Intro {...intro} />
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async ({ preview = false }) => {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  const intro = await getHomeIntro(preview);
  return {
    props: { preview, allPosts, intro },
  };
};
