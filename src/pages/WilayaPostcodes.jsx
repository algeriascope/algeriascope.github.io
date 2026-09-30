import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/algeria_data.json';
import { slugify } from './Postcodes';
import styles from './WilayaPostcodes.module.css';
import { FaBuildingColumns, FaMapPin } from 'react-icons/fa6';
import { ReactSVG } from 'react-svg';
const wilayaMaps = import.meta.glob('../assets/maps/*.svg', {
  eager: true,
  import: 'default',
});

const WilayaPostcodes = () => {
  const { wilayaSlug } = useParams();
  const wilaya = data.find((item) => slugify(item.wilaya_name) === wilayaSlug);
  const mapSvg = wilayaMaps[`../assets/maps/${wilaya.wilaya_code}.svg`];
  if (!wilaya) {
    return <p>Wilaya not found!</p>;
  }
  return (
    <div className={styles.wilayaPostcodesPage}>
      <div className={styles.wilayaStatsContainer}>
        <div className={styles.svgWrapper}>
          <ReactSVG className={styles.reactSvg} src={mapSvg} />
        </div>
        <h2 className={styles.title}>{`${wilaya.wilaya_name} Postcodes`}</h2>
      </div>
      <div className={styles.postcodesTable}>
        <div className={`${styles.row} ${styles.header}`}>
          <span>Postcode</span>
          <span>Zone Name</span>
          <span>Action</span>
        </div>
        {wilaya.postcodes.map((p, idx) => {
          return (
            <div className={styles.row} key={idx}>
              <span className={styles.postcode}>
                {p.post_code ? p.post_code : 'xxxxx'}
              </span>
              <div className={styles.commune}>
                {p.commune_name}, {p.daira_name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WilayaPostcodes;
