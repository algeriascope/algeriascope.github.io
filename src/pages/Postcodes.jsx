import React from 'react';
import { ReactSVG } from 'react-svg';
import styles from './Postcodes.module.css';
import data from '../data/algeria_data.json';
import { Link } from 'react-router-dom';
import { FaCity, FaBuildingColumns } from "react-icons/fa6";

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
              key={wilaya.wilaya_name}
              to={`/postcodes/${wilaya.wilaya_name.toLocaleLowerCase()}`}
              className={styles.wilayaCard}
            >
              <ReactSVG className={styles.reactSvg} src={mapSvg}/>
              <div className={styles.codeAndName}>
                <span className={styles.code}>{wilaya.wilaya_code} </span>
                <span className={styles.name}>{wilaya.wilaya_name}</span>
              </div>
              <div className={styles.statsContainer}>
                <span className={styles.communes}>
                  <FaCity className={styles.statIcon}/>0 Communes
                </span>
                <span className={styles.postOffices}>
                  <FaBuildingColumns className={styles.statIcon}/> {wilaya.postcodes.length} Post Offices
                </span>                
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Postcodes;
