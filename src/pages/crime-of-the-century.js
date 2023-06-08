import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/BrandsPage.module.css';
//Sanity
import { groq } from 'next-sanity';
import { client } from '../lib/sanity.client';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

const CrimeOfTheCentury = ({ cotcData }) => {
  const { t } = useTranslation('cotc');

  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <div className={styles.backLinkContainer}>
          <Link href="/#marcas" className={styles.backLink}>
            <img src="/images/back-arrow.svg" alt="back arrow" />{' '}
            {t('backLink')}
          </Link>
        </div>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{t('title')}</h1>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.cotcImageContainer}>
            <Image
              src="/images/cotc-content-logo.png"
              alt="Crime of the Century logo"
              fill
              priority
            />
          </div>

          <article className={styles.article}>
            <PortableText value={cotcData[0].cotcBrandText} />
            <Link
              href="https://crimeofthecentury.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Website
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
};

export const getStaticProps = async ({ locale }) => {
  const cotcQuery = groq`*[_type == "cotcBrand" && __i18n_lang == "${locale}"]{
    _id,
    title,
    cotcBrandText
  }`;

  const cotcData = await client.fetch(cotcQuery);

  return {
    props: {
      cotcData,
    },
  };
};

export default CrimeOfTheCentury;
