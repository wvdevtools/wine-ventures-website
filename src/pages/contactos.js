import { useRef, useState } from 'react';
import styles from '../styles/Contacts.module.css';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Trans from 'next-translate/Trans';
import { arimo } from '@/utils/fonts';
import Link from 'next/link';

const Contactos = () => {
  const { t } = useTranslation('contactos');
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current.checkValidity()) {
      setErrorMessage(t('form.error'));
      setTimeout(() => {
        setErrorMessage('');
      }, 10000);
      return;
    }
    setLoading(true);
    emailjs
      .sendForm(
        'service_hwrkitg',
        'template_0zoqkh8',
        form.current,
        'B_6Z17fTLoKlakHDu'
      )
      .then(
        (result) => {
          setSuccessMessage(t('form.success'));
          setTimeout(() => {
            setSuccessMessage('');
          }, 10000);
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          setErrorMessage(t('form.error'));
          setTimeout(() => {
            setErrorMessage('');
          }, 10000);
          setLoading(false);
        }
      );
  };

  console.log('successMessage', successMessage);

  return (
    <>
      <Head>
        <title>Contactos</title>
        <meta name="description" content="Wine Ventures - Contactos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.section}>
        <h1 className={`${arimo.className} ${styles.pageTitle}`}>
          {t('title')}
        </h1>
        {/*  <h2 className={` ${styles.subtitle}`}>
          <Trans i18nKey="contactos:subtitle" components={{ br: <br /> }} />
        </h2> */}

        <div className={styles.sectionContainer}>
          <div className={styles.contactContainer}>
            <div className={styles.infoContainer}>
              <div className={styles.infoWrapper}>
                {
                  <h2 className={` ${styles.subtitle}`}>
                    <Trans
                      i18nKey="contactos:subtitle"
                      components={{ br: <br /> }}
                    />
                  </h2>
                }
                <div className={styles.info}>
                  <div className={styles.iconAndText}>
                    <Image
                      src="/images/location-icon.svg"
                      alt="email"
                      width={30}
                      height={35}
                    />
                    <p>
                      Rua Dom Jorge da Costa Nº3B, <br /> Escritório C 1400-423
                      Lisboa
                    </p>
                  </div>
                </div>
                <div className={styles.info}>
                  <div className={styles.iconAndText}>
                    <Image
                      src="/images/mail-icon.svg"
                      alt="email"
                      width={30}
                      height={35}
                    />
                    <p>info@wineventures.eu</p>
                  </div>
                </div>
                <div className={styles.info}>
                  <div className={styles.iconAndText}>
                    <Image
                      src="/images/phone-icon.svg"
                      alt="phone"
                      width={30}
                      height={35}
                    />
                    <p>+351 91 177 93 56</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.formContainer}>
              <h2 className={styles.formTitle}>{t('form.title')}</h2>
              <form ref={form} onSubmit={sendEmail} className={styles.form}>
                <div className={styles.formGroups}>
                  {/*  <label>{t('form.name')}</label> */}
                  <input
                    type="text"
                    name="user_name"
                    className={styles.input}
                    required
                    placeholder={t('form.name')}
                  />
                </div>
                <div className={styles.formGroups}>
                  {/* <label>{t('form.email')}</label> */}
                  <input
                    type="email"
                    name="email"
                    className={styles.input}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    placeholder={t('form.email')}
                  />
                </div>
                <div className={styles.formGroups}>
                  {/* <label>{t('form.message')}</label> */}
                  <textarea
                    name="message"
                    className={`${styles.input} ${styles.textarea}`}
                    required
                    placeholder={t('form.message')}
                  />
                </div>
                <div className={styles.consentContainer}>
                  <input type="checkbox" name="terms" required />
                  <label htmlFor="terms">
                    <Trans
                      i18nKey="contactos:form.consent"
                      components={{
                        a: <Link href="/termos-condicoes"></Link>,
                      }}
                    />
                  </label>
                </div>
                <input
                  type="submit"
                  value={t('form.send')}
                  disabled={successMessage || errorMessage || loading}
                  className={styles.sendBtn}
                />
                {successMessage && (
                  <p className={styles.statusMessage}>{successMessage}</p>
                )}
                {errorMessage && (
                  <p className={styles.statusMessage}>{errorMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactos;
