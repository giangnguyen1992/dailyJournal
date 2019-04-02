import React from 'react';
import styles from '../style/Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <p className={styles.Footer_Copy}>Copyright © 2019 Giang Nguyen</p>
            <ul className={styles.Footer_Menu}>
                <li className={styles.Footer_Menu__item}><a href='#'>Home</a></li>
                <li className={styles.Footer_Menu__item}><a href='#'>About</a></li>
            </ul>
        </footer>
    );
};

export default Footer;