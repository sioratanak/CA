"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "./page.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      setIsScrolled(window.scrollY > 72);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={styles.siteHeader}>
      <div className={`${styles.topBar} ${isScrolled ? styles.topBarHidden : ""}`}>
        Cambodian culture, food, tourism, and community in Czechia
      </div>

      <nav
        className={`${styles.nav} ${isScrolled ? styles.navCompact : ""}`}
        aria-label="Main navigation"
      >
        <a className={styles.logo} href="#top" aria-label="Cambodian Association home">
          <Image
            className={styles.logoImage}
            src="/ca-logo.jpg"
            alt="Cambodian Association logo"
            width={84}
            height={84}
            priority
          />
        </a>
        <div className={styles.navLinks}>
          <a href="#programs">Programs</a>
          <a href="#events">Events</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}
