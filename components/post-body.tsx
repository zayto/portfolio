import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import markdownStyles from "./markdown-styles.module.css";
import { IContent } from "../types/content-types/content";

type ContentProps = {
  content: IContent;
};

const PostBody: React.FC<ContentProps> = ({ content }) => (
  <div className="max-w-2xl mx-auto">
    <div className={markdownStyles["markdown"]}>{documentToReactComponents(content.json)}</div>
  </div>
);

export default PostBody;
