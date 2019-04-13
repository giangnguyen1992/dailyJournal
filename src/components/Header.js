import React from 'react';
import styles from '../style/Header.module.scss';

const Header = () => {
    return (
        <header className={styles.Header}>
            <h1 className={styles.Header_Title}>Giang's Daily Journal</h1>
            <i className={`${styles.Header_Icon} far fa-user-circle`} ></i>
        </header>
    );
};

export default Header;