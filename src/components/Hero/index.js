import Image from "next/image";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <div className={styles.container}>
      <Image
        src="/HeroBackground.png"
        alt="Hero Background Image"
        width={1440}
        height={816}
      />
      <p className={styles.title}>Downunder Landscape</p>
      <p className={styles.subtitle}>
        Making backyard dreams come true for over 30 years in Orange County.
      </p>
    </div>
  );
}
