import { fetchPostSingle } from "@/api/sanityApi";
import { PortableText } from "@portabletext/react";
import styles from "./page.module.scss";
import Image from "next/image";
import Carousel from "../../components/carousel";

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await fetchPostSingle(`${params.id}`);
  console.log(data);
  const carouselContent = {
    heading: "Ander Nieuws",
    excludePost: `${params.id}`,
  };

  return (
    <main>
      <div className={`container ${styles.nieuwsContainer}`}>
        <div className={styles.postGroup}>
          {data && data.imageSrc && data.imageAlt && (
            <div className={`${styles.image} image`}>
              <Image
                src={data.imageSrc}
                alt={data.imageAlt}
                priority={false}
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
          <h2>Hi im the single post:{params.id}</h2>
          {data && data.content &&  <PortableText value={data.content} />}
        </div>
        <Carousel content={carouselContent} />
      </div>
    </main>
  );
};

export default Page;
