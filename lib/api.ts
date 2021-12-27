import { IPost } from 'types/content-types/post';
import { IPostCollection } from '@t/content-types/post-collection';
import { POST_FIELDS } from '@q/post';
import { HOME_FIELDS, HOME_INTRO_FIELDS } from '@q/home';
import { IHomeIntro, IHomePage } from '@t/home';

async function fetchGraphQL(query: string, preview = false) {
  return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN
      }`,
    },
    body: JSON.stringify({ query }),
  }).then((response) => response.json());
}

function extractPost(fetchResponse: IPostCollection): IPost {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse: IPostCollection): IPost[] {
  return fetchResponse?.data?.postCollection?.items;
}

export async function getHomePage(preview: boolean): Promise<IHomePage> {
  const res = await fetchGraphQL(
    `query {
      homepageCollection(preview: ${preview}, limit: 1) {
        items {
          ${HOME_FIELDS}
        }
      }
    }`,
    preview
  );
  return res?.data?.homepageCollection?.items?.[0];
}

export async function getHomeIntro(preview: boolean): Promise<IHomeIntro> {
  const res = await fetchGraphQL(
    `query {
      homepageCollection(preview: ${preview}, limit: 1) {
        items {
          ${HOME_INTRO_FIELDS}
        }
      }
    }`,
    preview
  );
  return res?.data.homepageCollection?.items?.[0];
}

export async function getPreviewPostBySlug(slug: string): Promise<IPost> {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_FIELDS}
        }
      }
    }`,
    true
  );
  return extractPost(entry);
}

export async function getAllPostsWithSlug(): Promise<IPost[]> {
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${POST_FIELDS}
        }
      }
    }`
  );
  return extractPostEntries(entries);
}

export async function getAllPostsForBlog(preview: boolean) {
  const entries = await fetchGraphQL(
    `query {
      postCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractPostEntries(entries);
}

export async function getPostAndMorePosts(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: ${preview ? 'true' : 'false'}, limit: 1) {
        items {
          ${POST_FIELDS}
        }
      }
    }`,
    preview
  );
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? 'true' : 'false'
    }, limit: 2) {
        items {
          ${POST_FIELDS}
        }
      }
    }`,
    preview
  );
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  };
}
