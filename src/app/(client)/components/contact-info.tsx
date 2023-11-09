import styles from "./text-and-image.module.scss";
import { BlockProps } from "../interfaces/interfaces";
import Image from "next/image";
import { fetchContactInfo } from "@/api/sanityApi";

export interface ContactInfoProps {
  content: BlockProps;
}

const ContactInfo: React.FC<ContactInfoProps> = async ({ content }) => {
  const data = await fetchContactInfo();

  return (
    <div className={styles.contactInfo}>
      <div
        className={` ${styles.container} ${"container"} ${
          content.textPosition
        }`}
      >
        <div className={styles.textGroup}>
          {content.heading && <h1>{content.heading}</h1>}
          <div className={styles.contactGroup}>
            {data.contactInfo.companyName && (
              <p>{data.contactInfo.companyName}</p>
            )}
            {data.contactInfo.companyStreet && (
              <p>{data.contactInfo.companyStreet}</p>
            )}
            {data.contactInfo.companyPostal && (
              <p>{data.contactInfo.companyPostal}</p>
            )}
            {data.contactInfo.companyEmail && (
              <p>{data.contactInfo.companyEmail}</p>
            )}
            {data.contactInfo.companyPhone && (
              <p>{data.contactInfo.companyPhone}</p>
            )}
          </div>
          {content.imageSrc && content.imageAlt && (
            <div className={`${styles.image} ${"image"}`}>
              <Image
                src={content.imageSrc}
                alt={content.imageAlt}
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
