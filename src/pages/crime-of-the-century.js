import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/BrandsPage.module.css';
import Trans from 'next-translate/Trans';
import Image from 'next/image';
import { arimo } from '@/utils/fonts';

const CrimeOfTheCentury = () => {
  const { t } = useTranslation('cotc');

  return (
    <section className={styles.main}>
      <div className={styles.sectionContainer}>
        <div className={styles.titleContainer}>
          <h1 className={`${arimo.className} ${styles.pageTitle}`}>
            {t('title')}
          </h1>
          <h2 className={`${arimo.className} ${styles.subtitle}`}>
            {t('subTitle')}
          </h2>
        </div>

        <div className={styles.firstSectionContainer}>
          <article className={styles.articleContainer}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/ctoc_wine_pouring.jpg"
                alt="Crime of the century. Pouring wine"
                fill={true}
                priority={true}
                className={styles.image}
                sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
              />
            </div>
            <h2 className={styles.title}>
              <Trans
                i18nKey="cotc:articleTitle"
                components={{
                  b: <span className={styles.bold} />,
                }}
              />
            </h2>
            <div className={styles.textContainer}>
              <p className={styles.text}>{t('brandFirstParagraph')}</p>
              <p className={styles.text}>{t('brandSecondParagraph')}</p>
            </div>
            <Link
              href="https://crimeofthecentury.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              {t('knowMore')}
            </Link>
          </article>
        </div>
        <div className={styles.bottomImageContainer}>
          <Image
            src="/images/cotc_wine_station.jpg"
            alt="Crime of the Century, tap wine."
            width={1250} // The original width of the image
            height={833} // The original height of the image
            className={styles.bottomImage}
            sizes="100vw"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default CrimeOfTheCentury;
