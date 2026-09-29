import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DonateBtn.module.css';
import { TbHeart } from 'react-icons/tb';

const DonateBtn = () => {
  return (
    <div to="/donate" className={styles.container}>
        <TbHeart className={styles.heartIcon}/>
      
    </div>
  );
};

export default DonateBtn;
