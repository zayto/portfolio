import Image, { ImageProps } from 'next/image';

const contentfulLoader = ({ src, width, quality }: { src: string; width: number; quality: number }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentfulImage: React.FC<ImageProps> = (props) => {
  return <Image loader={contentfulLoader} {...props} alt="" />;
};

export default ContentfulImage;
