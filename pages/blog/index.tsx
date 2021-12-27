import Container from '@c/container';
import HeroPost from '@c/hero-post';
import Layout from '@c/layout';
import MoreStories from '@c/more-stories';
import { IPost } from '@t/content-types/post';
import { getAllPostsForBlog } from 'lib/api';
import Head from 'next/head';

type BlogProps = {
  preview: boolean;
  posts: IPost[];
};
const Blog: React.FC<BlogProps> = ({ posts, preview }) => {
  const heroPost = posts[0];
  const morePosts = posts.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>Zayto&#39;s Blog</title>
      </Head>
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
  );
};

export default Blog;

export const getStaticProps = async ({ preview = false }) => {
  const posts = (await getAllPostsForBlog(preview)) ?? [];
  return {
    props: { preview, posts },
  };
};
