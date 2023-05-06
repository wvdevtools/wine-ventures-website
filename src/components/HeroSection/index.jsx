import styles from './HeroSection.module.css';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/wine-ventures-logo-color.svg"
          alt="main logo"
          fill
        />
      </div>
    </section>
  );
};
