import React from "react";
import styles from "./Testimonial.module.css";

const Testimonial = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Loved by Fresko Shoppers</h1>

      <p className={styles.subtext}>
        See what our daily customers say about the freshness and quality we
        deliver.
      </p>

      <div className={styles.cardsWrapper}>
        {/* CARD 1 */}
        <div className={`${styles.card} ${styles.greenCard}`}>
          <svg className={styles.quoteIcon} fill="#059669" viewBox="0 0 44 40">
            <path d="M33.17 5.47c2.56 0 4.55 1.55 4.55 3.9 0 1.6-.63 3.34-1.9 5.2-1.3 1.9-3.1 3.94-5.4 6.13-2.3 2.2-5.1 4.47-8.4 6.8l-3.4-3.4c2.3-1.8 4.1-3.3 5.4-4.55 1.3-1.3 2.2-2.4 2.7-3.3-.93-.13-1.76-.44-2.5-.93-.73-.5-1.32-1.17-1.75-2.03-.44-.86-.66-1.82-.66-2.9 0-1.86.66-3.45 1.97-4.77 1.32-1.3 2.9-1.96 4.77-1.96zm-20.62 0c2.56 0 4.55 1.55 4.55 3.9 0 1.6-.63 3.34-1.9 5.2-1.3 1.9-3.1 3.94-5.4 6.13-2.3 2.2-5.1 4.47-8.4 6.8L0 23.1c2.3-1.8 4.1-3.3 5.4-4.55 1.3-1.3 2.2-2.4 2.7-3.3-.93-.13-1.76-.44-2.5-.93-.73-.5-1.32-1.17-1.75-2.03C3.42 11.43 3.2 10.47 3.2 9.4c0-1.86.66-3.45 1.97-4.77 1.32-1.3 2.9-1.96 4.77-1.96z" />
          </svg>

          <div className={styles.starsRow}>
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="16"
                height="16"
                fill="#059669"
                viewBox="0 0 16 15"
              >
               <path d="M7.52.46a.5.5 0 01.95 0l1.43 4.41a.5.5 0 00.48.34h4.63a.5.5 0 01.29.9l-3.75 2.72a.5.5 0 00-.18.56l1.43 4.41a.5.5 0 01-.76.56L8.29 11.65a.5.5 0 00-.58 0L3.96 14.37a.5.5 0 01-.76-.56l1.43-4.41a.5.5 0 00-.18-.56L.98 6.12a.5.5 0 01.29-.9h4.63a.5.5 0 00.48-.35L7.52.46z" />
              </svg>
            ))}
          </div>

          <p className={styles.reviewText}>
            Fresko always delivers farm-fresh groceries on time! Quality is far
            better than local stores.
          </p>

          <div className={styles.userRow}>
            <img
              className={styles.userImage}
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100"
            />
            <div>
              <h2 className={styles.userName}>Aditi Sharma</h2>
              <p className={styles.userRole}>Fresko Customer</p>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className={`${styles.card} ${styles.yellowCard}`}>
          <svg className={styles.quoteIcon} fill="#ca8a04" viewBox="0 0 44 40">
            <path d="M33.17 5.47c2.56 0 4.55 1.55 4.55 3.9 0 1.6-.63 3.34-1.9 5.2-1.3 1.9-3.1 3.94-5.4 6.13-2.3 2.2-5.1 4.47-8.4 6.8l-3.4-3.4c2.3-1.8 4.1-3.3 5.4-4.55 1.3-1.3 2.2-2.4 2.7-3.3-.93-.13-1.76-.44-2.5-.93-.73-.5-1.32-1.17-1.75-2.03-.44-.86-.66-1.82-.66-2.9 0-1.86.66-3.45 1.97-4.77 1.32-1.3 2.9-1.96 4.77-1.96zm-20.62 0c2.56 0 4.55 1.55 4.55 3.9 0 1.6-.63 3.34-1.9 5.2-1.3 1.9-3.1 3.94-5.4 6.13-2.3 2.2-5.1 4.47-8.4 6.8L0 23.1c2.3-1.8 4.1-3.3 5.4-4.55 1.3-1.3 2.2-2.4 2.7-3.3-.93-.13-1.76-.44-2.5-.93-.73-.5-1.32-1.17-1.75-2.03C3.42 11.43 3.2 10.47 3.2 9.4c0-1.86.66-3.45 1.97-4.77 1.32-1.3 2.9-1.96 4.77-1.96z" />
          </svg>

          <div className={styles.starsRow}>
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="16"
                height="16"
                fill="#ca8a04"
                viewBox="0 0 16 15"
              >
               <path d="M7.52.46a.5.5 0 01.95 0l1.43 4.41a.5.5 0 00.48.34h4.63a.5.5 0 01.29.9l-3.75 2.72a.5.5 0 00-.18.56l1.43 4.41a.5.5 0 01-.76.56L8.29 11.65a.5.5 0 00-.58 0L3.96 14.37a.5.5 0 01-.76-.56l1.43-4.41a.5.5 0 00-.18-.56L.98 6.12a.5.5 0 01.29-.9h4.63a.5.5 0 00.48-.35L7.52.46z" />
              </svg>
            ))}
          </div>

          <p className={styles.reviewText}>
            Great service! Vegetables were super fresh and neatly packed.
            Totally worth it!
          </p>

          <div className={styles.userRow}>
            <img
              className={styles.userImage}
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100"
            />
            <div>
              <h2 className={styles.userName}>Sanjay Kumar</h2>
              <p className={styles.userRole}>Daily Shopper</p>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className={`${styles.card} ${styles.blueCard}`}>
          <svg className={styles.quoteIcon} fill="#2563eb" viewBox="0 0 44 40">
            <path d="M33.17 5.47c2.56 0 4.55 1.55 4.55 3.9 0 1.6-.63 3.34-1.9 5.2-1.3 1.9-3.1 3.94-5.4 6.13-2.3 2.2-5.1 4.47-8.4 6.8l-3.4-3.4c2.3-1.8 4.1-3.3 5.4-4.55 1.3-1.3 2.2-2.4 2.7-3.3-.93-.13-1.76-.44-2.5-.93-.73-.5-1.32-1.17-1.75-2.03-.44-.86-.66-1.82-.66-2.9 0-1.86.66-3.45 1.97-4.77 1.32-1.3 2.9-1.96 4.77-1.96zm-20.62 0c2.56 0 4.55 1.55 4.55 3.9 0 1.6-.63 3.34-1.9 5.2-1.3 1.9-3.1 3.94-5.4 6.13-2.3 2.2-5.1 4.47-8.4 6.8L0 23.1c2.3-1.8 4.1-3.3 5.4-4.55 1.3-1.3 2.2-2.4 2.7-3.3-.93-.13-1.76-.44-2.5-.93-.73-.5-1.32-1.17-1.75-2.03C3.42 11.43 3.2 10.47 3.2 9.4c0-1.86.66-3.45 1.97-4.77 1.32-1.3 2.9-1.96 4.77-1.96z" />
          </svg>

          <div className={styles.starsRow}>
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="16"
                height="16"
                fill="#2563eb"
                viewBox="0 0 16 15"
              >
               <path d="M7.52.46a.5.5 0 01.95 0l1.43 4.41a.5.5 0 00.48.34h4.63a.5.5 0 01.29.9l-3.75 2.72a.5.5 0 00-.18.56l1.43 4.41a.5.5 0 01-.76.56L8.29 11.65a.5.5 0 00-.58 0L3.96 14.37a.5.5 0 01-.76-.56l1.43-4.41a.5.5 0 00-.18-.56L.98 6.12a.5.5 0 01.29-.9h4.63a.5.5 0 00.48-.35L7.52.46z" />
              </svg>
            ))}
          </div>

          <p className={styles.reviewText}>
            Their dairy products are the freshest! My family loves the quality.
          </p>

          <div className={styles.userRow}>
            <img
              className={styles.userImage}
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100"
            />
            <div>
              <h2 className={styles.userName}>Neha Verma</h2>
              <p className={styles.userRole}>Verified Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
