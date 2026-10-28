import React, { useState, useEffect } from 'react';
import styles from './Rates.module.css';
import RatesTable from '../components/RatesTable';
import { useTranslation } from 'react-i18next';
// import coinVideo from '../assets/coin.mp4'
const Rates = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.ratesPage}>
      <h1 className={styles.title}>{t('ratesPage.title')}</h1>
      <div className={styles.tablesContainer}>
        <RatesTable />
        {/* <video
          src={coinVideo}
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          className={styles.coinVideo}
        /> */}
      </div>
    </div>
  );
};

export default Rates;
