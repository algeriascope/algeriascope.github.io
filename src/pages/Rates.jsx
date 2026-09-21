import React, { useState, useEffect } from 'react';
import styles from './Rates.module.css';

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
  return (
    <div className={styles.ratesPage}>
      <h1 className={styles.title}>Algerian Dinar Exchange Rates</h1>
      <div className={styles.tablesContainer}>
        <div className={styles.parallelTableContainer}>
          <h2 className={styles.tableTitle}>Parallel Market</h2>
          <table className={`${styles.parallelTable}, ${styles.ratesTable}`}>
            <thead>
              <tr>
                <th className={styles.currencyCol}>Currency</th>
                <th>Buy</th>
                <th>Sell</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Euro</td>
                <td>276.00</td>
                <td>278.00</td>
              </tr>
              <tr>
                <td>US Dollar</td>
                <td>236.00</td>
                <td>239.00</td>
              </tr>
              <tr>
                <td>Canadian Dollar</td>
                <td>170.00</td>
                <td>172.00</td>
              </tr>
              <tr>
                <td>British Pound</td>
                <td>314.00</td>
                <td>318.00</td>
              </tr>
              <tr>
                <td>Swiss Franc</td>
                <td>285.00</td>
                <td>287.00</td>
              </tr>
              <tr>
                <td>Turkish Lira</td>
                <td>5.50</td>
                <td>7.00</td>
              </tr>
              <tr>
                <td>Chinese Yuan</td>
                <td>32.00</td>
                <td>34.00</td>
              </tr>
              <tr>
                <td>Saudi Riyal</td>
                <td>60.00</td>
                <td>62.00</td>
              </tr>
              <tr>
                <td>Emirati Dirham</td>
                <td>61.00</td>
                <td>63.00</td>
              </tr>
              <tr>
                <td>Tunisian Dinar</td>
                <td>78.00</td>
                <td>80.00</td>
              </tr>
              <tr>
                <td>Moroccan Dirham</td>
                <td>21.00</td>
                <td>23.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.officialTableContainer}>
          <h2 className={styles.tableTitle}>Official Market</h2>
          <table className={`${styles.officialTable}, ${styles.ratesTable}`}>
            <thead>
              <tr>
                <th className={styles.currencyCol}>Currency</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
              {currencies.map((curr) => (
                <tr key={curr.code}>
                  <td>{curr.name}</td>
                  <td>
                    {rate[curr.code] ? rate[curr.code].toFixed(2) : '...'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className={styles.updateNotice}>Rates are updated on a daily basis</p>
    </div>
  );
};

export default Rates;
