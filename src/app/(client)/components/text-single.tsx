"use client";
import { PortableText } from "@portabletext/react";
import { BlockProps } from "../interfaces/interfaces";
import Button from "./button";
import styles from "./text-single.module.scss";
import { useEffect, useRef } from "react";

interface TextProps {
  content: BlockProps;
}

const TextSingle: React.FC<TextProps> = ({ content }) => {
  const path = useRef<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      path.current = window.location.pathname;
    }
    if (path.current === "/") {
      const firstDiv = document.querySelector(`.${styles.text}`);
      if (firstDiv) {
        firstDiv.classList.add(styles.isHome);
      }
    }
  }, []);


  return (
    <div className={`${styles.text}`}>
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
