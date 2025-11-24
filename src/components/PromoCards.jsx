import React from "react";
import styles from "./PromoCards.module.css";

import veges from "../assets/vegetables_no_bg.png";
import fruts from "../assets/fruit_no_bg.png";
import dairy from "../assets/milk_cheese_no_bg.png";

const PromoCards = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card} data-color="green">
        <h2 className={styles.title}>Fresh Vegetables</h2>
        <p className={styles.description}>Handpicked daily from local farms.</p>
        <button className={styles.button}>Shop Now</button>
        <img src={veges} className={styles.image} alt="veg" />
      </div>

      <div className={styles.card} data-color="yellow">
        <h2 className={styles.title}>Fresh Fruits</h2>
        <p className={styles.description}>Seasonal fruits delivered fast.</p>
        <button className={styles.button}>Order Now</button>
        <img src={fruts} className={styles.image} alt="fruits" />
      </div>

      <div className={styles.card} data-color="blue">
        <h2 className={styles.title}>Dairy Essentials</h2>
        <p className={styles.description}>Milk, curd, butter & more.</p>
        <button className={styles.button}>Buy Now</button>
        <img src={dairy} className={styles.image} alt="dairy" />
      </div>
    </div>
  );
};

export default PromoCards;
