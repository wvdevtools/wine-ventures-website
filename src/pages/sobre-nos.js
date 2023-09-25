import styles from '../styles/SobreNos.module.css';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
//Sanity
import { groq } from 'next-sanity';
import { client } from '../lib/sanity.client';
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '@portabletext/react';


const SobreNos = ({ aboutUsPageData }) => {
  const { t } = useTranslation('sobreNos');

  console.log('aboutUsPageData: ', aboutUsPageData);

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <>
      <section className={styles.section}>
        <div className={`${styles.sectionContainer} ${styles.sectionTop}`}>
          <div className={styles.backLinkContainer}>
            <Link href="/#sobre-nos" className={styles.backLink}>
              <img src="/images/back-arrow.svg" alt="back arrow" />{' '}
              {t('backLink')}
            </Link>
          </div>
          <article className={styles.sectionArticle}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>{t('missionTitle')}</h1>
            </div>
            <div className={styles.articleBody}>
              <PortableText value={aboutUsPageData[0].missionAndVision} />
            </div>
          </article>
        </div>
      </section>
      <section className={`${styles.section} ${styles.bgColored}`}>
        <div className={styles.sectionContainer}>
          <article className={styles.sectionArticle}>
            <div
              className={` ${styles.whiteTitleWrapper}`}
            >
              <h2 className={`${styles.whiteTitle} ${styles.titleWhite}`}>
                {t('leadershipTitle')}
              </h2>
            </div>
            <div className={`${styles.articleBody} ${styles.whiteText}`}>
              <PortableText value={aboutUsPageData[0].leadership} />
            </div>
            <div className={styles.containerImages}>
              <div className={styles.imageContainer}>
                <Image
                  src={urlFor(aboutUsPageData[0].leadershipImageOne).url()}
                  alt="hey"
                  fill
                />
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src={urlFor(aboutUsPageData[0].leadershipImageTwo).url()}
                  alt="hey"
                  fill
                />
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className={styles.section}>
        <div className={`${styles.sectionContainer}`}>
          <article className={styles.sectionArticle}>
            <div className={styles.titleWrapper}>
              <h2 className={styles.title}>{t('sustainabilityTitle')}</h2>
            </div>
            <div className={styles.articleBody}>
              <PortableText value={aboutUsPageData[0].sustainability} />
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  console.log('locale: ', locale);
  const aboutUsPageQuery = groq`*[_type == "aboutUsPage" && __i18n_lang == "${locale}"]{
    _id,
    title,
    missionAndVision,
    leadership,
    leadershipImageOne,
    leadershipImageTwo,
    sustainability
  }`;

  console.log('aboutUsPageQuery: ', aboutUsPageQuery);

  const aboutUsPageData = await client.fetch(aboutUsPageQuery);

  return {
    props: {
      aboutUsPageData,
    },
    revalidate: 10,
  };
};

export default SobreNos;
