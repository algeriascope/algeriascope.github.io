import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { services, totalPostcodes } from '../data/services';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>
        {t('home.title')}{' '}
        <span className={styles.titleItalic}>{t('home.titleItalic')}</span>
      </h1>
      <h3 className={styles.subtitle}>{t('home.subtitle')}</h3>

      <div className={styles.servicesContainer}>
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <Link to={service.path} className={styles.serviceCard} key={index}>
              <span className={styles.iconWrapper}>
                <IconComponent className={`${styles.serviceIcon}`} />
              </span>
              <h3 className={styles.serviceTitle}>
                {t(`services.${service.id}.title`)}
              </h3>
              <p className={styles.serviceSubtitle}>
                {service.id === 'postcodes'
                  ? t(`services.${service.id}.desc`, { total: totalPostcodes })
                  : t(`services.${service.id}.desc`)}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
// const { t } = useTranslation();

export default Home;
