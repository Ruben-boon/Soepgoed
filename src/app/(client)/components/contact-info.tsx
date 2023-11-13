import styles from "./contact-info.module.scss";
import { BlockProps } from "../interfaces/interfaces";
import Image from "next/image";
import { fetchContactInfo } from "@/api/sanityApi";
import facebook from "../../../../public/facebook.svg";
import instagram from "../../../../public/instagram.svg";
import linkedIn from "../../../../public/linkedIn.svg";

export interface ContactInfoProps {
  content: BlockProps;
}

const ContactInfo: React.FC<ContactInfoProps> = async ({ content }) => {
  const data = await fetchContactInfo();
  console.log(data);

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
              <p className={styles.name}>{data.contactInfo.companyName}</p>
            )}
            {data.contactInfo.companyStreet && (
              <p>{data.contactInfo.companyStreet}</p>
            )}
            {data.contactInfo.companyPostal && (
              <p>{data.contactInfo.companyPostal}</p>
            )}
            {data.contactInfo.companyEmail && (
              <p className={styles.email}>{data.contactInfo.companyEmail}</p>
            )}
            {data.contactInfo.companyPhone && (
              <p className={styles.phone}>{data.contactInfo.companyPhone}</p>
            )}
            <div className={styles.socialGroup}>
              {data.contactInfo.companyFacebook && (
                <a href={data.contactInfo.companyFacebook}>
                  <Image
                    src={facebook}
                    alt={"facebook icon"}
                    height={24}
                    width={24}
                    style={{ objectFit: "contain" }}
                  />
                </a>
              )}
              {data.contactInfo.companyInstagram && (
                <a href={data.contactInfo.companyInstagram}>
                  <Image
                    src={instagram}
                    alt={"instagram icon"}
                    height={24}
                    width={24}
                    style={{ objectFit: "contain" }}
                  />
                </a>
              )}
              {data.contactInfo.companyLinkedIn && (
                <a href={data.contactInfo.companyLinkedIn}>
                  <Image
                    src={linkedIn}
                    alt={"linkedin icon"}
                    height={24}
                    width={24}
                    style={{ objectFit: "contain" }}
                  />
                </a>
              )}
            </div>
          </div>
        </div>
        {content.imageSrc && content.imageAlt && (
          <div className={`${styles.image} ${"image"}`}>
            <Image
              src={content.imageSrc}
              alt={content.imageAlt}
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;
