import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/rates">Rates</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>

        </li>
      </ul>
    </footer>
  );
};

export default Footer;
