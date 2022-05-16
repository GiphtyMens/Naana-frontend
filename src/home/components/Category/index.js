import React from "react";
import styles from "./Category.module.css";

const Category = () => {
  return (
    <section className={styles.category}>
      <h1>Top categories we have</h1>
      <div className={styles.category_container}>
        <div className={styles.category_card}>
          <div className={styles.cc_img1}></div>
          <div className={styles.cc_text}>
            <span>Hair Saloon</span>
          </div>
        </div>

        <div className={styles.category_card}>
          <div className={styles.cc_img2}></div>
          <div className={styles.cc_text}>
            <span>Nail Technitian</span>
          </div>
        </div>

        <div className={styles.category_card}>
          <div className={styles.cc_img3}></div>
          <div className={styles.cc_text}>
            <span>Babering</span>
          </div>
        </div>

        <div className={styles.category_card}>
          <div className={styles.cc_img4}></div>
          <div className={styles.cc_text}>
            <span>Spa</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
