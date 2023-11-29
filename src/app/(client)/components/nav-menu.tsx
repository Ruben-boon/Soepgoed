"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav-menu.module.scss";
import { useEffect, useState } from "react";
import Button from "./button";
import { usePathname } from "next/navigation";
import path from "path";

type NavMenuProps = {
  menuAr: { url: string; label: string }[];
  settings: {
    logoSrc?: string;
    button?: "primary" | "secondary";
  };
  currentPath?: string;
};

interface MenuItem {
  url: string;
  label: string;
}

const NavMenu = ({ menuAr, settings }: NavMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const bodyHtmlElement = document.querySelector(
      "html, body"
    ) as HTMLHtmlElement | null;
    if (bodyHtmlElement) {
      if (menuOpen) {
        bodyHtmlElement.classList.add("body-scroll-lock");
      } else {
        bodyHtmlElement.classList.remove("body-scroll-lock");
      }
    }
    return () => {
      if (bodyHtmlElement) {
        bodyHtmlElement.classList.remove("body-scroll-lock");
      }
    };
  }, [menuOpen]);

  return (
    <nav className={styles.nav}>
      <div className={`${styles.navContainer} ${"container"}`}>
        {settings.logoSrc && (
          <Link
            href="/"
            className={`${styles.image} ${menuOpen ? styles.open : ""}`}
          >
            <Image
              src={settings.logoSrc}
              alt={"Logo van soepgoed"}
              width={100}
              height={100}
              style={{ objectFit: "contain" }}
            />
          </Link>
        )}
        <div
          className={`${styles.burgerGroup} `}
          onClick={() => setMenuOpen(true)}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <div className={`${styles.linkGroup} ${menuOpen ? styles.open : ""}`}>
          {menuAr &&
            menuAr.length > 0 &&
            menuAr.map((item: MenuItem, index: number) => {
              if (index === menuAr.length - 1 && settings.button) {
                // Render Button component for the last item
                const itemClasses = styles.button;
                const buttonContent = {
                  buttonLink: item.url,
                  buttonText: item.label,
                  buttonVariant: "tertiary",
                  buttonToggle: false, // You may set this to true if needed
                };
                return (
                  <div key={index} onClick={() => setMenuOpen(false)} className={styles.buttonHack}>
                    <Button  content={buttonContent} />
                  </div>
                );
              } else {
                // Render Link component for other items
                return (
                  <Link
                    key={index}
                    href={item.url}
                    onClick={() => setMenuOpen(false)}
                    as={`/${item.url}`}
                    //the substring removes the leading slash to compare the url to the pathname
                    className={`${
                      item.url == pathname.substring(1)
                        ? styles.currentPath
                        : ""
                    }  ${styles.link}  `}
                  >
                    {item.label}
                  </Link>
                );
              }
            })}
          <div
            className={`${styles.crossGroup} `}
            onClick={() => setMenuOpen(false)}
          >
            <div className={styles.crossWrapper}>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
