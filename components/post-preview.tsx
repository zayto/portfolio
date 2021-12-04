import Link from 'next/link';
import Avatar from '@c/avatar';
import DateComponent from '@c/date';
import CoverImage from './cover-image';
import { IAuthor } from '@t/content-types/author';

type PostPreviewProps = {
  title: string;
  coverImage: { url: string; picture?: any };
  date: string;
  excerpt: string;
  slug: string;
  author: IAuthor;
};

const PostPreview: React.FC<PostPreviewProps> = ({ title, coverImage, date, excerpt, author, slug }) => (
  <div>
    <div className="mb-5">
      <CoverImage title={title} slug={slug} url={coverImage.url} />
    </div>
    <h3 className="text-3xl mb-3 leading-snug">
      <Link href={`/posts/${slug}`}>
        <a className="hover:underline">{title}</a>
      </Link>
    </h3>
    <div className="text-lg mb-4">
      <DateComponent dateString={date} />
    </div>
    <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    {author && <Avatar name={author.name} picture={author.picture} />}
  </div>
);

export default PostPreview;
