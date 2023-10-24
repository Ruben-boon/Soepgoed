import Image from "next/image";
import styles from "./text-and-image.module.scss";
import { BlockProps } from "../interfaces/interfaces";
import Button from "./button";

export interface TextAndImageProps {
  content: BlockProps;
}

const TextAndImage: React.FC<TextAndImageProps> = ({ content }) => {
    console.log("content", content)
  return (
    <div className={styles.textAndImage}>
      <div
        className={` ${styles.textAndImageContainer} ${"container"} ${
          content.textPosition
        }`}
      >
        <div className={` ${styles.textGroup} ${"textGroup"}`}>
          {content.heading && (
            <h2 className={styles.heading}>{content.heading}</h2>
          )}
          {content.paragraph && (
            <p className={styles.paragraph}>{content.paragraph}</p>
          )}
          {content.buttonGroup && <Button content={content.buttonGroup} />}
        </div>
        {content.imageSrc && content.imageAlt && (
            <div className={`${styles.image} ${"image"}`}>
              <Image
                src={content.imageSrc}
                alt={content.imageAlt}
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
      </div>
    </div>
  );
};

export default TextAndImage;
