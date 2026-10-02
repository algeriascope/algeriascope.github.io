import React, { useState, useEffect } from 'react';

import data from '../data/algeria_data.json';
import styles from './Postcodes.module.css';
import { Link } from 'react-router-dom';
import { FaCity, FaBuildingColumns } from 'react-icons/fa6';
import PostcodesSearch from '../components/PostcodesSearch';

export const slugify = (str) => {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/[^\w-]+/g, '');
};

const Postcodes = () => {
  const [stats, setStats] = useState({ wilayas: 0, communes: 0, postcodes: 0 });
  useEffect(() => {
    const targets = {
      wilayas: data.length,
      communes: 1541,
      postcodes: data.reduce((acc, w) => acc + w.postcodes.length, 0),
    };

    const timer = setInterval(() => {
      setStats((prev) => {
        const nextWilayas = Math.min(prev.wilayas + 1, targets.wilayas);
        const nextCommunes = Math.min(prev.communes + 31, targets.communes);
        const nextPostcodes = Math.min(prev.postcodes + 70, targets.postcodes);

        if (
          nextWilayas === targets.wilayas &&
          nextCommunes === targets.communes &&
          nextPostcodes === targets.postcodes
        ) {
          clearInterval(timer);
        }

        return {
          wilayas: nextWilayas,
          communes: nextCommunes,
          postcodes: nextPostcodes,
        };
      });
    }, 5);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.postcodesPage}>
      <h1 className={styles.title}>Find your Postcode</h1>
        <h3 className={styles.subtitle}>Verified and sourced directly from Algérie Poste</h3>
      <PostcodesSearch />

      <div className={styles.stats}>
        <span className={styles.stat}>
          {' '}
          <span className={styles.statNum}>
            {stats.wilayas.toLocaleString('en-US')}
          </span>{' '}
          Wilayas
        </span>
        <span className={styles.stat}>
          <span className={styles.statNum}>
            {stats.communes.toLocaleString('en-US')}
          </span>{' '}
          Communes
        </span>
        <span className={styles.stat}>
          <span className={styles.statNum}>
            {stats.postcodes.toLocaleString('en-US')}
          </span>{' '}
          Postcodes
        </span>
      </div>

      <div className={styles.cardsContainer}>
        {data.map((wilaya) => {
          // const mapSvg = wilayaMaps[`../assets/maps/${wilaya.wilaya_code}.svg`];
          const wilayaSlug = slugify(wilaya.wilaya_name);
          return (
            <Link
              key={wilaya.wilaya_name}
              to={`/postcodes/${wilayaSlug}`}
              className={styles.wilayaCard}
            >
              <span className={styles.code}>{wilaya.wilaya_code} </span>
              <span className={styles.name}>{wilaya.wilaya_name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Postcodes;
