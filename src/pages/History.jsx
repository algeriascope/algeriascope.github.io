import React from 'react';
import styles from './History.module.css';
import { timelineData } from '../data/timelineData';

const History = () => {

  
  return (
    <div className={styles.historyContainer}>
      <div className={styles.eraBar}>Algeria</div>
      <div className={styles.timelineContainer}>
        <div className={styles.spine}>
          <div className={styles.spineProgress} />
        </div>

        <div className={styles.eventsContainer}>
          {timelineData.map(era =>{
            return(

            <div>{era.eraName}</div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default History;
