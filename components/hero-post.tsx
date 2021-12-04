import Link from 'next/link';
import Avatar from '@c/avatar';
import DateComponent from '@c/date';
import CoverImage from '@c/cover-image';

type HeroPostProps = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  coverImage: {
    url: string;
    picture?: any;
  };
  author: {
    name: string;
    picture: any;
  };
};

const HeroPost: React.FC<HeroPostProps> = ({ title, coverImage, date, excerpt, author, slug }) => (
  <section>
    <div className="mb-8 md:mb-16">
      <CoverImage title={title} slug={slug} url={coverImage.url} />
    </div>
    <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
      <div>
        <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="mb-4 md:mb-0 text-lg">
          <DateComponent dateString={date} />
        </div>
      </div>
      <div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
    </div>
  </section>
);

export default HeroPost;
