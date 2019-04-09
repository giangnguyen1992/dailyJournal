import React, { Component } from 'react';
import styles from '../style/History.module.scss';

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleDateString(),
            isExpanded: false
        }
    };

    expandNow() {
        this.setState({
            isExpanded: !this.state.isExpanded
        });
    };

    render() {
        if (this.state.isExpanded) {
            return (
                <div className={styles.HistoryExpanded}>
                    <h2 className={styles.HistoryExpanded_Title}>Daily Journal Entry from {this.state.date}</h2>
                    <div className={styles.HistoryExpanded_Entry}>
                        <div className={styles.HistoryExpanded_Entry__Header}>
                            <span className={`${styles.HistoryExpanded_Entry__Header__Logo} fa-stack`}>
                                <span className='far fa-circle fa-stack-2x'></span>
                                <strong className='fa-stack-1x'>1</strong>
                            </span>
                            <label htmlFor='firstQuestion' className={styles.HistoryExpanded_Entry__Header__Q}>Which activity inspired you most positively yesterday?</label>
                        </div>
                        <p className={styles.HistoryExpanded_Entry__Answer}>{this.props.obj.firstQuestion}</p>
                    </div>
                    <div className={styles.HistoryExpanded_Entry}>
                        <div className={styles.HistoryExpanded_Entry__Header}>
                            <span className={`${styles.HistoryExpanded_Entry__Header__Logo} fa-stack`}>
                                <span className='far fa-circle fa-stack-2x'></span>
                                <strong className='fa-stack-1x'>2</strong>
                            </span>
                            <label htmlFor='secondQuestion' className={styles.HistoryExpanded_Entry__Header__Q}>What kind of activity cost you a lot of energy yesterday?</label>
                        </div>
                        <p className={styles.HistoryExpanded_Entry__Answer}>{this.props.obj.secondQuestion}</p>
                    </div>
                    <div className={styles.HistoryExpanded_Entry}>
                        <div className={styles.HistoryExpanded_Entry__Header}>
                            <span className={`${styles.HistoryExpanded_Entry__Header__Logo} fa-stack`}>
                                <span className='far fa-circle fa-stack-2x'></span>
                                <strong className='fa-stack-1x'>3</strong>
                            </span>
                            <label htmlFor='thirdQuestion' className={styles.HistoryExpanded_Entry__Header__Q}>What would you have done differently yesterday?</label>
                        </div>
                        <p className={styles.HistoryExpanded_Entry__Answer}>{this.props.obj.thirdQuestion}</p>
                    </div>
                    <div className={styles.HistoryExpanded_Entry}>
                        <div className={styles.HistoryExpanded_Entry__Header}>
                            <span className={`${styles.HistoryExpanded_Entry__Header__Logo} fa-stack`}>
                                <span className='far fa-circle fa-stack-2x'></span>
                                <strong className='fa-stack-1x'>4</strong>
                            </span>
                            <label htmlFor='forthQuestion' className={styles.HistoryExpanded_Entry__Header__Q}>What are you going to do today?</label>
                        </div>
                        <p className={styles.HistoryExpanded_Entry__Answer}>{this.props.obj.forthQuestion}</p>
                    </div>
                    <div className={styles.HistoryExpanded_Entry}>
                        <div className={styles.HistoryExpanded_Entry__Header}>
                            <span className={`${styles.HistoryExpanded_Entry__Header__Logo} fa-stack`}>
                                <span className='far fa-circle fa-stack-2x'></span>
                                <strong className='fa-stack-1x'>5</strong>
                            </span>
                            <label htmlFor='fifthQuestion' className={styles.HistoryExpanded_Entry__Header__Q}>Why do you want to do that?</label>
                        </div>
                        <p className={styles.HistoryExpanded_Entry__Answer}>{this.props.obj.fifthQuestion}</p>
                    </div>
                    <button onClick={() => this.expandNow()} className={styles.HistoryExpanded_Btn}>
                        <span className={`${styles.HistoryExpanded_Btn__Logo} fa-stack`}>
                            <span className='far fa-circle fa-stack-2x'></span>
                            <span className='fas fa-angle-up fa-stack-1x'></span>
                        </span>
                    </button>
                </div>
            );

        } else if (!this.state.isExpanded) {
            return (
                <div onClick={() => this.expandNow()} className={styles.History}>
                    <p className={styles.History_Date}>{this.state.date}</p>
                    <button className={styles.History_Btn}>
                        <span className={`${styles.History_Btn__Logo} fa-stack`}>
                            <span className='far fa-circle fa-stack-2x'></span>
                            <span className='fas fa-angle-down fa-stack-1x'></span>
                        </span>
                    </button>
                </div>
            );
        }
    };
};

export default History;