import Link from 'next/link';
import styles from './NavMobile.module.css';
import { useRouter } from 'next/router';

export const NavMobile = ({
  mobileNavisOpen,
  t,
  toggleMobileNav,
  iconIsOpen,
  setIconOpen,
}) => {
  const router = useRouter();

  const handleClickNavLink = () => {
    toggleMobileNav();
    setIconOpen(!iconIsOpen);
  };
  return (
    mobileNavisOpen && (
      <div className={styles.mobileMenu}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>
              <Link href="/#marcas" onClick={handleClickNavLink}>
                {t('navbar.brands')}
              </Link>
            </li>
            <li>
              <Link href="/sobre" onClick={handleClickNavLink}>
                {t('navbar.aboutUs')}
              </Link>
            </li>
            <li>
              <Link href="/#media" onClick={handleClickNavLink}>
                {t('navbar.media')}
              </Link>
            </li>
            <li>
              <Link href="/contactos" onClick={handleClickNavLink}>
                {t('navbar.contacts')}
              </Link>
            </li>
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
