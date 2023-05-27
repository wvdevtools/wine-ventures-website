import { useRef } from 'react';
import styles from '../styles/Contacts.module.css'
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import useTranslation from "next-translate/useTranslation";


const Contactos = () => {
  const { t } = useTranslation("contactos");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hwrkitg',
        'template_0zoqkh8',
        form.current,
        'B_6Z17fTLoKlakHDu'
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
  };
  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{t('title')}</h1>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.infoContainer}>
            <p className={styles.subtitle}>
              {t('subtitle')}
            </p>
            <div className={styles.infoWrapper}>
              <div className={styles.info}>
                <div className={styles.iconAndText}>
                  <Image
                    src="/images/location-icon.svg"
                    alt="email"
                    width={22}
                    height={25}
                  />
                  <span>{t('contacts.address')}</span>
                </div>
                <p>Rua das flores, 28, 2855-630 Lisboa</p>
              </div>
              <div className={styles.info}>
                <div className={styles.iconAndText}>
                  <Image
                    src="/images/mail-icon.svg"
                    alt="email"
                    width={28}
                    height={25}
                  />
                  <span>{t('contacts.email')}</span>
                </div>
                <p>info@wineventures.eu</p>
              </div>
              <div className={styles.info}>
                <div className={styles.iconAndText}>
                  <Image
                    src="/images/phone-icon.svg"
                    alt="phone"
                    width={20}
                    height={25}
                  />
                  <span>{t('contacts.phone')}</span>
                </div>
                <p>+351 91 177 93 56</p>
              </div>
            </div>
            {/* <div className={styles.grapesContainer}></div> */}
          </div>
          <div className={styles.formContainer}>
            <p className={styles.formText}>{t('form.title')}</p>
            <form ref={form} onSubmit={sendEmail} className={styles.form}>
              <div className={styles.formGroups}>
                <label>{t('form.name')}</label>
                <input type="text" name="user_name" className={styles.input} />
              </div>
              <div className={styles.formGroups}>
                <label>{t('form.email')}</label>
                <input type="email" name="email" className={styles.input} />
              </div>
              <div className={styles.formGroups}>
                <label>{t('form.message')}</label>
                <textarea name="message" className={styles.input} />
              </div>
              <input type="submit" value={t('form.send')} className={styles.sendBtn}/>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactos;
