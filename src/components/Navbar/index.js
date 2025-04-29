import styles from "./navbar.module.css";

export function Navbar() {
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
