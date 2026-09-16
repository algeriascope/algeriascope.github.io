import React from 'react';
import styles from './Tooltip.module.css';
const Tooltip = ({ info, position }) => {
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
      <h3>{info.nameLatin}</h3>
    </div>
  );
};

export default Tooltip;
