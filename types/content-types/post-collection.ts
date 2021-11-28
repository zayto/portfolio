import { IPost } from "./post";

export interface IPostCollection {
  data: {
    postCollection: {
      items: IPost[];
    };
  };
}
