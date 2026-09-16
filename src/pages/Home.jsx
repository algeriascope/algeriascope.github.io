import React from 'react';
import AlgeriaMap from '../components/AlgeriaMap';
import styles from './Home.module.css';
const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>
        Explore <span className={styles.titleItalic}>Algeria's </span>
        69 Wilayas
      </h1>
      <h3 className={styles.subtitle}>
        Hover over any Wilaya to learn more.
      </h3>
      <AlgeriaMap />
    </div>
  );
};

export default Home;
