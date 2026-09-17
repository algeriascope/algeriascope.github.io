import React from 'react';
import styles from './Rates.module.css';
const Rates = () => {
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
          <h2 className={styles.tableTitle} >Official Market</h2>
          <table className={styles.officialTable}>
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
      </div>
    </div>
  );
};

export default Rates;
