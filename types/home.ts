import { IRichText } from './document';

export interface IHomePage {
  introTitle: string;
  introDescription: IRichText;
  seoTitle: string;
  seoDescription: string;
}

export interface IHomeIntro {
  introTitle: string;
  introDescription: IRichText;
  introPicture: {
    url: string;
  };
}
