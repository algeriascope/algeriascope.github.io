import React from 'react';
import styles from './Postcodes.module.css';
import data from '../data/algeria_data.json';
import { Link } from 'react-router-dom';

const wilayaMaps = import.meta.glob('../assets/maps/*.svg', {
  eager: true,
  import: 'default',
});

const Postcodes = () => {
  return (
    <div className={styles.postcodesPage}>
      <div className={styles.postcodesContainer}>
        {data.map((wilaya) => {
          const mapSvg = wilayaMaps[`../assets/maps/${wilaya.wilaya_code}.svg`];
          return (
            <Link
              to={`/postcodes/${wilaya.wilaya_name}`}
              className={styles.wilayaCard}
            >
              <img src={mapSvg} alt={wilaya.wilaya_name} />
              <div className={styles.codeAndName}>
                <span className={styles.code}>{wilaya.wilaya_code} </span>
                <span className={styles.name}>{wilaya.wilaya_name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Postcodes;
