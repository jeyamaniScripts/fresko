import React from "react";
import styles from "./PromoCards.module.css";

const PromoCards = () => {
  return (
    <div className={styles.wrapper}>
      {/* CARD 1 */}
      <div className={styles.card} style={{ background: "var(--green-light)" }}>
        <div>
          <h2>Fresh Vegetables</h2>
          <p>Handpicked daily from local farms.</p>
          <button>Shop Now</button>
        </div>
        <img src="https://i.imgur.com/QqKX1cB.png" alt="Vegetables" />
      </div>

      {/* CARD 2 */}
      <div
        className={styles.card}
        style={{ background: "var(--yellow-light)" }}
      >
        <div>
          <h2>Fresh Fruits</h2>
          <p>Sweet & seasonal fruits delivered fast.</p>
          <button>Order Now</button>
        </div>
        <img src="/promo/fruits.png" alt="Fruits" />
      </div>

      {/* CARD 3 */}
      <div className={styles.card} style={{ background: "var(--blue-light)" }}>
        <div>
          <h2>Dairy Essentials</h2>
          <p>Milk, curd, butter & more in minutes.</p>
          <button>Buy Now</button>
        </div>
        <img src="/promo/dairy.png" alt="Dairy" />
      </div>
    </div>
  );
};

export default PromoCards;
