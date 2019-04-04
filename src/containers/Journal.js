import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testAction } from '../actions/index';
import styles from '../style/Journal.module.scss';

import Weeklys from '../components/Weekly';
import WritingBlock from '../components/WritingBlock';
import History from '../components/History';

class Journal extends Component {
    render() {
        return (
            <main className={styles.Journal}>
                <Weeklys />
                <WritingBlock />
                <History />
                <History />
                <History />
                <History />
                <History />
            </main>
        );
    };
};

export default connect(
    null, 
    {
        testAction
    }
)(Journal);