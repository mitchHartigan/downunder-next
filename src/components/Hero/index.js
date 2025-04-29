import Image from "next/image";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Downunder Landscape</p>
      <p className={styles.subtitle}>
        Making backyard dreams come true for over 30 years in Orange County.
      </p>
      <button className={styles.contactButton}>Contact Us</button>
    </div>
  );
}
