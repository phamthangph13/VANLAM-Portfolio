import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.artwork} aria-hidden="true">
        <Image
          className={styles.paper}
          src="/images/background.png"
          alt=""
          fill
          sizes="100vw"
          preload
        />
        <picture className={styles.landscape}>
          <source
            media="(max-width: 767px) and (orientation: portrait)"
            srcSet="/images/mobile-landscape.svg"
          />
          <img
            src="/images/landscape.svg"
            alt=""
            width={1344}
            height={768}
          />
        </picture>
        <div className={styles.primaryWrap}>
          <Image
            className={styles.primary}
            src="/images/primary.svg"
            alt=""
            width={1945}
            height={809}
            sizes="(max-width: 767px) 90vw, (max-width: 1099px) 118vw, 90vw"
            unoptimized
            preload
          />
        </div>
      </div>

      <SiteHeader />
    </main>
  );
}
