import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/Terms.module.css';
import { arimo } from '@/utils/fonts';

const PoliticaPrivacidade = () => {
  const { t } = useTranslation('politicaPrivacidade');
  const firstPointsecondParagraphlist = t(
    'politicaPrivacidade:firstPoint.secondParagraphlist',
    {},
    { returnObjects: true }
  );
  const firstPointThirdParagraphs = t(
    'politicaPrivacidade:firstPoint.thirdParagraphs',
    {},
    { returnObjects: true }
  );
  const secondPointParagraphs = t(
    'politicaPrivacidade:secondPoint.paragraphs',
    {},
    { returnObjects: true }
  );
  const thirdPointFirstParagraphList = t(
    'politicaPrivacidade:thirdPoint.firstParagraphlist',
    {},
    { returnObjects: true }
  );
  const thirdPointThirdParagraphList = t(
    'politicaPrivacidade:thirdPoint.thirdParagraphlist',
    {},
    { returnObjects: true }
  );
  const thirdPointFourthParagraphs = t(
    'politicaPrivacidade:thirdPoint.fourthParagraphs',
    {},
    { returnObjects: true }
  );
  const thirdPointPointAfirstParagraphlist = t(
    'politicaPrivacidade:thirdPoint.pointAfirstParagraphlist',
    {},
    { returnObjects: true }
  );
  const thirdPointPointAsecondParagraphs = t(
    'politicaPrivacidade:thirdPoint.pointAsecondParagraphs',
    {},
    { returnObjects: true }
  );
  const thirdPointPointBparagraphs = t(
    'politicaPrivacidade:thirdPoint.pointBparagraphs',
    {},
    { returnObjects: true }
  );
  const thirdPointPointCparagraphs = t(
    'politicaPrivacidade:thirdPoint.pointCparagraphs',
    {},
    { returnObjects: true }
  );
  const fourthPointPointAparagraphs = t(
    'politicaPrivacidade:fourthPoint.pointAparagraphs',
    {},
    { returnObjects: true }
  );
  const fourthPointPointBfirstParagraphlist = t(
    'politicaPrivacidade:fourthPoint.pointBfirstParagraphlist',
    {},
    { returnObjects: true }
  );
  const sixthPointParagraphs = t(
    'politicaPrivacidade:sixthPoint.paragraphs',
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
            <p>{t('firstPoint.firstParagraph')}</p>
            <p>{t('firstPoint.secondParagraph')}</p>
            <ul>
              {firstPointsecondParagraphlist?.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            {firstPointThirdParagraphs?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
          <article className={styles.contentContainer}>
            <h2 className={`${arimo.className} ${styles.secondTitle}`}>
              {t('secondPoint.title')}
            </h2>
            {secondPointParagraphs?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
          <article className={styles.contentContainer}>
            <h2 className={`${arimo.className} ${styles.secondTitle}`}>
              {t('thirdPoint.title')}
            </h2>
            <p>{t('thirdPoint.firstParagraph')}</p>
            <ul>
              {thirdPointFirstParagraphList?.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <p>{t('thirdPoint.thirdParagraph')}</p>
            <ul>
              {thirdPointThirdParagraphList?.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            {thirdPointFourthParagraphs?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <h3 className={`${arimo.className} ${styles.thirdTitle}`}>
              {t('thirdPoint.pointA')}
            </h3>
            <p>{t('thirdPoint.pointAfirsParagraph')}</p>
            <ol>
              {thirdPointPointAfirstParagraphlist?.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ol>
            {thirdPointPointAsecondParagraphs?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <h3 className={`${arimo.className} ${styles.thirdTitle}`}>
              {t('thirdPoint.pointB')}
            </h3>
            {thirdPointPointBparagraphs?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <h3 className={`${arimo.className} ${styles.thirdTitle}`}>
              {t('thirdPoint.pointC')}
            </h3>
            {thirdPointPointCparagraphs?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
          <article className={styles.contentContainer}>
            <h2 className={`${arimo.className} ${styles.secondTitle}`}>
              {t('fourthPoint.title')}
            </h2>
            <h3 className={`${arimo.className} ${styles.thirdTitle}`}>
              {t('fourthPoint.pointA')}
            </h3>
            {fourthPointPointAparagraphs?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <h3 className={`${arimo.className} ${styles.thirdTitle}`}>
              {t('fourthPoint.pointB')}
            </h3>
            <p>{t('fourthPoint.pointBfirstParagraph')}</p>
            <ol>
              {fourthPointPointBfirstParagraphlist?.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ol>
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
            {sixthPointParagraphs?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
        </div>
      </section>
    </>
  );
};

export default PoliticaPrivacidade;
