import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import Container from '@c/container';
import PostBody from '@c/post-body';
import MoreStories from '@c/more-stories';
import PostHeader from '@c/post-header';
import SectionSeparator from '@c/section-separator';
import Layout from '@c/layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import PostTitle from '@c/post-title';
import { IPost } from 'types/content-types/post';

type PostProps = {
  post: IPost;
  morePosts: IPost[];
  preview: boolean;
};

const Post: React.FC<PostProps> = ({ post, morePosts, preview }) => {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title} | Zayto&#39;s Blog</title>
                <meta property="og:image" content={post.coverImage.url} />
              </Head>
              <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} author={post.author} />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts && morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

export const getStaticProps = async ({ params, preview = false }) => {
  const data = await getPostAndMorePosts(params.slug, preview);

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  };
};

export const getStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  };
};
