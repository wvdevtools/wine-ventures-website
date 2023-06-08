import Link from 'next/link';
import styles from './NavMobile.module.css';
import { useRouter } from 'next/router';

export const NavMobile = ({ mobileNavisOpen, t, toggleMobileNav }) => {
  const router = useRouter();
  
  return (
    mobileNavisOpen && (
      <div className={styles.mobileMenu}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <Link href="/#marcas" onClick={toggleMobileNav}>
              {t('navbar.brands')}
            </Link>
            <Link href="/#sobre-nos" onClick={toggleMobileNav}>
              {t('navbar.aboutUs')}
            </Link>
            <Link href="/#media" onClick={toggleMobileNav}>
              {t('navbar.media')}
            </Link>
            <Link href="/contactos" onClick={toggleMobileNav}>
              {t('navbar.contacts')}
            </Link>
          </ul>
        </nav>

        <div className={styles.languageContainer}>
          <Link href={router.asPath} locale={router.locales[0]}>
            PT
          </Link>
          <Link href={router.asPath} locale={router.locales[1]}>
            EN
          </Link>
        </div>
      </div>
    )
  );
};
