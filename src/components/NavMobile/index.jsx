import Link from 'next/link';
import styles from './NavMobile.module.css';
import { useRouter } from 'next/router';

export const NavMobile = ({ mobileNavisOpen, t }) => {
  const router = useRouter();
  console.log('mobileNavisOpen', mobileNavisOpen);
  return (
    mobileNavisOpen && (
      <div className={styles.mobileMenu}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <Link href="#marcas">{t('navbar.brands')}</Link>
            <Link href="#sobre-nos">{t('navbar.aboutUs')}</Link>
            <Link href="#media">{t('navbar.media')}</Link>
            <Link href="#contactos">{t('navbar.contacts')}</Link>
          </ul>
        </nav>

        <div className={styles.languageContainer}>
          <Link href={router.asPath} locale={router.locales[0]}>
            PT
          </Link>
          <span>|</span>
          <Link href={router.asPath} locale={router.locales[1]}>
            EN
          </Link>
        </div>
      </div>
    )
  );
};
