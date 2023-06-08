import styles from '../../styles/Article.module.css';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
//Sanity
import { client } from '../../lib/sanity.client';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '@portabletext/react';

const Article = ({ article }) => {
  const { t } = useTranslation('common');

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <>
      {article && (
        <section className={styles.section}>
          <div className={styles.sectionContainer}>
            <div className={styles.backLinkContainer}>
              <Link href="/#media" className={styles.backLink}>
                <img src="/images/back-arrow.svg" alt="back arrow" />{' '}
                {t('backLink')}
              </Link>
            </div>
            <div className={styles.articleCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={urlFor(article.mainImage).url()}
                  alt={article.title}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.articleBodyContainer}>
                <div className={styles.titleWrapper}>
                  <h1 className={styles.title}>{article.title}</h1>
                </div>
                <p className={styles.publishedAt}>
                  {article.publishedAt.split('T')[0]}
                </p>
                <article className={styles.articleBody}>
                  <PortableText value={article.body} />
                </article>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
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
