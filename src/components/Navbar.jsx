import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import TranslateBtn from './TranslateBtn'
import DonateBtn from './DonateBtn'
import { useTranslation } from 'react-i18next';
const Navbar = () => {
  const { t } = useTranslation()
  return(
  <nav className={styles.navbarContainer}>
    <div className={styles.logo}>
      <Link to="/">AlgeriaScope</Link>
    </div>
    <ul className={styles.linksContainer}>
      <li>
        <Link to="/about">{t('nav.about')}</Link>
      </li>

      <li>
      <DonateBtn />
      </li>
      <li>
        <ThemeToggle />
      </li>
      <li>
        <TranslateBtn />
      </li>
    </ul>
  </nav>
  )

}
  

;

export default Navbar;
