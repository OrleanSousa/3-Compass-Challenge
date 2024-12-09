import React from "react";

import styles from "./SecondSection.module.css"; // Importando o módulo CSS

const SecondSection = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>Browse The Range</h2>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <img src="https://orlean2024.s3.us-east-2.amazonaws.com/homepageimg/table.svg" alt="Dining" className={styles.image} />
            <p className={styles.text}>Dining</p>
          </li>
          <li className={styles.listItem}>
            <img src="https://orlean2024.s3.us-east-2.amazonaws.com/homepageimg/Image-living+room.svg" alt="Living" className={styles.image} />
            <p className={styles.text}>Living</p>
          </li>
          <li className={styles.listItem}>
            <img src="https://orlean2024.s3.us-east-2.amazonaws.com/homepageimg/jar.svg" alt="Bedroom" className={styles.image} />
            <p className={styles.text}>Bedroom</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SecondSection;
