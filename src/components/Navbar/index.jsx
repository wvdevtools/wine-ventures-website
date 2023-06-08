import styles from './Navbar.module.css';
import Hamburger from 'hamburger-react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = ({ toggleMobileNav, t }) => {
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.brandLink}>
            <Image
              src="/images/small-wv-logo.svg"
              alt="logo"
              width={76}
              height={54}
              priority
            />
        </Link>

        <div className={styles.hambIcon} onClick={toggleMobileNav}>
          <Hamburger color="#611A41" size={20} />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <Link href="/#marcas">{t('navbar.brands')}</Link>
            <Link href="/#sobre-nos">{t('navbar.aboutUs')}</Link>
            <Link href="/#media">{t('navbar.media')}</Link>
            <Link href="/contactos">{t('navbar.contacts')}</Link>
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
