import React from 'react'
import styles from './RatesTable.module.css'
import { useTranslation } from 'react-i18next'

const RatesTable = () => {
  const {t, i18n} = useTranslation()
  return (
    <div className={styles.ratesTable}>
      <div className={`${styles.row} ${styles.header}`}>
        <span>{t('ratesPage.ratesTable.currency')}</span>
        <span>{t('ratesPage.ratesTable.informalRate')}</span>
        <span>{t('ratesPage.ratesTable.officialRate')}</span>
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