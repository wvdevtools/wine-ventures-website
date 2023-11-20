import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/BrandsPage.module.css';
import Trans from 'next-translate/Trans';
//Sanity
/* import { groq } from 'next-sanity';
import { client } from '../lib/sanity.client';
import { PortableText } from '@portabletext/react'; */
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
                className={styles.image}
              />
            </div>
            <h2 className={styles.title}>
              <Trans
                i18nKey="cotc:articleTitle"
                components={{
                  b: <z className={styles.bold} />,
                }}
              />
            </h2>

            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
              nunc eget odio ultricies aliquet. Sed euismod, nisl quis
              consectetur ultricies, nisl nibh aliquam nunc, quis ultrices
              libero nisl quis nunc. Sed euismod, nisl quis consectetur
              ultricies, nisl nibh aliquam nunc, quis ultrices libero nisl quis.
            </p>
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
            src="/images/cotc_bottom.jpg"
            alt="Crime of the Century, tap wine."
            fill={true}
            /* width={1200}
          height={400} */

            /* className={styles.bottomImage} */
          />
        </div>
      </div>
    </section>
  );
};

/* export const getStaticProps = async ({ locale }) => {
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
    revalidate: 10,
  };
}; */

export default CrimeOfTheCentury;

{
  /* <PortableText value={cotcData[0].cotcBrandText} />
            <Link
              href="https://crimeofthecentury.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Website
            </Link> */
}
