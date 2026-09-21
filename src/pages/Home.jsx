import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { PiMoney } from 'react-icons/pi';
import { services } from '../data/services';

const Home = () => (
  <div className={styles.homeContainer}>
    <h1 className={styles.title}>
      Your Practical Guide to
      <span className={styles.titleItalic}> Algeria</span>
    </h1>
    <h3 className={styles.subtitle}>Choose one of our free services</h3>

    <div className={styles.servicesContainer}>
      {services.map((service, index) => {
        const IconComponent = service.icon;
        return (
          <Link to={service.path} className={styles.serviceCard} key={index}>
            <span className={styles.iconWrapper}>
              <IconComponent className={`${styles.serviceIcon}`} />
            </span>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceSubtitle}>{service.subtitle}</p>
          </Link>
        );
      })}
    </div>
  </div>
);

export default Home;
