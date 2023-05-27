import Head from "next/head";
import { HeroSection } from "@/components/HeroSection";
import BrandsSection from "@/components/BrandsSection";
import AboutSection from "@/components/AboutSection";
import MediaSection from "@/components/MediaSection";
import useTranslation from "next-translate/useTranslation";
//Sanity
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";

/* const articlesQuery = groq`*[_type == "article" && __i18n_lang == "en"]{
  _id,
  title, 
  slug,
  publishedAt,
  articleSummary,
  mainImage,
  body,
}`; */

export const getStaticProps = async ({locale}) => {
  console.log('locale: ', locale)
  //pass the locale to the query
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

  const articlesData = await client.fetch(articlesQuery);
  //sort articles by order
  articlesData.sort((a, b) => (a.order > b.order ? 1 : -1));

  return { props: { articlesData } };
};

export default function Home({ articlesData }) {
  const { t } = useTranslation("home");

  console.log('articlesData: ', articlesData)

  //map through articlesData and return only the ones that the id dosen't include "i18n_en"
  // const articlesDataPt = articlesData.filter((article) => !article._id.includes("i18n_en"));
  // console.log('articlesDataPt: ', articlesDataPt)

  return (
    <>
      <Head>
        <title>Wine Ventures</title>
        <meta name="description" content="Wine Ventures - World Wine Pleasures" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection t={t} />
      <BrandsSection t={t} />
      <AboutSection t={t}/>
      <MediaSection articlesData={articlesData} t={t}/>
    </>
  );
}
