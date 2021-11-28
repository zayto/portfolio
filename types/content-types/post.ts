import { IDocument } from "../document";
import { IAuthor } from "./author";

export interface IPost {
  slug: string;
  title: string;
  coverImage: {
    url: string;
    picture?: any;
  };
  date: string;
  author: IAuthor;
  excerpt: string;
  content: {
    json: IDocument;
  };
}
