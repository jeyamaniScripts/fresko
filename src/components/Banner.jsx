import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.bannerContent}>
        <p>🚚 Free Delivery on Orders Above ₹499</p>

        <span className={styles.divider}>|</span>

        <p>🎁 Get 20% OFF on Your First Order</p>

        <span className={styles.divider}>|</span>

        <p>
          🔐 Use Code: <strong className={styles.couponCode}>FRESKO20</strong>
        </p>
      </div>
    </div>
  );
};

export default Banner;
