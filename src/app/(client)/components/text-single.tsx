"use client";
import { PortableText } from "@portabletext/react";
import { BlockProps } from "../interfaces/interfaces";
import Button from "./button";
import styles from "./text-single.module.scss";
import { useParams } from "next/navigation";


interface TextProps {
  content: BlockProps;
}

const TextSingle: React.FC<TextProps> = ({ content }) => {

  return (
    <div className={`${styles.text}` }>
      <div className={` ${styles.textContainer} ${"container"}`}>
        <div className={`${styles.textGroup} ${"textGroup"}`}>
          {content.content && <PortableText value={content.content} />}
          {content.buttonGroup && <Button content={content.buttonGroup} />}
        </div>
      </div>
    </div>
  );
};

export default TextSingle;
