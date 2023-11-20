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
          <Fade>
            <Image
              src="/images/home_main_wine_img.jpg"
              alt="Pouring wine"
              fill={true}
              className={styles.image}
            />
          </Fade>
        </div>
        <h2 className={`${arimo.className} ${styles.title}`}>
          {t('aboutUs.title')}
        </h2>
        <Fade>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
            nunc eget odio ultricies aliquet. Sed euismod, nisl quis consectetur
            ultricies, nisl nibh aliquam nunc, quis ultrices libero nisl quis
            nunc. Sed euismod, nisl quis consectetur ultricies, nisl nibh
            aliquam nunc, quis ultrices libero nisl quis.
          </p>
        </Fade>
        <Link href="/sobre-nos" className={styles.button}>
          {t('aboutUs.knowMore')}
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
