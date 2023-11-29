import Image from "next/image";
import styles from "./image-full.module.scss";
import { BlockProps } from "../interfaces/interfaces";

interface ImageFullProps {
  content: BlockProps;
}

const ImageFull: React.FC<ImageFullProps> = ({ content }) => {
  return (
    <div className={styles.imageFull}>
      <div className={` ${ content.container ? "container" : ""}`}>
        {content.imageSrc && content.imageAlt && (
          <div className={`${styles.image} ${"image"} ${content.height ? styles[content.height] : ""}`}>
            <Image
              src={content.imageSrc}
              alt={content.imageAlt}
              fill={true}
              style={{ objectFit: "cover" }}
              quality={100}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageFull;
