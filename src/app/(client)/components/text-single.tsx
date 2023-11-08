import { PortableText } from "@portabletext/react";
import { BlockProps } from "../interfaces/interfaces";
import Button from "./button";
import styles from "./text-single.module.scss";

interface TextProps {
  content: BlockProps;
}

const TextSingle: React.FC<TextProps> = ({ content }) => {
  console.log(content);
  return (
    <div className={styles.text}>
      <div className={` ${styles.textContainer} ${"container"}`}>
        <div className={`${styles.textGroup} ${"textGroup"}`}>
          {content.column1Content && <PortableText value={content.column1Content} />}
          {content.buttonGroup && <Button content={content.buttonGroup} />}
        </div>
      </div>
    </div>
  );
};

export default TextSingle;
