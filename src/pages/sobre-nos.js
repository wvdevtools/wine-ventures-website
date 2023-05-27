import styles from "../styles/SobreNos.module.css";

const SobreNos = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <article>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>Missão & Visão</h1>
          </div>
        </article>
        <article>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>Liderança</h1>
          </div>
        </article>
        <article>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>Sustentabilidade</h1>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SobreNos;
