import React from "react";
import styles from "./card.module.scss";
import Image from "next/image";
import { PostProps } from "../interfaces/interfaces";
import Link from "next/link";

interface CardProps {
  content: PostProps;
}

const Card: React.FC<CardProps> = ({ content }) => {
const publishDate = content.publishedAt ? content.publishedAt : content._createdAt;

  return (
    <Link href={`/nieuws/${content.slug}`}>
      <div className={styles.card}>
        <div className={` ${"textGroup"} ${styles.textGroup}`}>
          {publishDate && (
            <p className={styles.date}>
              {new Date(publishDate).toLocaleDateString("nL-nl", {
                day: "numeric",
                year: "numeric",
                month: "long",
              })}
            </p>
          )}
          {content.heading && (
            <h3 className={styles.heading}>{content.heading}</h3>
          )}
          {content.excerpt && (
            <p className={styles.paragraph}>{content.excerpt}</p>
          )}
          <p className={styles.readMore}>Lees meer </p>
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
    </Link>
  );
};

export default Card;
