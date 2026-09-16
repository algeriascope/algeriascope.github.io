import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer>
      <ul className={styles.footerUl}>
        <li>
          <Link to="/rates">Rates</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/donate">Donate</Link>
        </li>
      </ul>
      <p className={styles.copyright}>© <span>{new Date().getFullYear()}</span> </p>
    </footer>
  );
};

export default Footer;
