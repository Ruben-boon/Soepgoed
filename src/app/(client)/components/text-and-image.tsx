import Image from "next/image";
import styles from "./text-and-image.module.scss";
import { BlockProps } from "../interfaces/interfaces";
import Button from "./button";
import { PortableText } from "@portabletext/react";

export interface TextAndImageProps {
  content: BlockProps;
}

const TextAndImage: React.FC<TextAndImageProps> = ({ content }) => {
  return (
    <div className={styles.textAndImage}>
      <div
        className={` ${styles.textAndImageContainer} ${"container"} ${
          content.textPosition
        }`}
      >
        <div className={` ${styles.textGroup} ${"textGroup"}`}>
          {content.content && <PortableText value={content.content} />}
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
