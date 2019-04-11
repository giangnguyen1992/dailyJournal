import React from 'react';
import { weeklyData } from '../weeklyData';

import styles from '../style/Weeklys.module.scss';

const Weeklys = props => {
    const random = () => {
        return Math.floor(Math.random() * 7);
    };

    return (
        <div className={styles.Weeklys}>
            <div className={styles.Weeklys_upper}>
            <h2 className={styles.Weeklys_Title}>Weekly challenges</h2>
            <i className={`${styles.Weeklys_Logo} fas fa-leaf`}></i>
            <h3 className={styles.Weeklys_Focus}>{weeklyData[random].title}</h3>
            <p className={styles.Weeklys_Text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem 
            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero 
            eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
            sanctus est Lorem ipsum dolor sit amet.
            </p>
            </div>
            <div className={styles.Weeklys_Challenges}>
                <div className={styles.Weeklys_Challenges__Q1}>
                    <span className={`${styles.Weeklys_Challenges__Q1__Logo} fa-stack`}>
                        <span className='far fa-circle fa-stack-2x'></span>
                        <strong className='fa-stack-1x'>1</strong>
                    </span>
                    <h3 onClick={props.firstLine} className={`${styles.Weeklys_Challenges__Q1__Quest} ${props.firstStatus ? styles.done : ''}`}>Your first weeengeYour Your first weekly challenge</h3>
                </div>
                <div className={styles.Weeklys_Challenges__Q2}>
                    <span className={`${styles.Weeklys_Challenges__Q2__Logo} fa-stack`}>
                        <span className='far fa-circle fa-stack-2x'></span>
                        <strong className='fa-stack-1x'>2</strong>
                    </span>
                    <h3 onClick={props.secondLine} className={`${styles.Weeklys_Challenges__Q2__Quest} ${props.secondStatus ? styles.done : ''}`}>Your first weekly challenge Your dddddd d first weekly challengeYourYour first weekly challenge</h3>
                </div>
            </div>
        </div>
    );
};

export default Weeklys;