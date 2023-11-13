import styles from "./two-columns.module.scss";
import { BlockProps } from "../interfaces/interfaces";
import { PortableText } from "@portabletext/react";

export interface TwoColumnsProps {
  content: BlockProps;
}

const TwoColumns: React.FC<TwoColumnsProps> = ({ content }) => {
  return (
    <div className={styles.twoColumns}>
      <div
        className={` ${styles.container} ${"container"} ${
          content.textPosition
        }`}
      >
        {content.column1Content && <div className={styles.textGroup} ><PortableText value={content.column1Content} /> </div>}
        {content.column2Content && <div className={styles.textGroup} ><PortableText value={content.column2Content} /> </div>}
      </div>
    </div>
  );
};

export default TwoColumns;
