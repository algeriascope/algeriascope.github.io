import React from 'react';
import { VscGlobe } from 'react-icons/vsc';
import styles from './TranslateBtn.module.css'

const TranslateBtn = () => {
  return (
    <button className={styles.container}>
      {/* <VscGlobe className={styles.languageIcon} /> */}
      <VscGlobe />
    </button>
  );
};

export default TranslateBtn;
