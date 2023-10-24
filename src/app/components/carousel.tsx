"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./carousel.module.scss";
import Button from "./button";
import Card from "./card";
import { BlockProps } from "../interfaces/interfaces";
import { fetchData } from "@/api/sanityApi";


export interface CarouselProps {
  content: BlockProps
}
const Carousel: React.FC<CarouselProps> = async ({ content }) => {
  const data = await fetchData("post");
  return (
    <div className={styles.carousel}>
      <div className={`${"container"} ${styles.carouselContainer}`}>
        <div className={styles.textGroup}>
          {content.heading && (
            <h2 className={styles.title}>{content.heading}</h2>
          )}
          {content.buttonGroup?.buttonToggle &&  <Button content={content.buttonGroup} />}
        </div>

        {content.posts &&
          content.posts.data &&
          content.posts.data.length > 0 && (
            <div className={styles.swiperContainer}>
              <Swiper
                spaceBetween={20}
                slidesPerView={"auto"}
                breakpoints={{
                  768: { slidesPerView: 2, spaceBetween: 16 },
                  1024: { slidesPerView: 3, spaceBetween: 28 },
                }}
                pagination={true}
                className="mySwiper"
              >
                {content.posts.data.map((post) => (
                  <SwiperSlide key={post.id} className={styles.swiperSlide}>
                    <Card content={post.attributes}></Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
      </div>
    </div>
  );
};

export default Carousel;
