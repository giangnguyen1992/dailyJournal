import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from '../style/WritingBlock.module.scss';

let WritingBlock = (props) =>  {
        return (
            <form onSubmit={props.onSubmit} className={styles.WritingBlock}>
                <h2 className={styles.WritingBlock_Title}>Daily Journal Entry</h2>
                <div className={styles.WritingBlock_Entry}>
                    
                        <div className={styles.WritingBlock_Entry__Header}>
                            <span className={`${styles.WritingBlock_Entry__Header__Logo} fa-stack`}>
                                <span className='far fa-circle fa-stack-2x'></span>
                                <strong className='fa-stack-1x'>1</strong>
                            </span>
                            <label htmlFor='firstQuestion' className={styles.WritingBlock_Entry__Header__Q}>Erste Frage...</label>
                        </div>
                        <Field required name='firstQuestion' component='input' type='text' className={styles.WritingBlock_Entry__Input} />
                    
                </div>
                <div className={styles.WritingBlock_Entry}>
                    
                        <div className={styles.WritingBlock_Entry__Header}>
                            <span className={`${styles.WritingBlock_Entry__Header__Logo} fa-stack`}>
                                <span className='far fa-circle fa-stack-2x'></span>
                                <strong className='fa-stack-1x'>2</strong>
                            </span>
                            <label htmlFor='secondQuestion' className={styles.WritingBlock_Entry__Header__Q}>Zweite Frage...</label>
                        </div>
                        <Field required name='secondQuestion' component='input' type='text'  className={styles.WritingBlock_Entry__Input} />
                    
                </div>
                <div className={styles.WritingBlock_Entry}>
                    
                        <div className={styles.WritingBlock_Entry__Header}>
                            <span className={`${styles.WritingBlock_Entry__Header__Logo} fa-stack`}>
                                <span className='far fa-circle fa-stack-2x'></span>
                                <strong className='fa-stack-1x'>3</strong>
                            </span>
                            <label htmlFor='thirdQuestion' className={styles.WritingBlock_Entry__Header__Q}>DritteFrage...</label>
                        </div>
                        <Field required name='thirdQuestion' component='input' type='text'  className={styles.WritingBlock_Entry__Input} />
                    
                </div>
                <div className={styles.WritingBlock_Entry}>
                    
                        <div className={styles.WritingBlock_Entry__Header}>
                            <span className={`${styles.WritingBlock_Entry__Header__Logo} fa-stack`}>
                                <span className='far fa-circle fa-stack-2x'></span>
                                <strong className='fa-stack-1x'>4</strong>
                            </span>
                            <label htmlFor='forthQuestion' className={styles.WritingBlock_Entry__Header__Q}>Vierte Frage...</label>
                        </div>
                        <Field required name='forthQuestion' component='input' type='text'  className={styles.WritingBlock_Entry__Input} />
                    
                </div>
                <div className={styles.WritingBlock_Entry}>
                    
                        <div className={styles.WritingBlock_Entry__Header}>
                            <span className={`${styles.WritingBlock_Entry__Header__Logo} fa-stack`}>
                                <span className='far fa-circle fa-stack-2x'></span>
                                <strong className='fa-stack-1x'>5</strong>
                            </span>
                            <label htmlFor='fifthQuestion' className={styles.WritingBlock_Entry__Header__Q}>Fünfte Frage...</label>
                        </div>
                        <Field required name='fifthQuestion' component='input' type='text'  className={styles.WritingBlock_Entry__Input} />
                    
                </div>
                <button type='submit' className={styles.WritingBlock__Btn}>Post!</button>
            </form>
        );
};

export default reduxForm({
    form: 'journal'
})(WritingBlock);