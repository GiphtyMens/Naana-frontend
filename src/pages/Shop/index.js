import React, { useState, useEffect } from "react";
import styles from "./shops.module.css";

const Shops = () => {
  const [shops, setShops] = useState();

  useEffect(() => {
    getShops();
  }, []);

  const getShops = async () => {
    const res = await fetch("http://localhost:5000/api/shop");
    const data = await res.json();
    console.log(data);
    setShops(data);
  };

  // console.log(shops);

  return (
    <div className={styles.main_page}>
      <div className={styles.first_row}>
        <div className={styles.fr_fb}>
          <h5></h5>
          <h2>Beauty Technicians</h2>
          <h3>Osu Street, Accra</h3>
          <h3>4.9 Great 35 ratings</h3>
        </div>
        <div className={styles.fr_sb}>
          <h5></h5>
          <h2>Lynettes Saloon</h2>
          <h3>East Legon, Accra</h3>
          <h3>4.9 Great 35 ratings</h3>
        </div>
        <div className={styles.fr_tb}>
          <h5></h5>
          <h2>Twists and Locks</h2>
          <h3>East Legon, Accra</h3>
          <h3>4.9 Great 35 ratings</h3>
        </div>
      </div>
      <div className={styles.second_row}>
        <div className={styles.sr_fb}>
          <h5></h5>
          <h2>Deluxie Laundry</h2>
          <h3>Adisadel Estate, Accra</h3>
          <h3>4.9 Great 35 ratings</h3>
        </div>
        <div className={styles.sr_sb}>
          <h5></h5>
          <h2>Chief Hair Cut</h2>
          <h3>Tema comm 5, Accra</h3>
          <h3>4.9 Great 35 ratings</h3>
        </div>
        <div className={styles.sr_tb}>
          <h5></h5>
          <h2>Manicure Hub</h2>
          <h3>Tema comm 22, Accra</h3>
          <h3>4.9 Great 35 ratings</h3>
        </div>
      </div>
    </div>
  );
};

export default Shops;
