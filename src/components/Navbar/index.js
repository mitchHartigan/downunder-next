import styles from "./navbar.module.css";

export function Navbar() {
  // https://docs.google.com/document/d/1V1aJwcV5yEgC7vC2CjhXSMoNPV1ZQRSS/edit?usp=sharing&ouid=108301802730684787537&rtpof=true&sd=true
  return (
    <div className={styles.container}>
      <Image src="Logo.png" alt="Logo" />
      <div className={styles.linksContainer}>
        <p>one link</p>
        <p>two link</p>
        <p>three link</p>
      </div>
    </div>
  );
}
