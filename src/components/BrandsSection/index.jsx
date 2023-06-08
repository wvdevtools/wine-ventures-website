import styles from './BrandsSection.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

export const BrandsSection = ({ t }) => {
  return (
    <section className={styles.section} id="marcas">
      <div className={styles.sectionContainer}>
        <Fade duration={2000}>
          <h1 className={styles.homeTitle}>
            "Thinking Outside of the Bottle: Driving Innovation in the Wine
            World - Wine Ventures"
          </h1>
        </Fade>

        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{t('brands.title')}</h2>
        </div>
        <Fade duration={2000}>
          <p className={styles.subtitle}>{t('brands.subtitle')}</p>

          <div className={styles.brands}>
            <Link
              href="/crime-of-the-century"
              className={styles.imgLinkContainer}
            >
              <Image
                src="/images/cotc_brand.png"
                alt="Crime Of The Century"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                fill
                className={styles.img}
              />
            </Link>
            <Link href="/dansa" className={styles.imgLinkContainer}>
              <Image
                src="/images/dansa_brand.png"
                alt="Dansa"
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                className={styles.img}
              />
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  );
};
