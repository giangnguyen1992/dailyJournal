import React from 'react';
import styles from '../style/Header.module.scss';

const Header = () => {
    return (
        <header className={styles.Header}>
            <h1 className={styles.Header_Title}>Giang's Daily Journal</h1>
            <div className={styles.Header_Profile}>
                <p className={styles.Header_Profile__Name}>Giang Nguyen</p>
                <i className={`${styles.Header_Profile__Icon} far fa-user-circle`} ></i>
            </div>
        </header>
    );
};

export default Header;