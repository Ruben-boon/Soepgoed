import styles from "./feature.module.scss";
import Button from "./button";
import { BlockProps } from "../interfaces/interfaces";
import { PortableText } from "@portabletext/react";

interface FeatureProps {
  content: BlockProps;
}

const Feature: React.FC<FeatureProps> = ({ content }) => {
  return (
    <div className={styles.feature}>
      <div className={` ${styles.textContainer} ${"container"}`}>
        <div className={`${styles.textGroup} ${"textGroup"}`}>
        {content.content && <PortableText value={content.content} />}
          {content.buttonGroup && <Button content={content.buttonGroup} />}
        </div>
      </div>
    </div>
  );
};

export default Feature;
