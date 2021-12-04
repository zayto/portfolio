import { getRichTextFragment } from './utils';

export const POST_FIELDS = `
  slug
  title
  coverImage {
    url
  }
  date
  author {
    name
    picture {
      url
    }
  }
  excerpt
  ${getRichTextFragment('content')}
`;
