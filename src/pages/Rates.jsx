import React, { useState, useEffect } from 'react';
import styles from './Rates.module.css';
import RatesTable from '../components/RatesTable';
import { useTranslation } from 'react-i18next';
const currencies = [
  { code: 'EUR', name: 'Euro' },
  { code: 'USD', name: 'US Dollar' },
  { code: 'CAD', name: 'Canadian Dollar' },
  { code: 'GBP', name: 'British Pound' },
  { code: 'CHF', name: 'Swiss Franc' },
  { code: 'TRY', name: 'Turkish Lira' },
  { code: 'CNY', name: 'Chinese Yuan' },
  { code: 'SAR', name: 'Saudi Riyal' },
  { code: 'AED', name: 'Emirati Dirham' },
  { code: 'TND', name: 'Tunisian Dinar' },
  { code: 'MAD', name: 'Moroccan Dirham' },
];
const Rates = () => {
  const [rate, setRate] = useState({});
  useEffect(() => {
    const getOfficialRates = async () => {
      try {
        const requests = currencies.map(async ({ code }) => {
          const res = await fetch(
            `https://api.frankfurter.dev/v2/rate/${code}/dzd`,
          );
          return res.json();
        });

        const results = await Promise.all(requests);

        const rateMap = {};
        results.forEach((item) => {
          if (item?.base && item?.rate) {
            rateMap[item.base] = item.rate;
          }
        });
        setRate(rateMap);
      } catch (err) {
        console.log(err);
      }
    };
    getOfficialRates();
  }, []);

  const { t } = useTranslation()
  return (
    <div className={styles.ratesPage}>
      <h1 className={styles.title}>{t('ratesPage.title')}</h1>
      <div className={styles.tablesContainer}>
        <RatesTable />  

      </div>
      {/* <p className={styles.updateNotice}>Rates are updated on a daily basis</p> */}
    </div>
  );
};

export default Rates;
