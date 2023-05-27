import styles from '../../styles/Article.module.css';
//Sanity
import { client } from '../../lib/sanity.client';
import groq from 'groq';
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

const Article = ({ article }) => {
  console.log('article: ', article);

  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <h1 className={styles.title}>{article.title}</h1>
      </div>
    </section>
  );
};

const query = groq`*[_type == "article" && slug.current == $slug][0]
{
    _id,
    title,
    publishedAt,
    articleSummary,
    mainImage,
    body,
    order,
  }`;

export const getStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "article" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps = async ({ params = false }) => {
  const article = await client.fetch(query, { slug: params.slug });

  return {
    props: {
      article,
    },
  };
};

export default Article;
