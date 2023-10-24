import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import styles from "./card.module.scss";
import Image from "next/image";
import { imgAlt, imgUrl } from "@/api/strapiApi";
import { PostProps } from "@/types/interfaces";

interface CardProps {
  content: PostProps;
}

const Card: React.FC<CardProps> = ({ content }) => {

  return (
    <div className={styles.card}>
      <div className={` ${"textGroup"} ${styles.textGroup}`}>
        {content.publishedAt && (
          <p className={styles.date}>
            {new Date(content.publishedAt).toLocaleDateString(
              "nL-nl",
              {
                day: "numeric",
                year: "numeric",
                month: "long",
              }
            )}
          </p>
        )}
        {content.heading && (
          <h1 className={styles.heading}>{content.heading}</h1>
        )}
        {content.paragraph && (
          <p className={styles.paragraph}>{content.paragraph}</p>
        )}
      </div>
      {content.thumbnail && content.thumbnail.data && (
        <div className={styles.image}>
          <Image
            src={imgUrl(content.thumbnail)}
            alt={imgAlt(content.thumbnail)}
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
    </div>
  );
};

export default Card;
