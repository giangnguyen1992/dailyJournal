import React from 'react';
import styles from '../style/SubmitSuccess.module.scss';

const SubmitSuccess = () => {
    return (
        <div className={styles.SubmitSuccess}>
            <h3 className={styles.SubmitSuccess_Title}>Well done on becoming a better version of yourself!</h3>
            <i className={`${styles.SubmitSuccess_Icon} fas fa-praying-hands`}></i>
        </div>
    );
};

export default SubmitSuccess;