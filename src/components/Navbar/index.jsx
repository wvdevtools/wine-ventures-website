import styles from './Navbar.module.css';
import Hamburger from 'hamburger-react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Navbar = ({ toggleMobileNav, t }) => {
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <h1 style={{ color: '#611A41' }}>Brand</h1>
        <div className={styles.hambIcon} onClick={toggleMobileNav}>
          <Hamburger color="#611A41" size={20} />
        </div>
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
    </div>
  );
};
