import { useRef, useState } from 'react';
import styles from '../styles/Contacts.module.css';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';

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

  return (
    <>
      <Head>
        <title>Contactos</title>
        <meta name="description" content="Wine Ventures - Contactos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.section}>
        <div className={styles.sectionContainer}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>{t('title')}</h1>
          </div>
          <div className={styles.contactContainer}>
            <div className={styles.infoContainer}>
              <p className={styles.subtitle}>{t('subtitle')}</p>
              <div className={styles.infoWrapper}>
                <div className={styles.info}>
                  <div className={styles.iconAndText}>
                    <Image
                      src="/images/location-icon.svg"
                      alt="email"
                      width={20}
                      height={25}
                    />
                    <p>Rua das flores, 28, 2855-630 Lisboa</p>
                  </div>
                </div>
                <div className={styles.info}>
                  <div className={styles.iconAndText}>
                    <Image
                      src="/images/mail-icon.svg"
                      alt="email"
                      width={20}
                      height={25}
                    />
                    <p>info@wineventures.eu</p>
                  </div>
                </div>
                <div className={styles.info}>
                  <div className={styles.iconAndText}>
                    <Image
                      src="/images/phone-icon.svg"
                      alt="phone"
                      width={20}
                      height={25}
                    />
                    <p>+351 91 177 93 56</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.formContainer}>
              <p className={styles.formText}>{t('form.title')}</p>
              <form ref={form} onSubmit={sendEmail} className={styles.form}>
                <div className={styles.formGroups}>
                  <label>{t('form.name')}</label>
                  <input
                    type="text"
                    name="user_name"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.formGroups}>
                  <label>{t('form.email')}</label>
                  <input
                    type="email"
                    name="email"
                    className={styles.input}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                </div>
                <div className={styles.formGroups}>
                  <label>{t('form.message')}</label>
                  <textarea
                    name="message"
                    className={`${styles.input} ${styles.textarea}`}
                    required
                  />
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
