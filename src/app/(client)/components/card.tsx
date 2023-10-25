import React from "react";
import styles from "./card.module.scss";
import Image from "next/image";
import { PostProps } from "../interfaces/interfaces";

interface CardProps {
  content: PostProps;
}

const Card: React.FC<CardProps> = ({ content }) => {
  return (
    <div className={styles.card}>
      <div className={` ${"textGroup"} ${styles.textGroup}`}>
        {content._createdAt && (
          <p className={styles.date}>
            {new Date(content._createdAt).toLocaleDateString("nL-nl", {
              day: "numeric",
              year: "numeric",
              month: "long",
            })}
          </p>
        )}
        {content.heading && (
          <h1 className={styles.heading}>{content.heading}</h1>
        )}
        {/* placholder */}
        <p className={styles.paragraph}>
          Een stukje dummie tekst omdat ik nog niet goed weet hoe de content
          gefetched word.
        </p>
      </div>
      {content.imageSrc && content.imageAlt && (
        <div className={`${styles.image} ${"image"}`}>
          <Image
            src={content.imageSrc}
            alt={content.imageAlt}
            priority={false}
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
    </div>
  );
};

export default Card;
