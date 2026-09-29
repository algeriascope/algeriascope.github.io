import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import styles from './Postcodes.module.css';
import data from '../data/algeria_data.json';
import { Link } from 'react-router-dom';
import { FaCity, FaBuildingColumns } from 'react-icons/fa6';
import PostcodesSearch from '../components/PostcodesSearch';

const wilayaMaps = import.meta.glob('../assets/maps/*.svg', {
  eager: true,
  import: 'default',
});

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
  // const [query, setQuery] = useState('');
  // const filteredData = data.filter((wilaya) => {
  //   return (
  //     wilaya.wilaya_name
  //       .toLocaleLowerCase()
  //       .includes(query.toLocaleLowerCase()) ||
  //     wilaya.wilaya_code.includes(query)
  //   );
  // });

  return (
    <div className={styles.postcodesPage}>
      <h1 className={styles.title}>Find your Postcode</h1>

      <PostcodesSearch />
      <div className={styles.cardsContainer}>
        {data.map((wilaya) => {
          const mapSvg = wilayaMaps[`../assets/maps/${wilaya.wilaya_code}.svg`];
          const wilayaSlug = slugify(wilaya.wilaya_name);
          return (
            <Link
              key={wilaya.wilaya_name}
              to={`/postcodes/${wilayaSlug}`}
              className={styles.wilayaCard}
            >
              {/* <div className={styles.svgWrapper}>
                <ReactSVG className={styles.reactSvg} src={mapSvg} />
              </div> */}
                <span className={styles.code}>{wilaya.wilaya_code} </span>
                <span className={styles.name}>{wilaya.wilaya_name}</span>
              {/* <div className={styles.statsContainer}>
                <span className={styles.communes}>
                  <FaCity className={styles.statIcon} />0 Communes
                </span>
                <span className={styles.postOffices}>
                  <FaBuildingColumns className={styles.statIcon} />{' '}
                  {wilaya.postcodes.length} Post Offices
                </span>
              </div> */}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Postcodes;
