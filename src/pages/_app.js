import React from 'react';
import { useState, useEffect } from 'react';
import '@/styles/globals.css';
import { AgeGateModal } from '@/components/AgeGateModal';
import { Navbar } from '@/components/Navbar';
import { NavMobile } from '@/components/NavMobile';
import { Footer } from '@/components/Footer';
import { roboto, didact } from '@/utils/fonts';
import useTranslation from "next-translate/useTranslation";

export default function App({ Component, pageProps }) {
  const [mobileNavisOpen, setMobileNavisOpen] = useState(false);
  const { t } = useTranslation("common");

  const toggleMobileNav = () => {
    setMobileNavisOpen((prev) => !prev);
  };
  return (
    <>
      <header className={roboto.className}>
        <Navbar toggleMobileNav={toggleMobileNav} t={t}/>
        <NavMobile mobileNavisOpen={mobileNavisOpen} t={t}/>
      </header>
      <main className={didact.className}>
        <Component {...pageProps} inactive={true} />
      </main>
      <footer className={didact.className}>
        <Footer t={t}/>
      </footer>
      <div className={didact.className}>
        <AgeGateModal />
      </div>
    </>
  );
}
