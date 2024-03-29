import { useRef, useState, useEffect } from 'react';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

export const AgeGateModal = () => {
  const router = useRouter();
  const modalRef = useRef();
  const { t } = useTranslation('common');
  const [ageError, setAgeError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const denyMessage = t('ageGate.denyMessage');

  useEffect(() => {
    const ageGate = sessionStorage.getItem('ageGate');
    ageGate ? setShowModal(false) : setShowModal(true);
  }, []);

  const handleClickYes = () => {
    sessionStorage.setItem('ageGate', 'true');
    setShowModal((prev) => !prev);
    setAgeError(false);
  };

  const handleClickNo = () => {
    setAgeError((prev) => !prev);
  };

  return (
    <>
      {showModal ? (
        <div className={styles.background} ref={modalRef}>
          <div className={styles.wrapper}>
            <div className={styles.languageContainer}>
              <Link
                className={styles.langLink}
                href={router.asPath}
                locale={router.locales[0]}
              >
                PT
              </Link>
              <span>|</span>
              <Link
                className={styles.langLink}
                href={router.asPath}
                locale={router.locales[1]}
              >
                EN
              </Link>
            </div>
            <div className={styles.content}>
              <Image
                src="/images/white_logo_simple.svg"
                alt="Wine Ventures Logo"
                width={250}
                height={92}
                priority={true}
              />
              {/* <h1>{t('ageGate.title')}</h1> */}
              <p className={styles.text}>{t('ageGate.text')}</p>
              <div className={styles.btnsContainer}>
                <button onClick={handleClickNo} className={styles.btns}>
                  {t('ageGate.buttonNo')}
                </button>
                <button onClick={handleClickYes} className={styles.btns}>
                  {t('ageGate.buttonYes')}
                </button>
              </div>
              {ageError ? <p className={styles.error}>{denyMessage}</p> : null}
              <p className={styles.moderationText}>
                {t('ageGate.drinkModeration')}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
