import React, { Component } from 'react';
import styles from '../style/WritingBlock.module.scss';

class WritingBlock extends Component {
    render() {
        return (
            <div className={styles.WritingBlock}>
                <h2 className={styles.WritingBlock_Title}>Daily Journal Entry</h2>
                <div className={styles.WritingBlock_Entry}>
                    <div className={styles.WritingBlock_Entry__Question}>
                        <div className={styles.WritingBlock_Entry__Question__Header}>
                            <span className={`${styles.WritingBlock_Entry__Question__Header__Logo} fa-stack`}>
                                <span className='far fa-circle fa-stack-2x'></span>
                                <strong className='fa-stack-1x'>1</strong>
                            </span>
                            <h3 className={styles.WritingBlock_Entry__Question__Header__Q}>Erste Frage...</h3>
                        </div>
                        <input className={styles.WritingBlock_Entry__Question__Input} type='text' name='firstQuestion' placeholder=''/>
                    </div>
                </div>
                <div className={styles.WritingBlock_Entry}>
                    <div className={styles.WritingBlock_Entry__Question}>
                        <div className={styles.WritingBlock_Entry__Question__Header}>
                            <span className={`${styles.WritingBlock_Entry__Question__Header__Logo} fa-stack`}>
                                <span className='far fa-circle fa-stack-2x'></span>
                                <strong className='fa-stack-1x'>2</strong>
                            </span>
                            <h3 className={styles.WritingBlock_Entry__Question__Header__Q}>Erste Frage...</h3>
                        </div>
                        <input className={styles.WritingBlock_Entry__Question__Input} type='text' name='firstQuestion' placeholder=''/>
                    </div>
                </div>
                <div className={styles.WritingBlock_Entry}>
                    <div className={styles.WritingBlock_Entry__Question}>
                        <div className={styles.WritingBlock_Entry__Question__Header}>
                            <span className={`${styles.WritingBlock_Entry__Question__Header__Logo} fa-stack`}>
                                <span className='far fa-circle fa-stack-2x'></span>
                                <strong className='fa-stack-1x'>3</strong>
                            </span>
                            <h3 className={styles.WritingBlock_Entry__Question__Header__Q}>Erste Frage...</h3>
                        </div>
                        <input className={styles.WritingBlock_Entry__Question__Input} type='text' name='firstQuestion' placeholder=''/>
                    </div>
                </div>
                <div className={styles.WritingBlock_Entry}>
                    <div className={styles.WritingBlock_Entry__Question}>
                        <div className={styles.WritingBlock_Entry__Question__Header}>
                            <span className={`${styles.WritingBlock_Entry__Question__Header__Logo} fa-stack`}>
                                <span className='far fa-circle fa-stack-2x'></span>
                                <strong className='fa-stack-1x'>4</strong>
                            </span>
                            <h3 className={styles.WritingBlock_Entry__Question__Header__Q}>Erste Frage...</h3>
                        </div>
                        <input className={styles.WritingBlock_Entry__Question__Input} type='text' name='firstQuestion' placeholder=''/>
                    </div>
                </div>
                <div className={styles.WritingBlock_Entry}>
                    <div className={styles.WritingBlock_Entry__Question}>
                        <div className={styles.WritingBlock_Entry__Question__Header}>
                            <span className={`${styles.WritingBlock_Entry__Question__Header__Logo} fa-stack`}>
                                <span className='far fa-circle fa-stack-2x'></span>
                                <strong className='fa-stack-1x'>5</strong>
                            </span>
                            <h3 className={styles.WritingBlock_Entry__Question__Header__Q}>Erste Frage...</h3>
                        </div>
                        <input className={styles.WritingBlock_Entry__Question__Input} type='text' name='firstQuestion' placeholder=''/>
                    </div>
                </div>
                <div className={styles.WritingBlock_Footer}>
                    <p className={styles.WritingBlock_Footer__Date}>Datum...</p>
                    <button className={styles.WritingBlock_Footer__Btn}>Post!</button>
                </div>
            </div>
        );
    };
};

export default WritingBlock;