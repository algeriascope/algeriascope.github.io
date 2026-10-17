import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer>
      <ul className={styles.footerUl}>
        <li>
          <Link to="/rates">{t('footer.rates')}</Link>
        </li>
        <li>
          <Link to="/about">{t('footer.about')}</Link>
        </li>
        <li>
          <Link to="/donate">{t('footer.donate')}</Link>
        </li>
      </ul>
      {/* <p className={styles.credits}>Made with in Medea</p> */}
      <p className={styles.copyright}><span>{new Date().getFullYear()}</span> - {t('footer.openSource')}</p>
    </footer>
  );
};

export default Footer;
