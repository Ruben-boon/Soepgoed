import styles from "./three-columns.module.scss";
import { BlockProps } from "../interfaces/interfaces";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export interface ThreeColumnsProps {
  content: BlockProps;
}

const ThreeColumns: React.FC<ThreeColumnsProps> = ({ content }) => {
  return (
    <div className={styles.threeColumns}>
      <div
        className={` ${styles.container} ${"container"} ${
          content.textPosition
        }`}
      >
        {content.imageSrc1 && content.imageAlt1 && (
          <div className={`${styles.image} ${"image"}`}>
            <Image
              src={content.imageSrc1}
              alt={content.imageAlt1}
              width={400}
              height={320}
              // fill={true}
              style={{ objectFit: "contain" }}
            />
          </div>
        )}
        {content.imageSrc2 && content.imageAlt2 && (
          <div className={`${styles.image} ${"image"}`}>
            <Image
              src={content.imageSrc2}
              alt={content.imageAlt2}
              width={400}
              height={320}
              // fill={true}
              style={{ objectFit: "contain" }}
            />
          </div>
        )}
        {content.imageSrc3 && content.imageAlt3 && (
          <div className={`${styles.image} ${"image"}`}>
            <Image
              src={content.imageSrc3}
              alt={content.imageAlt3}
              width={400}
              height={320}
              // fill={true}
              style={{ objectFit: "contain" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ThreeColumns;
