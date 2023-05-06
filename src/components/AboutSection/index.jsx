import styles from './AboutSection.module.css';
import Link from 'next/link';

const AboutSection = ({ t }) => {
  return (
    <section className={styles.section} id="sobre-nos">
      <div className={styles.sectionContainer}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{t('aboutUs.title')}</h2>
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at semper
          quam, ac egestas odio. Vestibulum non ornare sem, at mollis lectus.
          Pellentesque a malesuada turpis. Proin sed ex ipsum. In eget varius
          eros, id dapibus turpis. Mauris sapien leo, interdum nec lorem vitae,
          cursus egestas nulla. Donec pretium a nulla ac condimentum. Etiam
          aliquam interdum erat, mattis sollicitudin lacus euismod in. Quisque
          malesuada convallis ante, id placerat est molestie nec.
        </p>
        <Link href="/about" className={styles.button}>
          {t('aboutUs.knowMore')}
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
