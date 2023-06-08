import styles from './AboutSection.module.css';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

const AboutSection = ({ t, aboutUsData }) => {
  return (
    <section className={styles.section} id="sobre-nos">
      <div className={styles.sectionContainer}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{t('aboutUs.title')}</h2>
        </div>
        <Fade>
          <p className={styles.text}>{aboutUsData[0].aboutUsMainText}</p>
        </Fade>
        <Link href="/sobre-nos" className={styles.button}>
          {t('aboutUs.knowMore')}
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
