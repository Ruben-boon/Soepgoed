import { PortableText } from "@portabletext/react";
import { BlockProps } from "../interfaces/interfaces";
import styles from "./donate.module.scss";

interface DonateProps {
  content: BlockProps;
}

const Donate: React.FC<DonateProps> = ({ content }) => {
  return (
    <div className={styles.donate}>
      <div className={` ${styles.container} ${"container"}`}>
          {content.column1Content && <div className={styles.textGroup}><PortableText value={content.column1Content} /></div>}
          {content.column2Content && <div className={` ${styles.textGroup} ${styles.textDonate}`}><PortableText value={content.column2Content} /></div>}
        </div>
      </div>
  );
};

export default Donate;