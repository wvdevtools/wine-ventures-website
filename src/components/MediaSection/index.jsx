import { useState } from 'react';
import styles from './MediaSection.module.css';
import { MediaCard } from '../MediaCard';
import { Fade } from 'react-awesome-reveal';

const MediaSection = ({ articlesData, t }) => {
  const [articles, setArticles] = useState(articlesData);
  const [showAll, setShowAll] = useState(false);

  // Update articlesData everytime the locale changes
  if (articlesData !== articles) {
    setArticles(articlesData);
  }

  const handleShowAllClick = () => {
    setShowAll(true);
    setArticles(articlesData);
  };

  const RenderButton = () => {
    if (!showAll && articles.length > 3) {
      return (
        <button className={styles.button} onClick={handleShowAllClick}>
          {t('media.seeAll')}
        </button>
      );
    }
  };

  return (
    <section className={styles.section} id="media">
      <div className={styles.sectionContainer}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{t('media.title')}</h2>
        </div>
        <Fade>
        <div className={styles.cards}>
          {articles.slice(0, showAll ? articles.length : 3).map((article) => (
            <MediaCard
              key={article._id}
              image={article.mainImage}
              title={article.title}
              summary={article.articleSummary}
              slug={article.slug}
              t={t}
            />
          ))}
        </div>
        </Fade>
        <div className={styles.buttonContainer}>
          <RenderButton />
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
