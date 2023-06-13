import React from 'react';
import { useState, useEffect } from 'react';
import '@/styles/globals.css';
import { AgeGateModal } from '@/components/AgeGateModal';
import { Navbar } from '@/components/Navbar';
import { NavMobile } from '@/components/NavMobile';
import { Footer } from '@/components/Footer';
import { roboto, didact } from '@/utils/fonts';
import useTranslation from 'next-translate/useTranslation';

export default function App({ Component, pageProps }) {
  const [mobileNavisOpen, setMobileNavisOpen] = useState(false);
  const [iconIsOpen, setIconOpen] = useState(false);
  const { t } = useTranslation('common');

  const toggleMobileNav = () => {
    setMobileNavisOpen((prev) => !prev);
  };

  //not allow scroll when mobile nav is open
  // useEffect(() => {
  //   if (mobileNavisOpen) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'unset';
  //   }
  // }, [mobileNavisOpen]);

  return (
    <>
      <header className={roboto.className}>
        <Navbar
          toggleMobileNav={toggleMobileNav}
          t={t}
          iconIsOpen={iconIsOpen}
          setIconOpen={setIconOpen}
        />
        <NavMobile
          mobileNavisOpen={mobileNavisOpen}
          t={t}
          toggleMobileNav={toggleMobileNav}
          iconIsOpen={iconIsOpen}
          setIconOpen={setIconOpen}
        />
      </header>
      <main className={didact.className}>
        <Component {...pageProps} inactive={true} />
      </main>
      <footer className={didact.className}>
        <Footer t={t} />
      </footer>
      <div className={didact.className}>
        <AgeGateModal />
      </div>
    </>
  );
}
