import styles from "./calltoaction.module.css";
import Image from "next/image";

export function CallToAction() {
  const {
    container,
    contentContainer,
    imgContainer,
    text,
    title,
    button,
    underline,
  } = styles;

  return (
    <div className={container}>
      <div className={imgContainer}>
        <Image
          src="/fire-pit.jpeg"
          alt="placeholder landscape img"
          width={640}
          height={426}
        />
      </div>

      <div id="content" className={contentContainer}>
        <h4 className={title}>Let's build your dream garden.</h4>
        <span className={underline} />
        <p className={text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
          vestibulum arcu. Donec sit amet vehicula diam. Duis ullamcorper id
          erat ornare ornare. Quisque faucibus ex sapien vitae pellentesque sem
          placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
          aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec
          metus bibendum egestas.
        </p>
        <button className={button}>View Our Services</button>
      </div>
    </div>
  );
}
