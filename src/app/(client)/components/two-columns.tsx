import styles from "./text-and-image.module.scss";
import { BlockProps } from "../interfaces/interfaces";
import { PortableText } from "@portabletext/react";

export interface TwoColumnsProps {
  content: BlockProps;
}

const TwoColumns: React.FC<TwoColumnsProps> = ({ content }) => {
  return (
    <div className={styles.twoColumns}>
      <div
        className={` ${styles.textAndImageContainer} ${"container"} ${
          content.textPosition
        }`}
      >
        {content.column1Content && <PortableText value={content.column1Content} />}
        {content.column2Content && <PortableText value={content.column2Content} /> }
      </div>
    </div>
  );
};

export default TwoColumns;
