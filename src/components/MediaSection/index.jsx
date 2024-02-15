import { useState } from 'react';
import styles from './MediaSection.module.css';
import { MediaCard } from '../MediaCard';
import { Fade } from 'react-awesome-reveal';
import { arimo } from '@/utils/fonts';

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

  return articles?.length > 0 ? (
    <section className={styles.section} id="media">
      <div className={styles.sectionContainer}>
        <Fade>
          <h2 className={`${arimo.className} ${styles.title}`}>
            {t('media.title')}
          </h2>
        </Fade>
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

        <div className={styles.buttonContainer}>
          <RenderButton />
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
};

export default MediaSection;
