import { IRichText } from '@t/document';
import RichText from './rich-text';

type ContentProps = {
  content: IRichText;
};

const PostBody: React.FC<ContentProps> = ({ content }) => (
  <div className="max-w-2xl mx-auto">
    <RichText json={content.json} />
  </div>
);

export default PostBody;
