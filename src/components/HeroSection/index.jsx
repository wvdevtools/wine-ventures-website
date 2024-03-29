import Link from 'next/link';
import styles from './HeroSection.module.css';
import Image from 'next/image';
/* import { baskervville, roboto, inter, didact } from '@/utils/fonts';
import { Fade } from 'react-awesome-reveal'; */

export const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/wine-ventures-logo-color.svg"
          alt="Wine Ventures Logo"
          fill
          sizes="(max-width: 480px) 100px, 500px"
        />
      </div>

      {/* <div className={styles.brandContainer}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/simple-wv-logo.svg"
          alt="main logo"
          fill
        />
      </div>
        <div className={styles.titleContainer}>
          <div className={baskervville.className}>
            <h1 className={styles.title}>WINE VENTURES</h1>
          </div>
          <div className={didact.className}>
            <h2 className={styles.subTitle}>WORLD WINE PLEASURES</h2>
          </div>
        </div>
      </div> */}

      <Link className={styles.scrollDownImageContainer} href="#home">
        <img
          src="/images/scroll-down.svg"
          alt="scroll down icon"
          className={styles.scrollDownImage}
        />
      </Link>
    </section>
  );
};
