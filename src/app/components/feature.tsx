import styles from "./feature.module.scss";
import Button from "./button";
import { BlockProps } from "../interfaces/interfaces";

interface FeatureProps {
  content: BlockProps;
}

const Feature: React.FC<FeatureProps> = ({ content }) => {
  return (
    <div className={styles.feature}>
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

export default Feature;
