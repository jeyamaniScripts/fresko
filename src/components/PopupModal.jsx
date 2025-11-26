import React from "react";
import styles from "./PopupModal.module.css";
import Auth from "./auth/Auth";

const PopupModal = ({ onCancel, onConfirm }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* Close Button */}
        <button className={styles.closeBtn} onClick={onCancel}>
          &times;
        </button>
        <Auth />
        {/* <LoginRegister /> */}
      </div>
    </div>
  );
};

export default PopupModal;
