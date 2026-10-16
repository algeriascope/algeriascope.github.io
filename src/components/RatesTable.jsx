import React from 'react'
import styles from './RatesTable.module.css'
const RatesTable = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.row} ${styles.header}`}>
        <span>Currency</span>
        <span>Parallel Market</span>
        <span>Official Market</span>
      </div>
      <div className={styles.row}>
        <span>soemthing</span>
        <span>soemthing</span>
          <span>soemthing</span>
      </div>

    </div>
  )
}

export default RatesTable