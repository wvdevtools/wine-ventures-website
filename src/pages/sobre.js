import styles from '../styles/SobreNos.module.css';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Trans from 'next-translate/Trans';
import { arimo } from '@/utils/fonts';
/* import Link from 'next/link'; */
//Sanity
/* import { groq } from 'next-sanity';
import { client } from '../lib/sanity.client';
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '@portabletext/react'; */

const SobreNos = (/* { aboutUsPageData } */) => {
  const { t } = useTranslation('sobreNos');

  /*   const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  } */

  return (
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
              className={styles.image}
            />
          </div>
          <h2 className={`${arimo.className} ${styles.title}`}>
            <Trans
              i18nKey="sobreNos:firstArticleTitle"
              components={{
                b: <z className={styles.bold} />,
              }}
            />
          </h2>

          <p className={styles.text}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
            nunc eget odio ultricies aliquet. Sed euismod, nisl quis consectetur
            ultricies, nisl nibh aliquam nunc, quis ultrices libero nisl quis
            nunc. Sed euismod, nisl quis consectetur ultricies, nisl nibh
            aliquam nunc, quis ultrices libero nisl quis.
          </p>
        </article>
        <article className={styles.articleContainer}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/wine_cheers.jpg"
              alt="Cheers"
              fill={true}
              className={styles.image}
            />
          </div>
          <h2 className={`${arimo.className} ${styles.title}`}>
            <Trans
              i18nKey="sobreNos:secondArticleTitle"
              components={{
                b: <z className={styles.bold} />,
              }}
            />
          </h2>

          <p className={styles.text}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
            nunc eget odio ultricies aliquet. Sed euismod, nisl quis consectetur
            ultricies, nisl nibh aliquam nunc, quis ultrices libero nisl quis
            nunc. Sed euismod, nisl quis consectetur ultricies, nisl nibh
            aliquam nunc, quis ultrices libero nisl quis.
          </p>
        </article>
      </section>
      <section className={styles.secondSectionContainer}>
        <div className={styles.titleContainer}>
          <h2 className={`${arimo.className} ${styles.title}`}>
            {t('leadershipTitle')}
          </h2>
          <h3 className={styles.subTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
            <p className={styles.profileText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
              nunc eget odio ultricies aliquet. Sed euismod, nisl quis
              consectetur ultricies.
            </p>
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
            <p className={styles.profileText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
              nunc eget odio ultricies aliquet. Sed euismod, nisl quis
              consectetur ultricies.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
};

/* export const getStaticProps = async ({ locale }) => {
  console.log('locale: ', locale);
  const aboutUsPageQuery = groq`*[_type == "aboutUsPage" && __i18n_lang == "${locale}"]{
    _id,
    title,
    missionAndVision,
    leadership,
    leadershipImageOne,
    leadershipImageTwo,
    sustainability
  }`;

  console.log('aboutUsPageQuery: ', aboutUsPageQuery);

  const aboutUsPageData = await client.fetch(aboutUsPageQuery);

  return {
    props: {
      aboutUsPageData,
    },
    revalidate: 10,
  };
}; */

export default SobreNos;
