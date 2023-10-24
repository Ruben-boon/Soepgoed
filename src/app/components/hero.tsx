import Image from "next/image";
import styles from "./hero.module.scss";
import { BlockProps } from "../interfaces/interfaces";
import Button from "./button";
// import Button from "./button";


interface Hero {
  content: BlockProps;
}

const Hero: React.FC<Hero> = ({ content }) => {
  return (
    <div className={` ${styles.header}`}>
      <div className={`${styles.headerContainer} ${"container"}`}>

          <div className={`${styles.textGroup} ${"textGroup"}`}>
            {content.heading && (
              <h1 className={styles.heading}>{content.heading}</h1>
            )}
            {content.paragraph && (
              <p className={styles.paragraph}>{content.paragraph}</p>
            )}
            {content.buttonGroup &&  
              <div className={`${styles.buttonContainer} ${"buttonContainer"}`}>
                {content.buttonGroup && <Button content={content.buttonGroup} /> }
                {content.buttonGroupTwo && <Button content={content.buttonGroupTwo} />}
              </div>
            }
          </div>
          {content.imageSrc && content.imageAlt && (
            <div className={`${styles.image} ${"image"}`}>
              <Image
                src={content.imageSrc}
                alt={content.imageAlt}
                priority={true}
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
        </div>
    </div>
  );
};

export default Hero;
