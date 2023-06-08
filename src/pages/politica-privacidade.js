import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/Terms.module.css';
//Sanity
import { groq } from 'next-sanity';
import { client } from '../lib/sanity.client';
import { PortableText } from '@portabletext/react';

const PoliticaPrivacidade = ({ privacyPolicyData }) => {
  const { t } = useTranslation('politicaPrivacidade');

  return (
    <>
      {privacyPolicyData && (
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
              <PortableText value={privacyPolicyData[0].privacyPolicyText} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  const privacyPolicyQuery = groq`*[_type == "privacyPolicy" && __i18n_lang == "${locale}"]{
    _id,
    title,
    privacyPolicyText
  }`;

  const privacyPolicyData = await client.fetch(privacyPolicyQuery);

  return {
    props: {
      privacyPolicyData,
    },
  };
};

export default PoliticaPrivacidade;
