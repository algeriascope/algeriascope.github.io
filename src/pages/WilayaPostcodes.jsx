import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data/algeria_data.json';
import { slugify } from './Postcodes';
import styles from './WilayaPostcodes.module.css';
import { useTranslation } from 'react-i18next';
import { FaBuildingColumns, FaMapPin } from 'react-icons/fa6';
import { FiCopy, FiArrowRight } from 'react-icons/fi';

import { ReactSVG } from 'react-svg';
const wilayaMaps = import.meta.glob('../assets/maps/*.svg', {
  eager: true,
  import: 'default',
});

const WilayaPostcodes = () => {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language || 'en';
  const isArabic = currentLanguage.startsWith('ar');
  const isTamazight = currentLanguage.startsWith('zgh');

  const getWilayaName = (wilaya) => {
    if (isArabic) return wilaya.wilaya_name_ar || wilaya.wilaya_name;
    if (isTamazight) return wilaya.wilaya_name_zgh || wilaya.wilaya_name;
    return wilaya.wilaya_name;
  };

  const getCommuneName = (p)=>{
    if (isArabic) return p.commune_name_ar || p.commune_name
    if (isTamazight) return p.commune_name_zgh || p.commune_name
    return p.commune_name
  }

  const getPostName = (p)=>{
    if (isArabic) return p.post_name_ar || p.post_name
    if (isTamazight) return p.post_name_zgh || p.post_name
    return p.post_name
  }
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
        <h2 className={styles.title}>{getWilayaName(wilaya)}</h2>
      </div>
      <div className={styles.postcodesTable}>
        <div className={`${styles.row} ${styles.header}`}>
          <span>{t('wilayaPostcodes.postcode')}</span>
          <span>{t('wilayaPostcodes.post')}</span>
          <span>{t('wilayaPostcodes.action')}</span>
        </div>
        {wilaya.postcodes.map((p, idx) => {
          return (
            <div className={styles.row} key={idx}>
              <span className={styles.postcode}>
                {p.post_code ? p.post_code : 'xxxxx'}
              </span>
              <span className={styles.commune}>
                {getCommuneName(p)}, {getPostName(p)}
              </span>
              <div className={styles.actionBtns}>
                <button className={styles.copyBtn}>
                  <FiCopy /> {t('wilayaPostcodes.copyText')}{' '}
                </button>
                <Link className={styles.detailsBtn} to="./postcode">
                  {' '}
                  {t('wilayaPostcodes.details')} <FiArrowRight />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WilayaPostcodes;
