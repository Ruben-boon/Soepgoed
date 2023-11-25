"use client"
import Image from "next/image";
import styles from "./hero.module.scss";
import { BlockProps } from "../interfaces/interfaces";
import Button from "./button";
import { useEffect } from "react";
// import Button from "./button";

interface Hero {
  content: BlockProps;
}

const Hero: React.FC<Hero> = ({ content }) => {

  useEffect(() => {
    const headingElement = document.querySelector(`.${styles.heading}`);
    const isMobile = window.innerWidth <= 768;
    
    if (headingElement && isMobile) {
      const words = headingElement.textContent?.split(' ');
      const lastWord = words?.pop();
      headingElement.innerHTML = words?.join(' ') + ` <span class="lastWord">${lastWord}</span>`;
    }
  }, [content.heading]);

  return (
    <div className={` ${styles.header}`}>
      <div className={`${styles.headerContainer} ${"container"}`}>
        {content.heading && (
          <div className={`${styles.textGroup} ${"textGroup"} ${
            content.layout && styles[content.layout]
          }`}>
            {content.heading && (
              <h1 className={styles.heading}>{content.heading}</h1>
            )}
            {content.paragraph && (
              <p className={styles.paragraph}>{content.paragraph}</p>
            )}
            {content.buttonGroup && (
              <div className={`${styles.buttonContainer} ${"buttonContainer"}`}>
                {content.buttonGroup && (
                  <Button content={content.buttonGroup} />
                )}
                {content.buttonGroupTwo && (
                  <Button content={content.buttonGroupTwo} />
                )}
              </div>
            )}
          </div>
        )}
        {content.imageSrc && content.imageAlt && (
          <div
            className={`${styles.image} ${"image"} ${
              content.layout && styles[content.layout]
            }`}
          >
            <Image
              src={content.imageSrc}
              alt={content.imageAlt}
              priority={true}
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
