import React, { useState, useEffect } from 'react';
import { informalRates } from '../data/informalRates';
import styles from './RatesTable.module.css';
import { useTranslation } from 'react-i18next';

const RatesTable = () => {
  const { t, i18n } = useTranslation();
  const [officialData, setOfficialData] = useState({});

  useEffect(() => {
    fetch(
      'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/dzd.min.json',
    )
      .then((res) => res.json())
      .then((data) => setOfficialData(data.dzd)); // Saves: { eur: 0.0068, usd: 0.0074 }
  }, []);

  return (
    <div className={styles.ratesTable}>
      <div className={`${styles.row} ${styles.header}`}>
        <span>{t('ratesPage.ratesTable.currency')}</span>
        <span>{t('ratesPage.ratesTable.informalRate')}</span>
        <span>{t('ratesPage.ratesTable.officialRate')}</span>
      </div>
        {informalRates.map((item) => {
          // Grab the raw number from API data
          const rawApiRate = officialData[item.code.toLowerCase()];

          // Turn 0.0068 into 147 DZD (or show 'Loading...' if not fetched yet)
          const officialPrice = rawApiRate
            ? (1 / rawApiRate).toFixed(2)
            : '----';

          return (
            <div className={styles.row} key={item.code}>
              <span>{item.name}</span>
              <span>{item.rate.toFixed(2)}</span>
              <span>{officialPrice}</span>
            </div>
          );
        })}
    </div>
  );
};

export default RatesTable;
