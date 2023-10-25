"use client";
import React from "react";
import { PostProps } from "../interfaces/interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Card from "./card";
import styles from "./post-swiper.module.scss";

interface PostSwiperProps {
  posts: [PostProps];
}

const PostSwiper: React.FC<PostSwiperProps> = ({ posts }) => {
  return (
    <>
      {posts && posts.length > 0 && (
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
            {/* @ts-ignore */}
            {posts.map((post) => (
              <SwiperSlide key={post._key} className={styles.swiperSlide}>
                <Card content={post}></Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default PostSwiper;
