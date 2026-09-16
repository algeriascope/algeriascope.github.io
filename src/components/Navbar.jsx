import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { MdCurrencyExchange, MdOutlineSettings } from "react-icons/md";
import { LuLanguages } from "react-icons/lu";


const Navbar = () => (
    <nav className={styles.navbarContainer}>
      <div className={styles.logo}>
        <Link to="/">AlgeriaScope</Link>
      </div>
      <ul className={styles.linksContainer}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/exchange"> Exchange</Link>
        </li>
        <li>
          <Link to="/Settings"><LuLanguages /></Link>
        </li>
      </ul>
    </nav>
);

export default Navbar;
