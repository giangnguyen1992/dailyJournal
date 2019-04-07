import React, { Component } from 'react';
import styles from '../style/History.module.scss';

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleDateString()
        }
    };

    render() {
        return (
            <div className={styles.History}>
                <p className={styles.History_Date}>{this.state.date}</p>
                <button className={styles.History_Btn}>
                    <span className={`${styles.History_Btn__Logo} fa-stack`}>
                        <span className='far fa-circle fa-stack-2x'></span>
                        <span className='fas fa-angle-down fa-stack-1x'></span>
                    </span>
                </button>
            </div>
        );
    };
};

export default History;