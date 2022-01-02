import { IRichText } from '@t/document';
import Link from 'next/link';
import ContentfulImage from './contentful-image';
import RichText from './rich-text';
import buttonStyles from '../styles/button-styles.module.css';

type IntroProps = {
  introTitle: string;
  introDescription: IRichText;
  introPicture: any;
};

const Intro: React.FC<IntroProps> = ({ introTitle, introDescription, introPicture }) => (
  <div className="py-16 mx-5 sm:pl-4 lg:pl:-0">
    <div className="flex flex-row sm:items-center container sm:mx-auto max-w-screen-xl">
      <section className="flex-1 max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl sm:mr-5 lg:mr-0">
        <h1 className="text-4xl font-bold">{introTitle}</h1>
        <RichText json={introDescription?.json} />
      </section>
      <div className="hidden sm:block sm:pr-3 md:px-3 lg:px-5 py-0 sm:py-3 sm:w-48 md:w-52 lg:w-64">
        <ContentfulImage className="rounded-full" src={introPicture.url} alt="" width={255} height={255} />
      </div>
    </div>

    <button className={buttonStyles['regular']}>
      <Link href={'/blog'}>Visit the Blog</Link>
    </button>
  </div>
);

export default Intro;
