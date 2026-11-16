import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import bgImage from "@/public/images/background.png";
import iconImage from "@/public/images/icon.svg";
import landscapeDesktop from "@/public/images/landscape.svg";
import landscapeMobile from "@/public/images/mobile-landscape.svg";
import primaryImage from "@/public/images/primary.svg";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.artwork} aria-hidden="true">
        <Image
          className={styles.paper}
          src={bgImage}
          alt=""
          fill
          sizes="100vw"
          preload
        />
        <picture className={styles.landscape}>
          <source
            media="(max-width: 767px) and (orientation: portrait)"
            srcSet={landscapeMobile.src}
          />
          <img src={landscapeDesktop.src} alt="" width={1344} height={768} />
        </picture>
        <div className={styles.primaryWrap}>
          <Image
            className={styles.primary}
            src={primaryImage}
            alt=""
            sizes="(max-width: 767px) 90vw, (max-width: 1099px) 118vw, 90vw"
            unoptimized
            preload
          />
        </div>
        <img
          className={styles.cornerIcon}
          src={iconImage.src}
          alt=""
          width={iconImage.width}
          height={iconImage.height}
        />
      </div>

      <SiteHeader />
    </main>
  );
}
