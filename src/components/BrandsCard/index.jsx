import styles from "./BrandsCard.module.css";
import Link from "next/link";
import Image from "next/image";

export const BrandsCard = ({ brand }) => {
  return (
    <div className={styles.card}>
      <Image src={brand.image} alt={brand.name} width={300} height={232} />
      {/* <Link href={brand.href} className={styles.button}>Saber Mais</Link> */}
    </div>
  );
};
