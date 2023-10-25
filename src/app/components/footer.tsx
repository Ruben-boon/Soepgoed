import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.scss";
import facebook from "../../../public/facebook.svg";
import instagram from "../../../public/instagram.svg";
import linkedIn from "../../../public/linkedIn.svg";

type FooterProps = {
  menuAr: { url: string; label: string }[];
  settings: {
    navSettings: any;
    footerSettings: any;
    contactInfo: any;
  };
};

const Footer = ({ menuAr, settings }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} ${"container"}`}>
        <Link href="/" className={styles.image}>
          <Image
            src={settings.navSettings.logoSrc}
            alt={settings.navSettings.logoAlt}
            width={160}
            height={160}
            style={{ objectFit: "contain" }}
          />
        </Link>
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
          {settings.contactInfo.companyName && (
            <p>{settings.contactInfo.companyName}</p>
          )}
          {settings.contactInfo.companyStreet && (
            <p>{settings.contactInfo.companyStreet}</p>
          )}
          {settings.contactInfo.companyPostal && (
            <p>{settings.contactInfo.companyPostal}</p>
          )}
          {settings.contactInfo.companyEmail && (
            <p>{settings.contactInfo.companyEmail}</p>
          )}
          {settings.contactInfo.companyPhone && (
            <p>{settings.contactInfo.companyPhone}</p>
          )}
        </div>
      </div>
      {settings.footerSettings.banner && (
        <div className={`${styles.bannerContainer} ${"container"}`}></div>
      )}
      <div className={`${styles.crsContainer} ${"container"}`}>
        <p>{settings.contactInfo.copyRight}</p>
        <div className={styles.socialGroup}>
          {settings.contactInfo.companyFacebook && (
            <a href={settings.contactInfo.companyFacebook}>
              <Image
                src={facebook}
                alt={"facebook icon"}
                height={24}
                width={24}
                style={{ objectFit: "contain" }}
              />
            </a>
          )}
          {settings.contactInfo.companyInstagram && (
            <a href={settings.contactInfo.companyInstagram}>
              <Image
                src={instagram}
                alt={"instagram icon"}
                height={24}
                width={24}
                style={{ objectFit: "contain" }}
              />
            </a>
          )}
          {settings.contactInfo.companyLinkedIn && (
            <a href={settings.contactInfo.companyLinkedIn}>
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
