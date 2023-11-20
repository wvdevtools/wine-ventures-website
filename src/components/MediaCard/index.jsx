import styles from './MediaCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '../../lib/sanity.client';
import imageUrlBuilder from '@sanity/image-url';
import { arimo } from '@/utils/fonts';

export const MediaCard = ({ image, title, summary, slug, t }) => {
  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={urlFor(image).url()}
          alt={title}
          fill
          className={styles.image}
        />
      </div>

      <div className={styles.cardBody}>
        <h3 className={`${arimo.className} ${styles.title}`}>{title}</h3>
        <p>{summary}</p>
      </div>
      <Link href={`media/${slug.current}`} className={styles.link}>
        {t('media.readMore')}
      </Link>
    </div>
  );
};
