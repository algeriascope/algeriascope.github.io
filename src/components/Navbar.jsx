import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { LuLanguages } from 'react-icons/lu';
import ThemeToggle from './ThemeToggle';
const Navbar = () => (
  <nav className={styles.navbarContainer}>
    <div className={styles.logo}>
      <Link to="/">AlgeriaScope</Link>
    </div>
    <ul className={styles.linksContainer}>
      <li>
        <Link to="/donate">Donate</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <ThemeToggle />
      </li>
      <li>
        <button className={styles.utilityBtn}>
          <LuLanguages className={styles.languageIcon} />
        </button>
      </li>
    </ul>
  </nav>
);

export default Navbar;
