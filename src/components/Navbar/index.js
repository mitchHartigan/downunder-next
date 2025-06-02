import Image from "next/image";
import styles from "./navbar.module.css";

import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.container} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.content}>
        <Image src="/Logo.png" alt="Logo" width={114} height={41} />
        <div className={styles.links}>
          <p>one link</p>
          <p>two link</p>
          <p>three link</p>
        </div>
      </div>
    </div>
  );
}
