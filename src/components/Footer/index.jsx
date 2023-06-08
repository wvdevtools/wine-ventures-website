/* import { useEffect, useState } from 'react'; */
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = ({ t }) => {
  const currentYear = new Date().getFullYear();

  /* const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  console.log(width); */

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.firstColumn}>
        <div className={styles.socialIcons}>
          <a href="" target="_blank">
            <Image
              src="/images/facebook-icon.svg"
              alt="Facebook"
              width={48}
              height={48}
            />
          </a>
          <a href="" target="_blank">
            <Image
              src="/images/instagram-icon.svg"
              alt="Instagram"
              width={48}
              height={48}
            />
          </a>
          <a href="" target="_blank">
            <Image
              src="/images/linkedin-icon.svg"
              alt="Linkdin"
              width={48}
              height={48}
            />
          </a>
        </div>
        <div className={styles.wineModerationContainer}>
          <a href="https://www.wineinmoderation.eu/" target="_blank">
            <Image
              src="/images/wine-moderation.svg"
              alt="Wine Moderation"
              width={176}
              height={50}
            />
          </a>
          <p>
            Seja Responsável. <br /> Beba com moderação.{' '}
          </p>
        </div>
      </div>
      <div className={styles.columnTwoAndThree}>
        <div className={styles.secondColumn}>
          <Image
            src="/images/white_logo.svg"
            alt="Wine Ventures"
            width={250}
            height={111}
          />
          <p className={styles.copyText}>
            CopyRight © {currentYear} Wine Ventures By The Glass.
            {<br />} {t('footer.copyRights')}
          </p>
        </div>
        <div className={styles.thirdColumn}>
          <Image
            src="/images/livro-reclamacoes.png"
            alt="Livro de Reclamações"
            width={175}
            height={72}
          />

          <div className={styles.privacyLinks}>
            <Link href="/termos-condicoes" target="blank">
              {t('footer.termsAndConditions')}
            </Link>
            <Link href="/politica-privacidade" target="blank">
              {' '}
              {t('footer.privacyPolicy')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
