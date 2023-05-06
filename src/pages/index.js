import Head from "next/head";
import { HeroSection } from "@/components/HeroSection";
import BrandsSection from "@/components/BrandsSection";
import AboutSection from "@/components/AboutSection";
import MediaSection from "@/components/MediaSection";
import useTranslation from "next-translate/useTranslation";
//Sanity
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";

const articlesQuery = groq`*[_type == "article"]{
  _id,
  title, 
  slug,
  publishedAt,
  articleSummary,
  mainImage,
  body,
}`;

export const getStaticProps = async () => {
  const articlesData = await client.fetch(articlesQuery);

  return { props: { articlesData } };
};

export default function Home({ articlesData }) {
  const { t } = useTranslation("home");

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
