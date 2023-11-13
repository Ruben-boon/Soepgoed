import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.scss";
import facebook from "../../../../public/facebook.svg";
import instagram from "../../../../public/instagram.svg";
import linkedIn from "../../../../public/linkedIn.svg";
import Button from "./button";
import { PortableText } from "@portabletext/react";

type FooterProps = {
  menuAr: { url: string; label: string }[];
  settings: {
    banner?: true;
    contentColumnOne?: any;
    contentColumnTwo?: any;
    buttonGroup?: {
      buttonText: string;
      buttonToggle: true;
      buttonVariant: "primary" | "secondary";
      buttonLink: string;
    };
    buttonGroupTwo?: {
      buttonText: string;
      buttonToggle: true;
      buttonVariant: "primary" | "secondary";
      buttonLink: string;
    };
  };
  logo?: {
    logoSrc?: string;
  };
  contactInfo: {
    companyName?: string;
    companyStreet?: string;
    companyPostal?: string;
    companyPhone?: string;
    companyEmail?: string;
    companyInstagram?: string;
    companyFacebook?: string;
    companyLinkedIn?: string;
    copyright?: string;
  };
};

const Footer = ({ menuAr, settings, contactInfo, logo }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} ${"container"}`}>
        {logo && logo.logoSrc && (
          <Link href="/" className={styles.image}>
            <Image
              src={logo.logoSrc}
              alt={"Logo van soepgoed"}
              width={160}
              height={160}
              style={{ objectFit: "contain" }}
            />
          </Link>
        )}
        <div className={`${styles.linkGroup}`}>
          {menuAr &&
            menuAr.length > 0 &&
            menuAr.map(
              (item: { url: string; label: string }, index: number) => {
                return (
                  <Link key={index} href={item.url}>
                    {item.label}
                  </Link>
                );
              }
            )}
        </div>
        <span></span>
        <div className={styles.contactGroup}>
          {contactInfo.companyName && <p>{contactInfo.companyName}</p>}
          {contactInfo.companyStreet && <p>{contactInfo.companyStreet}</p>}
          {contactInfo.companyPostal && <p>{contactInfo.companyPostal}</p>}
          {contactInfo.companyEmail && <p>{contactInfo.companyEmail}</p>}
          {contactInfo.companyPhone && <p>{contactInfo.companyPhone}</p>}
        </div>
      </div>
      {settings.banner && (
        <div className={`${styles.bannerContainer} ${"container"}`}>
          <div className={styles.textGroup}>
            {settings.contentColumnOne && (
              <PortableText value={settings.contentColumnOne} />
            )}
            {settings.buttonGroup && <Button content={settings.buttonGroup} />}
          </div>
          <div className={styles.textGroup}>
            {settings.contentColumnTwo && (
              <PortableText value={settings.contentColumnTwo} />
            )}
            {settings.buttonGroupTwo && <Button content={settings.buttonGroupTwo} />}
          </div>
        </div>
      )}
      <div className={`${styles.crsContainer} ${"container"}`}>
        <p>{contactInfo.copyright}</p>
        <div className={styles.socialGroup}>
          {contactInfo.companyFacebook && (
            <a href={contactInfo.companyFacebook}>
              <Image
                src={facebook}
                alt={"facebook icon"}
                height={24}
                width={24}
                style={{ objectFit: "contain" }}
              />
            </a>
          )}
          {contactInfo.companyInstagram && (
            <a href={contactInfo.companyInstagram}>
              <Image
                src={instagram}
                alt={"instagram icon"}
                height={24}
                width={24}
                style={{ objectFit: "contain" }}
              />
            </a>
          )}
          {contactInfo.companyLinkedIn && (
            <a href={contactInfo.companyLinkedIn}>
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
    </footer>
  );
};

export default Footer;
