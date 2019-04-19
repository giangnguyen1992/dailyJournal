import React from 'react';
import styles from '../style/newWeekChallenge.module.scss';

const newWeekChallenge = (props) => {
    return (
        <div className={styles.newWeekChallenge}>
            <h2 className={styles.newWeekChallenge_title}>Start your new journal now</h2>
            {/* Btn um die erste Woche zu beginnen */}
            <button onClick={props.saveWeek} className={styles.newWeekChallenge_btn}>Start!</button>
        </div>
    );
};

export default newWeekChallenge;