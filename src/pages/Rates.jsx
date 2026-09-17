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
  useEffect(() =>{

    const getOfficialRates = async () => {
      try {
        const requests = currencies.map(async ({code}) => {
          const res = await fetch(
            `https://api.frankfurter.dev/v2/rate/${code}/dzd`,
          );
          return res.json();
        });
  
        const results = await Promise.all(requests);
        console.log(results)
  
        const rateMap = {}
        results.forEach(item =>{
          if(item?.base && item?.rate){
            rateMap[item.base] = item.rate
          }
        })
        setRate(rateMap)
      } catch (err) {
        console.log(err);
      }
    };
    getOfficialRates();
  }, [])
  return (
    <div className={styles.ratesPage}>
      <h1 className={styles.title}>Algerian Dinar Exchange Rates</h1>
      <div className={styles.tablesContainer}>
        <div className={styles.parallelTableContainer}>
          <h2 className={styles.tableTitle}>Parallel Market</h2>
          <table className={styles.parallelTable}>
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
                <td>00.00</td>
                <td>00.00</td>
              </tr>
              <tr>
                <td>US Dollar</td>
                <td>00.00</td>
                <td>00.00</td>
              </tr>
              <tr>
                <td>Canadian Dollar</td>
                <td>00.00</td>
                <td>00.00</td>
              </tr>
              <tr>
                <td>British Pound</td>
                <td>00.00</td>
                <td>00.00</td>
              </tr>
              <tr>
                <td>Swiss Franc</td>
                <td>00.00</td>
                <td>00.00</td>
              </tr>
              <tr>
                <td>Turkish Lira</td>
                <td>00.00</td>
                <td>00.00</td>
              </tr>
              <tr>
                <td>Chinese Yuan</td>
                <td>00.00</td>
                <td>00.00</td>
              </tr>
              <tr>
                <td>Saudi Riyal</td>
                <td>00.00</td>
                <td>00.00</td>
              </tr>
              <tr>
                <td>Emirati Dirham</td>
                <td>00.00</td>
                <td>00.00</td>
              </tr>
              <tr>
                <td>Tunisian Dinar</td>
                <td>00.00</td>
                <td>00.00</td>
              </tr>
              <tr>
                <td>Moroccan Dirham</td>
                <td>00.00</td>
                <td>00.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.officialTableContainer}>
          <h2 className={styles.tableTitle}>Official Market</h2>
          <table className={styles.officialTable}>
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
                    <td>{rate[curr.code] ? rate[curr.code].toFixed(2) : "Loading..."}</td>
                </tr>
              ))}
           </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Rates;
