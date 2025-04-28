import Image from "next/image";
import styled from "styled-components";

export function Hero() {
  return (
    <div>
      <Image
        src="/HeroBackground.png"
        alt="Hero Background Image"
        width={1440}
        height={816}
      />
    </div>
  );
}
