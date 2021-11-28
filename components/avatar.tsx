import ContentfulImage from "./contentful-image";

type AvatarProps = {
  name: string;
  picture: any;
};

const Avatar: React.FC<AvatarProps> = ({ name, picture }) => {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-4">
        <ContentfulImage src={picture.url} layout="fill" className="rounded-full" alt={name} />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
