import { Document } from '@contentful/rich-text-types';
export interface IDocument extends Document {}

export interface IRichText {
  json: IDocument;
}
