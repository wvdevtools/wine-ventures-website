import { useState } from 'react';
import styles from './MediaSection.module.css';
import { MediaCard } from '../MediaCard';
import Link from 'next/link';

const MediaSection = ({ articlesData, t }) => {
  const [articles, setArticles] = useState(articlesData);
  const [showAll, setShowAll] = useState(false);

  const handleShowAllClick = () => {
    setShowAll(true);
    setArticles(articlesData);
  };

  return (
    <section className={styles.section} id="media">
      <div className={styles.sectionContainer}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{t('media.title')}</h2>
        </div>
        <div className={styles.cards}>
          {articles.slice(0, showAll ? articles.length : 3).map((article) => (
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
          {!showAll && (
            <button className={styles.button} onClick={handleShowAllClick}>
            {t('media.seeAll')}
          </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
