import React from "react";
import styles from "./Header.module.css";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <div className={styles.header}>
      <div style={{ padding: "6rem 0 0 5rem" }}>
        <div className={styles.header_text}>
          <h3>Instantly book</h3>
          <h3> salons and spas </h3>
          <h3>nearby</h3>
          <button>
            <BsSearch size={20} /> Discover venues near you
          </button>
        </div>
        <div className={styles.header_img}>
          <h5></h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
