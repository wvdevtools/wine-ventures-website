import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/Terms.module.css';
//Sanity
import { groq } from 'next-sanity';
import { client } from '../lib/sanity.client';
import { PortableText } from '@portabletext/react';

const TermosCondicoes = ({ termsAndConditionsData }) => {
  const { t } = useTranslation('termosCondicoes');

  return (
    <>
      {termsAndConditionsData && (
        <section className={styles.section}>
          <div className={styles.sectionContainer}>
            <div className={styles.backLinkContainer}>
              <Link href="/" className={styles.backLink}>
                <img src="/images/back-arrow.svg" alt="back arrow" />{' '}
                {t('backLink')}
              </Link>
            </div>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>{t('title')}</h1>
            </div>
            <div className={styles.contentContainer}>
              <PortableText
                value={termsAndConditionsData[0].termsAndConditionsText}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  const termsAndConditions = groq`*[_type == "termsAndConditions" && __i18n_lang == "${locale}"]{
    _id,
    title,
    termsAndConditionsText
  }`;

  const termsAndConditionsData = await client.fetch(termsAndConditions);

  return {
    props: {
      termsAndConditionsData,
    },
  };
};

export default TermosCondicoes;
