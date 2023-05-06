import React from 'react';
import styles from './MediaSection.module.css';
import { MediaCard } from '../MediaCard';
import Link from 'next/link';

const MediaSection = ({ articlesData, t }) => {
  console.log('articlesData mediaSection: ', articlesData);

  return (
    <section className={styles.section} id="media">
      <div className={styles.sectionContainer}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{t('media.title')}</h2>
        </div>

        <div className={styles.cards}>
          {articlesData.map((article) => (
            <MediaCard
              key={article._id}
              image={article.mainImage}
              title={article.title}
              summary={article.articleSummary}
              slug={article.slug}
            />
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <Link href="" className={styles.button}>
            {t('media.seeAll')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
