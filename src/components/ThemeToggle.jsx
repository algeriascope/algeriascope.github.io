import React, { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)
  
  useEffect(()=>{
    if(isDark){
      document.body.classList.add('dark')
    
    }else{
      document.body.classList.remove('dark')
    }
  }, [isDark])
  return (
    <button className={styles.container} onClick={() => {setIsDark(!isDark)}}>
      <MdOutlineDarkMode
        className={`${styles.dModeIcon} ${styles.themeIcon}`}
      />
      <MdOutlineLightMode
        className={`${styles.lModeIcon} ${styles.themeIcon}`}
      />
    </button>
  );
};

export default ThemeToggle;
