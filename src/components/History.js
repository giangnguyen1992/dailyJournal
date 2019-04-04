import React from 'react';
import styles from '../style/History.module.scss';

const History = () => {
    return (
        <div className={styles.History}>
            <p className={styles.History_Date}>13.04.2019, 14:09</p>
            <button className={styles.History_Btn}>
                <span className={`${styles.History_Btn__Logo} fa-stack`}>
                    <span className='far fa-circle fa-stack-2x'></span>
                    <span className='fas fa-angle-down fa-stack-1x'></span>
                </span>
            </button>
        </div>
    );
};

export default History;