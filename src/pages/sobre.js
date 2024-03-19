import styles from '../styles/SobreNos.module.css';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Trans from 'next-translate/Trans';
import { arimo } from '@/utils/fonts';
import Head from 'next/head';

const SobreNos = () => {
  const { t } = useTranslation('sobreNos');

  return (
    <>
      <Head>
        <title>{t('head.title')}</title>
        <meta name="description" content={t('head.description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <link rel="canonical" href="https://www.wineventures.eu/sobre" />
        {/*  Robots */}
        <meta name="robots" content="index, follow" />
      </Head>
      <section className={styles.main}>
        <h1 className={`${arimo.className} ${styles.pageTitle}`}>
          {t('pageTitle')}
        </h1>
        <section className={styles.firstSectionContainer}>
          <article className={styles.articleContainer}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/home_main_wine_img.jpg"
                alt="Pouring wine"
                fill={true}
                sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                className={styles.image}
                priority={true}
              />
            </div>
            <h2 className={`${arimo.className} ${styles.title}`}>
              <Trans
                i18nKey="sobreNos:firstArticleTitle"
                components={{
                  b: <b className={styles.bold} />,
                }}
              />
            </h2>

            <p className={styles.text}>{t('firstArticleText')}</p>
          </article>
          <article className={styles.articleContainer}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/wine_cheers.jpg"
                alt="Cheers"
                fill={true}
                sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                className={styles.image}
              />
            </div>
            <h2 className={`${arimo.className} ${styles.title}`}>
              <Trans
                i18nKey="sobreNos:secondArticleTitle"
                components={{
                  b: <b className={styles.bold} />,
                }}
              />
            </h2>

            <p className={styles.text}>{t('secondArticleText')}</p>
          </article>
        </section>
        <section className={styles.secondSectionContainer}>
          <div className={styles.titleContainer}>
            <h2 className={`${arimo.className} ${styles.title}`}>
              {t('leadershipTitle')}
            </h2>
            <h3 className={`${styles.text} ${styles.centeredText}`}>
              {t('leadershipText')}
            </h3>
          </div>
          <div className={styles.profilesContainer}>
            <article className={styles.profileColumn}>
              <figure className={styles.figure}>
                <Image
                  src="/images/francisco_ferreira.jpg"
                  alt="Francisco Ferreira"
                  width={325}
                  height={332}
                />
                <figcaption className={styles.figcaption}>
                  Francisco de Sousa Ferreira
                </figcaption>
              </figure>
              <p className={styles.profileText}>{t('FSFText')}</p>
            </article>
            <article className={styles.profileColumn}>
              <figure className={styles.figure}>
                <Image
                  src="/images/maria_godinho.jpg"
                  alt="Maria Godinho"
                  width={325}
                  height={332}
                />
                <figcaption className={styles.figcaption}>
                  Maria Godinho
                </figcaption>
              </figure>
              <p className={styles.profileText}>{t('MGText')}</p>
            </article>
          </div>
        </section>
      </section>
    </>
  );
};

export default SobreNos;
