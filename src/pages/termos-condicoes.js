import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/Terms.module.css';
import { arimo } from '@/utils/fonts';

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
