import styles from './AboutSection.module.css';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import { arimo } from '@/utils/fonts';

const AboutSection = ({ t }) => {
  return (
    <section className={styles.section} id="sobre-nos">
      <div className={styles.sectionContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/home_main_wine_img.jpg"
            alt="Pouring wine"
            fill={true}
            priority={true}
            className={styles.image}
            sizes="(max-width: 480px) 100vw, 50vw"
          />
        </div>
        <Fade>
          <h2 className={`${arimo.className} ${styles.title}`}>
            {t('aboutUs.title')}
          </h2>
        </Fade>
        <Fade>
          <p className={styles.text}>{t('aboutUs.text')}</p>
        </Fade>
        <Link href="/sobre" className={styles.button}>
          {t('aboutUs.knowMore')}
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
