import { BlockProps } from "../interfaces/interfaces";
import Button from "./button";
import styles from "./text-single.module.scss";

interface TextProps {
  content: BlockProps;
}

const TextSingle: React.FC<TextProps> = ({ content }) => {
  return (
    <div className={styles.text}>
      <div className={` ${styles.textContainer} ${"container"}`}>
        <div className={`${styles.textGroup} ${"textGroup"}`}>
          {content.heading && (
            <h2 className={styles.heading}>{content.heading}</h2>
          )}
          {content.paragraph && (
            <p className={styles.paragraph}>{content.paragraph}</p>
          )}
          {content.buttonGroup && <Button content={content.buttonGroup} />}
        </div>
      </div>
    </div>
  );
};

export default TextSingle;
