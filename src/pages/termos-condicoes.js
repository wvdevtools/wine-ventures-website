import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/Terms.module.css';
import { arimo } from '@/utils/fonts';
import Head from 'next/head';

const TermosCondicoes = () => {
  const { t } = useTranslation('termosCondicoes');

  const firstPointParagraphs = t(
    'termosCondicoes:firstPoint.paragraphs',
    {},
    { returnObjects: true }
  );
  const secondPointFirstParagraphList = t(
    'termosCondicoes:secondPoint.firstParagraphList',
    {},
    { returnObjects: true }
  );
  const secondPointSecondParagraphList = t(
    'termosCondicoes:secondPoint.secondParagraphList',
    {},
    { returnObjects: true }
  );
  const thirdPointParagraphs = t(
    'termosCondicoes:thirdPoint.paragraphs',
    {},
    { returnObjects: true }
  );
  const fourthPointParagraphs = t(
    'termosCondicoes:fourthPoint.paragraphs',
    {},
    { returnObjects: true }
  );

  return (
    <>
      <Head>
        <title>{t('head.title')}</title>
        <meta name="description" content={t('head.description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wineventures.eu/" />
        <meta property="og:title" content={t('head.ogTitle')} />
        <meta property="og:description" content={t('head.ogDescription')} />
        <meta
          property="og:image"
          content="https://www.wineventures.eu/images/wineventures.jpg"
        />
        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.wineventures.eu/termos-condicoes"
        />
        {/*  Robots */}
        <meta name="robots" content="index, follow" />
      </Head>
      <section className={styles.section}>
        <div className={styles.sectionContainer}>
          <h1 className={`${arimo.className} ${styles.pageTitle}`}>
            {t('title')}
          </h1>
          <article className={styles.contentContainer}>
            <h2 className={`${arimo.className} ${styles.secondTitle}`}>
              {t('firstPoint.title')}
            </h2>
            {firstPointParagraphs?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
          <article className={styles.contentContainer}>
            <h2 className={`${arimo.className} ${styles.secondTitle}`}>
              {t('secondPoint.title')}
            </h2>
            <p>{t('secondPoint.firstParagraph')}</p>
            <ol>
              {secondPointFirstParagraphList?.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ol>
            <p>{t('secondPoint.secondParagraph')}</p>
            <ul>
              {secondPointSecondParagraphList?.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <p>{t('secondPoint.thirdParagraph')}</p>
          </article>
          <article className={styles.contentContainer}>
            <h2 className={`${arimo.className} ${styles.secondTitle}`}>
              {t('thirdPoint.title')}
            </h2>
            {thirdPointParagraphs?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
          <article className={styles.contentContainer}>
            <h2 className={`${arimo.className} ${styles.secondTitle}`}>
              {t('fourthPoint.title')}
            </h2>
            {fourthPointParagraphs?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
          <article className={styles.contentContainer}>
            <h2 className={`${arimo.className} ${styles.secondTitle}`}>
              {t('fifthPoint.title')}
            </h2>
            <p>{t('fifthPoint.firstParagraph')}</p>
          </article>
          <article className={styles.contentContainer}>
            <h2 className={`${arimo.className} ${styles.secondTitle}`}>
              {t('sixthPoint.title')}
            </h2>
            <p>{t('sixthPoint.firstParagraph')}</p>
          </article>
          <article className={styles.contentContainer}>
            <h2 className={`${arimo.className} ${styles.secondTitle}`}>
              {t('seventhPoint.title')}
            </h2>
            <p>{t('seventhPoint.firstParagraph')}</p>
          </article>
          <article className={styles.contentContainer}>
            <h2 className={`${arimo.className} ${styles.secondTitle}`}>
              {t('eighthPoint.title')}
            </h2>
            <p>{t('eighthPoint.firstParagraph')}</p>
          </article>
          <article className={styles.contentContainer}>
            <h2 className={`${arimo.className} ${styles.secondTitle}`}>
              {t('ninethPoint.title')}
            </h2>
            <p>{t('ninethPoint.firstParagraph')}</p>
          </article>
        </div>
      </section>
    </>
  );
};

export default TermosCondicoes;
