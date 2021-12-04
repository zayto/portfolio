import { IRichText } from '@t/document';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import markdownStyles from './markdown-styles.module.css';

const RichText: React.FC<IRichText> = ({ json }) => (
  <>
    <div className={markdownStyles['markdown']}>{documentToReactComponents(json)}</div>
    <style jsx>{`
      div {
        p {
          background-color: red;
        }
      }
    `}</style>
  </>
);

export default RichText;
