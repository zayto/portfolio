import { IRichText } from '@t/document';
import ContentfulImage from './contentful-image';
import RichText from './rich-text';

type IntroProps = {
  introTitle: string;
  introDescription: IRichText;
  introPicture: any;
};

const Intro: React.FC<IntroProps> = ({ introTitle, introDescription, introPicture }) => (
  <>
    <div className="flex flex-col md:flex-row py-16 justify-items-center items-center container mx-auto max-w-screen-xl">
      <section className="md:flex-1 max-w-3xl mx-5">
        <h1 className="text-4xl font-bold">{introTitle}</h1>
        <RichText json={introDescription?.json} />
      </section>
      <div className="px-5 py-3">
        <ContentfulImage className="rounded-full" src={introPicture.url} alt="" width={255} height={255} />
      </div>
    </div>
  </>
);

export default Intro;
