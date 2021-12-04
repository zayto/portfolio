import { getImageFragment, getRichTextFragment } from './utils';

export const HOME_FIELDS = `
  introTitle
  seoTitle
  seoDescription
  ${getRichTextFragment('introDescription')}
  ${getImageFragment('introPicture')}
`;

export const HOME_INTRO_FIELDS = `
  introTitle
  ${getRichTextFragment('introDescription')}
  ${getImageFragment('introPicture')}
`;
