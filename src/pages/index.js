import Head from 'next/head';
import { HeroSection } from '@/components/HeroSection';
import { BrandsSection } from '@/components/BrandsSection';
import AboutSection from '@/components/AboutSection';
import MediaSection from '@/components/MediaSection';
import useTranslation from 'next-translate/useTranslation';
//Sanity
import { groq } from 'next-sanity';
import { client } from '../lib/sanity.client';

export default function Home({ articlesData /* , aboutUsData */ }) {
  const { t } = useTranslation('home');

  return (
    <>
      <Head>
        <title>{t('head.title')}</title>
        <meta name="description" content={t('head.description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
        <link rel="canonical" href="https://www.wineventures.eu/" />
        {/*  Robots */}
        <meta name="robots" content="index, follow" />
      </Head>
      <HeroSection t={t} />
      {/* <div className={styles.titleContainer} id="title">
        <Fade duration={2000}>
          <h1 className={styles.homeTitle}>
            <i>
              "Thinking Outside of the Bottle: Driving Innovation in the Wine
              World"{' '}
            </i>
            - Wine Ventures
          </h1>
        </Fade>
      </div> */}
      <BrandsSection t={t} />
      <AboutSection t={t} /* aboutUsData={aboutUsData} */ />
      <MediaSection articlesData={articlesData} t={t} />
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  const articlesQuery = groq`*[_type == "article" && __i18n_lang == "${locale}"]{
    _id,
    title,
    slug,
    publishedAt,
    articleSummary,
    mainImage,
    body,
    order,
  }`;

  /* const aboutUsQuery = groq`*[_type == "aboutUsMain" && __i18n_lang == "${locale}"]{
    _id,
    title,
    aboutUsMainText,
  }`; */

  const articlesData = await client.fetch(articlesQuery);
  /* const aboutUsData = await client.fetch(aboutUsQuery); */
  //sort articles by order
  articlesData.sort((a, b) => (a.order > b.order ? 1 : -1));

  return {
    props: {
      articlesData,
      /* aboutUsData, */
    },
    revalidate: 10,
  };
};
