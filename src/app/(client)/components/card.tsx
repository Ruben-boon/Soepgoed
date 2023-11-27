import React from "react";
import styles from "./card.module.scss";
import Image from "next/image";
import { PostProps } from "../interfaces/interfaces";
import Link from "next/link";
import greenArrow from "../../../../public/greenArrow.svg";

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
          <p className={styles.readMore}>Lees meer <img className={styles.arrow} src={greenArrow.src}></img> </p>
        </div>
        {content.imageSrc && content.imageAlt && (
          <div className={`${styles.image} ${"image"}`}>
            <Image
              src={content.imageSrc}
              height={300}
              width={390}
              alt={content.imageAlt}
              priority={false}
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card;
