import Avatar from '@c/avatar';
import DateComponent from '@c/date';
import CoverImage from '@c/cover-image';
import PostTitle from '@c/post-title';
import { IAuthor } from '@t/content-types/author';

type PostHeaderProps = {
  title: string;
  coverImage: { url: string; picture?: any };
  date: string;
  author: IAuthor;
};

const PostHeader: React.FC<PostHeaderProps> = ({ title, coverImage, date, author }) => (
  <>
    <PostTitle>{title}</PostTitle>
    <div className="hidden md:block md:mb-12">{author && <Avatar name={author.name} picture={author.picture} />}</div>
    <div className="mb-8 md:mb-16 sm:mx-0">
      <CoverImage title={title} url={coverImage.url} />
    </div>
    <div className="max-w-2xl mx-auto">
      <div className="block md:hidden mb-6">{author && <Avatar name={author.name} picture={author.picture} />}</div>
      <div className="mb-6 text-lg">
        <DateComponent dateString={date} />
      </div>
    </div>
  </>
);

export default PostHeader;
