import React from 'react';
import styles from './Tooltip.module.css';
import { useTranslation } from 'react-i18next';

const Tooltip = ({ info, position }) => {

  const {i18n} = useTranslation()
  const currentLanguage = i18n.language || 'en'
  const isArabic = currentLanguage.startsWith('ar')
  const isTamazight = currentLanguage.startsWith('zgh')

  const getWilayaName = (info)=>{
    if (isArabic) return info.nameAr || info.nameLatin
    if (isTamazight)return info.nameZgh || info.nameLatin;
    return info.nameLatin
  }

  if (!info) return null;

  return (
    <div
      className={styles.tooltipContainer}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <span className={styles.code}>{info.code}</span>
      <h3>
        {/* {info.nameLatin} */}
        {getWilayaName(info)}

      </h3>
    </div>
  );
};

export default Tooltip;
