"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav-menu.module.scss";
import { useState } from "react";

type NavMenuProps = {
  menuAr: { url: string; label: string }[];
  settings: {
    logoSrc?: string;
    button?: "primary" | "secondary";
  };
};

const NavMenu = ({ menuAr, settings }: NavMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={`${styles.navContainer} ${"container"}`}>
        {settings.logoSrc && (
          <Link href="/" className={styles.image}>
            <Image
              src={settings.logoSrc}
              alt={"Logo van soepgoed"}
              width={80}
              height={80}
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
            menuAr.map(
              (item: { url: string; label: string }, index: number) => {
                const isLastItem = index === menuAr.length - 1;
                const itemClasses =
                  isLastItem && settings.button
                    ? `button ${settings.button} ${styles.button}`
                    : "";
                return (
                  <Link key={index} href={item.url} onClick={() => setMenuOpen(false)} as={`/${item.url}`} className={itemClasses}>
                    {item.label}
                  </Link>
                );
              }
            )}
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
