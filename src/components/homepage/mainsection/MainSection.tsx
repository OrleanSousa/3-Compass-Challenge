
import styles from "./MainSection.module.css"; // Importando o módulo CSS

const MainSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.content}>
          <p className={styles.title}>New Arrival</p>
          <h1 className={styles.heading}>Discover Our New Collection</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className={styles.button}>BUY Now</button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
