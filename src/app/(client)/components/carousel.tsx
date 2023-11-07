import styles from "./carousel.module.scss";
import Button from "./button";
import { BlockProps } from "../interfaces/interfaces";
import { fetchPosts } from "@/api/sanityApi";
import PostSwiper from "./post-swiper";

export interface CarouselProps {
  content: BlockProps,
}

const Carousel: React.FC<CarouselProps> = async ({ content }) => {
  const posts = await fetchPosts(3, content.excludePost || null);

  return (
    <div className={styles.carousel}>
      <div className={`${"container"} ${styles.carouselContainer}`}>
        <div className={styles.textGroup}>
          {content.heading && (
            <h2 className={styles.title}>{content.heading}</h2>
          )}
          {content.buttonGroup?.buttonToggle &&  <Button content={content.buttonGroup} />}
        </div>
            <PostSwiper posts={posts} />
      </div>
    </div>
  );
};


export default Carousel;
