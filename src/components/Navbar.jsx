import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { LuLanguages } from 'react-icons/lu';

const Navbar = () => (
  <nav className={styles.navbarContainer}>
    <div className={styles.logo}>
      <Link to="/">AlgeriaScope</Link>
    </div>
    <ul className={styles.linksContainer}>
      <li>
        <Link to="/wilayas">Wilayas</Link>
      </li>
      <li>
        <Link to="/rates">Rates</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>

      <button className={styles.utilityBtn}>
        <MdOutlineDarkMode
          className={`${styles.dModeIcon}, ${styles.themeIcon}`}
        />
        <MdOutlineLightMode
          className={`${styles.lModeIcon}, ${styles.themeIcon}`}
        />
      </button>

      <button className={styles.utilityBtn}>
        <LuLanguages className={styles.languageIcon} />
      </button>
    </ul>
  </nav>
);

export default Navbar;
