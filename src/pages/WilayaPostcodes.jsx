import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/algeria_data.json';
import { slugify } from './Postcodes';
import styles from './WilayaPostcodes.module.css';
import { FaBuildingColumns, FaMapPin } from 'react-icons/fa6';

const WilayaPostcodes = () => {
  const { wilayaSlug } = useParams();
  const wilaya = data.find((item) => slugify(item.wilaya_name) === wilayaSlug);
  if (!wilaya) {
    return <p>Wilaya not found!</p>;
  }
  return (
    <div className={styles.wilayaPostcodesPage}>
      <div className={styles.postcodesContainer}>
        {wilaya.postcodes.map((p) => {
          return (
            <div className={styles.postcodeCard}>
              <span className={styles.postcode} key={p.post_code}>
                {p.post_code ? p.post_code : 'xxxxx'} 
              </span>
              <div className={styles.communeAndDaira}>{p.commune_name}, {p.daira_name}</div>
              <div className={styles.postName}><FaBuildingColumns /> {p.post_name}</div>
              <div className={styles.postAddress}>
                <FaMapPin /> {p.post_address}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WilayaPostcodes;
