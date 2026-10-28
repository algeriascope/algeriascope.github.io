import React from 'react';
import styles from './History.module.css';
import { timelineData } from '../data/timelineData';

const History = () => {
  const allEvents = timelineData.flatMap((era) =>
    era.events.map((event) => ({
      ...event,
      eraName: era.eraName,
      flag: era.flag,
    }))
  );

  return (
    <div className={styles.historyContainer}>
      <div className={styles.eraBar}>Algeria</div>

      <div className={styles.timelineContainer}>
        <div className={styles.spine} />

        {allEvents.map((event, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={event.id ?? `${event.year}-${index}`}
              className={`${styles.eventRow} ${
                isLeft ? styles.leftRow : styles.rightRow
              }`}
            >
              <div className={styles.eventCard}>
                <span className={styles.eventYear}>
                  {event.year}
                </span>

                <h3 className={styles.eventTitle}>
                  {event.title}
                </h3>

                <p className={styles.eventText}>
                  {event.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
