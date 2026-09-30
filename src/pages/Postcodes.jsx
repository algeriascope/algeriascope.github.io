import React, { useState } from 'react';
import styles from './Postcodes.module.css';
import data from '../data/algeria_data.json';
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
  return (
    <div className={styles.postcodesPage}>
      <h1 className={styles.title}>Find your Postcode</h1>

      <PostcodesSearch />
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
