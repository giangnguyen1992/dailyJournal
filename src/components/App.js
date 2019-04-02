import React from 'react';
import Journal from '../containers/Journal';
import Header from './Header';
import Footer from './Footer';
import styles from '../style/App.module.scss';

const App = () => {
    return (
        <div className={styles.App}>
            <Header />
            <Journal />
            <Footer />
        </div>
    );
};

export default App;