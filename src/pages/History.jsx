import React from 'react';
import styles from './History.module.css';
import { timelineData } from '../data/timelineData';

const History = () => {
  const allEvents = timelineData.flatMap((era) => {
    return era.events.map((event) => ({
      ...event,
      eraName: era.eraName,
      flag: era.flag,
    }));
  });

  return (
    <div className={styles.historyContainer}>
      <div className={styles.eraBar}>Algeria</div>
      <div className={styles.timelineContainer}>
        <div className={styles.spine}>
          <div className={styles.spineProgress} />
        </div>

        <div className={styles.eventsContainer}>
          {allEvents.map((event, index) => (
            <div
              key={event.id}
              className={`${styles.eventCard} ${index % 2 === 0 ? styles.leftEvent : styles.rightEvent}`}
            >
              {event.id}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
