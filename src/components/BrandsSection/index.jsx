import styles from './BrandsSection.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import { arimo } from '@/utils/fonts';

export const BrandsSection = ({ t }) => {
  return (
    <section className={styles.section} id="home">
      <div className={styles.sectionContainer}>
        <Fade duration={2000}>
          <h1 className={styles.homeTitle}>
            Thinking Outside of the Bottle <br />
            <span> Driving Innovation in the Wine World</span>
          </h1>
        </Fade>
        <Fade>
          <h2 className={`${arimo.className} ${styles.title}`} id="marcas">
            {t('brands.title')}
          </h2>
        </Fade>
        <Fade>
          <p className={styles.subtitle}>{t('brands.subtitle')}</p>
        </Fade>
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
      </div>
    </section>
  );
};
